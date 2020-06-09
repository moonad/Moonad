const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");

const TopBar = require("./TopBar.js");
const Write = require("./Write.js");
const Posts = require("./Posts.js");

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
    var route = front.get_route();

    var head = h(TopBar, {
      name: front.name,
      route: route,
      posts: this.posts,
      on_click_link: (name) => {
        if (name === "posts") {
          this.set_route("/p");
        } else if (name === "user") {
          var msge = "Logged with Ethereum.\n- Address: "+front.addr+"\n- PrivKey: "+front.pkey+"\nCopy on the console.";
          alert(msge);
          console.log(msge);
        } else if (name === "write") {
          this.set_route("/w");
        } else if (name === "check") {
          this.check_all();
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
          on_click_reply: () => {
            this.set_route("/w?cite="+(paths[1]||"0x0000000000000000"));
          },
          on_click_post: (poid) => {
            console.log("clicked", poid);
            this.set_route("/p/"+poid);
          },
          moonad: front.moonad,
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

module.exports = Moonad;
