// A single post, expanded or not

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");

const Code = require("./Code.js");
const Term = require("./Term.js");

const upvote_off = "9e529d21d6c4a7727077eafbed81718a.png";
const upvote_on = "734f7ecbfadec8ff3fc5c7a122573df7.png";

class Post extends Component {
  constructor(props) {
    super(props);
    this.user_voted = false;
    this.qtd_votes = 0;
    this.refresher = null;
    this.qtd_replies = 0;
  }

  componentDidMount() {
    this.refresh();
    // this.refresher = setInterval(() => this.refresh(), 3000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.refresher);
  // }

  async refresh(){
    this.user_voted = await front.has_voted(this.props.poid);
    this.qtd_votes  = await front.get_qtd_votes(this.props.poid);
    this.qtd_replies = await front.get_qtd_replies(this.props.poid);
    this.forceUpdate();
  }

  upvote(){
    front.upvote(this.props.poid); 
    this.refresh();
  }

  enter() {
    if (this.props.poid === "0x0000000000000001") {
      window.open("https://github.com/moonad/Moonad/tree/master/lib", "_blank");
    } else {
      front.set_route("/p/"+this.props.poid);
      this.refresh();
    }
  };

  render(){
    this.refresh(); // TODO: improve this =(
    this.props.post = this.props.post || front.moonad.post[this.props.poid];
    if (this.props.poid === "0x0000000000000000") {
      const Formality = h("span", {
        style: {
          "text-decoration": "underline",
          "cursor": "pointer",
        },
        onClick: () => {
          window.location.href = "https://github.com/moonad/formality";
        },
      }, "Formality");
      return h("div", {style: { "margin-top": "10px", "margin-bottom": "10px"}}, [
        h("h3", {style: { "color": "#003F63", }}, "Moonad: a p2p academic journal, or a social network for code?"),
        h("br"),
        h("div", {}, [
          "Here you can post and share contents, like a social network. But your posts can ",
          "contain code in ",Formality,", which merges programming and mathematics in a single ",
          "syntax. Moonad can host code and run apps, making it kind of an open-source app ",
          "store. But it can also link citations and verify proofs, making it kinda like a ",
          "p2p academic journal. Whatever it is, we hope it improves your life. Gl, hf! <3 ",
        ]),
        h("br")]);
    } else if (this.props.poid === null || !this.props.post) {
      return h("div", {}, "[loading...]");
    } else {
      // Post head
      // =========
  
      const post_head = h("div", {
        style: {
          "margin-top": "4px", 
          "color": "rgb(161, 162, 168)",
          "font-family": "IBMPlexMono-Light",
          "font-size": "10px",
        },
      }, [
  
        // Post author
        h("span", {
          style: {
            "color": "rgb(0, 63, 99)",
            "font-size": "12px",
            "font-weight": "bold",
          },
          onClick: () => {
            front.set_route("/u/"+front.moonad.name[this.props.post.auth.toLowerCase()]);
            this.refresh();
          }
        }, (front.moonad.name[this.props.post.auth.toLowerCase()] || this.props.auth_name || this.props.post.auth || "someone")),
  
        // Separator
        h("span", {
          style: {
            "color": "rgb(161, 162, 168)",
          },
        }, " · "),
  
        // Post date
        h("span", {
          style: {
            "color": "rgb(161, 162, 168)",
          },
        }, front.format_date(this.props.post.date)),
      ]);
  
      // Post body or played term
      // ========================
  
      if (this.props.play) {
        var body = h(Term, {
          poid: this.props.poid,
          code: front.moonad.lib.get_post_code(this.props.post),
          name: this.props.play,
        });
      } else {
        var auth_addr = this.props.post.auth.toLowerCase();
        var auth_name = front.moonad.name[auth_addr];
        var blocks = front.moonad.lib.get_post_blocks(this.props.post);
        var body = [];
        for (var block of blocks) {
          switch (block.ctor) {
            case "code":
              body.push(Code({code: block.text, poid: this.props.poid}));
              break;
            case "text":
              var text = block.text.replace(/^\n/,"");
              var line = "";
              for (var i = 0; i <= text.length; ++i) {
                if (i === text.length || text[i] === "\n" || line.length === 80) {
                  var bold = false;
                  if (line.slice(0,2) === "# ") {
                    bold = true;
                    line = line.slice(2);
                  }
                  body.push(h("div", {
                    style: {
                      "font-size": bold ? "14px" : "12px",
                      "font-weight": bold ? "bold" : "",
                      "margin-bottom": line === "" ? "8px" : "0px",
                      //"text-decoration": bold ? "underline" : "",
                      "cursor": bold ? "pointer" : "",
                    },
                    onClick: () => this.enter(),
                  }, line));
                  line = "";
                } else {
                  line += text[i];
                }
              };
              break;
          }
        };
      }
  
      const post_body = !this.props.expand ? null : h("pre", {
          style: {
            "font-family": "IBMPlexMono-Light",
            "font-size": "12px",
            "padding": "5px 0px 5px 0px",
            "color": "rgb(41,42,45)",
          }
        }, [body]);
  
      // Post foot
      // =========
  
      const post_foot = h("div", {
        style: {
          "margin-top": "4px", 
          "color": "rgb(161, 162, 168)",
          "font-family": "IBMPlexMono-Light",
          "font-size": "10px",
        },
      }, [
        // Post replies
        h("span", {
          style: {
            "cursor": "pointer",
            "text-decoration": "underline",
          },
          onClick: () => this.enter(),
        }, this.qtd_replies + (this.qtd_replies === 1 ? " reply" : " replies")),
        
        this.props.top ? [
          // Separator
          h("span", {
            style: {
              "color": "rgb(161, 162, 168)",
            },
          }, " · "),

          // Post parent
          h("span", {
            style: {
              "cursor": "pointer",
              "text-decoration": "underline",
            },
            onClick: () => {
              front.set_route("/p/"+this.props.post.cite);
              this.refresh();
            },
          }, "parent") ]
        : h("span")
  
      ]);
  
      // Post separator
      // ==============
  
      const post_line = h("div", {
        style: { 
          "border-bottom": "1px dashed rgb(240,240,240)",
          "margin-top": "10px",
          "margin-bottom": "20px",
        }}, "");

      // Votes area
      const upvote = h("div", {
        style: {
          "text-decoration": "underline",
          "cursor": "pointer",
          "width": "30px",
          "min-width": "30px",
          "display": "flex",
          "flex-direction": "column",
          "color": "rgb(161, 162, 168)",
          "text-decoration": "none",
          "font-size": "10px",
          "align-items": "center",
      },
        onClick: () => this.upvote()
      }, [
        h("img", { 
        style: {
          "width": "10px", 
          "height": "12px",
          "margin-top": "08px",
        },  src: this.user_voted ? upvote_on : upvote_off }),
        h("span", {style: {"margin-top": "5px"}}, this.qtd_votes ? this.qtd_votes : "0")
      ] );
      
      const post_container = h("div", {style: {"width": "100%"}}, [
        this.props.post.cite === "0x0000000000000000" ? null : post_head, 
        post_body,
        post_foot,
        this.props.top ? h("span") : post_line,
      ])
  
      return h("div", {
        style: {
          "display": "flex",
          "flex-direction": "row",
        }}, [upvote, post_container]);

    }

  }
}

module.exports = Post;