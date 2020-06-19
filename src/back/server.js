// Database entries:
// - PostId.post // a Post
// - PostId.cite // list of files that cite (directly reply to) this post
// - FmTerm.orig // origin post where a FmTerm is defined
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
var Peer = []; // Arr WebSocket -- peer of address
var Size = 0;  // Number

// Moderator addresses: can publish to any namespace
var Mods = {
  "0x0000000000000000000000000000000000000000": 1,
  "0x11271cbe61c48cf8c5347f481d6df8e9c6c1fc61": 1,
};

// Posts that only moderators can post
var Lock = {
  "0x0000000000000000": 1,
  "0x0000000000000003": 1,
};

// Initializes everything
async function startup() {
  // Loads all files on /db
  var files = fs.readdirSync("db").sort((a,b) => a > b ? 1 : 0);

  // Gets existing posts
  var posts = [];
  for (var file of files) {
    if (file.slice(-5) === ".post") {
      posts.push(lib.bytes_to_post(await db.get(file)));
    }
  }

  // Removes static posts (the 6 automatic posts we make below)
  // posts = [{"date":1592522316335,"cite":"0x0000000000000003","auth":"0x11271cbe61c48cf8c5347f481d6df8e9c6c1fc61","head":"I'm Victor Maia","body":"I love computers and programming, and I designed Moonad and Formality together with my friends at Sunshine Cybernetics. Hi everyone!"},{"date":1592522316771,"cite":"0x0000000000000003","auth":"0xe629374d89ebbd5f827d752d35ba668d1c79f45f","head":"John Burnham","body":"Hi everyone!\n\nI'm John, Victor's cofounder at Sunshine Cybernetics (https://sunshinecybernetics.com/). I handle the business side of the company, and also work on the Formality libraries and implementations.\n\nWelcome to our project! We're always around on Telegram (https://t.me/formality_lang) if you have questions or just want to chat.\n"},{"date":1592522316773,"cite":"0x0000000000000003","auth":"0x225f7cb650ef2902b1356cead1d16a1695fb835d","head":"I'm Maisa","body":"Hi! I'm also part of Sunshine Cybernetics xD\nI have two cats: Neelix and Belanna (if you recognize the names you know what is my favorite serie)"},{"date":1592522316778,"cite":"0x0000000000000003","auth":"0x0164066329c4639886bcf025fa5f1961f07830b8","head":"Gabriel here","body":"Greetings, friends!\n\nI'm a mathematician who love proofs (you don't say!) and programs, that's why I love working for Sunshine Cybernetics.\nWelcome to Moonad!\n"},{"date":1592522316781,"cite":"0x0000000000000003","auth":"0x603a8f7d8d317ab05f8237ed82978e398083a617","head":"I'm Lucca","body":"Hey! I'm Lucca/Rukka, I'm one of the begginer artists of the team, welcome!\n\n"},{"date":1592522316784,"cite":"0x0000000000000003","auth":"0xb92d0b2407b64cc325c46ac50ed86b6959dca898","head":"I'm Nathan","body":"Hi, my name is Nathan and I am a beginner artist / freelancer. Welcome! O/\n\n"},{"date":1592522316787,"cite":"0x0000000000000003","auth":"0x76f634a753bf98d51a49312fd0d712805299d3cb","head":"I'm Emma","body":"Hello, my name is Emma/Em - I'm a programmer and came across the Formality/Moonad project a while ago -- been following it closely,  \nit's so so cool!\n"},{"date":1592522316790,"cite":"0x0000000000000003","auth":"0x85ccc2db7019bfb79580bd293e0c686c59759ceb","head":"I'm Daniel","body":"Hi all! I'm a web programmer by day, grad student by night studying logic programming and type theory. I want to write programs that do good things and don't break, which is why I'm interested in formal methods and Formality in particular.I'm also interested in learning and writing about the philosophical implications of certain parts of computer science, especially the idea of computational trinitarianism, so I'm excited about Foramality as a medium for discovering/sharing that sort of thing."},{"date":1592522316868,"cite":"0x0000000000000003","auth":"0xf82070e21eac5ec796644efcb6a744426e003dd8","head":"Piko piko!","body":"Piko piko piko!"}]
  var posts = posts.slice(6);

  // Clears up files
  for (var file of files) {
    var ext = file.slice(-5);
    if (ext === ".orig" || ext === ".cite" || ext === ".post") {
      fs.unlinkSync("db/"+file);
    }
  }

  // Static post: Root
  await new_post({
    date: 0,
    cite: "0x0000000000000000",
    auth: "0x0000000000000000000000000000000000000000",
    head: "Moonad.org",
    body: "",
  });

  // Static post: Prelude (topic)
  await new_post({
    date: 0,
    cite: "0x0000000000000000",
    auth: "0x0000000000000000000000000000000000000000",
    head: "Prelude",
    body: "Fundamental libraries meant be used in many projects.",
  });

  // Static post: Prelude (post)
  var prelude = fs.readFileSync(path_of("", "Prelude.fm"), "utf8");
  var prelude_lines = prelude.split("\n");
  for (var i = 0; i < prelude_lines.length; ++i) {
    if (/[A-Z]/.test(prelude_lines[i][0])) {
      prelude_lines[i] = "\n+" + prelude_lines[i];
    }
    if (prelude_lines[i].slice(0,3) === "// ") {
      prelude_lines[i] = prelude_lines[i].slice(3);
    }
    if (prelude_lines[i].slice(0,2) === "//") {
      prelude_lines[i] = prelude_lines[i].slice(2);
    }
  };
  await new_post({
    date: 0,
    cite: "0x0000000000000001",
    auth: "0x0000000000000000000000000000000000000000",
    head: "Prelude definitions",
    body: prelude_lines.join("\n"),
  });

  // Static post: Hello, Moonad!
  await new_post({
    date: 0,
    cite: "0x0000000000000000",
    auth: "0x0000000000000000000000000000000000000000",
    head: "Hello, Moonad!",
    body: "Introduce yourself here and join us to make the world a better place!",
  });

  // Static post: Playground
  await new_post({
    date: 0,
    cite: "0x0000000000000000",
    auth: "0x0000000000000000000000000000000000000000",
    head: "Playground",
    body: "Test your algorithms and proofs here.",
  });

  // Projects
  await new_post({
    date: 0,
    cite: "0x0000000000000000",
    auth: "0x0000000000000000000000000000000000000000",
    head: "Projects",
    body: "Moonad projects developed with Formality.",
  });

  // Makes non-static posts 
  for (var post of posts) {
    console.log("Making post:", post);
    try {
      await new_post(post);
    } catch (e) {
      console.log(e);
      process.exit();
    }
  }
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
  //if (Lock[cite] && !Mods[auth]) {
    //throw "Not authorized to reply to this thread.";
  //};

  // Validates post body (namespace-check)
  var code = lib.get_post_code(post, name);
  var defs = fm.lang.parse(code).defs;
  for (var def in defs) {
    if (!Mods[auth] && def.slice(0, name.length+1) !== name+"." && def !== name) {
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
    await db.set(poid+".post", Buffer.from(lib.post_to_bytes(post)));
    await db.set(poid+".cite", Buffer.from([]));
    Size += 1;

    // Adds poid to cited_post.cite
    if (poid !== "0x0000000000000000") {
      await db.con(cite+".cite", Buffer.from(lib.hex_to_bytes(poid)));
    };

    // For each defined term, set def.orig to poid
    for (var def in defs) {
      await db.set(def+".orig", Buffer.from(lib.hex_to_bytes(poid)));
    };

    // Adds new definitions to Defs object
    for (var def in defs) {
      Defs[def] = defs[def];
    }

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
  } else if (req.url === "/a") {
    var code = "";
    var poix = 0;
    var poid = (i) => "0x00000000" + ("00000000" + i.toString(16)).slice(-8);
    var post = await db.get(poid(poix)+".post");
    while (post) {
      var post_post = lib.bytes_to_post(post);
      var post_code = lib.get_post_code(post_post);
      if (post_code) {
        var post_auth = post_post.auth;
        code += "// Post by " + post_auth + " (" + (await db.get(post_auth+".name")) + "):\n\n";
        code += post_code+"\n\n";
      }
      post = await db.get(poid(++poix)+".post");
    };
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
