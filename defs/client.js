require("isomorphic-fetch");

function lib(url = "http://moonad.org:1337/") {
  async function call(method, args) {
    return (await fetch(url+method, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(args),
    })).json();
  };

  async function save(code) {
    return call("save", {code});
  };

  async function rename(from, to) {
    return call("rename", {from, to});
  };

  async function load(name, deps) {
    return call("load", {name, deps});
  };

  return {save, rename, load};
};

module.exports = lib;
