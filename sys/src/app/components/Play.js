// A page of posts, including one on top and the replies below

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const fm = require("formality-lang");
const front = require("./../front.js");
const lib = require("./../../server/lib.js");

const GENESIS_TIME = 1597955449124;
//var INIT = Date.now();

class Play extends Component {
  constructor(props) {
    super(props);
    this.defs = null;
    this.argm = [];
    this.app = null;
    this.events = [];
    this.last_tick = 0;
    this.intervals = {};
    this.listeners = {};
    this.mouse_pos = {_:"Pair.new", fst: 0, snd: 0};
    this.app_elem = null;
    this.canvas = null;
    this.run_term = null;
    this.log = "Loading...";
  }
  async componentDidMount() {
    try {
      this.log = "";
      this.defs = await front.load_core_defs_of({
        name: this.props.name,
        code: this.props.code || null,
        cache: false,
        debug: false,
        on_dependency: name => {
          this.log = "Loading "+name+"...";
          this.forceUpdate();
        }
      });
      // Refreshes
      this.intervals.refresher = setInterval(() => this.forceUpdate(), 1000/2);
      this.forceUpdate();
    } catch (e) {
      setTimeout(() => this.componentDidMount(), 500);
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
  init_canvas(width, height) {
    if (!this.canvas || this.canvas.width !== width || this.canvas.height !== height) {
      console.log("INIT CANVAS", width, height);
      this.canvas = document.createElement("canvas");
      this.canvas.style["image-rendering"] = "pixelated";
      this.canvas.width = width;
      this.canvas.height = height;
      this.canvas.style.width = (width*2)+"px";
      this.canvas.style.height = (height*2)+"px";
      this.canvas.clear = {length:0, data:new Uint32Array(width*height*32)};
      this.canvas.style.border = "1px solid black";
      this.canvas.context = this.canvas.getContext("2d");
      this.canvas.image_data = this.canvas.context.getImageData(0, 0, this.canvas.width, this.canvas.height)
      this.canvas.image_buf = new ArrayBuffer(this.canvas.image_data.data.length);
      this.canvas.image_u8 = new Uint8ClampedArray(this.canvas.image_buf);
      this.canvas.image_u32 = new Uint32Array(this.canvas.image_buf);
      this.canvas.depth_buf = new ArrayBuffer(this.canvas.image_u32.length);
      this.canvas.depth_u8 = new Uint8Array(this.canvas.depth_buf);
    }
  }
  start_app(name) {
    this.log = "Compiling to JavaScript...";
    var js_code = fm.tojs.compile(name, this.defs, true);
    console.log(js_code);
    this.app = eval(js_code);
    this.app = this.app[name];
    this.events = []; // this application's events
    this.last_tick = name.slice(-3) === ".on" ? GENESIS_TIME : Date.now();

    // Canvas for image rendering
    this.init_canvas(256, 256);

    // Init event
    this.register_event({
      _: "App.Event.init",
      time: 0,
      addr: lib.hex_to_fmword(front.get_addr()),
      screen: {
        _: "Pair.new",
        fst: this.app_elem ? this.app_elem.offsetWidth : 0,
        snd: this.app_elem ? this.app_elem.offsetHeight : 0,
      },
      mouse: this.mouse_pos,
    });

    // Mouse movement
    this.listeners.mousemove = (e) => {
      this.mouse_pos = {_:"Pair.new", fst: e.offsetX, snd: e.offsetY};
    };
    document.body.addEventListener("mousemove", this.listeners.mousemove);

    // Mouse down event
    this.listeners.mousedown = (e) => {
      this.register_event({
        _: "App.Event.xkey",
        time: Date.now(),
        down: true,
        code: 0,
      });
    };
    document.body.addEventListener("mousedown", this.listeners.mousedown);

    // Mouse up event
    this.listeners.mouseup = (e) => {
      this.register_event({
        _: "App.Event.xkey",
        time: Date.now(),
        up: false,
        code: 0,
      });
    };
    document.body.addEventListener("mouseup", this.listeners.mouseup);

    // Key down event
    this.listeners.keydown = (e) => {
      if (!e.repeat) {
        this.register_event({
          _: "App.Event.xkey",
          time: Date.now(),
          down: true,
          code: e.keyCode,
        });
      }
    };
    document.body.addEventListener("keydown", this.listeners.keydown);

    // Key up event
    this.listeners.keyup = (e) => {
      this.register_event({
        _: "App.Event.xkey",
        time: Date.now(),
        down: false,
        code: e.keyCode,
      });
    };
    document.body.addEventListener("keyup", this.listeners.keyup);

    // Tick event
    this.intervals.tick = setInterval(() => {
      this.register_ticks();
    }, 1000 / 80);

    // State computer
    this.intervals.compute_states = setInterval(() => {
      this.compute_states(2000); // computes at most 128000 events per second
    }, 1000 / 64);

    // Save memory by freeing states older than 6 seconds
    //this.intervals.clean_states = setInterval(() => {
      //if (this.events.length > 0) {
        //var i = this.events.length - 1;
        //var ct = Date.now();
        //while (i >= 0 && this.events[i].time > ct - 6000) {
          //--i;
        //}
        //for (var j = i; j >= 0; --j) {
          //if (this.events[j].state === null) {
            //break;
          //}
          //this.events[j].state = null;
        //}
      //}
    //}, 3000);

    // HTML element getter
    this.intervals.app_elem = setInterval(() => {
      if (!this.app_elem) {
        this.app_elem = document.getElementById("app_elem");
      };
      // Inserts canvas when it is needed
      if ( this.app_elem.firstChild
        && this.app_elem.firstChild !== this.canvas) {
        this.app_elem.innerHTML = "";
        this.app_elem.appendChild(this.canvas);
      }
    }, 1000/32);

    // Pix renderer
    const do_render = () => {
      var canvas = this.canvas;
      var rendered = this.app.draw(this.get_app_state());
      if (rendered._ === "App.Render.vox") {
        var length = rendered.voxs.length;
        let capacity = rendered.voxs.capacity;
        var buffer = rendered.voxs.buffer;
        // Renders pixels to buffers
        for (var i = 0; i < length; ++i) {
          var pos = buffer[i*2+0];
          var col = buffer[i*2+1];
          var p_x = (pos >>> 0) & 0xFFF;
          var p_y = (pos >>> 12) & 0xFFF;
          var p_z = (pos >>> 24) & 0xFF;
          var idx = p_y * canvas.width + p_x;
          var dep = canvas.depth_u8[idx];
          if (p_z > dep) {
            canvas.image_u32[idx] = col;
            canvas.depth_u8[idx] = p_z;
            canvas.clear.data[canvas.clear.length++] = idx;
          }
        };
        // Renders buffers to canvas
        canvas.image_data.data.set(canvas.image_u8);
        canvas.context.putImageData(canvas.image_data, 0, 0);
        // Erases pixels from buffers
        for (var i = 0; i < canvas.clear.length; ++i) {
          var idx = canvas.clear.data[i];
          canvas.image_u32[idx] = 0;
          canvas.depth_u8[idx] = 0;
        }
        canvas.clear.length = 0;
      };
    }
    this.intervals.app_elem = setInterval(do_render, 1000/32);

    // Benchmarks
    window.mark = () => {
      var start = Date.now();
      var calls = 0;
      while (Date.now() - start < 1000) {
        do_render();
        calls++;
      }
      console.log("Calls:", calls);
    };
  }
  // Given an event and an app state, executes the event's
  // side-effects and returns the updated state
  execute_event(ev, state) {
    //if (ev._ !== "App.Event.tick") console.log("execute", ev._, ev.time, ev.done);
    var actions = this.app.when(ev)(state);
    while (actions._ === "List.cons") {
      var action = actions.head;
      switch (action._) {
        case "App.Action.state":
          state = action.state;
          break;
        case "App.Action.print":
          if (!ev.done) {
            console.log(action.text);
          }
          break;
        case "App.Action.post":
          if (!ev.done) {
            var data = lib.hex(256, lib.fmword_to_hex(action.data));
            front.logs.send_post(lib.fmword_to_hex(action.room), data);
          }
          break;
        case "App.Action.watch":
          if (!ev.done) {
            front.logs.watch_room(lib.fmword_to_hex(action.room));
            //console.log("watching room");
            front.logs.on_post(({room, time, addr, data}) => {
              //var text = lib.hex_to_string(data).replace(/\0/g,"");
              //console.log("got post");
              this.register_event({
                _: "App.Event.post",
                time: parseInt(time.slice(2), 16),
                room: lib.hex_to_fmword(room),
                addr: lib.hex_to_fmword(addr),
                data: lib.hex_to_fmword(data),
              });
            });
          }
          break;
        case "App.Action.resize":
          if (!ev.done) {
            this.init_canvas(action.width, action.height);
          }
          break;
      };
      actions = actions.tail;
    }
    ev.done = true;
    return state;
  }
  // Generates tick events
  register_ticks() {
    var dt = 32; // ticks per second
    var ct = Date.now();
    var lt = this.last_tick;
    var ts = 0;
    //console.log("Registering ticks...");
    for (var t = lt + (dt - lt % dt); t < ct; t += dt) {
      this.register_event({_: "App.Event.tick", time: t});
      this.last_tick = t;
      ++ts;
    }
    //console.log("Registered "+ts+" ticks...");
  }
  // Adds an event to the list of events
  register_event(ev) {
    //console.log("register", ev._, ev.time);
    if (this.app) {
      this.events.push(ev);
      // If it is older than the last event, reorder 
      var i = this.events.length - 1;
      while (this.events[i-1] && this.events[i-1].time > this.events[i].time) {
        var prev = this.events[i-1];
        var next = this.events[i-0];
        prev.state = null;
        this.events[i-1] = next;
        this.events[i-0] = prev;
        --i;
      }
      // Frees memory of old events
      //if (this.events.length > 64) {
        //this.events[this.events.length - 64] = null;
      //}
    }
  }
  compute_states(max_events = Infinity) {
    if (this.events.length > 0) {
      var last_with_state = this.events.length - 1;
      while (last_with_state > 0 && !this.events[last_with_state-1].state) {
        --last_with_state;
      }
      var lim = Math.min(last_with_state + max_events, this.events.length);
      for (var i = last_with_state; i < lim; ++i) {
        this.log = "Computing event " + i + "...";
        var last_state = i === 0 ? this.app.init : this.events[i-1].state;
        this.events[i].state = this.execute_event(this.events[i], last_state);
      }
    }
  }
  get_app_state() {
    for (var i = this.events.length - 1; i >= 0; --i) {
      if (this.events[i].state) {
        return this.events[i].state;
      }
    }
    return this.app.init;
  }
  render_app(type) {
    const name = this.props.name;
    const defs = this.defs;

    if (!this.app) {
      this.start_app(name);
    };

    // Renders app with its current state
    var rendered = this.app.draw(this.get_app_state());

    // Converts rendered object to an HTML element
    var app_ins = null;
    switch (rendered._) {
      case "App.Render.txt":
        app_ins = rendered.text;
        break;
      case "App.Render.vox":
        app_ins = h("span");
        break;
    }

    // App element container
    var app_elem = h("div", {
      id: "app_elem",
      style: {
        "width": "100%",
        "min-height": "calc(100% - 30px)",
      },
    }, app_ins);

    // Go back to origin post
    var go_back = null;
    if (this.props.poid && this.props.poid !== "0x0000000000000000") {
      go_back = h("div", {
        style: {
          "cursor": "pointer",
          "text-decoration": "underline",
        },
        onClick: () => front.set_route("/p/"+this.props.poid),
      }, "Go to origin post.");
    }

    // Builds the body
    return h("div", {}, [
      app_elem,
      go_back,
    ]);
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
          h("input", {onInput: (e) => {
            this.argm[argm_i] = e.target.value;
          }}),
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
        argm_divs.push(h("pre", {}, "\nJS Code and λ Norm:"));
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
            console.log(js_code);
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
        if (this.props.poid) {
          front.set_route("/p/"+this.props.poid);
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
    return h("div", {}, [
      (() => {
        if (defs && defs[name]) {
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
        } else {
          return null;
        }
      })(),
      h("pre", {style: {
        "text-align": "center",
        //"width": "100%",
        //"height": "100%",
        //"overflow-y": "hidden",
      }}, this.log),
    ]);
  }
};

module.exports = Play;
