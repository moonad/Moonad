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
  var now  = moment(new Date());
  var date = moment(new Date(date));

  function pluralize(n) {
    return n > 1 ? "s" : "";
  }
  
  if (now.isSame(date, 'minute')) {
    return "just now";
  }

  if (now.isSame(date, 'hour')) {
    var diff = now.minutes() - date.minutes();
    return `${diff} min${pluralize(diff)} ago`;
  }

  if (now.isSame(date, 'day')) {
    var diff = now.hours() - date.hours();
    return `${diff} hr${pluralize(diff)} ago`;
  }

  if (now.isSame(date, 'month')) {
    var diff = now.day() - date.day();
    return `${diff} day${pluralize(diff)} ago`;
  }

  if (now.isSame(date, 'year')) {
    var diff = now.month() - date.month();
    return `${diff} month${pluralize(diff)} ago`;
  }

  return `on ${now.format("MMM DD YYYY")}`;
}

const pkey_to_addr = memoize(ethsig.addressFromKey);

// Login
// =====

// Asks the user a name, registers a new (name,addr) pair.
async function register(taken = false) {
  var name = prompt((taken ? "Name taken. " : "") + "Choose a name:");
  try {
    await lib.moonad.api.register({name: lib.name, addr: lib.addr});
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

// Routing
// =======

function get_route() {
  var route = window.location.pathname;
  return route === "/" ? "/p" : route;
}

function get_paths() {
  return get_route().split("/").slice(1);
};

function get_watched_poid() {
  var paths = get_paths(); 
  if (paths[0] === "p") {
    return paths[1] || "0x0000000000000000";
  } else {
    return null;
  };
};

var last_watched_poid = null;
function refresh_watched_poid() {
  var watched_poid = get_watched_poid();
  if (watched_poid !== null && last_watched_poid !== watched_poid) {
    //console.log("watch:", watched_poid);
    lib.moonad.do_watch(watched_poid);
    last_watched_poid = watched_poid;
  };
};

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
lib.get_paths = get_paths;
lib.get_watched_poid = get_watched_poid;
lib.refresh_watched_poid = refresh_watched_poid;

module.exports = lib;
