// A single post, expanded or not

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");

const Code = require("./Code.js");

const Post = ({poid, expand, top}) => {
  const post = front.moonad.post[poid];
  if (poid === "0x0000000000000000") {
    const Formality = h("span", {
      style: {
        "text-decoration": "underline",
        "cursor": "pointer",
      },
      onClick: () => {
        window.location.href = "https://github.com/moonad/formality";
      },
    }, "Formality");
    return h("div", {style: { "margin-top": "10px", "margin-bottom": "20px"}}, [
      h("h3", {style: { "color": "#003F63", }}, "Moonad: a p2p academic journal, or a social network for code?"),
      h("br"),
      h("div", {}, [
        "Here you can post and share contents, like a social network. But your posts can ",
        "contain code in ",Formality,", which merges programming and mathematics in a single ",
        "syntax. Moonad can host code and run apps, making it kind of an open-source app ",
        "store. But it can also link citations and verify proofs, making it kinda like a ",
        "p2p academic journal. Whatever it is, we hope it improves your life. Gl, hf! <3 ",
      ]),
      h("br")]);
  } else if (poid === null || !post) {
    return h("div", {}, "[loading...]");
  } else {
    const title_back = h("h3", {
        style: {
          //"user-select": "none",
          //"font-size": expand ? "16px" : "14px",
          "display": "inline-block",
          //"color": "rgb(41, 42, 44)",
          "cursor": "pointer",
          // "text-decoration": "underline",
        },
        onClick: () => front.set_route("/p/"+post.cite),
      }, "↩");

    const title_head = h("p", {
        style: {
          "font-size": "15px",
          //"user-select": "none",
          //"font-size": expand ? "16px" : "14px",
          "display": "inline-block",
          "cursor": "pointer",
          // "text-decoration": "underline",
        },
        onClick: () => front.set_route("/p/"+poid),
      }, post.head);

    const title = h("div", {
      style: {
        "margin-top": "10px", 
        "color": "rgb(74, 74, 74)",
        "font-family": "IBMPlexMono-Light",
      }}, top ? [title_back," ",title_head] : title_head);

    var auth_addr = post.auth.toLowerCase();
    var auth_name = front.moonad.name[auth_addr];
    var blocks = front.moonad.lib.get_post_blocks(post, front.moonad.name[auth_addr]);
    var post_body = [];
    for (var block of blocks) {
      switch (block.ctor) {
        case "code":
          post_body.push(Code({code: block.code}));
          break;
        case "text":
          var text = block.text.replace(/^\n/,"");
          var done = "";
          var llen = 0;
          for (var i = 0; i < text.length; ++i) {
            if (text[i] === "\n") {
              llen = 0;
              done += "\n";
            } else if (llen === 80) {
              llen = 1;
              done += "\n" + text[i];
            } else {
              llen += 1;
              done += text[i];
            }
          };
          post_body.push(done);
          break;
      }
    };

    const separator = h("div", {
      style: { 
        "border-bottom": "1px dashed rgb(240,240,240)",
        "margin-top": "8px"
      }}, "");

    const body = !expand ? null : h("pre", {
        style: {
          "font-family": "IBMPlexMono-Light",
          "font-size": "12px",
          "padding": "5px 0px 5px 0px",
          "color": "rgb(101,102,105)",
        }
      }, [post_body]);
  
    const replies_aux = front.moonad.cite[poid] ? front.moonad.cite[poid].length : 0;

    const author = h("div", {
        style: {
          "font-family": "IBMPlexMono-Light",
          "font-size": "8px",
          //"font-style": "italic",
          "color": "rgb(161, 162, 168)",
          "margin-top": "3px",
          "padding-bottom": "4px",
        },
      }, [""
        + " by " + (front.moonad.name[post.auth.toLowerCase()] || post.auth || "someone")
        + " · " + front.format_date(post.date)
        ]);

    return h("div", {
      style: {
        //"border-bottom": "1px solid rgb(240, 240, 240)",
        //"padding-bottom": "16px",
      }}, [title, author, body, separator]);
  }
};


module.exports = Post;
