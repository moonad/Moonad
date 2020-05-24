var req = require("xhr-request-promise");
var sig = require("nano-ethereum-signer");
var Peer = require("simple-peer");
var wrtc = require("wrtc");

module.exports = (url = "") => {
  // Stores a post
  // got_post : Map Poid Post
  var got_post = {};

  // Stores the nth cite of a poid
  // cites_of : Map Poid (Map Indx Poid)
  var got_cite = {};

  // We received the information that `cite_post` is the `nth` cite of `poid`. 
  function got_nth_cite(poid, nth, len, cite_poid, cite_post) {
    console.log("got "+cite_poid+" as "+nth+"/"+len+"th cite of "+poid);
    got_post[cite_poid] = cite_post;
    if (!got_cite[poid]) {
      got_cite[poid] = [];
      got_cite[poid].hole_at = 0;
    };
    for (var n = got_cite[poid].length; n < len; ++n) {
      got_cite[poid][n] = null;
    }
    got_cite[poid][nth] = cite_poid;
    while (got_cite[poid].hole_at < got_cite[poid].length
        && got_cite[poid][got_cite[poid].hole_at] !== null) {
      ++got_cite[poid].hole_at;
    };
  };

  async function request(method, query) {
    return await req(url+method, {method:"POST", query});
  };

  async function query(method, query) {
    var response = await req(url+method, {method:"POST", query});
    if (response.slice(0,2) === "0x") {
      return response;
    } else {
      throw response;
    }
  };

  async function post(post, pkey) {
    return await query("post", lib.sign_post(post, pkey));
  };

  async function register({name, addr}) {
    return await query("register", {name, addr});
  };

  async function get({key}) {
    return await query("get", {key});
  };

  async function get_addr({name}) {
    return lib.hex_to_string(await moonad.get({key: name+".addr"}));
  };

  async function get_name({addr}) {
    return lib.hex_to_string(await moonad.get({key: addr+".name"}));
  };

  async function get_cite({poid}) {
    return lib.split_hex_in_chunks(64, await moonad.get({key: poid+".cite"}));
  };

  async function get_refs({poid}) {
    return lib.split_hex_in_chunks(64, await moonad.get({key: poid+".refs"}));
  };

  async function get_post({poid}) {
    if (!got_post[poid]) {
      got_post[poid] = lib.hex_to_post(await moonad.get({key: poid+".post"}))
    };
    return got_post[poid];
  };

  async function direct(on_connect) {
    var timeout = 4000; // Number -- time before considering server disconnected
    var peer = null; // Peer -- peer object
    var pinger = null; // Timer -- sends pings to server
    var ponger = null; // Timer -- timeouts server if it isn't responding
    var watcher = null; // Timer -- requests replies to watched posts
    var delta = null; // Number -- difference between local clock and server clock
    var ping = null; // Number -- time to send a message from client to server
    var last_ping = null; // Number -- last time we attempted to ping server
    var last_pong = null; // Number -- last time we got a pong from server
    var watching = {}; // Set Poid -- set of poids we're watching

    function do_send(msg) {
      if (peer && peer.connected) {
        try {
          peer.send(msg);
        } catch (e) {
          console.log("Error on peer.send:", e);
        }; 
      };
    };

    function post(post, pkey = null) {
      console.log("Posting", JSON.stringify(lib.sign_post(post,pkey)));
      do_send(lib.bytes_concat([
        [lib.POST],
        lib.post_to_bytes(lib.sign_post(post, pkey)),
      ]));
    };

    function watch(poid = "0x0000000000000000") {
      do_send(lib.bytes_concat([
        [lib.WATCH],
        lib.hex_to_bytes(poid),
      ]));
      watching[poid] = 1;
    };

    function unwatch(poid = "0x0000000000000000") {
      console.log("Unwatching", poid);
      do_send(lib.bytes_concat([
        [lib.UNWATCH],
        lib.hex_to_bytes(poid),
      ]));
      if (watching[poid]) {
        delete watching[poid];
      }
    };

    function missed(poid, nth) {
      console.log("missed "+poid+"'s "+nth+" cite");
      do_send(lib.bytes_concat([
        [lib.MISSED],
        lib.hex_to_bytes(poid),
        lib.uint32_to_bytes(nth),
      ]));
    };

    function init() {
      peer = new Peer({initiator: false, trickle: false, wrtc})
      delta = null;
      ping = null;
      last_ping = null;
      last_pong = null;

      console.log("Trying to connect...");
      moonad.request("peer_offer", {addr})
        .then(data => peer.signal(data))
        .catch((e) => (console.log("nope"),setTimeout(init, 1000)));

      pinger = setInterval(() => {
        if (peer && peer.connected) {
          last_ping = Date.now();
          do_send(new Uint8Array([lib.PING]));
        };
      }, 1000);

      ponger = setInterval(() => {
        if (peer && peer.connected && last_pong && Date.now() - last_pong > timeout) {
          console.log("Server stopped responding. Trying to reconnect...");
          stop();
          init();
        };
      }, 50);

      watcher = setInterval(() => {
        for (var poid in watching) {
          if (!got_cite[poid]) {
            missed(poid, 0);
          } else if (got_cite[poid].hole_at < got_cite[poid].length) {
            console.log(got_cite[poid].hole_at, got_cite[poid].length);
            missed(poid, got_cite[poid].hole_at);
          }
        };
      }, 50);

      peer.on("error", err => {
        //console.log("SimplePeer error. Disconnected.");
        //setTimeout(async () => {
          //console.log("Trying to reconnect...");
          //peer.signal(await moonad.request("peer_offer", {addr}));
        //}, 1000);
      })

      peer.on("signal", async (data) => {
        await moonad.request("peer_answer", {addr, data: JSON.stringify(data)});
      });

      peer.on("connect", () => {
        on_connect(api);
      });

      peer.on("data", async (data) => {
        var data = new Uint8Array(data);
        //console.log(".data", JSON.stringify(data));
        switch (data[0]) {
          case lib.SHOW:
            var len = lib.bytes_to_uint32(data.slice(1, 5));
            var idx = 5;
            while (idx < data.length) {
              //console.log(".nth ", data.slice(i+0, i+4));
              //console.log(".poid", data.slice(i+4, i+12));
              //console.log(".len ", data.slice(i+12, i+16));
              //console.log(".post", data.slice(i+16, i+16+Math.floor(len8)));
              var nth  = lib.bytes_to_uint32(data.slice(idx+0, idx+4));
              var poid = lib.bytes_to_hex(data.slice(idx+4, idx+12));
              var len8 = lib.bytes_to_uint32(data.slice(idx+12, idx+16));
              var post = lib.bytes_to_post(data.slice(idx+16, idx+16+len8));
              //console.log(JSON.stringify(post));
              got_nth_cite(post.cite, nth, len, poid, post);
              idx = idx + 16 + len8;
            };
            break;

          case lib.PONG:
            if (last_ping) {
              var time_now = Date.now();
              var ping_now = Math.floor((time_now - last_ping) / 2);
              var pong_time = lib.hex_to_uint48(lib.bytes_to_hex(data.slice(1,7)));
              var server_time = pong_time + ping_now;
              last_pong = time_now;
              ping = ping_now;
              delta = server_time - time_now;
            };
            break;

          case lib.ROOM:
            var poid = lib.bytes_to_hex(data.slice(1,9));
            var room = lib.split_hex_in_chunks(160, lib.bytes_to_hex(data.slice(9)));
            console.log("watching "+poid+":",room);
            break;
        };
      });

      return api;
    };

    function stop() {
      peer = null;
      clearTimeout(pinger);
      clearTimeout(ponger);
      clearTimeout(watcher);
    };

    var api = {peer, delta, ping, post, watch, unwatch, missed};
    return init();
  };

  return {
    request,
    query,
    post,
    register,
    get,
    get_name,
    get_addr,
    get_refs,
    get_cite,
    get_post,
    direct,
  };
};

var lib = require("./../lib.js");

var name = "VM";
var pkey = "0x0000000000000000000000000000000000000000000000000000000000000001";
var addr = sig.addressFromKey(pkey);
console.log(sig);

var moonad = module.exports("http://localhost/");
(async () => {
  try {
    moonad.direct((api) => {
      console.log("connected!");

      api.watch("0x0000000000000000");

      api.post({
        cite: "0x0000000000000000",
        head: "Hello",
        body: "",
      }, pkey);
    });

    //api.send(lib.bytes_concat([[lib.WATCH_POST], lib.hex_to_bytes("0x0000000000000000")]));

    // Makes a new post
    //var post = lib.post_to_bytes(lib.sign_post({
      //cite: "0x0000000000000000",
      //head: "Test",
      //body: "test",
    //}, pkey));
    //var buff = new Uint8Array(post.length + 1);
    //buff[0] = 65;
    //buff.set(post, 1);
    //api.send(buff);

    //console.log((new Uint8Array([65])).concat(lib.post_to_bytes(post)));




    //console.log(await moonad.get_name({addr}));
    //console.log(await moonad.get_addr({name}));
    //console.log(await moonad.get_post({poid: "0x0000000000000002"}));
    //console.log(await moonad.get_refs({poid: "0x0000000000000000"}));

    //console.log(await moonad.register({name, addr}));

    //console.log(await moonad.post(lib.sign_post({
      //cite: "0x0000000000000000",
      //head: "Hello!",
      //body: [
        //"This is a definition:",
        //"",
        //"@VM.Id(A: Type): Type",
        //"  A",
        //"",
        //"That's all.",
      //].join("\n")
    //}, pkey)));

    //console.log(await moonad.post(lib.sign_post({
      //cite: "0x0000000000000000",
      //head: "Stuff",
      //body: [
        //"@VM.Moo: Type",
        //"  VM.Id(VM.Id(VM.Id(Type)))",
      //].join("\n")
    //}, pkey)));

    

    //var post = lib.hex_to_post(await moonad.get({key:"0x0000000000000001.post"}));
    //console.log(post);
    //console.log(lib.get_post_auth(post));

    //console.log(lib.hex_to_hex64s(await moonad.get({key:"0x0000000000000000.cite"})));
    //console.log(addr);
  } catch (e) {
    console.log(e);
  }

})();
