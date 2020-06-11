require("./fonts/IBMPlexMono-Regular.ttf");
require("./fonts/IBMPlexMono-Light.ttf");
require("./fonts/IBMPlexMono-SemiBold.ttf");
require("./fonts/Roboto-Regular.ttf");

const logo = require("./moonad_logo_white.png").default;

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;

const front = require("./front.js");
const Moonad = require("./components/Moonad.js");

window.onload = () => render(h(Moonad), document.getElementById("main"));
