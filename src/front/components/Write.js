// The page where you write a new post

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");
const e = require("cors");
const Code = require("./Code.js");
const Term = require("./Term.js");
const consts = require("./consts.js");

const default_post_head = "Your title.";
const default_post_body = `Your words.

+YourName.term: String
  "Your code/proof."

+YourName.main: App(Pair(U32,U32))
  App.demo.0

Your conclusion.`;

class Write extends Component {
  constructor(props) {
    super(props);
    this.cite = new URLSearchParams(window.location.search).get("cite") || "0x0000000000000000";
    this.post_head = this.get_entry("post_head", default_post_head);
    this.post_body = this.get_entry("post_body", default_post_body);
    this.cleared = {};
    this.display_info = false;
    this.repl = {types: [], holes: [], errors: []};
    this.render_key = "";
    this.typecheck_key = "";
    this.pb_width = 200;
    this.pb_height = 200;
    this.pb_scroll = 0;
    this.refresher = null;
    this.typechecker = null;
    this.play_term = null;
  }

  componentDidMount() {
    this.refresher = setInterval(() => this.refresh(), 1000 / 16);
    this.typechecker = setInterval(() => this.typecheck(), 1000 / 2);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
    clearInterval(this.typechecker);
  }

  async typecheck() {
    var content = this.post_body;
    if (this.typecheck_key !== content) {
      this.typecheck_key = content;
      var types_formatted = [];
      var holes_formatted = [];
      var errors_formatted = [];
      try {
        var {types, holes, errors} = await front.check_block_code(content);
        if (types.length > 0) {
          types_formatted = types.map(info => {
            return h("p", {}, [
              h("span", {}, "✓ "),
              h("span", {
                style: {
                  "text-decoration": "underline",
                  "cursor": "pointer",
                },
                onClick: () => { this.play_term = info[0]; },
              }, info[0]),
              h("span", {}, ": "), 
              h("span", {style: {"color": "rgb(175,175,175)"}}, info[1])
            ]);
          });
        }
        if (holes.length > 0) {
          holes_formatted.push(h("p", {style: {"color": "rgb(223,119,15)"}}, [h("br"), "Holes"]));
          holes_formatted.push(holes.map(info => {
            return h("p", {}, [
              h("span", {}, info[0]+":\n"),
              h("span", {style: {"color": "rgb(175,175,175)"}}, info[1]),
            ]);
          }));
        }
        if (errors.length > 0) {
          errors_formatted.push(h("p", {style: {"color": "rgb(223,119,15)"}}, [h("br"), "Errors"]));
          errors_formatted.push(errors.map(
            info => h("p", {}, [
              h("span", {}, info[0]+":\n"), 
              h("span", {style: {"color": "rgb(175,175,175)"}}, info[1]),
            ])));
        } else {
          types_formatted.push(h("p", {style: {"color": "rgb(152,240,255)"}}, [h("br"), "All terms check!"]));
        }
      } catch (e) {
        console.log("typ err:", e);
        errors_formatted.push(h("p", {}, front.remove_colors(e))); // TODO: is a string but to not print as one. Check with error_example
      }
      //console.log(this.repl);
      this.repl = {
        types: types_formatted,
        errors: errors_formatted,
        holes: holes_formatted,
      };//.push(errors_formatted);
    }
    this.forceUpdate();
  }

  refresh() {
    var poster_body_editor = document.getElementById("poster_body_editor");
    var poster_body_drawer = document.getElementById("poster_body_drawer");
    this.pb_width = poster_body_editor.offsetWidth;
    this.pb_height = poster_body_editor.offsetHeight;
    this.pb_scroll = poster_body_editor.scrollTop;
    poster_body_drawer.scrollTop = this.pb_scroll;
    var render_key = [
      this.post_body,
      this.post_head,
      String(this.play_term),
      String(this.pb_width),
      String(this.pb_height),
      String(this.pb_scroll),
      String(this.display_info),
      String(window.LW),
    ].join("|");
    if (render_key !== this.render_key) {
      //console.log("update", render_key);
      this.render_key = render_key;
      this.forceUpdate();
    }
  }

  async post({cite, head, body}) {
    // Checks if citation is correct
    if (!front.moonad.lib.hex(64, cite)) {
      return alert("Incorrect cited post.");
    }

    try {
      await front.moonad.api.post({cite, head, body}, front.pkey);
      this.del_entry("post_body");
      this.del_entry("post_head");
      window.history.back();
    } catch (e) {
      console.log("post err:",e);
      alert(front.remove_colors(e));
    }
  }

  render_post_body() {
    var blocks = front.moonad.lib.get_post_blocks({body: this.post_body});
    //console.log(JSON.stringify(blocks, null, 2));
    var elems = [];
    for (var i = 0; i < blocks.length; ++i) {
      var block = blocks[i];
      switch (block.ctor) {
        case "text":
          //console.log("text->", block.text);
          elems.push(h("span", {}, block.text));
          break;
        case "code":
          //console.log("code->", block.text);
          elems.push(Code({
            code: block.text,
            plus: true,
            style: {
              "opacity": "0.5",
              "padding": "0px",
              //"line-height": window.LW+"px",
              //"border": "1px solid blue",
            },
          }));
          break;
      }
    }
    return h("div", {}, elems);
  }

  set_entry(key, val) {
    this[key] = val;
    localStorage.setItem("Write/"+key, val);
  }

  get_entry(key, default_val) {
    var val = localStorage.getItem("Write/"+key);
    return val || default_val;
  }

  del_entry(key) {
    localStorage.removeItem("Write/"+key);
  }

  render() {
    // POSTER HEAD
    // ===========
    // Where you write the post title

    //const title_div = h("div", {
      //style: {
        //"margin": "10px 10px 10px 10px",
        //"display": "flex",
        //"flex-flow": "row nowrap",
        //"justify-content": "space-between",
        //"height": "20px",
      //}
    //}, [ 
      //h("div", { 
        //style: {"color": "rgb(0, 63, 99)", "font-size": "15px"}
      //}, "Replying to "+ this.cite + "..."),
      //submit,
    //]);

    const def_input_text_style = {
      "color": "rgb(211,211,211)"
    }

    const input_text_style = {
      "color": "rgb(105,105,105)",
    }

    const poster_head = h("textarea", {
      //contentEditable: true,
      style: {
        ... this.post_head === default_post_head ? def_input_text_style : input_text_style,
        "vertical-align": "top",
        "font-family": "IBMPlexMono-Light",
        "font-size": "12px",
        "outline": "none",
        "width": "100%",
        "height": "30px",
        "margin": "0px",
        "padding": "8px 10px 8px 10px",
        "border": "0px solid black",
        "border-bottom": "1px solid rgb(240,240,240)"
      },
      onClick: (e) => {
        if (this.post_head === default_post_head) {
          this.set_entry("post_head", "");
        }
      },
      onInput: (e) => this.set_entry("post_head", e.target.value),
    }, [this.post_head]);

    // POSTER BODY
    // ===========
    // Where you write the post body

    const poster_body_style = {
      ... this.post_body === default_post_body ? def_input_text_style : input_text_style,
      "font-family": "IBMPlexMono-Light",
      "font-size": "12px",
      "outline": "none",
      "width": "100%",
      "height": "calc(100% - 30px)",
      "padding": "8px 10px 8px 10px",
      "overflow-y": "scroll",
      "word-wrap": "break-word",
      "border": "0px solid black",
    };

    const poster_body_drawer = h("pre", {
      id: "poster_body_drawer",
      style: {
        ...poster_body_style,
        "vertical-align": "top",
        "position": "absolute",
        "width": this.pb_width + "px",
        "height": this.pb_height + "px",
        "margin": "0px",
        //"border": "2px solid blue",
        "pointer-events": "none",
        //"color": "blue",
      },
    }, [this.render_post_body()]);

    const poster_body_editor = h("textarea", {
      id: "poster_body_editor",
      style: poster_body_style,
      onClick: (e) => {
        if (this.post_body === default_post_body) {
          this.set_entry("post_body", "");
        }
      },
      onInput: (e) => this.set_entry("post_body", e.target.value),
      //onKeyPress: (e) => this.key_pressed(e)
    }, [this.post_body]);

    // REPL
    // ====
    // The code window with types etc.


    const repl = h("div", { 
      style: {
        "color": "white",//"rgb(101,102,105)",
        "background": "rgb(66,64,64)",//"rgb(221,222,224)",
        "padding": "8px 50px 8px 10px",
        "width": "100%",
        "overflow-y": "scroll"
      },
    }, [ 
      h("p", {
        style: {
          //"margin-bottom": "5px", 
          "font-family": "IBMPlexMono-Light"}
        }, "Types checked: "),
      h("pre", {
        style: {
          "white-space": "pre-wrap",
          "white-space": "-o-pre-wrap",
          "white-space": "-moz-pre-wrap !important",
        }}, [
          this.repl.types,
          this.repl.holes,
          this.repl.errors,
        ] )] );

    // PLAYER
    // ======

    var play = null;
    if (this.play_term) {
      var play = h("div", {}, [
        h("div", {
          style: {"padding": "2px"},
        }, [
          h("span", {}, "Running '"+this.play_term+"'. "),
          h("span", {
            style: {
              "cursor": "pointer",
              "text-decoration": "underline",
              "padding": "2px",
            },
            onClick: () => { this.play_term = ""; },
          }, "Exit"),
        ]),
        h(Term, {
          poid: "0x0000000000000000",
          code: front.moonad.lib.get_post_code({body: this.post_body}),
          name: this.play_term,
        })
      ]);
    }

    // SUBMIT
    // ======
    
    const submit = h("span", {
      style: {
        "position": "absolute",
        "bottom": "2px",
        "left": "8px",
        "outline": "none",
        "height": "20px",
        "font-size": "13px",
      },
    }, [ 
      h("span", {
        style: {
          "text-decoration": "underline",
          "cursor": "pointer",
        },
        onClick: () => {
          var cite = this.cite;
          if ( this.post_head === default_post_head
            || this.post_body === default_post_body 
            || this.post_head.trim() === ""
            || this.post_body.trim() === "") {
            alert("Write something first!");
          } else {
            var head = this.post_head.replace(/\n/g,"");
            var body = this.post_body.replace(/\n{3,}/g, "\n\n");
            this.post({cite, head, body});
          };
        },
      }, "Submit"),
      h("span", {}, " reply to " + this.cite + ". "),
    ]);

    // POSTER
    // ======
    // Poster head + body + repl
    
    const container_editable = h("div", {
      style: {
        "flex-direction": "column",
        "background": "white",//"rgb(246, 246, 246)",
        "width": "100%",
      }
    }, [poster_head, poster_body_drawer, poster_body_editor]);

    const separator = h("div", {
      style: {
        // "position": "absolute",
        "display": "flex",
        "justify-content": "center",
        "align-items": "center",
        "flex": "1 0 auto",
        "overflow": "hidden",
        "background": "rgb(221, 221, 221)",
        // "cursor": "col-resize",
        "left": "60%",
        "width": "5px",
        // "height": "100%"//"calc(100% + -60px)"
      }
    });

    const container = h("div", {
      style: {
        "position": "relative",
        "display": "flex",
        "flex-direction": "row",
        "height": "calc(100% - "+consts.top_height+"px)",
        //"box-shadow": "0px 0px 5px 0px rgba(207,205,207,1)",
      }
    }, [container_editable, separator, play || repl, submit]);

    return [container];
  }
};

module.exports = Write;

window.LW = 10;
