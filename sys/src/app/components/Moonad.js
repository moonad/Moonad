const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");
const Write = require("./Write.js");
const Play = require("./Play.js");
const Code = require("./Code.js");
const List = require("./List.js");
const Link = require("./Link.js");

var commands = {
  welcome: {
    desc: "Displays the welcome message.",
    args: 0,
    exec: function (args) {},
    show: function () {
      return [
        h("div", {}, [
          h("span", {}, "Type '"),
          Link("help", () => { this.history.push("help") }),
          h("span", {}, "' for a list of commands."),
        ]),
      ];
    },
  },
  help: {
    desc: "Displays a list of commands.",
    args: 0,
    exec: function () {},
    show: function () {
      var rows = [];
      for (let cmd in commands) {
        rows.push(h("tr", {}, [
          h("td", {
            style: {"padding-right": "6px"}
          }, [
            Link(cmd, () => {
              this.command = cmd;
              if (commands[cmd].args === 0) {
                this.exec(this.command);
              } else {
                this.command += " ";
              }
            })
          ]),
          h("td", {}, commands[cmd].desc),
        ]));
      }
      return h("table", {}, rows);
    },
  },
  view: {
    desc: "Displays the source of a definition.",
    args: 1,
    exec: function () {},
    show: function (name = "None") {
      return h(Code, {
        name,
        view: name => this.exec("view "+name),
        play: name => this.exec("play "+name),
      });
    },
  },
  play: {
    desc: "Runs an application.",
    args: 1,
    exec: function () {},
    show: function (name = "None") {
      return h(Play, {name});
    },
  },
  clear: {
    desc: "Clear the command history.",
    args: 0,
    exec: function () {
      this.history = [];
    },
    show: function () {
      return "";
    },
  },
  list: {
    desc: "Displays the name of every definition on Moonad.",
    args: 0,
    exec: function () {},
    show: function () {
      return h(List, {view: name => this.exec("view "+name)});
    },
  },
  addr: {
    desc: "Displays your Ethereum address.",
    args: 0,
    exec: function() {},
    show: function () {
      return h("div", {}, front.get_addr());
    },
  },
  pkey: {
    desc: "Displays your Ethereum private key.",
    args: 0,
    exec: function() {},
    show: function () {
      return h("div", {}, front.get_pkey());
    },
  },
};

class Moonad extends Component {
  constructor(props) {
    super(props);
    this.listeners = {};
    this.intervals = {};
    this.command = "";
    this.history = ["Welcome to Moonad!"];
    this.render_key = null;
  }

  componentDidMount() {
    this.listeners.keydown = (e) => {
      //console.log(e.keyCode, e.which, e.charCode, e.key, e.target.tagName);
      if (e.target.tagName !== "INPUT") {
        if (e.keyCode === 8 || e.keyCode === 127) { // backspace
          this.command = this.command.slice(0,-1);
        } else if (e.keyCode === 13) { // return
          this.exec(this.command);
        } else if (e.key.length === 1) {
          this.command += e.key;
          if (e.key === " ") {
            e.preventDefault();
          }
        }
      }
    };
    this.intervals.refresher = setInterval(() => this.refresh(), 1000 / 32);
    document.body.addEventListener("keydown", this.listeners.keydown);
  }

  async componentWillUnmount() {
    for (var key in this.intervals) {
      clearInterval(this.intervals[key]);
    }
    for (var key in this.listeners) {
      document.body.removeEventListener(key, this.listeners[key]);
    }
  }

  refresh() {
    var render_key = this.history.length + "|" + this.command;
    if (render_key !== this.render_key) {
      this.render_key = render_key;
      this.forceUpdate();
    }
  }

  parse(command) {
    var args = command.split(" ");
    var func = args[0].toLowerCase().replace(/\W/g,"");
    return [func, args.slice(1)];
  }

  exec(command) {
    if (!command) {
      command = "help";
    }
    this.command = command.replace(/ +(?= )/g,''); // remove double spaces
    this.history.push(this.command);
    var [func, args] = this.parse(command);
    if (commands[func]) {
      commands[func].exec.apply(this, args);
    }
    this.command = "";
  }

  show(command) {
    var [func, args] = this.parse(command);
    if (commands[func]) {
      return commands[func].show.apply(this, args);
    } else {
      return h("div", {}, "Unknown command '"+func+"'.");
    }
  }

  render() {
    var paths = front.get_paths();
    if (paths[0] === "play") {
      return h("div", {
        style: {
          "display": "flex",
          "align-items": "center",
          "justify-content": "center",
          "width": "100%",
          "height": "100%",
          "background": "#101216",
          "background": "#101216",
          "color": "white",
        }}, [
          h(Play, {
            name: paths[1],
          })
        ]);
    } else {
      var blocks = [];
      blocks.push(h("div", {
        style: {"cursor": "pointer"},
        onClick: () => this.exec(this.command),
      }, "λ " + this.command));
      for (var i = this.history.length - 1; i >= 0; --i) {
        var command = this.history[i];
        var head = h("div", {style: {"text-decoration": "underline"}}, command);
        var body = h("div", {style: {"font-size": "14px"}}, this.show(command));
        blocks.push(h("div", {key: i, style: {"margin": "6px 0px"}}, [head, body]));
      }
      return h("div", {
        style: {
          "padding": "6px",
          "font-size": "16px",
        },
      }, [blocks]);
    }
  }
};

module.exports = Moonad;
