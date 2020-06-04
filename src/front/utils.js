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

module.exports = {
  gen_pkey,
  get_pkey,
  get_addr,
  pkey_to_addr,
  format_date,
};
