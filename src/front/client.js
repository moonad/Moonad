var req = require("xhr-request-promise");
var sig = require("nano-ethereum-signer");
var Peer = require("simple-peer");
var wrtc = require("wrtc");

module.exports = (url = "") => {
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

  async function post({cite, sign, head, body}) {
    return await query("post", {cite, sign, head, body});
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
    return lib.hex_to_hex64s(await moonad.get({key: poid+".cite"}));
  };

  async function get_refs({poid}) {
    return lib.hex_to_hex64s(await moonad.get({key: poid+".refs"}));
  };

  async function get_post({poid}) {
    return lib.hex_to_post(await moonad.get({key: poid+".post"}))
  };

  async function direct() {
    var peer = new Peer({initiator: false, trickle: false, wrtc});
    var offr = await moonad.request("peer_offer", {addr});
    peer.signal(offr);

    peer.on('error', err => {
      console.log("error", err);
    })

    peer.on('signal', async (data) => {
      await moonad.request("peer_answer", {addr, data: JSON.stringify(data)});
    });

    peer.on('connect', () => {
      console.log("connected");
    });

    setInterval(() => {
      try {
        peer.send(new Uint8Array([1,2,3]));
      } catch (e) {
        console.log(e);
      }
    }, 500);

  };

  //async function get_posts({from, upto} = {}) {
    //from = from || 0;
    //upto = upto || await get_posts_size();
    //var reqs = [];
    //for (var i = from; i < upto; ++i) {
      //reqs.push(get_post({post: "0x"+i.toString(16)}));
    //}
    //return await Promise.all(reqs);
  //};

  //async function watch_posts(callback, delay = 1000) {
    //var posts = await get_posts();
    //callback(posts);
    //return setInterval(async () => {
      //try {
        //var posts_size = await get_posts_size();
        //if (posts_size > posts.length) {
          //var new_posts = await get_posts({from: posts.length, upto: posts_size});
          //posts.push(...new_posts);
          //callback(posts);
        //};
      //} catch (e) {};
    //}, delay);
  //};

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

    moonad.direct();



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


  //post.sign = sig.sign(sig.keccak(lib.get_post_msge(post)), 
  //console.log(moonad.post(post));
  //console.log(await lib.query("test", {}));
  











})();
