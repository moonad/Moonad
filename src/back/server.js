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
var db = require("./db.js");
var sig = require("nano-ethereum-signer");
var fm = require("formality-lang");
var lib = require("./../lib.js");

var Peer = require("simple-peer");
var wrtc = require("wrtc");

function path_of(base, file = "") {
  return path.join(__dirname, "..", "..", base, file).toLowerCase();
};

// Globals
// =======

var Size = 0;
var Defs = {};

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
  var code = lib.get_post_code(post);
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

    console.log("Saved post: " + post.poid);
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

// Startup
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
      var code = lib.get_post_code(post);
      Size += 1;
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
  app.listen(80);
  console.log("Server open!");
};
startup();

// HTTP API
// ========

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "..", "docs")));

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


// Peer
// ====

var peers = {};
app.post("/peer_offer", (req, res) => {
  var addr = req.query.addr;
  var peer = new Peer({initiator: true, wrtc, tricke: true});
  peers[addr] = peer;

  peer.do_send = (msg) => {
    if (peer._pcReady) {
      try {
        peer.send(msg);
      }
      catch (e) {
        console.log("send_err:", e);
      }
    }
  };

  peer.on("signal", data => {
    //console.log("peer signal:", data);
    if (data.type === "offer") {
      console.log("Peer signal.");
      res.send(JSON.stringify(data))
    }
  })

  peer.on("connect", () => {
    console.log("Connected: "+addr);
  })

  // Deals with messages sent by peer
  peer.on("data", (data) => {
    console.log("recv:", data[0], data[1], data[2]);
  });

  peer.on("error", (err) => {});

  peer.on("close", () => {
    if (peers[addr] === peer) {
      delete peers[addr];
    }
  });
});

app.post("/peer_answer", (req, res) => {
  //console.log("hmmm", req.query);
  peers[req.query.addr].signal(JSON.parse(req.query.data));
  res.send('"ok"');
});
