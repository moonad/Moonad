const fm = require("formality-lang");
const moonad = require("./../server/client.js")({url:window.location.origin});
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
  pkey = "0x"+pkey;
  localStorage.setItem("pkey", pkey);
  return pkey;
};

function get_pkey() {
  var pkey = localStorage.getItem("pkey") || gen_pkey();
  if (pkey.slice(0,2) !== "0x") {
    return "0x" + pkey;
  } else {
    return pkey;
  }
};

function get_addr() {
  return pkey_to_addr(get_pkey()).toLowerCase();
};

function format_date(date) {
  const now       = moment();
  const post_date = moment(date);
  return now.isSame(post_date, 'year')
    ? post_date.fromNow()
    : `on ${post_date.format("MMM DD YYYY")}`;
}

const pkey_to_addr = memoize(ethsig.addressFromKey);

// Logs
// ====

const logs = require("./../logs/client.js")({
  url: "ws://"+window.location.host+":7171",
  key: get_pkey(),
});

// Login
// =====

// Asks the user a name, registers a new (name,addr) pair.
//async function register(taken = false) {
  //var name = prompt((taken ? "Name taken. " : "") + "Choose a name:");
  //try {
    //console.log("Registering", name);
    //await lib.moonad.api.register({name, addr: lib.addr});
    //return name;
  //} catch (e) {
    //console.log("register error:", e);
    //register(true);
  //}
//};

// Logs in with the private key. If not registered, registers.
//async function login() {
  //console.log("Logging in...");
  //try {
    //return await lib.moonad.api.get_name({addr: lib.addr})
  //} catch (e) {
    //console.log("login error:", e);
    //return await register();
  //}
//};

// Routing
// =======

function get_route() {
  return window.location.pathname;
}

function set_route(route) {
  window.history.pushState({}, route, window.location.origin+route);
}

function get_paths() {
  return get_route().split("/").slice(1);
};

// Formality
// =========

function remove_colors(msg) {
  return msg.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,"");
};

async function load_core_defs_of({name, code, on_dependency, cached}) {
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
  fm.load.destroy_cache();
  for (var def in defs) {
    await fm.load.load_synth({
      name: def,
      defs,
      on_dependency,
      refresh_cache: false, // already destroyed
    });
  }
  var core_defs = {};
  for (var def in defs) {
    core_defs[def] = defs[def].core;
  };
  return core_defs;
};

// Startup
// =======

// Gets the private key stored on browser
var lib = {};
lib.pkey = get_pkey();
lib.addr = get_addr();

// Logs in.
//lib.name = "user";
//login().then((login_name) => {
  //console.log("logged as", login_name);
  //lib.name = login_name;
//});

// Periodically sends watched poid to server.
//setInterval(refresh_watched_poid, 50);

lib.logs = logs;
lib.gen_pkey = gen_pkey;
lib.get_pkey = get_pkey;
lib.get_addr = get_addr;
lib.pkey_to_addr = pkey_to_addr;
lib.format_date = format_date;
//lib.register = register;
//lib.login = login;
lib.get_route = get_route;
lib.set_route = set_route;
lib.get_paths = get_paths;
//lib.get_watched_poid = get_watched_poid;
//lib.get_played_term = get_played_term;
//lib.refresh_watched_poid = refresh_watched_poid;
lib.remove_colors = remove_colors;
lib.load_core_defs_of = load_core_defs_of;
//lib.check_block_code = check_block_code;

module.exports = lib;
