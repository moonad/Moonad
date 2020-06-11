const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const front = require("./../front.js");

class User_info extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    var eth_address = front.get_addr();
    eth_address = eth_address ? eth_address : "-";

    var eth_pkey = front.get_pkey();
    eth_pkey = eth_pkey ? eth_pkey : "-";

    const eth_address_div =
      h("div", {
        style: { "font-family": "IBMPlexMono-Medium", }},
        "Ethereum Address"
      )
    const eth_address_info =
      h("div", {
        style: { "font-family": "IBMPlexMono-Light",}},
        eth_address
      )
    const address_section = 
      h("div", {
        style: { "margin-top": "15px" }},
        [ eth_address_div, eth_address_info]
      )
      
    const eth_pkey_div =
      h("div", {
        style: { "font-family": "IBM Plex Mono", "font-weight": "500" }},
        "Private key"
      )
    const eth_pkey_info =
      h("div", {
        style: { "font-family": "IBMPlexMono-Light", }},
        eth_pkey
      )
    const pkey_section = 
      h("div", {
        style: { "margin-top": "15px", }},
        [ eth_pkey_div, eth_pkey_info ]
      )
    // TODO: copy button

    return h("div", {
      style: {
        "descr": "user-info-container",
        "width": "300px",
        "height": "200px",
        "margin-top": "15px",
        "margin-right": "20px",
        "background": "white",
        "z-index": "3",
        "font-size": "10px",
        "word-wrap": "break-word",
        "padding-right": "10px",
        "padding-left": "10px",
        "border": "solid 1px #D6D6D6"
      }}, [
        address_section,
        pkey_section
      ]);
  }

};

module.exports = User_info;