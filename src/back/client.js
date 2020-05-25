var req = require("xhr-request-promise");
var sig = require("nano-ethereum-signer");
var Peer = require("simple-peer");
var lib = require("./lib.js");

module.exports = ({url = "", wrtc = null, addr = null}) => {

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
    return lib.hex_to_string(await get({key: name+".addr"}));
  };

  async function get_name({addr}) {
    return lib.hex_to_string(await get({key: addr+".name"}));
  };

  async function get_cite({poid}) {
    return lib.split_hex_in_chunks(64, await get({key: poid+".cite"}));
  };

  async function get_refs({poid}) {
    return lib.split_hex_in_chunks(64, await get({key: poid+".refs"}));
  };

  async function get_post({poid}) {
    return lib.hex_to_post(await get({key: poid+".post"}));
  };

  function direct() {
    var self = {};

    self = {...lib};

    self.timeout = 2500; // Number -- time before considering server disconnected
    self.peer = null; // Peer -- peer object
    self.ison = false; // Bool -- are we probably connected?
    self.pinger = null; // Timer -- sends pings to server
    self.timeouter = null; // Timer -- timeouts server if it isn't responding
    self.watcher = null; // Timer -- requests replies to watched posts
    self.delta = null; // Number -- difference between local clock and server clock
    self.ping = null; // Number -- time to send a message from client to server
    self.last_ping = null; // Number -- last time we attempted to ping server
    self.last_pong = null; // Number -- last time we got a pong from server
    self.watching = {}; // Set Poid -- set of poids we're watching
    self.on_init = null;
    self.on_stop = null;

    self.post = {}; // Map Poid Post -- stores a post
    self.cite = {}; // Map Poid (Arr Indx Poid) -- stores the nth cite of a poid
    self.name = {}; // Map Name Addr
    self.addr = {}; // Map Addr Name
    self.refs = {}; // Map Poid [Poid]

    self.api = {
      request,
      query,
      post,
      register,
      get,
      get_addr,
      get_name,
      get_cite,
      get_refs,
      get_post,
    };

    // We received a post.
    self.got_post = function got_post(poid, post, cite_len) {
      self.post[poid] = post;
      if (!self.cite[poid]) {
        self.cite[poid] = [];
        self.cite[poid].hole_at = 0;
      };
      for (var n = self.cite[poid].length; n < cite_len; ++n) {
        self.cite[poid][n] = null;
      }
    };

    // We received the information that `cite_post` is the `nth` cite of `poid`. 
    self.got_nth_cite = function got_nth_cite(poid, nth, cite_len, cite_poid, cite_post) {
      console.log("got "+cite_poid+" as "+nth+"/"+cite_len+"th cite of "+poid);
      self.post[cite_poid] = cite_post;
      if (!self.cite[poid]) {
        self.cite[poid] = [];
        self.cite[poid].hole_at = 0;
      };
      for (var n = self.cite[poid].length; n < cite_len; ++n) {
        self.cite[poid][n] = null;
      }
      self.cite[poid][nth] = cite_poid;
      while (self.cite[poid].hole_at < self.cite[poid].length
          && self.cite[poid][self.cite[poid].hole_at] !== null) {
        ++self.cite[poid].hole_at;
      };
    };

    self.do_send = function do_send(msg) {
      if (self.peer && self.peer.connected) {
        try {
          self.peer.send(msg);
        } catch (e) {
          console.log("Error on peer.send:", e);
        }; 
      };
    };

    self.do_post = function post(post, pkey = null) {
      console.log("Posting", JSON.stringify(lib.sign_post(post,pkey)));
      self.do_send(lib.bytes_concat([
        [lib.POST],
        lib.post_to_bytes(lib.sign_post(post, pkey)),
      ]));
    };

    self.do_watch = function watch(poid = "0x0000000000000000") {
      self.do_send(lib.bytes_concat([
        [lib.WATCH],
        lib.hex_to_bytes(poid),
      ]));
      self.watching[poid] = 1;
    };

    self.do_unwatch = function unwatch(poid = "0x0000000000000000") {
      console.log("Unwatching", poid);
      self.do_send(lib.bytes_concat([
        [lib.UNWATCH],
        lib.hex_to_bytes(poid),
      ]));
      if (self.watching[poid]) {
        delete self.watching[poid];
      }
    };

    self.do_watch_only = function watch_only(poid = "0x0000000000000000") {
      for (var watching_poid in self.watching) {
        if (poid !== watching_poid) {
          self.do_unwatch(watching_poid);
        };
      };
      if (!self.watching[poid]) {
        self.do_watch(poid);
      };
    };

    self.do_get_post = function get_post(poid) {
      console.log("do_get_post: "+poid);
      self.do_send(lib.bytes_concat([
        [lib.GET_POST],
        lib.hex_to_bytes(poid),
      ]));
    };

    self.do_get_nth_cite = function get_nth_cite(poid, nth) {
      console.log("do_get_nth_cite: "+poid+" "+nth);
      self.do_send(lib.bytes_concat([
        [lib.GET_NTH_CITE],
        lib.hex_to_bytes(poid),
        lib.uint32_to_bytes(nth),
      ]));
    };

    self.init = function init() {
      self.peer = new Peer({initiator: false, trickle: false, wrtc})

      console.log("Trying to connect...");
      request("peer_offer", {addr}).then(data => {
        console.log("data",data);
        self.peer.signal(data);
        //for (let t = 0; t < 16000; t += 1000) {
          //setTimeout(() => (console.log("again",data),self.peer.signal(data)), t);
        //};
      }).catch((e) => {
        console.log("Connection failed.");
        self.stop();
      });

      self.did_signal = async (data) => {
        console.log("signal", data);
        try {
          var ok = await request("peer_answer", {addr, data: JSON.stringify(data)});
          setTimeout(() => {
            if (!self.ison) {
              console.log("Problem connecting. Retrying.");
              self.stop();
            };
          }, 400);
          //console.log("...", ok);
        } catch (e) {
          //console.log("...", e);
        };
      };

      self.did_connect = () => {
        self.ison = true;
        if (self.on_init) self.on_init();
      };

      self.timeouter = setInterval(() => {
        if (self.last_pong && Date.now() - self.last_pong > self.timeout) {
          console.log("Server stopped responding.");
          self.stop();
        };
      }, 100);

      self.pinger = setInterval(() => {
        if (self.ison) {
          self.last_ping = Date.now();
          self.do_send(new Uint8Array([lib.PING]));
        };
      }, 500);

      self.filler = setInterval(() => {
        if (self.ison) {
          for (let poid in self.post) {
            let post = self.post[poid];
            if (self.name[post.auth] === undefined) {
              if (poid === "0x0000000000000000") {
                post.auth = "0x0000000000000000000000000000000000000000";
                self.name[post.auth] = "ROOT";
              } else {
                post.auth = lib.get_post_auth(post);
                self.name[post.auth] = null;
                get_name({addr:post.auth}).then((name) => {
                  self.name[post.auth] = name
                });
              };
            }
            //if (post.ciby === undefined) {
              //post.ciby = [];
              //get_cite({poid}).then((ciby) => post.ciby = ciby);
            //}
            //if (post.reby === undefined) {
              //post.reby = [];
              //get_refs({poid}).then((reby) => post.reby = reby);
            //}
          };
        };
      }, 500);

      self.watcher = setInterval(() => {
        if (self.ison) {
          for (let poid in self.watching) {
            if (!self.post[poid]) {
              self.do_get_post(poid);
            }
            if (!self.cite[poid]) {
              self.do_get_nth_cite(poid, 0);
            } else if (self.cite[poid].hole_at < self.cite[poid].length) {
              self.do_get_nth_cite(poid, self.cite[poid].hole_at);
            }
          };
        }
      }, 50);

      self.peer.on("error", err => {
        console.log("SimplePeer error.", err);
        self.stop();
      })

      self.peer.on("signal", (data) => {
        self.did_signal(data);
      });

      self.peer.on("connect", () => {
        self.did_connect();
      });

      self.peer.on("data", async (data) => {
        var data = new Uint8Array(data);
        //console.log(".data", JSON.stringify(data));
        switch (data[0]) {
          case lib.SHOW_POST:
            var clen = lib.bytes_to_uint32(data.slice(1, 5));
            var poid = lib.bytes_to_hex(data.slice(5, 13));
            var len8 = lib.bytes_to_uint32(data.slice(13, 17));
            var post = lib.bytes_to_post(data.slice(17, 17+len8));
            self.got_post(poid, post, clen);
            break;
          case lib.SHOW_NTH_CITE:
            var clen = lib.bytes_to_uint32(data.slice(1, 5));
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
              self.got_nth_cite(post.cite, nth, clen, poid, post);
              idx = idx + 16 + len8;
            };
            break;
          case lib.PONG:
            if (self.last_ping) {
              var time_now = Date.now();
              var ping_now = Math.floor((time_now - self.last_ping) / 2);
              var pong_time = lib.hex_to_uint48(lib.bytes_to_hex(data.slice(1,7)));
              var server_time = pong_time + ping_now;
              self.last_pong = time_now;
              self.ping = ping_now;
              self.delta = server_time - time_now;
            };
            break;
          case lib.ROOM:
            var poid = lib.bytes_to_hex(data.slice(1,9));
            var room = lib.split_hex_in_chunks(160, lib.bytes_to_hex(data.slice(9)));
            console.log("watching "+poid+":",room);
            break;
        };
      });

      return self;
    };

    self.stop = function stop() {
      if (self.on_stop) self.on_stop();
      clearTimeout(self.filler);
      clearTimeout(self.pinger);
      clearTimeout(self.timeouter);
      clearTimeout(self.watcher);
      self.peer = null;
      self.ison = false;
      self.pinger = null;
      self.timeouter = null;
      self.watcher = null;
      self.delta = null;
      self.ping = null;
      self.last_ping = null;
      self.last_pong = null;
      self.watching = {};
      setTimeout(self.init, 500)
    };

    self.init();

    return self;
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

