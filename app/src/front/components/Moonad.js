const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");

const TopBar = require("./TopBar.js");
const Write = require("./Write.js");
const Posts = require("./Posts.js");
const Term = require("./Term.js");
const Profile = require("./Profile.js");

class Moonad extends Component {
  constructor(props) {
    super(props);
    this.render_key = null;
    this.refresher = null;
  }
  refresh() {
    if (front.get_route() !== this.render_key) {
      this.render_key = front.get_route();
      this.forceUpdate();
    }
  }
  componentDidMount() {
    setInterval(() => this.refresh(), 1000 / 8);
  }
  componentWillUnmount() {
    clearInterval(this.refresher);
  }
  render() {
    console.log("Render Moonad");

    var route = front.get_route();

    var head = h(TopBar, {
      name: front.name,
      route: route,
      posts: this.posts,
      on_click_link: (name) => {
        if (name === "posts") {
          front.set_route("/p");
        }
      },
    });

    let paths = front.get_paths();
    switch (paths[0]) {
      case "w":
        var body = h(Write, {moonad: this.moonad});
        break;
      case "p":
        var body = h(Posts, {
          moonad: front.moonad,
          poid: front.get_watched_poid(),
          play: front.get_played_term(),
        });
        break;
      case "r":
        var body = h(Term, {
          poid: "0x0000000000000000",
          code: null,
          name: front.get_paths()[1],
        });
      case "u":
        var is_addr = paths[1].startsWith("0x");
        if(is_addr){
          var body = h(Profile, {name: "", addr: paths[1]});
        } else {
          var body = h(Profile, {name: path[1], addr: ""});
        }
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

module.exports = Moonad;
