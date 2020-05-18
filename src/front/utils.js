const ethsig = require("nano-ethereum-signer");

function memoize(fn) {
  var memo = {};
  return function(arg) {
    console.log("->",arg);
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

const pkey_to_addr = memoize(ethsig.addressFromKey);

module.exports = {
  gen_pkey,
  get_pkey,
  pkey_to_addr,
};
