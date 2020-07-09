const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");

class User_info extends Component {
  
  constructor(props) {
    super(props);
    this.show_pkey = false;
  }

  set_title(title) {
    return h("div", {
      style: { "font-family": "IBMPlexMono-Medium"}},
      title )
  }

  set_info(info) {
    return h("span", {
      style: { "font-family": "IBMPlexMono-Light",}},
      info );
  }

  set_item(title, onClick) {
    return h("span", {
      style: { 
        "font-family": "IBMPlexMono-Light",
        "cursor": "pointer",
        "text-decoration": "underline"
      },
      onClick
    }, title)
  }

  render() {
    var eth_address = this.props.eth_address;
    eth_address = eth_address ? eth_address : "-";

    var eth_pkey = this.props.pkey;
    eth_pkey = eth_pkey ? eth_pkey : "-";

    const address_section = h("div", {
        style: { "margin-top": "15px" }}, 
        [ this.set_title("Ethereum Address"), this.set_info(eth_address) ]);

    const pkey_button = h("span", {
      style: {
        "id": "user_pkey",
        "cursor": "pointer",
        "text-decoration": "underline",
        "color": "rgb(101,102,105)",
        "margin-left": "10px",
      },
      onClick: () => {
        this.show_pkey = !this.show_pkey;
        this.forceUpdate();
      }
    }, this.show_pkey ? "hide" : "show");

    const pkey_section = h("div", {
        style: { "margin-top": "15px", }},
        [ this.set_title("Private key"),
          this.show_pkey ? this.set_info(eth_pkey) : "•••••••••••••••••••••", 
          pkey_button
        ])
    
    const separator = h("div", {
      style: {
        "margin-top": "20px",
        "border-bottom": "1px solid rgb(240,240,240)"
    }})

    const profile_section = h("div", {
      style: { "margin-top": "15px" }}, 
      this.set_item("Profile", 
        () => {
          front.set_route("/u/"+eth_address)
        }
      ));

    return h("div", {
      style: {
        "descr": "user-info-container",
        "width": "300px",
        "height": "300px",
        "margin-top": "0px",
        "background": "white",
        "z-index": "10",
        "font-size": "10px",
        "word-wrap": "break-word",
        "padding": "0px 10px 20px 10px",
        "border": "solid 1px #D6D6D6"
      }}, [
        address_section,
        pkey_section,
        separator,
        profile_section
      ]);
  }

};

module.exports = User_info;
