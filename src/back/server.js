// Database paths:
// - PostTitle.fm   = a post
// - PostTitle.cite = list of files that reply to it
// - DefName.orig   = post where Namespace.Term is defined
// - EthAddr.name   = name of an address
// - name.addr      = address of a name 

var express = require("express");
var app = express();
var fs = require("fs-extra");
var path = require("path");
var cors = require("cors");
var db = require("./db.js");
var sig = require("nano-ethereum-signer");
var fm = require("formality-core");

// Globals
// =======

var Defs = {};

// Startup
// =======

async function startup() {
  // Makes sure db directory exists
  await fs.ensureFile(path.join(__dirname,"..","..","db","root.cite"));

  // Loads `.fm` definitions
  var dir = fs.readdirSync("db").filter(name => name.slice(-3) === ".fm");
  for (var fm_file of dir) {
    var fm_text = fs.readFileSync(path.join(__dirname,"..","..","db",fm_file), "utf8");
    try {
      var fm_defs = fm.lang.parse(fm_text);
    } catch (e) {
      console.log("Error loading fm files on db directory. Aborting.");
      process.exit();
    }
    for (var fm_def in fm_defs) {
      if (Defs[fm_def]) {
        console.log("Redefinition of '"+fm_def+"' in '"+fm_file+"' on db directory. Aborting.");
        process.exit();
      }
      Defs[fm_def] = fm_defs[fm_def];
      console.log("- Defined: "+fm_def);
    }
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

// Validation
// ==========

function hex(bits, hex) {
  if (typeof hex !== "string" || !/^0x[a-fA-F0-9]*$/.test(hex)) {
    return null;
  };
  while ((hex.length - 2) * 4 < bits) {
    hex = "0x0" + hex.slice(2);
  };
  if ((hex.length - 2) * 4 > bits) {
    hex = hex.slice(0, Math.floor(bits / 4) + 2);
  }
  return hex;
};

function nam(name) {
  if (typeof name !== "string" || !/^[a-zA-Z0-9.]*$/.test(name)) {
    return null;
  } else {
    return name;
  }
};

function num(val) {
  try {
    var num = parseInt(val, 10);
    if (isNaN(num)) {
      return null;
    } else {
      return num;
    }
  } catch (e) {
    return null;
  }
};

// API
// ===

app.use(cors());
app.use(express.json());
app.use(express.static("docs"));

// Makes a post
app.post("/post", async (req, res) => {
  try {
    var post = req.query.post;
    var code = req.query.code;
    var cite = req.query.cite;
    var auth = req.query.auth;
    var sign = req.query.sign;
    var date = hex(64, "0x"+Date.now().toString(16));
    console.log(req.query);

    // Validates post name
    if (typeof post !== "string" || nam(post) === null) {
      console.log("...", post, nam(post));
      throw "Invalid post title.";
    }

    // Validates post code
    try {
      var defs = fm.lang.parse(code);
    } catch(e) {
      throw e.toString();
    }

    // Validates if posted file doesn't exist
    if (await has(post+".cite")) {
      throw "Post '"+post+"' already exists.";
    }

    // Validates if cited file exists
    if (!await has(cite+".cite")) {
      throw "Cited post '"+cite+"' doesn't exist.";
    }

    // Validates signature
    
    var full = post+";"+cite+";"+code;
    var msge = sig.keccak(full);
    if (hex(520,sign) === null || auth !== sig.signerAddress(msge,sign)) {
      console.log("...full", JSON.stringify(full));
      console.log("...msge", msge);
      console.log("...sign", sign);
      console.log("...sign", hex(520,sign));
      console.log("...addr", sig.signerAddress(msge,sign));
      throw "Invalid signature.";
    }

    // Validates no redefinitions
    for (var def in defs) {
      console.log("Exists " + def + "? ", Defs[def]);
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

    // Builds full post
    var full = "";
    full += "#cite:"+cite+"#\n";
    full += "#auth:"+auth+"#\n";
    full += "#sign:"+sign+"#\n";
    full += "#date:"+date+"#\n";
    full += code;

    // Saves it
    try {
      await set(post+".fm", full);
      await set(post+".cite", "");
      for (var def in all_defs) {
        await set(def+".orig", post);
      }
      await push(cite+".cite", post+";");
      for (var def in defs) {
        Defs[def] = defs[def];
      }
    } catch (e) {
      throw "Internal error storing data.";
    }

    res.send("DONE.");
  } catch (e) {
    res.send("FAIL.\n"+e.toString());
  }
});

// Gets the contents of a post
app.post("/get_post", async (req, res) => {
  try {
    var post = req.query.post;
    var text = await get(post+".fm");
    res.send("DONE.\n"+text);
  } catch (e) {
    res.send("FAIL.\n"+e.toString());
  }
});

// Gets the file that cite this post
app.post("/get_cite", async (req, res) => {
  try {
    var post = req.query.post;
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
    if (nam(name) === null) {
      throw "Invalid name.";
    }
    if (hex(40, addr) === null) {
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
    if (hex(40, addr) === null) {
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
    if (nam(name) === null) {
      throw "Invalid name.";
    }
    res.send("DONE.\n" + await get(name+".addr"));
  } catch (e) {
    res.send("FAIL.\n"+e.toString());
  }
});
