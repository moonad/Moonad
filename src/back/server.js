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
var ws = require('express-ws')(app);
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
var Peer = []; // Arr WebSocket -- peer of address
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
      var {term, type} = fm.synt.typesynth(def, all_defs, fm.lang.stringify);
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

    console.log("New post: "+post.poid+" '"+post.head+"'.");
    //console.log("->", post);
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
  //setInterval(() => {
    //timeout_peers();
    //clear_watchers();
    //room_sender();
  //}, TIMEOUT);
  console.log("Server open!");
};
startup();

// HTTP API
// ========

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "..", "docs")));

app.get("*", async (req, res, next) => {
  //console.log(req.url);
  if (req.url === "/.websocket") {
    next();
  } else {
    var file = req.url.split("/").pop().replace(/[^0-9a-zA-Z_.]/g,"");
    if (fs.existsSync(path_of("docs", file))) {
      res.sendFile(path_of("docs", file));
    } else {
      res.sendFile(path_of("docs", "index.html"));
    }
  };
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

// TCP API
// =======

// Poid -> Buff -> Buff
async function serialize_post(poid, post) {
  if (post) {
    return lib.bytes_concat([
      [lib.POST],
      lib.hex_to_bytes(poid),
      lib.uint32_to_bytes(post.length),
      post,
    ]);
  } else {
    return null;
  }
};

// Poid -> Buff -> Uint -> Uint -> Buff 
async function serialize_cite(poid, cite, from, upto) {
  if (cite && from*8 < cite.length && upto*8 <= cite.length) {
    var bytes = [
      [lib.CITE],
      lib.hex_to_bytes(poid),
      lib.uint32_to_bytes(from),
      lib.uint32_to_bytes(upto),
    ];
    for (var i = from; i < upto; ++i) {
      bytes.push(cite.slice(i*8, i*8+8));
    };
    return lib.bytes_concat(bytes);
  } else {
    return null;
  }
};

// Addr -> Buff -> Buff
async function serialize_name(addr, name) {
  return lib.bytes_concat([
    [lib.NAME],
    lib.hex_to_bytes(addr),
    lib.uint32_to_bytes(name.length),
    name,
  ]);
};

app.ws('/', function(ws, req) {
  var peer = {};
  peer.has_post = {}; // Map Poid Bool
  peer.len_cite = {}; // Map Poid Uint
  peer.has_name = {}; // Map Addr Bool
  peer.ws = ws;
  peer.ws.binaryType = "arraybuffer";
  peer.poid = "0x0000000000000000"
  Peer.push(peer);
  console.log("New connection. "+Peer.length+" online.");

  // Watches replies to the watched poid and sends to peer
  peer.refresher = setInterval(async function refresh() {
    var bufs = [];

    // Sends a post to peer
    async function view_post(poid) {
      //console.log("view_post", poid);
      if (poid !== "0x0000000000000000" && !peer.has_post[poid]) {
        peer.has_post[poid] = true;
        var post = await db.get(poid+".post");
        //console.log("...", post);
        if (post) {
          var auth = lib.get_post_auth(lib.bytes_to_post(post));
          var name = await db.get(auth+".name");
          var pbuf = await serialize_post(poid, post);
          bufs.push(pbuf);
          //console.log("pushing post", pbuf.length);
          if (name && !peer.has_name[auth]) {
            peer.has_name[auth] = true;
            var nbuf = await serialize_name(auth, name);
            bufs.push(nbuf);
            //console.log("pushing name", nbuf.length);
          };
        };
      };
    };

    // Sends watched post
    await view_post(peer.poid);

    // Sends watched cites
    var cite = await db.get(peer.poid+".cite");
    if (cite) {
      var from = peer.len_cite[peer.poid]||0;
      var upto = cite.length / 8;
      if (from < upto) {
        peer.len_cite[peer.poid] = upto;
        for (var i = from; i < upto; ++i) {
          var cite_poid = lib.bytes_to_hex(cite.slice(i*8, (i+1)*8));
          await view_post(cite_poid);
        };
        var cbuf = await serialize_cite(peer.poid, cite, from, upto);
        bufs.push(cbuf);
      };
    };

    // Sends bufs
    if (bufs.length > 0) {
      peer.ws.send(Buffer.concat(bufs));
    };

  }, 100);

  ws.on("message", function(data) {
    var data = new Uint8Array(data);
    switch (data[0]) {
      // User makes a new post
      case lib.DO_POST:
        var post = lib.bytes_to_post(data.slice(1));
        new_post(post).then(()=>{}).catch((e)=>{console.log(e)});
        break;

      // Users requests to watch a poid
      case lib.DO_WATCH:
        var poid = lib.bytes_to_hex(data.slice(1, 9));
        peer.poid = poid;
        break;
    }
  });

  ws.on("close", function() {
    Peer = Peer.filter(x => x !== peer);
    clearTimeout(peer.refresher);
    console.log("Disconnection. "+Peer.length+" online.");
  });

  ws.on("error", function(err) {
    console.log(err);
  });
});
