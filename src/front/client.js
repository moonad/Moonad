var req = require("xhr-request-promise");
var sig = require("nano-ethereum-signer");

module.exports = (url = "http://localhost") => {
  async function query(method, query) {
    var response = await req(url+"/"+method, {method: "POST", query});
    if (response.slice(0,5) === "DONE.") {
      return response.slice(6);
    } else {
      throw response.slice(6);
    }
  };

  async function post({pkey, cite, head, body}) {
    var full = cite+"\n"+head+"\n"+body;
    var msge = sig.keccak(full);
    var auth = sig.addressFromKey(pkey);
    var sign = sig.signMessage(msge, pkey);
    return await query("post", {cite, auth, sign, head, body});
  };

  async function get_posts_size() {
    return Number(await query("get_posts_size", {}));
  };

  async function get_post({post}) {
    return JSON.parse(await query("get_post", {post}));
  };

  async function get_cite({post}) {
    return (await query("get_cite", {post})).split(";");
  };

  async function register({name, addr}) {
    return await query("register", {name, addr});
  };

  async function get_name({addr}) {
    return await query("get_name", {addr});
  };

  async function get_addr({name}) {
    return await query("get_addr", {name});
  };

  async function get_posts({from, upto} = {}) {
    from = from || 0;
    upto = upto || await get_posts_size();
    var reqs = [];
    for (var i = from; i < upto; ++i) {
      reqs.push(get_post({post: "0x"+i.toString(16)}));
    }
    return await Promise.all(reqs);
  };

  async function watch_posts(callback, delay = 1000) {
    var posts = await get_posts();
    callback(posts);
    return setInterval(async () => {
      try {
        var posts_size = await get_posts_size();
        if (posts_size > posts.length) {
          var new_posts = await get_posts({from: posts.length, upto: posts_size});
          posts.push(...new_posts);
          callback(posts);
        };
      } catch (e) {};
    }, delay);
  };

  return {
    query,
    post,
    get_post,
    get_posts_size,
    get_posts,
    watch_posts,
    get_cite,
    register,
    get_name,
    get_addr,
  };
};
