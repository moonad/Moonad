const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");
const UserInfo = require("./UserInfo.js");

// const logo = "98fa68c534f7e398f266ad94641b55ce.png"

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
        "color": "white",
        "width": "29px", 
        "height": "23px"
      },
    }, h("img", {
      src: "237db229f1e6a224797029452b2c75f0.png", 
      alt: "moonad-logo",
      style: {"width": "29px", "height": "23px" },
      onClick: () => this.props.on_click_link("posts")
      })
    );
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
          "color": "black",
          "padding-top": "5px"
        },
        onClick: () => this.display_user_info = !this.display_user_info,
      }, front.name),
      this.display_user_info ? h(UserInfo, {eth_address: front.get_addr(), pkey: front.get_pkey()}) : h("span"),
    ]);

    const head = h("div", {
      style: {
        "background": "white",
        "border-bottom": "1px solid #AEAEAE",
        "padding": "5px 80px 5px 80px",
        "height": "34px",
        "font-size": "14px",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "space-between",
        // "align-items": "flex-end"
      },
    }, [head_lft, head_rgt]);

    return head;
  }
};

module.exports = TopBar;
