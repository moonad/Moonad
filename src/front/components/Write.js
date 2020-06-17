// The page where you write a new post

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");

class Write extends Component {
  constructor(props) {
    super(props);
    this.cite = new URLSearchParams(window.location.search).get("cite") || "0x0000000000000000";
    this.head = "Title";
    this.body = "Type your code and/or text here";
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

    const title = h("div", {
      style: {"margin": "20px 60px 10px 60px",}
    }, [ 
      h("h3", { 
        style: { "color": "rgb(0, 63, 99)"}
      }, "Replying to "+ this.cite)
    ]);

    const head = h("pre", {
      contentEditable: true,
      style: {
        "font-family": "IBMPlexMono-Light",
        "font-size": "12px",
        "color": "rgb(101,102,105)",
        "outline": "none",
        "width": "100%",
        "height": "30px",
        "padding": "8px 10px 5px 10px",
        "border-bottom": "1px solid rgb(187,199,207)"
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
        "padding": "8px 10px",
        "overflow-y": "scroll",
        // "border-bottom": "1px solid rgb(240,240,240)",
      },
      onClick: (e) => this.click("body", e.target),
      onInput: (e) => this.refresh("body", e.target),
    }, [this.body]);

    const send = h("span", {
      style: {
        "outline": "none",
        "height": "20px",
        "padding": "2px 4px",
        "text-decoration": "underline",
        "cursor": "pointer",
      },
      onClick: () => {
        var cite = this.cite;
        var head = this.head.replace(/\n/g,"");
        var body = this.body.replace(/\n{3,}/g, "\n\n");
        this.post({cite, head, body});
      },
    }, "Submit");

    const buttons = h("div", {
      style: {
        "font-family": "IBMPlexMono-Light",
        "font-size": "12px",
        "color": "rgb(101,102,105)",
        "height": "20px",
        "display": "flex",
        "flex-direction": "row",
        "justify-content": "flex-end",
        "margin-bottom": "20px",
        "margin-right": "60px"
      }
    }, [send])

    const repl = h("pre", { 
      style: {
        "height": "calc(100% - 20px - 20px - 360px)",
        "color": "rgb(101,102,105)",
        "background": "rgb(221,222,224)",
        "border-top": "1px solid rgb(201,202,204)",
        "padding": "4px 4px",
      },
    }, ["*type-checker console and REPL will be here soon*"]);

    const container_editable = h("div", {
      style: {
        "margin": "20px 60px",
        "border-radius": "5px 5px 5px 5px",
        "border": "1px solid rgb(187, 199, 207)",
        "border-collapse": "separate",
        "display": "flex",
        "flex-direction": "column",
        "background": "white"
      }
    }, [head, body]);

    return h("div", {
      style: {
        "height": "calc(100% - 20px)",
      },
    }, [
      title,
      container_editable,
      buttons,
      repl,
    ]);
  }
};

module.exports = Write;

