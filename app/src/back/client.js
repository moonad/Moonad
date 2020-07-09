var req = require("xhr-request-promise");
var sig = require("nano-ethereum-signer");
var Peer = require("simple-peer");
var lib = require("./lib.js");
var WebSocket = require('isomorphic-ws')

module.exports = ({url = "http://moonad.org"}) => {

  async function request(method, query) {
    return await req(url+"/"+method, {method:"POST", query});
  };

  async function query(method, query) {
    var response = await req(url+"/"+method, {method:"POST", query});
    if (response.slice(0,2) === "0x") {
      return response;
    } else {
      throw response;
    }
  };

  async function post(post, pkey) {
    return await query("post", lib.sign_post(post, pkey));
  };

  async function file(file, pkey) {
    return await query("file", lib.sign_file(file, pkey));
  };

  async function register({name, addr}) {
    return await query("register", {name, addr});
  };

  async function vote({poid, pkey}) {
    return await query("vote", {poid, sign: lib.sign_vote(poid, pkey)})
  }

  async function get_qtd_votes({poid}) {
    return await query("get", {key: poid+".vote"});
  }

  async function get({key}) {
    return await query("get", {key});
  };

  async function get_orig({name}) {
    return await get({key: name+".orig"});
  };

  async function get_deps({name}) {
    return lib.hex_to_string(await get({key: name+".deps"}))
      .split(";")
      .filter(s => s !== "");
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
    return lib.hex_to_post(await query("get_post", {poid: poid}));
  };

  async function has_voted({poid, addr}) {
   return await get({key: poid+"."+addr+".votd"});
  }

  function direct() {
    var self = {};
    self.post = {}; // Map Poid Post
    self.cite = {}; // Map Poid [Poid]
    self.name = {}; // Map Addr String
    self.orig = {};
    self.deps = {};
    self.ws = new WebSocket(url.replace("http","ws")+"/");

    self.api = {};
    self.api.request = request;
    self.api.query = query;
    self.api.post = post;
    self.api.file = file;
    self.api.register = register;
    self.api.get = get;
    self.api.get_addr = get_addr;
    self.api.get_cite = get_cite;
    self.api.get_refs = get_refs;
    self.api.vote = vote;
    self.api.get_orig = async function ({name}) {
      if (!self.orig[name]) {
        self.orig[name] = await get_orig({name});
      }
      return self.orig[name];
    };
    self.api.get_deps = async function ({name}) {
      if (!self.deps[name]) {
        self.deps[name] = await get_deps({name});
      }
      return self.deps[name];
    };
    self.api.get_name = async function ({addr}) {
      if (!self.name[addr]) {
        self.name[addr] = await get_name({addr});
      };
      return self.name[addr];
    };
    self.api.get_post = async function ({poid}) {
      if (!self.post[poid]) {
        self.post[poid] = await get_post({poid});
      };
      return self.post[poid];
    };
    self.api.get_qtd_votes = get_qtd_votes;
    self.api.has_voted = has_voted;
    self.lib = lib;

    self.do_watch = (poid) => {
      self.ws.send(lib.bytes_concat([
        [lib.DO_WATCH],
        lib.hex_to_bytes(poid),
      ]));
    };

    self.do_post = (post, pkey) => {
      //console.log("posting", lib.bytes_concat([
        //[lib.POST],
        //lib.post_to_bytes(lib.sign_post(post, pkey)),
      //]));
      self.ws.send(lib.bytes_concat([
        [lib.DO_POST],
        lib.post_to_bytes(lib.sign_post(post, pkey)),
      ]));
    };

    self.ws.binaryType = "arraybuffer";

    self.ws.onopen = async function() {
      console.log("ws: connected");
    };

    self.ws.onmessage = async (msg) => {
      var data = new Uint8Array(msg.data);
      console.log("ws: got", data);
      var indx = 0;
      while (indx < data.length) {
        switch (data[indx]) {
          case lib.POST:
            var poid = lib.bytes_to_hex(data.slice(indx+1, indx+9));
            var plen = lib.bytes_to_uint32(data.slice(indx+9, indx+13));
            var post = lib.bytes_to_post(data.slice(indx+13, indx+13+plen));
            indx += 13+plen;
            self.post[poid] = post;
            //console.log("Got post "+poid+":", JSON.stringify(post));
            break;
          case lib.CITE:
            var poid = lib.bytes_to_hex(data.slice(indx+1, indx+9));
            var from = lib.bytes_to_uint32(data.slice(indx+9, indx+13));
            var upto = lib.bytes_to_uint32(data.slice(indx+13, indx+17));
            self.cite[poid] = self.cite[poid] || [];
            for (var i = from; i < upto; ++i) {
              self.cite[poid][i] = lib.bytes_to_hex(data.slice(indx+17+(i-from)*8, indx+17+(i-from)*8+8));
              //console.log("Got cite "+i+":", self.cite[poid][i]);
            };
            indx += 17+i*8+8;
            break;
          case lib.NAME:
            var addr = lib.bytes_to_hex(data.slice(indx+1, indx+21));
            var nlen = lib.bytes_to_uint32(data.slice(indx+21, indx+25));
            var name = lib.bytes_to_string(data.slice(indx+25, indx+25+nlen));
            self.name[addr] = name;
            indx += 25 + nlen;
            //console.log("Got name: "+addr+" "+name);
            break;
          case lib.ROOM:
            // TODO
            break;
          default:
            process.exit();
        };
      };
    };

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
    get_qtd_votes,
    direct,
    vote
  };
};
//(async () => {
  //var moonad = module.exports({url: "http://localhost"}).direct();
  ////setInterval(() => {
    ////console.log(moonad.cite);
  ////}, 1000);

  //var pkey = "0x000000000000000000000000000000000000000000000000000000000000000000000001";
  //var addr = sig.addressFromKey(pkey);
  ////moonad.api.register({addr, name: "Foo"});

  //setTimeout(() => {
    //moonad.do_post({cite:"0x0000000000000000", head: "abc", body: "def"}, pkey);
  //}, 2500);

//})();
