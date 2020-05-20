// Database paths:
// - PostNumber.post = a post
// - PostNumber.cite = list of files that reply to it
// - DefName.orig    = post where Namespace.Term is defined
// - EthAddr.name    = name of an address
// - name.addr       = address of a name 

var express = require("express");
var app = express();
var fs = require("fs-extra");
var path = require("path");
var cors = require("cors");
var db = require("./db.js");
var sig = require("nano-ethereum-signer");
var fm = require("formality-lang");
var common = require("./../common.js");

// Globals
// =======

var Defs = {};
var Post = [{
  post: "0x0000000000000000",
  cite: "0x0000000000000000",
  head: "ROOT",
  body: ""
}];

// Startup
// =======

function path_of(base, file = "") {
  return path.join(__dirname, "..", "..", base, file);
};

async function startup() {
  // Makes sure db directory exists
  await fs.ensureFile(path_of("db", "0x0000000000000000.cite"));

  // Loads posts
  var post_files = fs.readdirSync(path_of("db"));
  var post_files = post_files.filter(name => name.slice(-5) === ".post");
  var post_files = post_files.sort((a,b) => a > b ? 1 : -1);
  for (var post_file of post_files) {
    var post = JSON.parse(fs.readFileSync(path_of("db", post_file), "utf8"));
    console.log("Loaded post:", post.post);
    var code = common.get_post_code(post);
    //console.log(code);
    try {
      var defs = fm.lang.parse(code).defs;
    } catch (e) {
      console.log("Error loading fm files on db directory. Aborting.");
      console.log(e);
      process.exit();
    }
    //console.log(defs);
    for (var def in defs) {
      if (Defs[def]) {
        console.log("Redefinition of '"+def+"' in '"+post_file+"' on db directory. Aborting.");
        process.exit();
      }
      Defs[def] = defs[def];
      console.log("- Defined: "+def);
    }
    Post.push(post);
  }

  // Starts API
  app.listen(80);
  console.log("Server open!");
};
startup();

// Database
// ========

// Key -> Promise(String)
var get = async (key) => {
  var file_path = path.join(__dirname,"..","..","db", key).toLowerCase();
  await fs.ensureFile(file_path);
  return await fs.readFile(file_path, "utf8");
};

// Key -> Promise(Unit)
var set = async (key, val) => {
  var file_path = path.join(__dirname,"..","..","db",key).toLowerCase();
  await fs.ensureFile(file_path);
  await fs.writeFile(file_path, val);
  return true;
};

// Key -> Promise(Unit)
var push = async (key, val) => {
  var file_path = path.join(__dirname,"..","..","db",key).toLowerCase();
  await fs.ensureFile(file_path);
  await fs.appendFile(file_path, val);
  return true;
};

// Key -> Promise(Bool)
var has = async (key) => {
  var file_path = path.join(__dirname,"..","..","db",key).toLowerCase();
  try {
    await fs.access(file_path, fs.constants.F_OK);
    return true;
  } catch (e) {
    return false;
  }
};

// API
// ===

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "..", "docs")));

// Makes a post
app.post("/post", async (req, res) => {
  try {
    console.log("New post:", req.query);

    var cite = req.query.cite;
    var head = req.query.head;
    var body = req.query.body;
    var auth = req.query.auth;
    var sign = req.query.sign;
    var date = common.hex(64, "0x"+Date.now().toString(16));
    var post = common.hex(64, "0x"+Post.length.toString(16));
    var post = {post, cite, date, auth, sign, head, body};

    // Validates if cited file exists
    if (!await has(post.cite+".cite")) {
      throw "Cited post '"+post.cite+"' doesn't exist.";
    }

    // Validates post head
    if (typeof post.head !== "string"
      || post.head.length > 64
      || post.head.indexOf("\n") !== -1) {
      throw "Invalid post title.";
    }

    // Validates post body
    try {
      if (typeof post.body !== "string") {
        throw "Invalid body.";
      }
      var code = common.get_post_code(post);
      var defs = fm.lang.parse(code).defs;
    } catch(e) {
      throw e.toString();
    }

    // Validates signature
    var msge = sig.keccak(post.cite+"\n"+post.head+"\n"+post.body);
    if ( common.hex(520,post.sign) === null
      || post.auth !== sig.signerAddress(msge,post.sign)) {
      //console.log("...full", JSON.stringify(full));
      //console.log("...msge", msge);
      //console.log("...sign", common.hex(520,sign));
      //console.log("...addr", sig.signerAddress(msge,sign));
      throw "Invalid signature.";
    }

    // Validates no redefinitions
    for (var def in defs) {
      //console.log("Exists " + def + "? ", Defs[def]);
      if (Defs[def]) {
        throw "Redefinition of '" + def + "'.";
      }
    };

    // Validates no type errors
    var all_defs = {...Defs, ...defs};
    //var synt = {};
    for (var def in defs) {
      try {
        // Type-Synth
        var term = all_defs[def].term;
        var type = all_defs[def].type;
        var {term, type} = fm.synt.typesynth(term, type, all_defs);
        // Register
        //synt[def] = {term, type};
      } catch (e) {
        throw fm.lang.stringify_err(e(), code);
      }
    };

    // Saves it
    try {
      await set(post.post+".post", JSON.stringify(post, null, 2));
      await set(post.post+".cite", "");
      for (var def in defs) {
        await set(def+".orig", post.post);
      }
      await push(cite+".cite", post.post+";");
      Post.push(post);
      for (var def in defs) {
        Defs[def] = defs[def];
      }
      console.log("Saved post: " + post.post);
    } catch (e) {
      throw "Internal error storing data.";
    }

    res.send("DONE.\n"+post.post);
  } catch (e) {
    console.log(e);
    res.send("FAIL.\n"+e.toString());
  }
});

// Gets the contents of a post
app.post("/get_post", async (req, res) => {
  try {
    var post = common.hex(64, req.query.post);
    if (!post) {
      throw "Invalid post id: '" + post + "'.";
    }
    var post = Post[common.hex_to_num(post)];
    res.send("DONE.\n"+JSON.stringify(post, null, 2));
  } catch (e) {
    res.send("FAIL.\n"+e.toString());
  }
});

// Gets the amount of posts
app.post("/get_posts_size", async (req, res) => {
  try {
    res.send("DONE.\n"+Post.length);
  } catch (e) {
    res.send("FAIL.\n"+e.toString());
  }
});

// Gets all posts that cite this post
app.post("/get_cite", async (req, res) => {
  try {
    var post = common.hex(64, req.query.post);
    if (!post) {
      throw "Invalid post id.";
    }
    var cite = await get(post+".cite");
    res.send("DONE.\n"+cite);
  } catch (e) {
    res.send("FAIL.\n"+e.toString());
  }
});

// Registers a name for an address
// TODO: signature
app.post("/register", async (req, res) => {
  try {
    var name = req.query.name;
    var addr = req.query.addr;
    if (common.nam(name) === null) {
      throw "Invalid name.";
    }
    if (common.hex(40, addr) === null) {
      throw "Invalid address.";
    }
    if (await has(addr+".name") || await has(name+".addr")) {
      throw "Name or address already registered.";
    };
    set(addr+".name", name);
    set(name+".addr", addr);
    res.send("DONE.");
  } catch (e) {
    res.send("FAIL.\n"+e.toString());
  }
});

// Gets the name of an address
app.post("/get_name", async (req, res) => {
  try {
    var addr = req.query.addr;
    if (common.hex(40, addr) === null) {
      throw "Invalid address.";
    }
    res.send("DONE.\n" + await get(addr+".name"));
  } catch (e) {
    res.send("FAIL.\n"+e.toString());
  }
});

// Gets the address of a name
app.post("/get_addr", async (req, res) => {
  try {
    var name = req.query.name;
    if (common.nam(name) === null) {
      throw "Invalid name.";
    }
    res.send("DONE.\n" + await get(name+".addr"));
  } catch (e) {
    res.send("FAIL.\n"+e.toString());
  }
});

app.get("*", async (req, res) => {
  var file = req.url.split("/").pop().replace(/[^0-9a-zA-Z_.]/g,"");
  if (fs.existsSync(path_of("docs", file))) {
    res.sendFile(path_of("docs", file));
  } else {
    res.sendFile(path_of("docs", "index.html"));
  }
});
