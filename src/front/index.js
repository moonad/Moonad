// Assets
// ======

require("./IBMPlexMono-Light.ttf");
const logo = require("./moonad_logo.png").default;

// Libraries
// =========
const utils = require("./utils.js");
const fm = require("formality-lang");
const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const moonad_client = require("./../back/client.js")({url:window.location.origin});

// Account
// =======

// Gets the private key stored on browser
var pkey = utils.get_pkey();
var addr = utils.get_addr();

// Startup
// =======

// Renders interface when site loads up.
window.onload = () => render(h(Moonad), document.getElementById("main"));

// Starts the moonad object. It gets data from server, allows making posts, etc.
var moonad = moonad_client.direct();

// Logs in.
var name = "user";
login().then((login_name) => {
  console.log("logged as", login_name);
  name = login_name;
});

// Periodically sends watched poid to server.
setInterval(refresh_watched_poid, 50);

// Login
// =====

// Asks the user a name, registers a new (name,addr) pair.
async function register(taken = false) {
  var name = prompt((taken ? "Name taken. " : "") + "Choose a name:");
  try {
    await moonad.api.register({name, addr});
    return name;
  } catch (e) {
    console.log(e);
    register(true);
  }
};

// Logs in with the private key. If not registered, registers.
async function login() {
  console.log("Logging in...");
  try {
    return await moonad.api.get_name({addr})
  } catch (e) {
    return await register();
  }
};

// Routing
// =======

function get_route() {
  var route = window.location.pathname;
  return route === "/" ? "/p" : route;
}

function get_paths() {
  return get_route().split("/").slice(1);
};

function get_watched_poid() {
  var paths = get_paths(); 
  if (paths[0] === "p") {
    return paths[1] || "0x0000000000000000";
  } else {
    return null;
  };
};

var last_watched_poid = null;
function refresh_watched_poid() {
  var watched_poid = get_watched_poid();
  if (watched_poid !== null && last_watched_poid !== watched_poid) {
    //console.log("watch:", watched_poid);
    moonad.do_watch(watched_poid);
    last_watched_poid = watched_poid;
  };
};

// Components
// ==========

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
    if (!moonad.lib.hex(64, cite)) {
      return alert("Incorrect cited post.");
    }

    try {
      moonad.do_post({cite, head, body}, pkey);
      window.history.back();
    } catch (e) {
      console.log(e);
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
        var head = this.head.replace(/\n/g,"");
        var body = this.body.replace(/\n{3,}/g, "\n\n");
        this.post({cite, head, body});
      },
    }, ["Submit reply to " + this.cite + "."]);

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

const Code = ({code, on_click_post}) => {
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
        click = () => {console.log("TODO")};
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

const Post = ({poid, expand, on_click_post}) => {
  const post = moonad.post[poid];
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
        onClick: () => on_click_post(poid),
      }, post.head);

    var blocks = moonad.lib.get_post_blocks(post, moonad.name[moonad.lib.get_post_auth(post)]);
    //console.log("...", blocks);
    //console.log(moonad.name);
    var post_body = [];
    for (var block of blocks) {
      switch (block.ctor) {
        case "code":
          post_body.push(Code({code: block.code, on_click_post}));
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
        + ((moonad.cite[poid] ? moonad.cite[poid].length : 0) + " replies")
        + " | at " + utils.format_date(post.date)
        + " | by " + (moonad.name[post.auth] || post.auth || "someone")
        );

    return h("div", {
      style: {
        //"border-bottom": "1px solid rgb(240, 240, 240)",
        //"padding-bottom": "16px",
      }}, [title, body, author]);
  }
};

class Posts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var poid = this.props.poid;
    var post = moonad.post[poid];
    var body = [];

    // Main post
    body.push(Post({
      poid,
      expand: true,
      on_click_post: this.props.on_click_post
    }));

    // Reply separator
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

    // Post replies
    if (moonad.cite[poid]) {
      for (let i = moonad.cite[poid].length - 1; i >= 0; --i) {
        body.push(Post({
          poid: moonad.cite[poid][i],
          expand: false,
          on_click_post: () => this.props.on_click_post(moonad.cite[poid][i]),
        }));
      };
    };

    //console.log("Done...", body.length);
    return h("div", {
      style: {
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
      //h("span", {
        //style: {
          //"cursor": "pointer",
          //"text-decoration": "underline",
          //"color": "rgb(101,102,105)",
        //},
        //onClick: () => this.props.on_click_link("check"),
      //}, "check"),
      //h("span", {}, " "),
      //h("span", {
        //style: {
          //"cursor": "pointer",
          //"text-decoration": "underline",
          //"color": "rgb(101,102,105)",
        //},
        //onClick: () => this.props.on_click_link("write"),
      //}, "write"),
      //h("span", {}, " "),
      h("span", {
        style: {
          "cursor": "pointer",
          "text-decoration": "underline",
          "color": "rgb(101,102,105)",
        },
        onClick: () => this.props.on_click_link("user"),
      }, name),
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
  }
  componentDidMount() {
    setInterval(() => this.forceUpdate(), 250);
  }
  check_all() {
    alert("TODO");
    //var text = "";
    //for (var def in this.defs) {
      //try {
        //fm.synt.typesynth(this.defs[def].term, this.defs[def].type, this.defs);
        //text += def + ": " + fm.lang.stringify(this.defs[def].type) + "\n";
      //} catch (e) {
        //console.log(e);
        //text += def + ": " + "ERROR" + "\n";
      //}
    //};
    //text += "All terms check!";
    //alert(text);
  }
  set_route(route) {
    window.history.pushState({}, route, window.location.origin+route);
    //console.log(route);
    this.route = route;
    this.forceUpdate();
  }
  render() {
    var route = get_route();

    var head = h(Head, {
      route: route,
      posts: this.posts,
      on_click_link: (name) => {
        if (name === "posts") {
          this.set_route("/p");
        } else if (name === "user") {
          var msge = "Logged with Ethereum.\n- Address: "+addr+"\n- PrivKey: "+pkey+"\nCopy on the console.";
          alert(msge);
          console.log(msge);
        } else if (name === "write") {
          this.set_route("/w");
        } else if (name === "check") {
          this.check_all();
        }
      },
    });

    let paths = get_paths();
    switch (paths[0]) {
      case "w":
        var body = h(Write, {});
        break;
      case "p":
        var body = h(Posts, {
          on_click_reply: () => {
            this.set_route("/w?cite="+(paths[1]||"0x0000000000000000"));
          },
          on_click_post: (poid) => {
            console.log("clicked", poid);
            this.set_route("/p/"+poid);
          },
          poid: paths[1] || "0x0000000000000000",
        });
        break;
    }

    return h("div", {
      style: {
        "font-family": "IBMPlexMono-Light",
        "font-size": "12px",
        "background": "white",
        "width": "100%",
        "height": "100%",
      }}, [
        head,
        body,
      ]);
  }
};
