const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("../front.js");

class User_info extends Component {
  
  constructor(props) {
    super(props);
    this.show_pkey = false;
  }

  render() {
    var eth_address = front.get_addr();
    eth_address = eth_address ? eth_address : "-";

    var eth_pkey = front.get_pkey();
    eth_pkey = eth_pkey ? eth_pkey : "-";

    // Address
    const eth_address_text = h("div", {
        style: { "font-family": "IBMPlexMono-Light", "font-weight": "bold"}}, // TODO: bold
        "Ethereum Address" );

    const eth_address_info = h("span", {
        style: { "font-family": "IBMPlexMono-Light",}},
        eth_address );

    const address_section = h("div", {
        style: { "margin-top": "15px" }}, 
        [ eth_address_text, eth_address_info ]);
    
    // Pkey
    const eth_pkey_span = h("div", {
        style: { "font-family": "IBMPlexMono-Light", "font-weight": "bold"}}, // TODO: bold
        "Private key");

    const eth_pkey_info = h("span", {
        style: { "font-family": "IBMPlexMono-Light", }},
        eth_pkey);

    const pkey_button = h("span", {
      style: {
        "id": "user_pkey",
        "cursor": "pointer",
        "text-decoration": "underline",
        "color": "rgb(101,102,105)",
        "margin-left": "10px",
      },
      onClick: () => this.show_pkey = !this.show_pkey
    }, this.show_pkey ? "hide" : "show");

    const pkey_section = h("div", {
        style: { "margin-top": "15px", }},
        [ eth_pkey_span,
          this.show_pkey ? eth_pkey_info : "•••••••••••••••••••••", 
          pkey_button
        ])

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
        pkey_section
      ]);
  }

};

module.exports = User_info;