const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");

const TopBar = require("./TopBar.js");
const Write = require("./Write.js");
const Posts = require("./Posts.js");
const Term = require("./Term.js");

class Moonad extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setInterval(() => this.forceUpdate(), 250);
  }
  render() {
    var route = front.get_route();

    var head = h(TopBar, {
      name: front.name,
      route: route,
      posts: this.posts,
      on_click_link: (name) => {
        if (name === "posts") {
          front.set_route("/p");
        } else if (name === "user") {
          var msge = "Logged with Ethereum.\n"
            + "- Address: "+front.addr+"\n"
            + "- PrivKey: "+front.pkey+"\n"
            + "Copy on the console.";
          alert(msge);
          console.log(msge);
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
          poid: paths[1] || "0x0000000000000000",
        });
        break;
      case "t":
        var body = h(Term, {
          name: paths[1]
        });
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
