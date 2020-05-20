require("./IBMPlexMono-Light.ttf");
const logo = require("./moonad_logo.png").default;

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const moonad = require("./client.js")(window.location.origin+"/");
const utils = require("./utils.js");
const common = require("./../common.js");
const fm = require("formality-lang");

function formatHexDate(hex_date) {
  var date = new Date(common.hex_to_num(hex_date));
  return date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()
    + ", "+date.getHours()+"h "+date.getMinutes()+"min";
}

class Write extends Component {
  constructor(props) {
    super(props);
    this.cite = new URLSearchParams(window.location.search).get("cite") || "0x0000000000000000";
    this.head = "Title...";
    this.body = "Contents...";
    this.cleared = {};
  }

  async post({cite, head, body}) {
    // Checks if citation is correct
    if (!common.hex(64, cite)) {
      return alert("Incorrect cited post.");
    }

    // Gets private key
    var pkey = utils.get_pkey();

    try {
      alert(await moonad.post({pkey, cite, head, body}));
      window.history.back();
    } catch (e) {
      alert(e.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,""));
    }
  }

  click(key, elem) {
    if (!this.cleared[key]) {
      this.cleared[key] = true;
      elem.innerText = "";
      this.forceUpdate();
    }
  }

  refresh(key, elem) {
    this[key] = elem.innerText;
    this.forceUpdate();
  }

  render() {

    const head = h("pre", {
      contentEditable: true,
      style: {
        "font-family": "IBMPlexMono-Light",
        "font-size": "12px",
        "color": "rgb(101,102,105)",
        "outline": "none",
        "width": "100%",
        "height": "20px",
        "padding": "2px 4px",
        "border-bottom": "1px solid rgb(240,240,240)",
        "background": "white",
      },
      onClick: (e) => this.click("head", e.target),
      onInput: (e) => this.refresh("head", e.target),
    }, [this.head]);

    const body = h("pre", {
      contentEditable: true,
      style: {
        "font-family": "IBMPlexMono-Light",
        "font-size": "12px",
        "color": "rgb(101,102,105)",
        "outline": "none",
        "width": "100%",
        "height": "360px",
        "padding": "2px 4px",
        "overflow-y": "scroll",
        "border-bottom": "1px solid rgb(240,240,240)",
        "background": "white",
      },
      onClick: (e) => this.click("body", e.target),
      onInput: (e) => this.refresh("body", e.target),
    }, [this.body]);

    const send = h("pre", {
      style: {
        "font-family": "IBMPlexMono-Light",
        "font-size": "12px",
        "color": "rgb(101,102,105)",
        "outline": "none",
        "width": "100%",
        "height": "20px",
        "padding": "2px 4px",
        "background": "rgb(241,242,246)",
        "border-bottom": "1px solid rgb(240,240,240)",
        "text-decoration": "underline",
        "cursor": "pointer",
      },
      onClick: () => {
        var cite = this.cite;
        var head = this.head;
        var body = this.body;
        this.post({cite, head, body});
      },
    }, [
      this.cite === "0x0000000000000000"
      ? "Submit post."
      : "Submit reply to " + this.cite + "."
    ]);

    const repl = h("pre", { 
      style: {
        "height": "calc(100% - 20px - 20px - 360px)",
        "color": "rgb(101,102,105)",
        "background": "rgb(221,222,224)",
        "border-top": "1px solid rgb(201,202,204)",
        "padding": "4px 4px",
      },
    }, ["*type-checker console and REPL here*"]);

    return h("div", {
      style: {
        "height": "calc(100% - 20px)",
      },
    }, [
      head,
      body,
      send,
      repl,
    ]);
  }
};

const Code = ({code, defs, on_click_post}) => {
  var tags = fm.lang.parse(code).tags;
  var elems = [];
  var txt_col = "rgb(102,172,182)";
  var nam_col = "rgb(160,162,166)";
  var nul_col = "rgb(112,146,188)";
  var str_col = "rgb(204,69,49)";
  var ref_col = "rgb(157, 147, 171)";
  var typ_col = "rgb(172,111,52)";
  for (let tag of tags) {
    let color = null;
    let click = null;
    let decor = null;
    let cursr = null;
    switch (tag.ctor) {
      case "nam":
        color = nam_col;
        break;
      case "var":
        color = nam_col;
        break;
      case "txt":
        if (tag.text === "Type") {
          color = typ_col;
        } else {
          color = txt_col;
        }
        break;
      case "nul": // ok 
        color = nul_col;
        break;
      case "str":
        color = str_col;
        break;
      case "ref":
        color = ref_col;
        click = () => defs[tag.text] && on_click_post(defs[tag.text].orig);
        decor = "underline";
        cursr = "pointer";
        break;
    }
    elems.push(h("span", {
      onClick: click,
      style: {
        "color": color,
        "text-decoration": decor,
        "cursor": cursr,
      }
    }, tag.text));
  };
  return elems;
};

const Post = ({defs, post, expand, on_click_post}) => {
  const title = h("div", {
      style: {
        "font-family": "IBMPlexMono-Light",
        "user-select": "none",
        "font-size": expand ? "16px" : "14px",
        "text-decoration": "underline",
        "color": "rgb(41, 42, 44)",
        "cursor": "pointer",
      },
      onClick: () => on_click_post(post.post),
    }, post.head);

  var blocks = common.get_post_blocks(post);
  var post_body = [];
  for (var block of blocks) {
    switch (block.ctor) {
      case "code":
        post_body.push(Code({code: block.code, defs, on_click_post}));
        break;
      case "text":
        post_body.push(block.text);
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
      + post.ciby.length + " replies"
      + " | 0 points"
      + " | at " + formatHexDate(post.date)
      + " | by " + post.auth
      );

  return h("div", {
    style: {
      //"border-bottom": "1px solid rgb(240, 240, 240)",
      //"padding-bottom": "16px",
    }}, [title, body, author]);
};

class Posts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var posts = this.props.posts;
    //console.log("....", this.props.focus, posts);
    if (!posts) {
      return null;
    } else if (this.props.focus) {
      var post = posts[common.hex_to_num(this.props.focus)];
      var body = [];
      //body.push(h("div", {
        //style: {
          //"cursor": "pointer",
          //"text-decoration": "underline",
          //"margin-bottom": "12px",
        //},
      //}, "Back to " + post.cite + "..."));
      body.push(Post({
        defs: this.props.defs,
        post: post,
        expand: true,
        on_click_post: this.props.on_click_post,
      }));
      body.push(h("div", {
        style: {
          "margin-top": "8px",
          "margin-bottom": "8px",
          "border-bottom": "1px solid rgb(240, 240, 240)",
          "font-size": "16px",
          "display": "flex",
          "flex-flow": "row nowrap",
          "justify-content": "space-between",
          "align-items": "flex-end",
        },
      }, [
        h("span", {
          style: {"font-size": "16px"},
        }, "Replies:"),
        h("span", {
          style: {
            "font-size": "12px",
            "text-decoration": "underline",
            "cursor": "pointer",
            "padding-bottom": "1px",
          },
          onClick: () => this.props.on_click_reply(),
        }, "write reply"),
      ]));
      for (let i = post.ciby.length - 1; i >= 0; --i) {
        let ciby_post = posts[common.hex_to_num(post.ciby[i])];
        body.push(Post({
          post: ciby_post,
          expand: false,
          on_click_post: () => this.props.on_click_post(ciby_post.post),
        }));
      };
    } else {
      var post_list = [];
      for (let i = 1; posts && i < posts.length; ++i) {
        var post = posts[i];
        if (post.cite === "0x0000000000000000" && post.head[0] !== "/") {
          post_list.push(Post({
            post: post,
            expand: false,
            on_click_post: () => this.props.on_click_post(posts[i].post),
          }));
        }
      };
      var body = post_list.reverse();
    };
    return h("div", {
      style: {
        "background": "rgb(242, 242, 242)",
        "min-height": "calc(100% - 30px)",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "center",
      },
    }, h("div", {
      style: {
        "background": "white",
        "padding": "2px 6px",
        "width": "586px",
      }
    }, body));
  }
};

class Head extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const head_lft = h("div", {
      onClick: () => this.props.on_click_link("posts"),
      style: {
        "cursor": "pointer",
      },
    }, ["Moonad"]);
    const head_rgt = h("div", {}, [
      h("span", {
        style: {
          "cursor": "pointer",
          "text-decoration": "underline",
          "color": "rgb(101,102,105)",
        },
        onClick: () => this.props.on_click_link("check"),
      }, "check"),
      h("span", {}, " "),
      h("span", {
        style: {
          "cursor": "pointer",
          "text-decoration": "underline",
          "color": "rgb(101,102,105)",
        },
        onClick: () => this.props.on_click_link("write"),
      }, "write"),
      h("span", {}, " "),
      h("span", {
        style: {
          "cursor": "pointer",
          "text-decoration": "underline",
          "color": "rgb(101,102,105)",
        },
        onClick: () => this.props.on_click_link("user"),
      }, "user"),
    ]);

    const head = h("div", {
      style: {
        "background": "white",
        "padding": "1px 6px",
        "border-bottom": "2px solid rgb(240, 240, 240)",
        "height": "26px",
        "font-size": "16px",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "space-between",
      },
    }, [head_lft, head_rgt]);

    return head;
  }
}

class Moonad extends Component {
  constructor(props) {
    super(props);
    this.post_watcher = null;
    this.posts = null;
    //this.route = "posts";
  }
  componentDidMount() {
    this.post_watcher = moonad.watch_posts((posts) => {
      //console.log(posts);
      this.posts = posts;
      for (var i = 0; i < this.posts.length; ++i) {
        this.posts[i].ciby = [];
      };
      for (var i = 0; i < this.posts.length; ++i) {
        if (this.posts[i].cite !== "0x0000000000000000") {
          var idx = common.hex_to_num(this.posts[i].cite);
          this.posts[idx].ciby.push(this.posts[i].post);
        }
      }
      var defs = {};
      for (var post of this.posts) {
        var code = common.get_post_code(post);
        var new_defs = fm.lang.parse(code).defs;
        for (var def in new_defs) {
          defs[def] = new_defs[def];
          defs[def].orig = post.post;
        };
      };
      this.defs = defs;
      this.forceUpdate();
    });
    window.onpopstate = () => this.forceUpdate();
  }
  check_all() {
    var text = "";
    for (var def in this.defs) {
      try {
        fm.synt.typesynth(this.defs[def].term, this.defs[def].type, this.defs);
        text += def + ": " + fm.lang.stringify(this.defs[def].type) + "\n";
      } catch (e) {
        console.log(e);
        text += def + ": " + "ERROR" + "\n";
      }
    };
    text += "All terms check!";
    alert(text);
  }
  set_route(route) {
    window.history.pushState({}, route, window.location.origin+route);
    console.log(route);
    this.route = route;
    this.forceUpdate();
  }
  get_route() {
    var route = window.location.pathname;
    return route === "/" ? "/posts" : route;
  }
  render() {
    var route = this.get_route();
    
    var head = h(Head, {
      route: route,
      posts: this.posts,
      on_click_link: (name) => {
        if (name === "posts") {
          this.set_route("/posts");
        } else if (name === "user") {
          alert("Logged as " + utils.pkey_to_addr(utils.get_pkey()));
        } else if (name === "write") {
          this.set_route("/write");
        } else if (name === "check") {
          this.check_all();
        }
      },
    });

    var paths = route.split("/").slice(1);
    switch (paths[0]) {
      case "write":
        var body = h(Write, {});
        break;
      case "posts":
        var body = h(Posts, {
          defs: this.defs,
          on_click_reply: () => {
            this.set_route("/write?cite="+paths[1]);
          },
          on_click_post: (post) => {
            console.log("clicked", post);
            this.set_route("/posts/"+post);
          },
          focus: paths[1] || null,
          posts: this.posts,
        });
        break;
    }

    return h("div", {
      style: {
        "font-family": "IBMPlexMono-Light",
        "font-size": "12px",
        "background": "rgb(242, 242, 242)",
        "width": "100%",
        "height": "100%",
      }}, [
        head,
        body,
      ]);
  }
};

window.onload = () => render(h(Moonad), document.getElementById("main"));
