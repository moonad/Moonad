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
    this.render_key = null;
    this.refresher = null;
  }
  componentDidMount() {
    setInterval(() => this.refresh(), 1000 / 8);
  }
  componentWillUnmount() {
    clearInterval(this.refresher);
  }
  refresh() {
    var poid_key = this.props.poid;
    var play_key = this.props.play;
    var post_key = front.moonad.post[this.props.poid] ? "has" : "nil";
    var cite_obj = front.moonad.cite[this.props.poid];
    var cite_key = cite_obj ? String(cite_obj.length) : "nil";
    var render_key = poid_key+"|"+play_key+"|"+post_key+"|"+cite_key;
    if (this.render_key !== render_key) {
      this.render_key = render_key;
      this.forceUpdate();
    }
  }
  render() {
    var poid = this.props.poid;
    var play = this.props.play;
    var post = front.moonad.post[poid];
    var body = [];

    const link_style = {
      "padding-left": "10px",
      "color": "rgb(100, 100, 100)",
      "margin-top": "8px",
      "text-decoration": "none",
    }

    const MoonadInfo = h("div", {
      style: {
        "font-size": "10px",
        "border-left": "1px solid rgb(187, 199, 207)",
        "width": "140px",
        "height": "50px",
        "z-index": "3",
        "margin-left": "-100px",
        "margin-top": "20px",
        "display": "flex",
        "flex-direction": "column"
      }}, [
        h("a", {style: link_style, href: "https://github.com/moonad/Formality", target: "_blank"}, "Formality"),
        h("a", {style: link_style, href: "https://t.me/formality_lang", target: "_blank"}, "Chat with us")
      ] );

    // Main post
    body.push(h(Post, {
      top: true,
      poid,
      play,
      expand: true,
      moonad: front.moonad,
      on_click_post: this.props.on_click_post
    }))

    // Reply 
    body.push(h("div", {
      style: {
        "margin-top": "8px",
        "margin-bottom": "20px",
        "font-size": "16px",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "space-between",
        "align-items": "flex-end",
      },
    }, [
      h("span", {
        style: {
          "color": "#003F63", 
          "font-size": "16px",
          "font-family": "OpenSans-Regular",
      }}, "Replies"),
      h("span", {
        style: {
          "font-size": "12px",
          "text-decoration": "underline",
          "cursor": "pointer",
          "padding-bottom": "1px",
          "font-family": "OpenSans-Light",
        },
        onClick: () => front.set_route("/w?cite="+poid),
      }, "reply"),
    ]));

    // Post replies
    if (front.moonad.cite[poid]) {
      for (let i = front.moonad.cite[poid].length - 1; i >= 0; --i) {
        var reply_poid = front.moonad.cite[poid][i];
        if (!hide[reply_poid]) {
          body.push(
            h(Post, {
              top: false,
              poid: reply_poid,
              expand: true,
              moonad: front.moonad,
            })
          );
        };
      };
    };

    const show_info = poid === "0x0000000000000000" ? MoonadInfo : h("span");

    return h("div", {
      style: {
        "min-height": "calc(100% - 43px)",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "center",
        "margin-top": "5px"
      },
    }, [
      show_info,
      h("div", {
      style: {
        "background": "white",
        "padding": "2px 6px",
        "width": "586px",
      }
    }, body)]);
  }
};

module.exports = Posts;
