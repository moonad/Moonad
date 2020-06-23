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
    this.display_info = false;
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

    const info_view = h("div", {
      style: {
        "width": "300px",
        "height": "150px",
        "margin-top": "3px",
        "background": "white",
        "z-index": "8",
        "font-size": "10px",
        "padding": "10px",
        "border": "solid 1px #D6D6D6",
      }, onMouseLeave: () => this.display_info = false
     },[
        h("p", {}, "Style your code using '+':"),
        h("br"),
        h("pre", {style: {"color": "rgb(150, 150, 150)"}}, [
          h("p", {}, "+your_name.foo: Type"),
          h("p", {}, "  code"),
          h("p", {}, "+ // next function in the same block of code"),
          h("p", {}, "your_name.bar: Type"),
          h("p", {}, "  code")
        ])
     ]);
    
    const info_button = h("div", {
      style: {
        "display": "flex", 
        "flex-direction": "column",
        "align-items": "flex-end",
        "margin-right": "5px",
        "margin-top": "3px",
      },
    } , [
      h("div", {
        style: {
          "text-decoration": "underline",
          "cursor": "pointer",
          "color": "rgb(101,102,105)",
        },
        onClick: () => this.display_info = !this.display_info
      }, "?"),
      this.display_info ? info_view : h("span")
    ]);

    const title_div = h("div", {
      style: {
        "margin": "20px 60px 10px 60px",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "space-between",
        "height": "20px",
      }
    }, [ 
      h("div", { 
        style: { "color": "rgb(0, 63, 99)", "font-size": "15px"}
      }, "Replying to "+ this.cite),
      info_button
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
        if (this.head === "Title..." || this.body === "Contents...") {
          alert("Write something first!");
        } else {
          var head = this.head.replace(/\n/g,"");
          var body = this.body.replace(/\n{3,}/g, "\n\n");
          this.post({cite, head, body});
        };
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
    }, [send]) // TODO: add preview

    const repl = h("pre", { 
      style: {
        // "height": "calc(100% - 20px - 20px - 360px)",
        "color": "rgb(101,102,105)",
        "background": "rgb(221,222,224)",
        // "border-top": "1px solid rgb(201,202,204)",
        "padding": "4px 4px",
        "word-wrap": "break-word",
        "padding": "8px 10px",
      },
    }, "*type-checker console and REPL will be here soon*");

    const container_editable = h("div", {
      style: {
        // "margin": "20px 60px",
        // "border-radius": "5px 5px 5px 5px",
        "border": "1px solid rgb(187, 199, 207)",
        // "border-collapse": "separate",
        // "display": "flex",
        "flex-direction": "column",
        "background": "white",
        "flex": "1 1 0",
        "width": "100%",
        "word-wrap": "break-word"
      }
    }, [head, body]);

    const container = h("div", {
      style: {
        "border-collapse": "separate",
        "margin": "20px 60px",
        "display": "flex",
        "flex-direction": "row",
        // "flex": "2 1",
        // "justify-content": "space-between"
      }
    }, [container_editable, repl]);

    return h("div", {
      style: {
        "height": "calc(100% - 20px)",
      },
    }, [
      title_div,
      container,
      buttons,
      // repl,
    ]);
  }
};

module.exports = Write;

