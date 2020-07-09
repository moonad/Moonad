// A single post, expanded or not

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");

const Code = require("./Code.js");
const Term = require("./Term.js");

const Post = ({post, play, poid, expand, top}) => {
  function enter() {
    if (poid === "0x0000000000000001") {
      window.open("https://github.com/moonad/Moonad/tree/master/lib", "_blank");
    } else {
      front.set_route("/p/"+poid);
    }
  };

  post = post || front.moonad.post[poid];
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
    return h("div", {style: { "margin-top": "10px", "margin-bottom": "10px"}}, [
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
    // Post head
    // =========

    const post_head = h("div", {
      style: {
        "margin-top": "4px", 
        "color": "rgb(161, 162, 168)",
        "font-family": "IBMPlexMono-Light",
        "font-size": "10px",
      },
    }, [

      // Post author
      h("span", {
        style: {
          "color": "rgb(0, 63, 99)",
          "font-size": "12px",
          "font-weight": "bold",
          "cursor": "pointer",
        },
        onClick: () => {
          front.set_route("/u/"+post.auth.toLowerCase());
        }
      }, (front.moonad.name[post.auth.toLowerCase()] || post.auth || "someone")),

      // Separator
      h("span", {
        style: {
          "color": "rgb(161, 162, 168)",
        },
      }, " · "),

      // Post date
      h("span", {
        style: {
          "color": "rgb(161, 162, 168)",
        },
      }, front.format_date(post.date)),
    ]);

    // Post body or played term
    // ========================

    if (play) {
      var body = h(Term, {
        poid,
        code: front.moonad.lib.get_post_code(post),
        name: play,
      });
    } else {
      var auth_addr = post.auth.toLowerCase();
      var auth_name = front.moonad.name[auth_addr];
      var blocks = front.moonad.lib.get_post_blocks(post);
      var body = [];
      for (var block of blocks) {
        switch (block.ctor) {
          case "code":
            body.push(Code({code: block.text, poid}));
            break;
          case "text":
            var text = block.text.replace(/^\n/,"");
            var line = "";
            for (var i = 0; i <= text.length; ++i) {
              if (i === text.length || text[i] === "\n" || line.length === 80) {
                var bold = false;
                if (line.slice(0,2) === "# ") {
                  bold = true;
                  line = line.slice(2);
                }
                body.push(h("div", {
                  style: {
                    "font-size": bold ? "14px" : "12px",
                    "font-weight": bold ? "bold" : "",
                    "margin-bottom": line === "" ? "8px" : "0px",
                    //"text-decoration": bold ? "underline" : "",
                    "cursor": bold ? "pointer" : "",
                  },
                  onClick: () => enter(),
                }, line));
                line = "";
              } else {
                line += text[i];
              }
            };
            break;
        }
      };
    }

    const post_body = !expand ? null : h("pre", {
        style: {
          "font-family": "IBMPlexMono-Light",
          "font-size": "12px",
          "padding": "5px 0px 5px 0px",
          "color": "rgb(41,42,45)",
        }
      }, [body]);

    // Post foot
    // =========

    const post_foot = h("div", {
      style: {
        "margin-top": "4px", 
        "color": "rgb(161, 162, 168)",
        "font-family": "IBMPlexMono-Light",
        "font-size": "10px",
      },
    }, [
      // Post replies
      h("span", {
        style: {
          "cursor": "pointer",
          "text-decoration": "underline",
        },
        onClick: () => enter(),
      }, "123 replies"),

      // Separator
      h("span", {
        style: {
          "color": "rgb(161, 162, 168)",
        },
      }, " · "),

      // Post parent
      h("span", {
        style: {
          "cursor": "pointer",
          "text-decoration": "underline",
        },
        onClick: () => {
          front.set_route("/p/"+post.cite);
        },
      }, "parent"),

    ]);

    // Post separator
    // ==============

    const post_line = h("div", {
      style: { 
        "border-bottom": "1px dashed rgb(240,240,240)",
        "margin-top": "10px",
        "margin-bottom": "20px",
      }}, "");

    return h("div", {
      style: {
        //"border-bottom": "1px solid rgb(240, 240, 240)",
        //"padding-bottom": "16px",
      }}, [
        post.cite === "0x0000000000000000" ? null : post_head,
        post_body,
        post_foot,
        post_line,
      ]);
  }
};


module.exports = Post;
