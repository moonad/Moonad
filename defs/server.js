var express = require("express");
var fs = require("fs-extra");
var path = require("path");
var cors = require("cors");
var {fmc} = require("formcore-js");
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

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
  await fs.writeFile(key_path(key), str);
  return 1;
};

// String ->  Promise(Unit)
async function del(key) {
  fs.unlink(key_path(key));
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

function renamer(term, from, to) {
  function go(term) {
    switch (term.ctor) {
      case "Var": return term;
      case "Ref": return fmc.Ref(term.name === from ? to : term.name);
      case "Typ": return term;
      case "All": return fmc.All(term.eras, term.self, term.name, go(term.bind), (s,x)=>go(term.body(s,x)));
      case "Lam": return fmc.Lam(term.name, (x)=>go(term.body(x)));
      case "App": return fmc.App(go(term.func), go(term.argm));
      case "Let": return fmc.Let(term.name, go(term.expr), (x)=>go(term.body(x)));
      case "Def": return fmc.Def(term.name, go(term.expr), (x)=>go(term.body(x)));
      case "Ann": return fmc.Ann(term.done, go(term.expr), go(term.type));
      case "Nat": return term;
      case "Chr": return term;
      case "Str": return term;
    }
  }
  return go(term);
};

// Loads a name and all its dependencies into defs
// : String -> Defs -> Promise(Defs)
async function load_deps(name, defs = {}) {
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

async function load_subnet(code) {
  //console.log("- Parsing code...");
  var defs = fmc.parse_defs(code);
  if (!defs) {
    throw "Syntax error.";
  }
  var new_names = Object.keys(defs);
  console.log("+ Defs: "+new_names.join(", "));
  //console.log("- Getting list of dependencies...");
  var deps = {};
  for (var def in defs) {
    get_deps(defs[def].term, deps);
    get_deps(defs[def].type, deps);
  }
  var deps = Object.keys(deps);
  console.log("+ Deps: " + deps.join(", "));
  //console.log("- Loading dependencies...");
  for (var dep of deps) {
    await load_deps(dep, defs);
  }
  //console.log("- Loading dependents...");
  for (var name in defs) {
    var dependents = await get(name+".dpd");
    if (dependents) {
      var dependents = JSON.parse(dependents);
      for (var dependent_name in dependents) {
        await load_deps(dependent_name, defs);
      }
    }
  };
  console.log("+ Subnet: "+Object.keys(defs).length+ " defs.");
  return {deps, defs, new_names};
};

// : String -> Promise([String])
async function save(code) {
  try {
    console.log("\x1b[1mSaving:\x1b[0m\n" + code);
    var {defs, deps, new_names} = await load_subnet(code);
    for (var name of new_names) {
      if (await get(name+".fmc")) {
        throw "Redefinition of '" + name + "'.";
      }
    };
    for (var def in defs) {
      try {
        fmc.typecheck(defs[def].term, defs[def].type, defs);
      } catch (e) {
        console.log("- Type error on '"+def+"'.");
        throw fmc.show_error(e, def);
      }
    }
    console.log("+ Types checked.");
    for (var dep of deps) {
      var dep_dependents = await get(dep+".dpd");
      if (dep_dependents) {
        var dep_dependents = JSON.parse(dep_dependents);
        dep_dependents[dep] = 1;
      } else {
        var dep_dependents = {};
      }
      await set(dep+".dpd", JSON.stringify(dep_dependents));
    }
    for (var name in defs) {
      var dependents = await get(name+".dpd");
      if (dependents) {
        dependents = JSON.parse(dependents);
      } else {
        dependents = {};
      }
      await set(name+".fmc", name+" : "+fmc.show(defs[name].type)+" = "+fmc.show(defs[name].term)+";\n");
      await set(name+".dpd", JSON.stringify(dependents));
    }
    console.log("+ Files saved.");
    return Object.keys(defs);
  } catch (e) {
    console.log("- Error:\n" + e.toString());
    throw e;
  }
};

async function rename(from, to) {
  console.log("\x1b[1mRenaming:\x1b[0m\n" + from + " -> " + to);
  var code = await get(from+".fmc");
  if (!code) {
    throw from + " not defined.";
  }
  if (await get(to+".fmc")) {
    throw "Can't overwrite " + to + ".";
  }
  var {defs, deps} = await load_subnet(code);
  console.log(fmc.show_defs(defs));
  console.log("-----------");
  for (var def in defs) {
    if (def === from) {
      defs[to] = defs[def];
      defs[to].term = renamer(defs[def].term, from, to);
      defs[to].type = renamer(defs[def].type, from, to);
    } else {
      defs[def].term = renamer(defs[def].term, from, to);
      defs[def].type = renamer(defs[def].type, from, to);
    }
  }
  delete defs[from];
  console.log(fmc.show_defs(defs));
  process.exit();
  unlink(from+".fmc");
  for (var def in defs) {
    await set(def+".fmc", def+" : "+fmc.show(defs[def].type)+" = "+fmc.show(defs[name].term)+";\n");
  }
};

// : String -> Bool -> Promise(String)
async function load(name, deps) {
  if (deps) {
    var defs = {};
    var defs = await load_deps(name, defs);
    return fmc.show_defs(defs);
  } else {
    return await get(name+".fmc");
  }
};

// App
// ===

app.post("/load", async function (req, res) {
  try {
    if (!req.body) { throw "Missing body."; }
    if (!req.body.name) { throw "Missing body.name."; };
    var name = req.body.name;
    var code = await load(name, !!req.body.deps);
    if (code) {
      res.send(JSON.stringify({_: 'success', value: code}));
    } else {
      res.send(JSON.stringify({_: 'failure', value: "Couldn't load '"+name+"'"}));
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

app.post("/rename", async function (req, res) {
  try {
    if (!req.body) { throw "Missing body."; }
    if (!req.body.from) { throw "Missing body.from."; };
    if (!req.body.to) { throw "Missing body.to."; };
    var from = req.body.from;
    var to = req.body.to;
    rename(from, to);
    res.send(JSON.stringify({_: 'success', value: "renamed"}));
  } catch (e) {
    res.send(JSON.stringify({_: 'failure', value: e.toString()}))
  }
});

var port = 1337;
app.listen(port);
console.log("Listening at " + port);
