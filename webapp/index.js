require("./moonad_logo.png").default;

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const moonad = require("./../defs/client.js")(window.location.origin+":1337/");

class Moonad extends Component {
  constructor(props) {
    super(props);
    this.code = null;
    this.name = null;
  }
  async componentDidMount() {
    var path = window.location.pathname.slice(1).split("/");
    this.name = path[0] || null;
    console.log(path, name);
    if (this.name) {
      try {
        var got = await moonad.load(this.name);
        switch (got._) { // TODO: treat differently?
          case "failure": this.code = got.value; break;
          case "success": this.code = got.value; break;
        }
      } catch (e) {
        this.code = "Error loading '"+this.name+"'.";
      }
      this.forceUpdate();
    }
  }
  render() {
    if (this.code) {
      return h("div", {}, this.code);
    } else {
      return h("div", {}, "Welcome.");
    }
  }
};

window.onload = () => render(h(Moonad), document.getElementById("main"));
