// Types:
// - type Post = {date: Number, cite: Poid, auth: Addr, body: String}
// - type Poid = HexString(64)
// - type Addr = HexString(160)
// Database:
// - PostId.post : Post
// - PostId.cite : List(Poid)
// - EthAdr.name : String
// - UsrNam.addr : Addr

// Uncomment to rebuild db
var express = require("express");
var app = express();
//var ws = require('express-ws')(app);
var fs = require("fs-extra");
var path = require("path");
var cors = require("cors");
var db = require("./database.js");
var sig = require("nano-ethereum-signer");
var fm = require("formality-lang");
var lib = require("./lib.js");

var github_util = require("./utils/github_util.js");

function path_of(dirs) {
  return path.join(__dirname, "..", "..", "..", ...dirs);
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

var LastMod = {};
var FileDefs = {};

function load_lib_files() {
  // Checks removed files
  for (var file in FileDefs) {
    if (!fs.existsSync(file)) {
      console.log("Removed "+file+"...");
      for (var def in FileDefs[file]) {
        console.log("- Deleting "+def+"...");
        delete Defs[def];
      }
      delete FileDefs[file];
      delete LastMod[file];
    }
  };
  // Loads Formality definitions
  var lib_files = fs.readdirSync(path_of(["lib"])).filter(x => x.slice(-3) === ".fm");
  var new_def_names = [];
  for (var lib_file of lib_files) {
    var path = path_of(["lib", lib_file]);
    var last_mod = fs.statSync(path).mtime.getTime();
    if (!LastMod[path] || LastMod[path] !== last_mod) {
      console.log("Loading "+lib_file+"...");
      var lib_code = fs.readFileSync(path, "utf8");
      var new_defs = fm.lang.parse(lib_code).defs;
      var all_defs = {...Defs, ...new_defs};
      FileDefs[path] = FileDefs[path] || {};
      LastMod[path] = last_mod;
      for (var def in new_defs) {
        Defs[def] = new_defs[def];
        Defs[def].file = lib_file;
        FileDefs[path][def] = 1;
        new_def_names.push(def);
      }
    }
  }
  // Type checks
  for (var def of new_def_names) {
    console.log("- Checking "+def+"...");
    fm.synt.typesynth(def, Defs, fm.lang.stringify);
  }
}

// Initializes everything
async function startup() {
  load_lib_files();
  setInterval(() => load_lib_files(), 1000);
  app.listen(80);
  console.log("Server open!");
};
startup();

async function new_file(file) {
  // Parses defs, gets fnam
  var defs = fm.lang.parse(file.code).defs;
  var fnam = null;
  for (var def_name in defs) {
    if (!fnam || fnam.length > def_name) {
      fnam = def_name;
    }
  }
  var path = path_of(["lib", fnam+".fm"]);

  // If already exists, return
  if (fs.existsSync(path) && fs.readFileSync(path, "utf8") === file.code) {
    return lib.string_to_hex(fnam);
  }

  // Validates signature
  try {
    var auth = lib.get_file_auth(file);
  } catch (e) {
    throw "Invalid signature.";
  }

  // Validates name
  if (auth !== "0x0000000000000000000000000000000000000000") {
    var name = await db.get(auth+".name");
  } else {
    var name = "ROOT";
  }

  // Validates post body (namespace-check)
  for (var def_name in defs) {
    if (!Mods[auth] && def_name !== name && def_name.slice(0,name.length+1) !== name+".") {
      throw "Not allowed to define '"+def_name+"' outside of the '"+name+"' namespace.";
    }
    if (def_name !== fnam && def_name.slice(0,fnam.length+1) !== fnam+".") {
      throw "Definition '"+def_name+"' isn't on the '"+fnam+"' namespace.";
    }
    if (Defs[def]) {
      throw "Redefinition of '"+def+"'.";
    }
  }
  if (fs.existsSync(path)) {
    throw "File '"+fnam+"' already exists.";
  }

  // Validates file body (type-check)
  var all_defs = {...Defs, ...defs};
  for (var def in defs) {
    try {
      var term = defs[def].term;
      var type = defs[def].type;
      var {term, type} = fm.synt.typesynth(def, all_defs, fm.lang.stringify);
    } catch (e) {
      throw fm.lang.stringify_err(e(), file.code);
    }
  }

  // Writes and loads file
  fs.writeFileSync(path, file.code);
  load_lib_files();

  // TODO: commit on git
  return fnam;
};

// HTTP API
// ========

app.use(cors());
app.use(express.json());
app.use(express.static(path_of(["docs"])));

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
    if (name.indexOf("..") === -1 && fs.existsSync(path_of(["lib", name+".fm"]))) {
      res.set("Content-Type", "text/plain").send(fs.readFileSync(path_of(["lib", name+".fm"]), "utf8"));
    } else {
      res.set("Content-Type", "text/plain").send("-term_not_found");
    };
  } else if (req.url === "/a") {
    var code = "";
    var lib_files = fs.readdirSync(path_of(["lib"])).filter(x => x.slice(-3) === ".fm");
    for (var lib_file of lib_files) {
      var lib_code = fs.readFileSync(path_of(["lib",lib_file]), "utf8");
      code += lib_code+"\n\n";
    }
    res.set("Content-Type", "text/plain").send(code);
  } else if (req.url === "/github") {
    console.log("req.url: ", req.url);
    github_util.git_pull();
    // console.log("req: ", req);
  } else { 
    var file = req.url.split("/").pop().replace(/[^0-9a-zA-Z_.]/g,"");
    if (file.length > 0 && fs.existsSync(path_of(["app", "docs", file]))) {
      res.sendFile(path_of(["app", "docs", file]));
    } else {
      res.sendFile(path_of(["app", "docs", "index.html"]));
    }
  };
});

app.post("/github", async (req, res) => {
  console.log("POST GITHUB");
  github_util.git_pull();
  res.send("Hi, there. What's up? I'm up..dated");
});

// Loads the file of a definition
app.post("/load", async (req, res) => {
  var name = req.query.name;
  if (Defs[name]) {
    var path = path_of(["lib", Defs[name].file]);
    try {
      res.send(fs.readFileSync(path, "utf8"));
      return;
    } catch (e) {};
  };
  res.send("- File not found.");
});

// Lists the name of all existing definitions
app.post("/list", async (req, res) => {
  res.send(Object.keys(Defs).join(";"));
});

// Uploads a file
app.post("/save", async (req, res) => {
  var file = req.query;
  if (req.query && req.query.auth) {
    delete req.query.auth;
  }
  try {
    res.send(await new_file(file));
  } catch (e) {
    res.send("- " + e.toString());
  }
});

//// TCP API
//// =======

//// Poid -> Buff -> Buff
//async function serialize_post(poid, post) {
  //if (post) {
    //var pbuf = lib.post_to_bytes(post);
    //return lib.bytes_concat([
      //[lib.POST],
      //lib.hex_to_bytes(poid),
      //lib.uint32_to_bytes(pbuf.length),
      //pbuf,
    //]);
  //} else {
    //return null;
  //}
//};

//// Poid -> Buff -> Uint -> Uint -> Buff 
//async function serialize_cite(poid, cite, from, upto) {
  //if (cite && from*8 < cite.length && upto*8 <= cite.length) {
    //var bytes = [
      //[lib.CITE],
      //lib.hex_to_bytes(poid),
      //lib.uint32_to_bytes(from),
      //lib.uint32_to_bytes(upto),
    //];
    //for (var i = from; i < upto; ++i) {
      //bytes.push(cite.slice(i*8, i*8+8));
    //};
    //return lib.bytes_concat(bytes);
  //} else {
    //return null;
  //}
//};

//// Addr -> Buff -> Buff
//async function serialize_name(addr, name) {
  //return lib.bytes_concat([
    //[lib.NAME],
    //lib.hex_to_bytes(addr),
    //lib.uint32_to_bytes(name.length),
    //name,
  //]);
//};

//app.ws('/', function(ws, req) {
  //var peer = {};
  //peer.has_post = {}; // Map Poid Bool
  //peer.len_cite = {}; // Map Poid Uint
  //peer.has_name = {}; // Map Addr Bool
  //peer.ws = ws;
  //peer.ws.binaryType = "arraybuffer";
  //peer.poid = "0x0000000000000000"
  //Peer.push(peer);
  //console.log("New connection. "+Peer.length+" online.");

  //// Watches replies to the watched poid and sends to peer
  //peer.refresher = setInterval(async function refresh() {
    //var bufs = [];

    //// Sends a post to peer
    //async function view_post(poid) {
      //if (poid !== "0x0000000000000000" && !peer.has_post[poid]) {
        //peer.has_post[poid] = true;
        //var post = await expand_post(poid);
        //if (post) {
          //var auth = post.auth;
          //var name = await db.get(auth+".name");
          //var pbuf = await serialize_post(poid, post);
          //bufs.push(pbuf);
          //if (name && !peer.has_name[auth]) {
            //peer.has_name[auth] = true;
            //var nbuf = await serialize_name(auth, name);
            //bufs.push(nbuf);
          //};
        //};
      //};
    //};

    //// Sends watched post
    //await view_post(peer.poid);

    //// Sends watched cites
    //var cite = await db.get(peer.poid+".cite");
    //if (cite) {
      //var from = peer.len_cite[peer.poid]||0;
      //var upto = cite.length / 8;
      //if (from < upto) {
        //peer.len_cite[peer.poid] = upto;
        //for (var i = from; i < upto; ++i) {
          //var cite_poid = lib.bytes_to_hex(cite.slice(i*8, (i+1)*8));
          //await view_post(cite_poid);
        //};
        //var cbuf = await serialize_cite(peer.poid, cite, from, upto);
        //bufs.push(cbuf);
      //};
    //};

    //// Sends bufs
    //if (bufs.length > 0) {
      //peer.ws.send(Buffer.concat(bufs));
    //};

  //}, 100);

  //ws.on("message", function(data) {
    //var data = new Uint8Array(data);
    //switch (data[0]) {
      //// User makes a new post
      //case lib.DO_POST:
        //var post = lib.bytes_to_post(data.slice(1));
        //new_post(post).then(()=>{}).catch((e)=>{console.log(e)});
        //break;

      //// Users requests to watch a poid
      //case lib.DO_WATCH:
        //var poid = lib.bytes_to_hex(data.slice(1, 9));
        //peer.poid = poid;
        //break;
    //}
  //});

  //ws.on("close", function() {
    //Peer = Peer.filter(x => x !== peer);
    //clearTimeout(peer.refresher);
    //console.log("Disconnection. "+Peer.length+" online.");
  //});

  //ws.on("error", function(err) {
    //console.log(err);
  //});
//});
