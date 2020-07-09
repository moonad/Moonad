// Profile page showing user's post, name and addr

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");
const Post = require("./Post.js");

class Profile extends Component {
  constructor(props) {
    super(props);
    this.render_key = null;
    this.name = "-";
    this.addr = "-";
    this.posts = [];
  }

  componentDidMount(){
    this.name = this.props.name;
    this.addr = this.props.addr;
    this.get_data();
  }

  async get_data(){
    var res = await front.get_profile_info(this.addr);
    // console.log("get_data: ", res);
    if(res.addr){
      console.log()
      this.name = res.name;
      this.addr = res.addr;
      this.posts = res.posts;
    }
    this.forceUpdate();
  }

  render() {
    var body = [];

    const addr_label = h("span", {
      style: { "font-family": "IBMPlexMono-Light", "font-size": "08px"}
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
        // "border": "1px solid rgb(187, 199, 207)",
        "padding": "10px",
        "width": "250px",
        "height": "50px",
        "z-index": "5",
        // "margin-left": "610px",
        "margin-top": "20px",
        // "margin-left": "80px",
        "display": "flex",
        "flex-direction": "column"
      }}, [
       name_label,
       addr_label
      ] );

    // Posts
    if(this.posts.length === 0){
      body.push(h("p", {style:{"margin-top": "20px"}}, "Nothing to show here."));
      body.push(h("p", {}, "If you know this user posted, I'm sorry to have nothing to display."));
      body.push(h("p", {}, "This feature was added after a lot of posts were made =("));
    } else {
      for (let i = this.posts.length - 1; i >= 0; --i) {
        body.push(Post({
          post: this.posts[i],
          poid: this.posts[i].poid,
          expand: true,
          moonad: front.moonad,
        }));
      };
    }

    const post_section = h("div", {
      style: {
        "min-height": "calc(100% - 43px)",
        "display": "flex",
        "flex-flow": "row",
        "justify-content": "center",
        "margin-top": "5px",
      },
    }, [
      h("div", {
      style: {
        "background": "white",
        "padding": "2px 6px",
        "width": "586px",
        // "position": "fixed"
      }
    }, body),
    ]);

    return h("div", {
      style: {
        "display": "flex", 
        "flex-direction": "row", 
        "justify-content": "space-evenly"
      }
    }, [post_section, profileInfo])
  }
};

module.exports = Profile;
