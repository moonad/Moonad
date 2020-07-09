// Code highlighting and hyperlinking

const fm = require("formality-lang");
const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");
const moonad = require("./../../back/client.js")({url:window.location.origin});

class Code extends Component {
  constructor(props) {
    super(props);
    this.name = this.props.name;
    this.code = this.props.code;
  }
  async componentDidMount() {
    if (this.name && !this.code) {
      try {
        this.code = await moonad.load(this.name);
      } catch (e) {
        this.code = this.name+": String\n  \"Term not found.\"";
      }
      this.forceUpdate();
    }
  }
  render() {
    var elems = [];
    try {
      var tags = fm.lang.parse(this.code).tags;
      var def_col = "rgb(20,120,32)";
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
          case "def":
            color = def_col;
            click = () => this.props.play(tag.text);
            decor = "underline";
            cursr = "pointer";
            break;
          case "nam":
            color = nam_col;
            break;
          case "var":
            color = nam_col;
            break;
          case "txt":
            if (tag.text === "Type") {
              color = typ_col;
            } else if (tag.text === '"') {
              color = str_col;
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
            click = () => this.props.view(tag.text), // TODO: go to origin
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
    } catch (e) {
      elems.push(this.code);
    }
    return h("pre", {
      style: {
        "background": "rgb(247,248,250)",
        "padding": "4px",
        "font-family": "IBMPlexMono-Light",
        "font-size": "12px",
      }
    }, elems);
  }
};

module.exports = Code;
