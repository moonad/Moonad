// Database entries:
// - PostId.post // a Post
// - PostId.cite // list of files that cite (directly reply to) this post
// - EthAdr.name // name of an address
// - UsrNam.addr // address of a name 
// Post = {
//   date: Word64,   // date it was posted
//   cite: Word64,   // post it cites (directly replies to)
//   auth: Word160,  // signature
//   head: Word640,  // post title or commands in case of apps & games
//   body: Bits,     // text and code
// }
// Post header is up to 1024 bits, 96 are unused.
// Post titles hold up to 80 chars.

// Uncomment to rebuild db
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
var Size = 0;  // Number
var Peer = []; // Arr WebSocket -- peer of address

// Moderator addresses: can publish to any namespace
var Mods = {
  "0x0000000000000000000000000000000000000000": 1,
  "0x11271cbe61c48cf8c5347f481d6df8e9c6c1fc61": 1,
};

// Posts that only moderators can post
var Lock = {
  "0x0000000000000000": 1,
  "0x0000000000000001": 1,
};

// Initializes everything
async function startup() {
  // Loads Formality definitions
  var lib_files = fs.readdirSync("./../lib").filter(x => x.slice(-3) === ".fm");
  for (var lib_file of lib_files) {
    console.log("Loading "+lib_file+"...");
    var lib_code = fs.readFileSync("./../lib/"+lib_file, "utf8");
    var new_defs = fm.lang.parse(lib_code).defs;
    for (var def in new_defs) {
      Defs[def] = new_defs[def];
    }
  }
  for (var def in Defs) {
    console.log("Checking "+def+"...");
    fm.synt.typesynth(def, Defs, fm.lang.stringify);
  }

  // Computes the size of posts
  Size = fs.readdirSync("db").filter(x => x.slice(-5) === ".post").length;

  // Loads all files on /db
  //var files = fs.readdirSync("db").sort((a,b) => a > b ? 1 : 0);

  // Gets existing posts
  //var posts = [];
  //for (var file of files) {
    //if (file.slice(-5) === ".post") {
      //posts.push(lib.bytes_to_post(await db.get(file)));
    //}
  //}

  // Removes static posts (the 6 automatic posts we make below)
  //var posts = posts.slice(6);

  // Clears up files
  //for (var file of files) {
    //var ext = file.slice(-5);
    //if (ext === ".orig" || ext === ".cite" || ext === ".post") {
      //fs.unlinkSync("db/"+file);
    //}
  //}

  // Static post: Root
  //await new_post({
    //date: 0,
    //cite: "0x0000000000000000",
    //auth: "0x0000000000000000000000000000000000000000",
    //head: "Moonad.org",
    //body: "",
  //});

  // Static post: Hello, Moonad!
  //await new_post({
    //date: 0,
    //cite: "0x0000000000000000",
    //auth: "0x0000000000000000000000000000000000000000",
    //head: "Hello, Moonad!",
    //body: "Introduce yourself here and join us to make the world a better place!",
  //});

  // Static post: Playground
  //await new_post({
    //date: 0,
    //cite: "0x0000000000000000",
    //auth: "0x0000000000000000000000000000000000000000",
    //head: "Playground",
    //body: "Test your algorithms and proofs here.",
  //});

  // Projects
  //await new_post({
    //date: 0,
    //cite: "0x0000000000000000",
    //auth: "0x0000000000000000000000000000000000000000",
    //head: "Projects",
    //body: "Moonad projects developed with Formality.",
  //});

  // Makes non-static posts 
  //for (var post of posts) {
    //console.log("Making post:", post);
    //try {
      //await new_post(post);
    //} catch (e) {
      //console.log(e);
      //process.exit();
    //}
  //}
  app.listen(80);
  console.log("Server open!");
};
startup();

async function new_post(post) {
  var date = post.date || Date.now();
  var poid = lib.hex(64, "0x"+Size.toString(16));
  try {
    var auth = post.auth || lib.get_post_auth(post);
  } catch (e) {
    throw "Invalid signature.";
  }
  var {cite, head, body} = post;
  var post = {date, cite, auth, head, body};

  // Validates name
  if (auth !== "0x0000000000000000000000000000000000000000") {
    var name = await db.get(auth+".name");
  } else {
    var name = "ROOT";
  }
  if (!name) {
    throw "Post author not registered.";
  }
  name = name.toString();

  // Validates if cited file exists
  if (poid !== "0x0000000000000000" && !await db.get(post.cite+".post")) {
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

  // Validates post cite (authorization to reply)
  if (Lock[cite] && !Mods[auth]) {
    throw "Not authorized to reply to this thread.";
  };

  // Validates post body (namespace-check)
  //var code = lib.get_post_code(post, name);
  //var defs = fm.lang.parse(code).defs;
  //for (var def in defs) {
    //if (!Mods[auth] && def.slice(0, name.length+1) !== name+"." && def !== name) {
      //throw "Not allowed to define '"+def+"' outside of the '"+name+"' namespace.";
    //}
    //if (Defs[def]) {
      //throw "Redefinition of '"+def+"'.";
    //}
  //};

  // Validates post body (type-check)
  //var all_defs = {...Defs, ...defs};
  //for (var def in defs) {
    //try {
      //var term = defs[def].term;
      //var type = defs[def].type;
      //var {term, type} = fm.synt.typesynth(def, all_defs, fm.lang.stringify);
    //} catch (e) {
      //throw fm.lang.stringify_err(e(), code);
    //}
  //};

  // Saves it
  try {
    console.log("saving post");
    // Saves new post
    await db.set(poid+".post", Buffer.from(lib.post_to_bytes(post)));
    await db.set(poid+".cite", Buffer.from([]));
    Size += 1;

    // Adds poid to cited_post.cite
    if (poid !== "0x0000000000000000") {
      await db.con(cite+".cite", Buffer.from(lib.hex_to_bytes(poid)));
    };

    // For each defined term, set def.orig to poid
    //for (var def in defs) {
      //await db.set(def+".orig", Buffer.from(lib.hex_to_bytes(poid)));
    //};

    // Adds new definitions to Defs object
    //for (var def in defs) {
      //Defs[def] = defs[def];
    //}

    return poid;
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

// HTTP API
// ========

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "..", "docs")));

app.get("*", async (req, res, next) => {
  if (req.url === "/.websocket") {
    next();
  } else if (req.url.slice(0,3) === "/c/") {
    var name = req.url.slice(3);
    if (Defs[name] && Defs[name].core) {
      res.set("Content-Type", "text/plain").send(name + ": "
        + fm.synt.stringify(Defs[name].core.type) + "\n  "
        + fm.synt.stringify(Defs[name].core.term));
    } else {
      res.set("Content-Type", "text/plain").send("-term_not_found");
    };
  } else if (req.url.slice(0,3) === "/f/") {
    var name = req.url.slice(3);
    if (name.indexOf("..") === -1 && fs.existsSync("./../lib/"+name+".fm")) {
      res.set("Content-Type", "text/plain").send(fs.readFileSync("./../lib/"+name+".fm", "utf8"));
    } else {
      res.set("Content-Type", "text/plain").send("-term_not_found");
    };
  } else if (req.url === "/a") {
    var code = "";
    var lib_files = fs.readdirSync("./../lib").filter(x => x.slice(-3) === ".fm");
    for (var lib_file of lib_files) {
      var lib_code = fs.readFileSync("./../lib/"+lib_file, "utf8");
      code += lib_code+"\n\n";
    }
    res.set("Content-Type", "text/plain").send(code);
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
  var post = req.query;
  if (req.query && req.query.auth) {
    delete req.query.auth;
  }
  if (req.query && req.query.date) {
    delete req.query.date;
  }
  try {
    res.send(await new_post(post));
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
      throw "Key not found: '"+req.query.key+"'.";
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
      if (poid !== "0x0000000000000000" && !peer.has_post[poid]) {
        peer.has_post[poid] = true;
        var post = await db.get(poid+".post");
        if (post) {
          var auth = lib.bytes_to_post(post).auth;
          var name = await db.get(auth+".name");
          var pbuf = await serialize_post(poid, post);
          bufs.push(pbuf);
          if (name && !peer.has_name[auth]) {
            peer.has_name[auth] = true;
            var nbuf = await serialize_name(auth, name);
            bufs.push(nbuf);
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
