// A page of posts, including one on top and the replies below

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const fm = require("formality-lang");
const front = require("./../front.js");

class Term extends Component {
  constructor(props) {
    super(props);
    this.poid = null;
    this.defs = null;
    this.argm = [];
  }
  async componentDidMount() {
    this.poid = await front.moonad.api.get_orig({name: this.props.name});
    this.defs = await front.load_defs_of(this.props.name);
  }
  render() {
    const name = this.props.name;
    const defs = this.defs;

    var head = h("div", {
      style: {
        "font-family": "IBMPlexMono-Light",
        "user-select": "none",
        "font-size": "16px",
        "color": "rgb(41, 42, 44)",
        "text-decoration": "underline",
        "cursor": "pointer",
      },
      onClick: () => {
        if (this.poid) {
          front.set_route("/p/"+this.poid);
        };
      },
    }, this.props.name);

    var body = null;
    if (defs && defs[name]) {

      // Arguments
      var type = fm.synt.reduce(this.defs[name].type);
      var argm_divs = [];
      var argm_type = [];
      var argm_eras = [];
      while (type.ctor === "All") {
        let argm_i = argm_divs.length;
        argm_eras.push(type.eras);
        argm_type.push(type.bind);
        argm_divs.push(h("div", {}, [
          h("div", {}, [
            h("span", {}, [type.name+" : "+fm.lang.stringify(type.bind)+" = "]),
            h("input", {onInput: (e) => this.argm[argm_i] = e.target.value}),
          ]),
        ]));
        var var0 = fm.synt.Var(type.self);
        var var1 = fm.synt.Var(type.name);
        type = fm.synt.reduce(type.body(var0, var1));
      };

      // Parses input arguments
      var argm_term = [];
      for (let i = 0; i < this.argm.length; ++i) {
        if (this.argm[i]) {
          try {
            var parsed = fm.lang.parse_trm(this.argm[i], [0,[]], true);
            var term = parsed[1](fm.synt.Nil());
            argm_term.push(term);
          } catch (e) {
            console.log(e);
            break;
          }
        }
      }

      // Prints result
      if (argm_term.length === argm_type.length) {
        var has_errors = false;
        for (let i = 0; i < argm_term.length; ++i) {
          try {
            defs["_arg_"+i+"_"] = {
              term: argm_term[i],
              type: argm_type[i],
            };
            //console.log("check", fm.lang.stringify(defs["_arg_"+i+"_"].term));
            //console.log("hasty", fm.lang.stringify(defs["_arg_"+i+"_"].type));
            fm.synt.typesynth("_arg_"+i+"_", defs, fm.lang.stringify);
          } catch (e) {
            has_errors = true;
            if (typeof e === "function") {
              var emsg = front.remove_colors(e().msg);
              argm_divs.push(h("pre", {}, "\nOn argument "+i+":\n"+emsg));
            } else {
              argm_divs.push(h("pre", {}, "\nError on argument " + i + "."));
            }
          }
        }
        if (!has_errors) {
          var term = fm.synt.Ref(name);
          for (let i = 0; i < argm_term.length; ++i) {
            term = fm.synt.App(argm_eras[i], term, argm_term[i]);
          };
          var result = fm.lang.stringify(fm.synt.normalize(term, defs));
          argm_divs.push(h("pre", {}, "\nResult:\n" + result));
        }
      };

      body = h("div", {
        style: {
          "font-family": "IBMPlexMono-Light",
          "user-select": "none",
          "font-size": "16px",
          "color": "rgb(41, 42, 44)",
        },
      }, argm_divs);
    } else {
      body = h("div", {}, "...loading...");
    };

    return h("div", {
      style: {
        "min-height": "calc(100% - 30px)",
        "padding": "4px", //"display": "flex",
        //"flex-flow": "row nowrap",
        //"justify-content": "center",
      },
    }, [head, body]);
  }
};

module.exports = Term;
