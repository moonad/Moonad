// Profile page showing user's post, name and addr

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");

class Profile extends Component {
  constructor(props) {
    super(props);
    this.render_key = null;
    this.name = "-"; // TODO: get addr name
    this.addr = "-";
    this.posts = []; // TODO: get user's post
  }

  componentDidMount(){
    this.name = this.props.name;
    this.addr = this.props.addr;
    this.get_data();
  }

  async get_data(){
    var res = await front.get_profile_info(this.name, this.addr);
    if(res.name){
      this.name = res.name;
      this.addr = res.addr;
    }
  }

  render() {
    var body = [];

    const addr_label = h("span", {
      style: { "font-family": "IBMPlexMono-Light", "font-size": "10px"}
    }, this.addr);

    const name_label = h("span", {
      style: {
        "font-size": "12px",
        "color": "rgb(0, 63, 99)",
        "font-family": "IBMPlexMono-Medium",
        "margin-bottom": "10px"
      }
    }, this.name);

    const profileInfo = h("div", {
      style: {
        "border": "1px solid rgb(187, 199, 207)",
        "padding": "10px",
        "width": "140px",
        "height": "50px",
        "z-index": "3",
        "margin-right": "-100px",
        "margin-top": "20px",
        "display": "flex",
        "flex-direction": "column"
      }}, [
       name_label,
       addr_label
      ] );

    // Posts
    for (let i = this.posts.length - 1; i >= 0; --i) {
      body.push(Post({
        poid: reply_poid,
        expand: true,
        moonad: front.moonad,
      }));
    };

    return h("div", {
      style: {
        "min-height": "calc(100% - 43px)",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "center",
        "margin-top": "5px"
      },
    }, [
      profileInfo,
      h("div", {
      style: {
        "background": "white",
        "padding": "2px 6px",
        "width": "586px",
      }
    }, body)]);
  }
};

module.exports = Profile;
