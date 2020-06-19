// A page of posts, including one on top and the replies below

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");

const Post = require("./Post.js");

// Since we don't have a hide feature yet, this is hard-coded for now
const hide = {
  "0x0000000000000040": true
};

class Posts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var poid = this.props.poid;
    var post = front.moonad.post[poid];
    var body = [];

    // Main post
    body.push(Post({
      top: true,
      poid,
      expand: true,
      moonad: front.moonad,
      on_click_post: this.props.on_click_post
    }));

    // Reply separator
    body.push(h("div", {
      style: {
        "margin-top": "8px",
        "margin-bottom": "8px",
        "border-bottom": "1px solid rgb(240, 240, 240)",
        "font-size": "16px",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "space-between",
        "align-items": "flex-end",
      },
    }, [
      h("span", {
        style: {"font-size": "16px"},
      }, "Replies:"),
      h("span", {
        style: {
          "font-size": "12px",
          "text-decoration": "underline",
          "cursor": "pointer",
          "padding-bottom": "1px",
        },
        onClick: () => front.set_route("/w?cite="+poid),
      }, "write reply"),
    ]));

    // Post replies
    if (front.moonad.cite[poid]) {
      //for (let i = front.moonad.cite[poid].length - 1; i >= 0; --i) {
      for (let i = 0; i < front.moonad.cite[poid].length; ++i) {
        var reply_poid = front.moonad.cite[poid][i];
        if (!hide[reply_poid]) {
          body.push(Post({
            poid: reply_poid,
            expand: true,
            moonad: front.moonad,
          }));
        };
      };
    };

    return h("div", {
      style: {
        "min-height": "calc(100% - 30px)",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "center",
      },
    }, h("div", {
      style: {
        "background": "white",
        "padding": "2px 6px",
        "width": "586px",
      }
    }, body));
  }
};

module.exports = Posts;
