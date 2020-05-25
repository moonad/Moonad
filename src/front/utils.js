const ethsig = require("nano-ethereum-signer");

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
  var date = new Date(date);
  return date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()
    + ", "+date.getHours()+"h "+date.getMinutes()+"min";
}

const pkey_to_addr = memoize(ethsig.addressFromKey);

module.exports = {
  gen_pkey,
  get_pkey,
  get_addr,
  pkey_to_addr,
  format_date,
};
