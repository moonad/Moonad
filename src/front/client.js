var req = require("xhr-request-promise");
var sig = require("nano-ethereum-signer");

module.exports = (url = "http://localhost") => {
  async function post(post, code, cite, auth, pkey) {
    var full = post+";"+cite+";"+code;
    var msge = sig.keccak(full);
    var sign = sig.signMessage(msge, pkey);
    return await req(url+"/post", {
      method: "POST",
      query: {post, code, cite, auth, sign},
    });
  };

  async function get_post(post) {
    return await req(url+"/get_post", {
      method: "POST",
      query: {post},
    });
  };

  async function get_cite(post) {
    return await req(url+"/get_cite", {
      method: "POST",
      query: {post},
    });
  };

  async function register(name, addr) {
    return await req(url+"/register", {
      method: "POST",
      query: {name, addr},
    });
  };

  async function get_name(addr) {
    return await req(url+"/get_name", {
      method: "POST",
      query: {addr},
    });
  };

  async function get_addr(name) {
    return await req(url+"/get_addr", {
      method: "POST",
      query: {name},
    });
  };

  return {
    post,
    get_post,
    get_cite,
    register,
    get_name,
    get_addr,
  };
};
