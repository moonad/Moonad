// Favicon
const logo = require("./moonad_logo.png").default;

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const fmc = require("formality-core");
const moonad = require("./client.js")();
const utils = require("./utils.js");
const common = require("./../common.js");
const fm = require("formality-core");

function formatHexDate(hex_date) {
  var date = new Date(common.hex_to_num(hex_date));
  return date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()
    + ", "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}

const Post = ({post, expanded_posts, on_click_title}) => {
  const expand = expanded_posts[post.post];

  const title = h("div", {
      style: {
        "font-family": "IBMPlexMono-Light",
        "user-select": "none",
        "font-size": "14px",
        "text-decoration": "underline",
        "color": "rgb(41, 42, 44)",
        "cursor": "pointer",
      },
      onClick: () => on_click_title(post.post),
    }, post.head);

  const body = !expand ? null : h("pre", {
      style: {
        "font-family": "IBMPlexMono-Light",
        "font-size": "12px",
        "padding": "2px 0px",
        "color": "rgb(101,102,105)",
      }
    }, post.body);

  const author = h("div", {
      style: {
        "font-family": "IBMPlexMono-Light",
        "font-size": "10px",
        //"font-style": "italic",
        "color": "rgb(161, 162, 168)",
        "padding-bottom": "8px",
      },
    }, "posted at "+formatHexDate(post.date)+" by "+post.auth);

  return h("div", {
    style: {
      //"border-bottom": "1px solid rgb(240, 240, 240)",
      //"padding-bottom": "16px",
    }}, [title, body, author]);
};

class Writer extends Component {
  constructor(props) {
    super(props);
    this.started = false;
  }

  render() {
    const full = h("pre", {
      contentEditable: true,
      id: "moonad-writer",
      style: {
        "font-family": "IBMPlexMono-Light",
        "font-size": "12px",
        "color": "rgb(101,102,105)",
        "outline": "none",
        "width": "100%",
        "height": "50%",
        "padding": "0px 4px",
        //"border-bottom": "1px solid black",
      },
      onClick: () => {
        if (!this.started) {
          this.started = true;
          this.forceUpdate();
        }
      },
    }, [this.started ? "" : "Enter code here..."]);

    const send = h("div", {
      style: {
        "font-family": "IBMPlexMono-Light",
        "font-size": "14px",
        "color": "rgb(101,102,105)",
        "height": "26px",
        "text-decoration": "underline",
        "cursor": "pointer",
        "padding": "0px 4px",
      },
      onClick: async () => {
        var self = document.getElementById("moonad-writer");
        var text = self.innerText;
        if (text.slice(0,2) !== "# ") {
          alert("Must have a title on first line starting with a '#' and a space.");
          return;
        }
        var pkey = utils.get_pkey();
        var cite = "0x0000000000000000";
        var head = text.slice(2, text.indexOf("\n"));
        var body = text.slice(text.indexOf("\n") + 1);
        while (body[0] === "\n") body = body.slice(1);
        alert(await moonad.post({pkey, cite, head, body}));
        this.props.done();
      },
    }, ["Post!"]);

    const repl = h("pre", { 
      style: {
        "height": "calc(50% - 26px)",
        "color": "rgb(101,102,105)",
        "background": "rgb(241,242,246)",
        "border-top": "1px solid rgb(221,222,224)",
        "padding": "0px 4px",
      },
    }, ["*type-checker console and REPL here*"]);

    return h("div", {
      style: {
        "height": "calc(100% - 20px)",
      },
    }, [
      full,
      send,
      repl,
    ]);
  }
};

class Moonad extends Component {
  constructor(props) {
    super(props);
    this.post_watcher = null;
    this.posts = null;
    this.write = false;
    this.expanded_posts = {};
  }
  componentDidMount() {
    this.post_watcher = moonad.watch_posts((posts) => {
      console.log(posts);
      this.posts = posts;
      this.forceUpdate();
    });
  }
  render() {
    const head_lft = h("div", {}, ["Moonad"]);
    const head_rgt = h("div", {}, [
      h("span", {
        style: {
          "cursor": "pointer",
          "text-decoration": "underline",
          "color": "rgb(101,102,105)",
        },
        onClick: () => {
          var defs = {};
          for (var post of this.posts) {
            var code = common.get_post_code(post);
            var new_defs = fm.lang.parse(code);
            for (var def in new_defs) {
              defs[def] = new_defs[def];
            };
          };
          var text = "";
          for (var def in defs) {
            try {
              fm.synt.typesynth(defs[def].term, defs[def].type, defs);
              text += def + ": " + fm.lang.stringify(defs[def].type) + "\n";
            } catch (e) {
              console.log(e);
              text += def + ": " + "ERROR" + "\n";
            }
          };
          text += "All terms check!";
          alert(text);
        },
      }, "check"),
      h("span", {}, " "),
      h("span", {
        style: {
          "cursor": "pointer",
          "text-decoration": "underline",
          "color": "rgb(101,102,105)",
        },
        onClick: () => {
          this.write = !this.write;
          this.forceUpdate();
        },
      }, this.write ? "back" : "post"),
      h("span", {}, " "),
      h("span", {
        style: {
          "cursor": "pointer",
          "text-decoration": "underline",
          "color": "rgb(101,102,105)",
        },
        onClick: () => {
          alert("Logged as " + utils.pkey_to_addr(utils.get_pkey()));
        },
      }, "user"),
    ]);

    const head = h("div", {
      style: {
        "padding": "1px",
        "border-bottom": "2px solid rgb(240, 240, 240)",
        "height": "20px",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "space-between",
      },
    }, [head_lft, head_rgt]);

    var post_list = [];
    for (let i = 1; this.posts && i < this.posts.length; ++i) {
      post_list.push(Post({
        post: this.posts[i],
        expanded_posts: this.expanded_posts,
        on_click_title: () => {
          this.expanded_posts[this.posts[i].post] = !this.expanded_posts[this.posts[i].post];
          this.forceUpdate();
        }
      }));
    };

    var body;
    if (this.write) {
      body = h(Writer, {
        done: () => {
          this.write = false;
          this.forceUpdate();
        }
      });
    } else {
      body = h("div", {
        style: {
          "padding": "2px 6px",
        },
      }, post_list.reverse());
    }

    return h("div", {
      style: {
        "font-family": "IBMPlexMono-Light",
        "font-size": "12px",
        "background": "rgb(253, 254, 255)",
        "width": "100%",
        "height": "100%",
      }}, [
        head,
        body,
      ]);
  }
};

window.onload = () => render(h(Moonad), document.getElementById("main"));
