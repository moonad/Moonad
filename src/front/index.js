// Favicon
const logo = require("./moonad_logo.png").default;

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const fmc = require("formality-core");
const moonad = require("./client.js")();

(async () => {
  console.log(await moonad.get_post("Nat"));
})();

var text = [
  "Moonad.org",
  "----------",
  "Welcome to Moonad!",
];

const Moonad = () => {
  return h("pre", {
    style: {
      "font-size": "12px",
      "font-family": "IBMPlexMono-Light",
      "padding": "4px",
      "background": "rgb(253, 254, 255)",
      "color": "rgb(41, 42, 44)",
      "width": "100%",
      "height": "100%",
    }}, text.join("\n"));
};

window.onload = () => render(h(Moonad), document.getElementById("main"));
