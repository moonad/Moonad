// Database entries:
// - PostId.post // a Post
// - PostId.cite // list of files that cite (directly reply to) this post
// - PostId.refs // list of files that refer this post (via terms on body)
// - FmTerm.orig // origin post where a FmTerm is defined
// - EthAdr.name // name of an address
// - UsrNam.addr // address of a name 
// Post = {
//   date: Word64,   // date it was posted
//   cite: Word64,   // post it cites (directly replies to)
//   sign: Word520,  // signature
//   head: Word376,  // post title or commands in case of apps & games
//   body: Bits,     // text and code
// }
// Post header is 1024 bits. Allows for 47-char titles max...
// 012345678901234567890123456789012345678901234567

var express = require("express");
var app = express();
var fs = require("fs-extra");
var path = require("path");
var cors = require("cors");
var db = require("./database.js");
var sig = require("nano-ethereum-signer");
var fm = require("formality-lang");
var lib = require("./lib.js");

function path_of(base, file = "") {
  return path.join(__dirname, "..", "..", base, file).toLowerCase();
};

// Globals
// =======

var TIMEOUT = 6000; // Number -- time before considering client disconnected
var Defs = {}; // Map Name {term:Term,type:Term} -- global fm definitions
var Watcher = {}; // Map Poid [Peer] -- peers watching a poid
var Peer = {}; // Map Addr SimplePeer -- peer of address
var Size = 0;  // Number

async function new_post({cite, sign, head, body}) {
  var date = Date.now();
  var poid = lib.hex(64, "0x"+Size.toString(16));
  var post = {date, cite, sign, head, body, poid};

  // Validates signature
  try {
    var auth = lib.get_post_auth(post);
  } catch (e) {
    throw "Invalid signature.";
  }

  // Validates name
  var name = await db.get(auth+".name");
  if (!name) {
    throw "Post author not registered.";
  }

  // Validates if cited file exists
  if (!await db.get(post.cite+".post")) {
    throw "Cited post '"+post.cite+"' doesn't exist.";
  }

  // Validates post head
  if (typeof post.head !== "string"
    || post.head.length > 47
    || post.head.indexOf("\n") !== -1) {
    throw "Invalid post head.";
  }

  // Validates post body
  if (typeof post.body !== "string") {
    throw "Invalid post body.";
  };

  // Validates post body (namespace-check)
  var code = lib.get_post_code(post, name);
  var defs = fm.lang.parse(code).defs;
  for (var def in defs) {
    if (def.slice(0, name.length+1) !== name+".") {
      throw "Not allowed to define '"+def+"' outside of the '"+name+"' namespace.";
    }
    if (Defs[def]) {
      throw "Redefinition of '"+def+"'.";
    }
  };

  // Validates post body (type-check)
  var all_defs = {...Defs, ...defs};
  for (var def in defs) {
    try {
      var term = defs[def].term;
      var type = defs[def].type;
      var {term, type} = fm.synt.typesynth(term, type, all_defs);
    } catch (e) {
      throw fm.lang.stringify_err(e(), code);
    }
  };

  // Saves it
  try {
    // Saves new post
    await db.set(post.poid+".post", Buffer.from(lib.post_to_bytes(post)));
    await db.set(post.poid+".cite", Buffer.from([]));
    await db.set(post.poid+".refs", Buffer.from([]));
    Size += 1;

    // Adds post.poid to cited_post.cite
    await db.con(cite+".cite", Buffer.from(lib.hex_to_bytes(post.poid)));

    // For each defined term, set def.orig to post.poid
    for (var def in defs) {
      await db.set(def+".orig", Buffer.from(lib.hex_to_bytes(post.poid)));
    };

    // For each external reference, add post.poid to referenced_post.refs
    var external_refs = {};
    for (var def in defs) {
      lib.get_term_refs(defs[def].type, external_refs);
      lib.get_term_refs(defs[def].term, external_refs);
    };
    var external_refs_posts = {};
    for (var ref in external_refs) {
      external_refs_posts[lib.bytes_to_hex(await db.get(ref+".orig"))] = 1;
    };
    for (var ref_post in external_refs_posts) {
      if (ref_post !== post.poid) {
        await db.con(ref_post+".refs", Buffer.from(lib.hex_to_bytes(post.poid)));
      };
    };

    // Adds new definitions to Defs object
    for (var def in defs) {
      Defs[def] = defs[def];
    }

    // Reports to watchers
    for (var watcher of Watcher[cite]) {
      send_nth_cite(watcher, cite, null, false);
    }

    console.log("New post: "+post.poid+" '"+post.head+"'.");
    return post.poid;
  } catch (e) {
    console.log(e);
    throw "Internal error.";
  }
};

async function register({name, addr}) {
  if (lib.nam(name) === null) {
    throw "Invalid name.";
  }
  if (lib.hex(40, addr) === null) {
    throw "Invalid address.";
  }
  if (await db.exists(addr+".name") || await db.exists(name+".addr")) {
    throw "Already registered.";
  };
  try {
    await db.set(addr+".name", Buffer.from(lib.string_to_bytes(name)));
    await db.set(name+".addr", Buffer.from(lib.string_to_bytes(addr)));
    return "0x";
  } catch (e) {
    throw "Internal error.";
  };
};

// Actions
// =======

async function startup() {
  var post_files = fs.readdirSync(path_of("db"));
  var post_files = post_files.filter(name => name.slice(-5) === ".post");
  var post_files = post_files.sort((a,b) => a > b ? 1 : -1);
  if (post_files.length === 0) {
    Size = 1;
    await db.set("0x0000000000000000.post", Buffer.from(lib.post_to_bytes({
      date: 0,
      cite: "0x0000000000000000",
      sign: "0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      head: "",
      body: "",
    })));
    await db.set("0x0000000000000000.cite", Buffer.from([]));
    await db.set("0x0000000000000000.refs", Buffer.from([]));
  } else {
    for (var post_file of post_files) {
      var poid = post_file.slice(0,-5);
      var post = lib.bytes_to_post(await db.get(poid+".post"));
      Size += 1;
      if (poid !== "0x0000000000000000") {
        var name = await db.get(lib.get_post_auth(post)+".name");
        var code = lib.get_post_code(post, name);
        console.log("Loaded: " + post_file);
        try {
          var defs = fm.lang.parse(code).defs;
          for (var def in defs) {
            console.log("- Defined: "+def);
            Defs[def] = defs[def];
          }
        } catch (e) {
          console.log("Startup error:", e);
          process.exit();
        }
      }
    };
  };
  app.listen(80);
  setInterval(() => {
    timeout_peers();
    clear_watchers();
    room_sender();
  }, TIMEOUT);
  console.log("Server open!");
};
startup();

// HTTP API
// ========

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "..", "docs")));

app.get("*", async (req, res) => {
  var file = req.url.split("/").pop().replace(/[^0-9a-zA-Z_.]/g,"");
  if (fs.existsSync(path_of("docs", file))) {
    res.sendFile(path_of("docs", file));
  } else {
    res.sendFile(path_of("docs", "index.html"));
  }
});

// Makes a post
app.post("/post", async (req, res) => {
  var cite = req.query.cite;
  var head = req.query.head;
  var body = req.query.body;
  var sign = req.query.sign;
  try {
    res.send(await new_post({cite,head,body,sign}));
  } catch (e) {
    res.send(e.toString());
  }
});

// Registers a name
app.post("/register", async (req, res) => {
  var name = req.query.name;
  var addr = req.query.addr;
  try {
    res.send(await register({name,addr}));
  } catch (e) {
    res.send(e.toString());
  }
});

app.post("/get", async (req, res) => {
  try {
    var got = await db.get(req.query.key);
    if (got !== null) {
      res.send(lib.bytes_to_hex(got));
    } else {
      throw "Key not found.";
    }
  } catch (e) {
    res.send(e.toString());
  };
});

// P2P API
// =======

var SimplePeer = require("simple-peer");
var wrtc = require("wrtc");

app.post("/peer_offer", (req, res) => {
  var addr = req.query.addr;
  var peer = new SimplePeer({initiator: true, wrtc, tricke: true});
  peer.ping = null;
  peer.addr = addr;
  if (!Peer[addr]) Peer.size = (Peer.size || 0) + 1;
  Peer[addr] = peer;

  peer.do_send = (msg) => {
    //console.log("do_send", msg);
    if (Peer[addr] === peer && peer.connected) {
      try {
        peer.send(msg);
      } catch (e) {
        console.log("Error on peer.send:", e);
      };
    };
  };

  peer.kill = () => {
    if (Peer[addr] === peer) {
      delete Peer[addr];
      Peer.size--;
      console.log(addr+" disconnected. "+Peer.size+ " online.");
    }
  };

  peer.on("signal", data => {
    //console.log("peer signal:", data);
    if (data.type === "offer") {
      res.send(JSON.stringify(data))
    }
  })

  peer.on("connect", () => {
    peer.ping = Date.now();
    console.log(addr+" connected. "+Peer.size+ " online.");
  })

  // Deals with messages sent by peer
  peer.on("data", (data) => {
    var data = new Uint8Array(data);
    switch (data[0]) {
      case lib.POST:
        console.log("got lib.POST");
        var post = lib.bytes_to_post(data.slice(1));
        console.log(post);
        // TODO: notify author?
        // already notified if he/she watches post.cite though
        new_post(post).then(()=>{}).catch(()=>{});
        break;

      case lib.WATCH:
        //console.log("got lib.WATCH");
        var poid = lib.bytes_to_hex(data.slice(1, 9));
        Watcher[poid] = Watcher[poid] || [];
        Watcher[poid].push(peer);
        break;

      case lib.UNWATCH:
        //console.log("got lib.UNWATCH");
        var poid = lib.bytes_to_hex(data.slice(1, 9));
        Watcher[poid] = (Watcher[poid]||[]).filter(p => p !== peer);
        break;

      case lib.GET_POST:
        var poid = lib.bytes_to_hex(data.slice(1, 9));
        send_post(peer, poid);
        break;

      case lib.GET_NTH_CITE:
        var poid = lib.bytes_to_hex(data.slice(1, 9));
        var nth  = lib.bytes_to_uint32(data.slice(9,13));
        send_nth_cite(peer, poid, nth, true);
        break;

      case lib.PING:
        //console.log("got lib.PING");
        var tnow = Date.now();
        var time = lib.hex_to_bytes(lib.uint48_to_hex(tnow));
        peer.ping = tnow;
        peer.do_send(lib.bytes_concat([[lib.PONG], time]));
        break;
    }
  });

  peer.on("error", (err) => {
    console.log(addr+" error.", err);
    peer.kill();
  });

  peer.on("close", (err) => {
    console.log(addr+" closed.", err);
    peer.kill();
  });
});

app.post("/peer_answer", (req, res) => {
  //console.log("hmmm", req.query);
  if (Peer[req.query.addr]) {
    Peer[req.query.addr].signal(JSON.parse(req.query.data));
    res.send('"+"');
  } else {
    res.send('"-"');
  };
});

// Sends a post to peer.
async function send_post(peer, poid) {
  var cite = await db.get(poid+".cite");
  var post = await db.get(poid+".post")
  if (cite && post) {
    var bytes = [
      new Uint8Array([lib.SHOW_POST]),
      lib.uint32_to_bytes(cite.length / 8),
      lib.hex_to_bytes(poid),
      lib.uint32_to_bytes(post.length),
      post,
    ];
    peer.do_send(lib.bytes_concat(bytes));
  };
};

// Sends the nth post on poid.cite to peer.
// If peek = false, sends nth-1, nth-2 to recover lost packets for free.
// If peek = true, sends nth+1, nth+2 to speed up download of misseds.
async function send_nth_cite(peer, poid, nth, peek) {
  var pcite = await db.get(poid+".cite");
  if (pcite) {
    var cites = lib.split_hex_in_chunks(64, lib.bytes_to_hex(pcite));
    var bytes = [
      new Uint8Array([lib.SHOW_NTH_CITE]),
      lib.uint32_to_bytes(cites.length),
    ];
    var nth  = nth === null ? cites.length - 1 : nth;
    var from = peek ? nth : Math.max(nth-2, 0);
    var upto = peek ? Math.min(nth+2, cites.length-1) : nth;
    //console.log("sending "+nth+"/"+cites.length+" cited of "+poid+" to peer...");
    for (var i = from; i <= upto; ++i) { 
      var cpoid = cites[i];
      var ccite = await db.get(cpoid+".cite");
      var cpost = await db.get(cpoid+".post")
      if (cpost) {
        //console.log("- adding post "+cpoid+" with "+cpost.length*8+" bits");
        //console.log(".", lib.uint32_to_bytes(i));
        //console.log(".", lib.hex_to_bytes(cpoid));
        //console.log(".", lib.uint32_to_bytes(cpost.length));
        //console.log(".", new Uint8Array(cpost));
        bytes.push(lib.uint32_to_bytes(i));
        bytes.push(lib.uint32_to_bytes(ccite.length / 8));
        bytes.push(lib.hex_to_bytes(cpoid));
        bytes.push(lib.uint32_to_bytes(cpost.length));
        bytes.push(cpost);
      }
    };
    //console.log("Sending buffer:", lib.bytes_to_hex(lib.bytes_concat(bytes)));
    peer.do_send(lib.bytes_concat(bytes));
  };
};

function timeout_peers() {
  for (var addr in Peer) { 
    if (Peer[addr].ping && Date.now() - Peer[addr].ping > TIMEOUT) {
      console.log(addr + " timed out.");
      Peer[addr].kill();
    };
  };
};

function clear_watchers() {
  for (var poid in Watcher) {
    var old_arr = Watcher[poid];
    var new_arr = [];
    for (var i = 0; i < old_arr.length; ++i) {
      if (Peer[old_arr[i].addr] === old_arr[i]) {
        new_arr.push(old_arr[i]);
      };
    };
    Watcher[poid] = new_arr;
  };
};

function room_sender() {
  for (var poid in Watcher) {
    //console.log("sending "+poid+" room "+Watcher[poid].length);
    var buff = lib.bytes_concat([
      [lib.ROOM],
      lib.hex_to_bytes(poid),
      ...Watcher[poid].map(peer => lib.hex_to_bytes(peer.addr))
    ]);
    for (var peer of Watcher[poid]) {
      peer.do_send(buff);
    };
  };
};
