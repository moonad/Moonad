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
    this.app = null;
    this.seen_replies = null;
    this.intervals = {};
    this.listeners = {};
    this.mouse_pos = {_:"Pair.new", fst: 0, snd: 0};
    this.app_elem = null;
    this.canvas = null;
  }
  async componentDidMount() {
    this.poid = await front.moonad.api.get_orig({name: this.props.name});
    front.moonad.do_watch(this.poid);
    try {
      this.defs = await front.load_core_defs_of(this.props.name);
    } catch (e) {
      console.log(e());
    }
  }
  async componentWillUnmount() {
    for (var key in this.intervals) {
      clearInterval(this.intervals[key]);
    }
    for (var key in this.listeners) {
      document.body.removeEventListener(key, this.listeners[key]);
    };
  }
  start_app(name) {
    var js_code = fm.tojs.compile(name, this.defs, true);
    this.app = eval(js_code);
    this.app = this.app[name];

    // Canvas for image rendering
    this.canvas = document.createElement("canvas");
    this.canvas.style["image-rendering"] = "pixelated";
    this.canvas.width = 256;
    this.canvas.height = 256;
    this.canvas.style.width = "256px";
    this.canvas.style.height = "256px";
    this.canvas.style.border = "1px dashed gray";
    this.canvas.context = this.canvas.getContext("2d");
    this.canvas.image_data = this.canvas.context.getImageData(0, 0, this.canvas.width, this.canvas.height)
    this.canvas.image_buf = new ArrayBuffer(this.canvas.image_data.data.length);
    this.canvas.image_u8 = new Uint8ClampedArray(this.canvas.image_buf);
    this.canvas.image_u32 = new Uint32Array(this.canvas.image_buf);
    this.canvas.depth_buf = new ArrayBuffer(this.canvas.image_u32.length);
    this.canvas.depth_u8 = new Uint8Array(this.canvas.depth_buf);
    this.canvas.clear = {size:0, data:new Uint32Array(256*256*32)};

    // Mouse movement
    this.listeners.mousemove = (e) => {
      this.mouse_pos = {_:"Pair.new", fst: e.offsetX, snd: e.offsetY};
    };
    document.body.addEventListener("mousemove", this.listeners.mousemove);

    // Mouse down event
    this.listeners.mousedown = (e) => {
      this.send_event({
        _: "App.Event.ukey",
        down: true,
        code: 0,
      });
    };
    document.body.addEventListener("mousedown", this.listeners.mousedown);

    // Mouse up event
    this.listeners.mouseup = (e) => {
      this.send_event({
        _: "App.Event.ukey",
        up: false,
        code: 0,
      });
    };
    document.body.addEventListener("mouseup", this.listeners.mouseup);

    // Key down event
    this.listeners.keydown = (e) => {
      this.send_event({
        _: "App.Event.ukey",
        down: true,
        code: e.keyCode,
      });
    };
    document.body.addEventListener("keydown", this.listeners.keydown);

    // Key up event
    this.listeners.keyup = (e) => {
      this.send_event({
        _: "App.Event.ukey",
        down: false,
        code: e.keyCode,
      });
    };
    document.body.addEventListener("keyup", this.listeners.keyup);

    // New post event
    this.seen_replies = 0;
    this.intervals.post = setInterval(() => {
      var replies = front.moonad.cite[this.poid];
      while (replies && this.seen_replies < replies.length) {
        var reply = front.moonad.post[replies[this.seen_replies]];
        if (!reply) {
          break;
        } else {
          this.send_event({
            _: "App.Event.post",
            date: reply.date,
            auth: reply.auth,
            head: reply.head,
            body: reply.body,
          });
          this.seen_replies++;
        };
      };
    }, 1000 / 32);

    // Tick event
    this.intervals.tick = setInterval(() => {
      this.send_event({
        _: "App.Event.tick",
        date: Date.now(),
        screen: {
          _:"Pair.new",
          fst: this.app_elem ? this.app_elem.offsetWidth : 0,
          snd: this.app_elem ? this.app_elem.offsetHeight : 0,
        },
        mouse: this.mouse_pos,
      });
    }, 1000 / 32);

    // HTML element getter
    this.intervals.app_elem = setInterval(() => {
      if (!this.app_elem) {
        this.app_elem = document.getElementById("app_elem");
      };
      // Inserts canvas when it is needed
      if ( this.app_elem.firstChild
        && this.app_elem.firstChild.id === "app_insert_canvas") {
        this.app_elem.innerHTML = "";
        this.app_elem.appendChild(this.canvas);
      }
    }, 1000/32);

    // Pix renderer
    this.intervals.app_elem = setInterval(() => {
      var canvas = this.canvas;
      var rendered = this.app.draw(this.app.init);
      if (rendered._ === "App.Render.pix") {
        var size = rendered.size;
        var draw = rendered.draw;
        //var size = 256;
        //var draw = (i) => {
          //var col = 0xFF0000FF;
          //var p_x = i % 16;
          //var p_y = Math.floor(i / 16);
          //var p_z = 128;
          //var pos = (p_x << 20) | (p_y << 8) | p_z;
          //return {fst: pos, snd: col};
        //};
        // Renders pixels to buffers
        for (var i = 0; i < size; ++i) {
          var pix = draw(i);
          var pos = pix.fst;
          var col = pix.snd;
          var p_x = (pos >>> 20) & 0xFFF;
          var p_y = (pos >>> 8) & 0xFFF;
          var p_z = (pos >>> 0) & 0xFF;
          var idx = p_y * canvas.width + p_x;
          var dep = canvas.depth_u8[idx];
          if (p_z > dep) {
            canvas.image_u32[idx] = col;
            canvas.depth_u8[idx] = p_z;
            canvas.clear.data[canvas.clear.size++] = idx;
          }
        };
        // Renders buffers to canvas
        canvas.image_data.data.set(canvas.image_u8);
        canvas.context.putImageData(canvas.image_data, 0, 0);
        // Erases pixels from buffers
        for (var i = 0; i < canvas.clear.size; ++i) {
          var idx = canvas.clear.data[i];
          canvas.image_u32[idx] = 0;
          canvas.depth_u8[idx] = 0;
        }
        canvas.clear.size = 0;
      };
    }, 1000/32);
  }
  send_event(app_event) {
    if (this.app) {
      this.app.init = this.app.when(app_event)(this.app.init);
    };
  }
  render_app(type) {
    const name = this.props.name;
    const defs = this.defs;

    if (!this.app) {
      this.start_app(name);
    };

    // Renders app with its current state
    var rendered = this.app.draw(this.app.init);

    // Converts rendered object to an HTML element
    var app_el = null;
    switch (rendered._) {
      case "App.Render.txt":
        app_el = rendered.text;
        break;
      case "App.Render.pix":
        app_el = h("span", {id:"app_insert_canvas"});
        break;
    }

    // Builds the body
    return h("div", {
      id: "app_elem",
      style: {
        "width": "100%",
        "min-height": "calc(100% - 30px)",
      },
    }, app_el);
  }
  render_fun(type) {
    const name = this.props.name;
    const defs = this.defs;

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
      defs["_run_"] = {term, type: fm.synt.Hol("_run_", fm.synt.Nil())};
      defs["_run_"] = fm.synt.typesynth("_run_", defs, fm.lang.stringify);
      try {
        // Shows JS evaluation
        var js_code = fm.tojs.compile("_run_", defs, true);
        var js_eval = eval(js_code);
        argm_divs.push(h("pre", {}, "\nEval:\n" + js_eval._run_));
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
        && type.func.name === "App") {
        return this.render_app(type);
      // If this is just a function...
      } else {
        return this.render_fun(type);
      }
    }
  }
};

module.exports = Term;
