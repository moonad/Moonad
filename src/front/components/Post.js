// A single post, expanded or not

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");

const Code = require("./Code.js");

const Post = ({poid, expand}) => {
  const post = front.moonad.post[poid];
  if (poid === "0x0000000000000000") {
    return h("div", {}, "Welcome to Moonad.");
  } else if (poid === null || !post) {
    return h("div", {}, "[loading...]");
  } else {
    const title = h("div", {
        style: {
          "font-family": "IBMPlexMono-Light",
          "user-select": "none",
          "font-size": expand ? "16px" : "14px",
          "text-decoration": "underline",
          "color": "rgb(41, 42, 44)",
          "cursor": "pointer",
        },
        onClick: () => front.set_route("/p/"+poid),
      }, post.head);

    var auth_addr = front.moonad.lib.get_post_auth(post).toLowerCase();
    var auth_name = front.moonad.name[auth_addr];
    var blocks = front.moonad.lib.get_post_blocks(post, front.moonad.name[auth_addr]);
    var post_body = [];
    for (var block of blocks) {
      switch (block.ctor) {
        case "code":
          post_body.push(Code({code: block.code}));
          break;
        case "text":
          post_body.push(block.text.replace(/^\n/,""));
          break;
      }
    };

    const body = !expand ? null : h("pre", {
        style: {
          "font-family": "IBMPlexMono-Light",
          "font-size": "12px",
          "padding": "2px 0px",
          "color": "rgb(101,102,105)",
        }
      }, post_body);

    const author = h("div", {
        style: {
          "font-family": "IBMPlexMono-Light",
          "font-size": "8px",
          //"font-style": "italic",
          "color": "rgb(161, 162, 168)",
          "padding-bottom": "8px",
        },
      }, ""
        + ((front.moonad.cite[poid] ? front.moonad.cite[poid].length : 0) + " replies")
        + " | at " + front.format_date(post.date)
        + " | by " + (front.moonad.name[post.auth.toLowerCase()] || post.auth || "someone")
        );

    return h("div", {
      style: {
        //"border-bottom": "1px solid rgb(240, 240, 240)",
        //"padding-bottom": "16px",
      }}, [title, body, author]);
  }
};

module.exports = Post;
