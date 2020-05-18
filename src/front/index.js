// Favicon
const logo = require("./moonad_logo.png").default;

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const fmc = require("formality-core");
const moonad = require("./client.js")();
const utils = require("./utils.js");

class Moonad extends Component {
  constructor(props) {
    super(props);
    this.post_watcher = null;
    this.posts = null;
  }
  componentDidMount() {
    this.post_watcher = moonad.watch_posts((posts) => {
      console.log(posts);
      this.posts = posts;
      this.forceUpdate();
    });
  }
  render() {
    // Head
    // ====
    
    const head_lft = h("div", {}, ["Moonad"]);

    const head_rgt = h("div", {}, [utils.pkey_to_addr(utils.get_pkey())]);

    const head = h("div", {
      style: {
        "padding": "1px",
        "border-bottom": "2px solid rgb(240, 240, 240)",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "space-between",
      },
    }, [head_lft, head_rgt]);

    // Body
    // ====
    
    var post_list = [];
    for (var i = 0; this.posts && i < this.posts.length; ++i) {
      post_list.push(h("div", {}, [
        h("div", {
          style: {
            "font-family": "IBMPlexMono-Light",
            "font-size": "12px",
            "text-decoration": "underline",
            "color": "rgb(41, 42, 44)",
          },
        }, this.posts[i].head),
        h("pre", {
          style: {
            "font-family": "IBMPlexMono-Light",
            "font-size": "10px",
            "color": "rgb(61,62,65)",
          }
        }, this.posts[i].body),
        h("br"),
      ]));
    };
    const body = h("div", {
      style: {
        "padding": "4px",
      },
    }, post_list);

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
