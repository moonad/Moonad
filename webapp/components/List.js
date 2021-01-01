const fm = require("formality-lang");
const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");
//const moonad = require("./../../server/client.js")({url:window.location.origin});
const Link = require("./Link.js");

class List extends Component {
  constructor(props) {
    super(props);
    this.list = null;
  }
  async componentDidMount() {
    //this.list = (await moonad.list()).split(";");
    this.forceUpdate();
  }
  render() {
    if (this.list) {
      return this.list.map(name => {
        return h("div", {}, [
          Link(name, () => this.props.view(name)),
        ])
      });
    }
  }
};

module.exports = List;
