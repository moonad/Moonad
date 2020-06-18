// The page where you write a new post

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");

class Write extends Component {
  constructor(props) {
    super(props);
    this.cite = new URLSearchParams(window.location.search).get("cite") || "0x0000000000000000";
    this.head = "Title...";
    this.body = "Contents...";
    this.cleared = {};
  }

  async post({cite, head, body}) {
    // Checks if citation is correct
    if (!front.moonad.lib.hex(64, cite)) {
      return alert("Incorrect cited post.");
    }

    try {
      await front.moonad.api.post({cite, head, body}, front.pkey);
      window.history.back();
    } catch (e) {
      console.log(e);
      alert(front.remove_colors(e));
    }
  }

  click(key, elem) {
    if (!this.cleared[key]) {
      this.cleared[key] = true;
      elem.innerText = "";
      this.forceUpdate();
    }
  }

  refresh(key, elem) {
    this[key] = elem.innerText;
    this.forceUpdate();
  }

  render() {

    const head = h("pre", {
      contentEditable: true,
      style: {
        "font-family": "IBMPlexMono-Light",
        "font-size": "12px",
        "color": "rgb(101,102,105)",
        "outline": "none",
        "width": "100%",
        "height": "20px",
        "padding": "2px 4px",
        "border-bottom": "1px solid rgb(240,240,240)",
        "background": "white",
      },
      onClick: (e) => this.click("head", e.target),
      onInput: (e) => this.refresh("head", e.target),
    }, [this.head]);

    const body = h("pre", {
      contentEditable: true,
      style: {
        "font-family": "IBMPlexMono-Light",
        "font-size": "12px",
        "color": "rgb(101,102,105)",
        "outline": "none",
        "width": "100%",
        "height": "360px",
        "padding": "2px 4px",
        "overflow-y": "scroll",
        "border-bottom": "1px solid rgb(240,240,240)",
        "background": "white",
      },
      onClick: (e) => this.click("body", e.target),
      onInput: (e) => this.refresh("body", e.target),
    }, [this.body]);

    const send = h("pre", {
      style: {
        "font-family": "IBMPlexMono-Light",
        "font-size": "12px",
        "color": "rgb(101,102,105)",
        "outline": "none",
        "width": "100%",
        "height": "20px",
        "padding": "2px 4px",
        "background": "rgb(241,242,246)",
        "border-bottom": "1px solid rgb(240,240,240)",
        "text-decoration": "underline",
        "cursor": "pointer",
      },
      onClick: () => {
        var cite = this.cite;
        if (this.head === "Title..." || this.body === "Contents...") {
          alert("Write something first!");
        } else {
          var head = this.head.replace(/\n/g,"");
          var body = this.body.replace(/\n{3,}/g, "\n\n");
          this.post({cite, head, body});
        };
      },
    }, ["Submit reply to " + this.cite + "."]);

    const repl = h("pre", { 
      style: {
        "height": "calc(100% - 20px - 20px - 360px)",
        "color": "rgb(101,102,105)",
        "background": "rgb(221,222,224)",
        "border-top": "1px solid rgb(201,202,204)",
        "padding": "4px 4px",
      },
    }, ["*type-checker console and REPL here*"]);

    return h("div", {
      style: {
        "height": "calc(100% - 20px)",
      },
    }, [
      head,
      body,
      send,
      repl,
    ]);
  }
};

module.exports = Write;

