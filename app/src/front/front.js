const fm = require("formality-lang");
const moonad_client = require("./../back/client.js")({url:window.location.origin});
const ethsig = require("nano-ethereum-signer");
const moment = require("moment");

function memoize(fn) {
  var memo = {};
  return function(arg) {
    if (!memo[arg]) {
      memo[arg] = fn(arg);
    }
    return memo[arg];
  };
};

function gen_pkey() {
  var pkey = "";
  var nums = crypto.getRandomValues(new Uint8Array(32));
  for (var i = 0; i < nums.length; ++i) {
    pkey += ("00" + nums[i].toString(16)).slice(-2);
  }
  localStorage.setItem("pkey", pkey);
  return pkey;
};

function get_pkey() {
  return localStorage.getItem("pkey") || gen_pkey();
};

function get_addr() {
  return pkey_to_addr(get_pkey());
};

function format_date(date) {
  const now       = moment();
  const post_date = moment(date);
  return now.isSame(post_date, 'year') ? post_date.fromNow() : `on ${post_date.format("MMM DD YYYY")}`;
}

const pkey_to_addr = memoize(ethsig.addressFromKey);

// Login
// =====

// Asks the user a name, registers a new (name,addr) pair.
async function register(taken = false) {
  var name = prompt((taken ? "Name taken. " : "") + "Choose a name:");
  try {
    console.log("Registering", name);
    await lib.moonad.api.register({name, addr: lib.addr});
    return name;
  } catch (e) {
    console.log("register error:", e);
    register(true);
  }
};

// Logs in with the private key. If not registered, registers.
async function login() {
  console.log("Logging in...");
  try {
    return await lib.moonad.api.get_name({addr: lib.addr})
  } catch (e) {
    console.log("login error:", e);
    return await register();
  }
};

async function get_profile_info(addr){
  return await lib.moonad.api.get_profile_info({addr});
}


// Routing
// =======

function get_route() {
  var route = window.location.pathname;
  return route === "/" ? "/p" : route;
}

function set_route(route) {
  window.history.pushState({}, route, window.location.origin+route);
}

function get_paths() {
  return get_route().split("/").slice(1);
};

function get_watched_poid() {
  var paths = get_paths(); 
  if (paths[0] === "p") {
    return paths[1] && paths[1].split(".")[0] || "0x0000000000000000";
  } else {
    return null;
  };
};

var last_watched_poid = null;
function refresh_watched_poid() {
  var watched_poid = get_watched_poid();
  if (watched_poid !== null && last_watched_poid !== watched_poid) {
    lib.moonad.do_watch(watched_poid);
    last_watched_poid = watched_poid;
  };
};

function get_played_term() {
  var paths = get_paths(); 
  if (paths[0] === "p" && paths[1] && paths[1].indexOf(".") !== -1) {
    return paths[1].split(".").slice(1).join(".");
  } else {
    return null;
  };
};

// Formality
// =========

function remove_colors(msg) {
  return msg.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,"");
};

async function load_core_defs_of({name, code}) {
  var defs = {
    _main_: {
      type: fm.synt.Hol("_Main_", fm.synt.Nil()),
      term: fm.synt.Ref(name),
    }
  };
  if (code) {
    var {defs: extra_defs} = fm.lang.parse(code);
    for (var def in extra_defs) {
      defs[def] = extra_defs[def];
    }
  }
  for (var def in defs) {
    await fm.load.load_and_typesynth(def, defs, fm.lang.stringify, true);
  }
  var core_defs = {};
  for (var def in defs) {
    core_defs[def] = defs[def].core;
  };
  return core_defs;
};

async function check_block_code(post_content) {
  var code   = lib.moonad.lib.get_post_code({body: post_content});
  var {defs} = fm.lang.parse(code);
  var types  = [];
  var errors = [];
  var holes  = [];
  fm.synt.clear_hole_logs();
  for (var def in defs) {
    try {
      var {term, type} = await fm.load.load_and_typesynth(def, defs, fm.lang.stringify, true);
      types.push([def, fm.lang.stringify(type)]);
    } catch (e) {
      errors.push([def, lib.remove_colors(fm.lang.stringify_err(e()))]);
    }
  }
  var hole_logs_len = Object.keys(fm.synt.HOLE_LOGS).length;
  if (hole_logs_len > 0) {
    console.log(fm.synt.HOLE_LOGS);
    for (var hole in fm.synt.HOLE_LOGS) {
      var hole_msg = lib.remove_colors(fm.synt.HOLE_LOGS[hole]);
      var hole_lns = hole_msg.split("\n");
      holes.push([hole, hole_lns.slice(1).join("\n")]);
    }
  }
  return {types, errors, holes};
}

// Startup
// =======

// Gets the private key stored on browser
var lib = {};
lib.pkey = get_pkey();
lib.addr = get_addr();

// Starts the moonad object. It gets data from server, allows making posts, etc.
lib.moonad = moonad_client.direct();

// Logs in.
lib.name = "user";
login().then((login_name) => {
  console.log("logged as", login_name);
  lib.name = login_name;
});

// Periodically sends watched poid to server.
setInterval(refresh_watched_poid, 50);

lib.gen_pkey = gen_pkey;
lib.get_pkey = get_pkey;
lib.get_addr = get_addr;
lib.pkey_to_addr = pkey_to_addr;
lib.format_date = format_date;
lib.register = register;
lib.login = login;
lib.get_route = get_route;
lib.set_route = set_route;
lib.get_paths = get_paths;
lib.get_watched_poid = get_watched_poid;
lib.get_played_term = get_played_term;
lib.refresh_watched_poid = refresh_watched_poid;
lib.remove_colors = remove_colors;
lib.load_core_defs_of = load_core_defs_of;
lib.check_block_code = check_block_code;
lib.get_profile_info = get_profile_info;

module.exports = lib;
