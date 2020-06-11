const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");
const User_info = require("./User_info.js");

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.display_user_info = false;
  }

  render() {
    const head_lft = h("div", {
      onClick: () => this.props.on_click_link("posts"),
      style: {
        "cursor": "pointer",
        "margin-left": "20px"
      },
    }, ["Moonad"]);
    const head_rgt = h("div", {
      style: {
        "display": "flex", 
        "flex-direction": "column",
        "align-items": "flex-end",
        "margin-right": "20px"
      },
      onMouseLeave: () => this.display_user_info = false
    }, [
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
      h("div", {
        style: {
          "cursor": "pointer",
          "text-decoration": "underline",
          "color": "rgb(101,102,105)",
        },
        onClick: () => this.display_user_info = !this.display_user_info,
      }, front.name),
      this.display_user_info ? h(User_info) : h("span"),
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
};

module.exports = TopBar;
