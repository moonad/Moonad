const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");

const logo = "98fa68c534f7e398f266ad94641b55ce.png"

class TopBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    const head_lft = h("div", {
      onClick: () => this.props.on_click_link("posts"),
      style: {
        "cursor": "pointer",
        "color": "white"
      },
    }, [h("img", {
      src: logo, 
      alt: "moonad-logo",
      style: {"width": "29px", height: "23px" }
      })]
    );
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
          "color": "white",
        },
        onClick: () => this.props.on_click_link("user"),
      }, front.name),
    ]);

    const head = h("div", {
      style: {
        "background": "black",
        "padding": "5px 80px 5px 80px",
        "height": "32px",
        "font-size": "16px",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "space-between",
      },
    }, [head_lft, head_rgt]);

    return head;
  }
};

module.exports = TopBar;
