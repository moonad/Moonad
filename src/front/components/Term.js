// A page of posts, including one on top and the replies below

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const fm = require("formality-lang");
const front = require("./../front.js");

//const Func = () => {
//};

class Term extends Component {
  constructor(props) {
    super(props);
    this.poid = null;
    this.defs = null;
    this.argm = [];
    this.app = null;
  }
  async componentDidMount() {
    this.poid = await front.moonad.api.get_orig({name: this.props.name});
    this.defs = await front.load_defs_of(this.props.name);
  }
  render() {
    const name = this.props.name;
    const defs = this.defs;

    if (!defs || !defs[name]) {
      return h("div", {}, "Loading...");
    } else {
      var type = fm.synt.reduce(this.defs[name].type);

      // If this is an application...
      if ( type.ctor === "App"
        && type.func.ctor === "Ref"
        && type.func.name === "App.V0") {

        // Type-checks, compiles and initializes application
        if (!this.app) {
          fm.synt.typesynth(name, defs, fm.lang.stringify);
          var core_defs = {};
          for (var def in defs) {
            core_defs[def] = defs[def].core;
          };
          var js_code = fm.tojs.compile(name, core_defs, true);
          console.log(js_code);
          this.app = eval(js_code);
          this.app = this.app[name];
        }

        // Renders app with its current state
        var rendered = this.app.draw(this.app.init);

        // Converts rendered object to an HTML element
        var app_el = null;
        switch (rendered._) {
          case "App.V0.Render.text":
            app_el = rendered.str;
            break;
        }

        // Builds the body
        return h("div", {
          style: {
            "width": "100% - 30px",
            "min-height": "100%",
          },
          onClick: () => {
            // When user clicks, sends an event to the app
            var app_event = {_: "App.V0.Event.keypress", keycode: 0};
            this.app.init = this.app.when(app_event)(this.app.init);
          },
        }, app_el);

      // If this is just a function...
      } else {
        // Gathers arguments
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

        // Builds result
        if (argm_term.length === argm_type.length) {
          var term = fm.synt.Ref(name);
          for (let i = 0; i < argm_term.length; ++i) {
            term = fm.synt.App(argm_eras[i], term, argm_term[i]);
          };
          defs["_main_"] = {term, type: fm.synt.Hol("_main_", fm.synt.Nil())};
          try {
            // Synthetizes
            fm.synt.typesynth("_main_", defs, fm.lang.stringify);
            // Shows JS evaluation
            var core_defs = {};
            for (var def in defs) {
              core_defs[def] = defs[def].core;
            };
            var js_code = fm.tojs.compile("_main_", core_defs, true);
            var js_eval = eval(js_code);
            argm_divs.push(h("pre", {}, "\nEval:\n" + js_eval._main_));
            argm_divs.push(h("pre", {}, "\nNorm:"));
            argm_divs.push(h("pre", {
              style: {
                "text-decoration": "underline",
                "cursor": "pointer",
              },
              onClick: () => {
                // Shows normal form
                var norm = fm.lang.stringify(fm.synt.normalize(term, defs));
                var text = "";
                for (var i = 0; i < norm.length; ++i) {
                  text += norm[i];
                  if (i % 80 === 79) {
                    text += "\n";
                  }
                }
                console.log(text);
              }
            }, "(click to print on console)"));
          } catch (e) {
            var emsg = typeof e === "function"
              ? front.remove_colors(e().msg)
              : e.toString();
            argm_divs.push(h("pre", {}, "\nError:\n" + emsg));
          }
        };

        // Term name
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

        // Term args and result
        var body = h("div", {
          style: {
            "font-family": "IBMPlexMono-Light",
            "user-select": "none",
            "font-size": "16px",
            "color": "rgb(41, 42, 44)",
          },
        }, argm_divs);

        return h("div", {
          style: {
            "min-height": "calc(100% - 30px)",
            "padding": "4px", //"display": "flex",
            //"flex-flow": "row nowrap",
            //"justify-content": "center",
          },
        }, [head, body]);
      }
    }
  }
};

module.exports = Term;
