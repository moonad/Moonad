var db = require("./database.js"); 
var express = require("express");
var fs = require("fs-extra");
var path = require("path");
var cors = require("cors");
var {fmc} = require("formcore-js");
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// String -> String
function key_path(file = "") {
  return path.join(__dirname, "data", file);
};

// String -> Promise(String)
async function get(key) {
  try {
    var file = await fs.readFile(key_path(key), "utf8");
  } catch (e) {
    return null;
  };
  return file;
};

// String -> String -> Promise(Unit)
async function set(key, str) {
  fs.writeFile(key_path(key), str);
  return 1;
};

// : Term -> {String: Unit}
function get_deps(term, deps = {}) {
  switch (term.ctor) {
    case "Var": break;
    case "Ref": deps[term.name] = 1; break;
    case "Typ": break;
    case "All": get_deps(term.bind,deps); get_deps(term.body(fmc.Typ(),fmc.Typ()),deps); break;
    case "Lam": get_deps(term.body(fmc.Typ()),deps); break;
    case "App": get_deps(term.func,deps); get_deps(term.argm,deps); break;
    case "Let": get_deps(term.expr,deps); get_deps(term.body(fmc.Typ()),deps); break;
    case "Def": get_deps(term.expr,deps); get_deps(term.body(fmc.Typ()),deps); break;
    case "Ann": get_deps(term.expr,deps); get_deps(term.type,deps); break;
    case "Nat": break;
    case "Chr": break;
    case "Str": break;
  }
};

// Loads a name and all its dependencies into defs
// : String -> Defs -> Promise(Defs)
async function load_deps(name, defs = {}) {
  console.log("- load_deps " + name);
  if (!defs[name]) {
    var code = await get(name+".fmc");
    if (!code) {
      throw name+" not found.";
    }
    var deps = {};
    var new_defs = fmc.parse_defs(code);
    for (var new_def in new_defs) {
      defs[new_def] = new_defs[new_def];
      get_deps(new_defs[new_def].type, deps);
      get_deps(new_defs[new_def].term, deps);
    }
    for (var dep in deps) {
      await load_deps(dep, defs);
    }
  }
  return defs;
};

// : String -> Promise([String])
async function save(code) {
  try {
    console.log("\x1b[1mSaving:\x1b[0m\n" + code);
    console.log("- Parsing code...");
    var defs = fmc.parse_defs(code);
    if (!defs) {
      throw "Syntax error.";
    }
    var names = Object.keys(defs);
    console.log("+ Parsed. New defs: "+names.join(", ")+".");
    console.log("- Getting list of dependencies...");
    var deps = {};
    for (var def in defs) {
      get_deps(defs[def].term, deps);
      get_deps(defs[def].type, deps);
    }
    var deps = Object.keys(deps);
    console.log("+ Got: " + deps.join(", "));
    console.log("- Loading dependencies...");
    for (var dep of deps) {
      await load_deps(dep, defs);
    }
    console.log("+ Loaded. Total: "+Object.keys(defs).length+" defs.");
    console.log("- Loading dependents...");
    for (var name of names) {
      var dependents = await get(name+".dpd");
      if (dependents) {
        var dependents = JSON.parse(dependents);
        console.log("- Loading dependents of '"+name+"': "+Object.keys(dependents).join(", "));
        for (var dependent_name in dependents) {
          await load_deps(dependent_name, defs);
        }
      }
    };
    console.log("+ Loaded. Total: "+Object.keys(defs).length+ " defs.");
    console.log("- Checking types.");
    for (var def in defs) {
      try {
        fmc.typecheck(defs[def].term, defs[def].type, defs);
      } catch (e) {
        console.log("- Type error on '"+def+"'.");
        throw fmc.show_error(e, def);
      }
    }
    console.log("+ Checked!");
    console.log("- Storing...");
    for (var dep of deps) {
      var dep_dependents = await get(dep+".dpd");
      if (dep_dependents) {
        var dep_dependents = JSON.parse(dep_dependents);
        dep_dependents[name] = 1;
      } else {
        var dep_dependents = {};
      }
      console.log(dep+".dpd", dep_dependents);
      await set(dep+".dpd", JSON.stringify(dep_dependents));
    }
    for (var name of names) {
      var dependents = await get(name+".dpd");
      if (dependents) {
        dependents = JSON.parse(dependents);
      } else {
        dependents = {};
      }
      await set(name+".fmc", name+" : "+fmc.show(defs[name].type)+" = "+fmc.show(defs[name].term)+";\n");
      await set(name+".dpd", JSON.stringify(dependents));
    }
    console.log("+ Stored.");
    return names;
  } catch (e) {
    console.log("- Error:\n" + e.toString());
    throw e;
  }
};

// : String -> Promise(String)
async function load(name) {
  return await get(name+".fmc");
};

// App
// ===

app.get("/load", async function (req, res) {
  try {
    var name = req.query.name;
    var code = await load(name);
    if (code) {
      res.send(JSON.stringify({_: 'success', value: code}));
    } else {
      res.send(JSON.stringify({_: 'failure', value: "couldn't load '"+name+"'"}));
    }
  } catch (e) {
    res.send(JSON.stringify({_: 'failure', value: e.toString()}));
  }
});

app.post("/save", async function (req, res) {
  try {
    if (!req.body) { throw "Missing body."; }
    if (!req.body.code) { throw "Missing body.code."; }
    var code = req.body.code;
    var saved_names = await save(code);
    res.send(JSON.stringify({_: 'success', value: saved_names}));
  } catch (e) {
    res.send(JSON.stringify({_: 'failure', value: e.toString()}));
  }
});

var port = 1337;
app.listen(port);
console.log("Listening at " + port);
