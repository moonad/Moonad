const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const title = h("span", 
      {style: {
        "font-family": "IBMPlexMono-Regular",
        "font-size": "27px"
      }}, "Welcome to Moonad")
    
    const subtitle = h("span", 
      {style: {
        "font-family": "Roboto-Regular",
        "font-size": "16px",
        "margin-top": "12px",
      }}, "A peer-to-peer-reviewed journal of code")

    return h("div", {
      style: {
        "background": "white",
        "color": "#003F63",
        "width": "100%",
        "height": "140px",
        "display": "flex",
        "flex-direction": "column",
        "align-items": "center",
        "padding": "20px"
      }}, [ title, subtitle ])
  }
};

module.exports = Welcome;