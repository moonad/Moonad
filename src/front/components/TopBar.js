const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");
const UserInfo = require("./UserInfo.js");
const consts = require("./consts.js");

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
      },
      onMouseLeave: () => {
        this.display_user_info = false;
        this.forceUpdate();
      },
    }, [
      h("div", {
        style: {
          "cursor": "pointer",
          "text-decoration": "underline",
          "color": "black",
          "padding-top": "7px"
        },
        onClick: () => {
          this.display_user_info = !this.display_user_info;
          this.forceUpdate();
        },
      }, front.name),
      this.display_user_info
        ? h(UserInfo, {eth_address: front.get_addr(), pkey: front.get_pkey()})
        : h("span"),
    ]);

    const head = h("div", {
      style: {
        "background": "white",
        "border-top": "2px solid rgb(59,186,218)",
        "box-shadow": "0px 1px 5px 0px rgb(219,216,219)",
        "padding": "5px 10px",
        "height": consts.top_height+"px",
        "font-size": "12px",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "space-between",
        "font-family": "OpenSans-Regular"
      },
    }, [head_lft, head_rgt]);

    return head;
  }
};

module.exports = TopBar;
