require("./IBMPlexMono-Medium.ttf");
require("./fonts/IBMPlexMono-Regular.ttf");
require("./fonts/IBMPlexMono-Light.ttf");
require("./fonts/IBMPlexMono-SemiBold.ttf");
require("./fonts/Roboto-Regular.ttf");
require("./fonts/OpenSans-Light.ttf");
require("./fonts/OpenSans-Regular.ttf");

require("./moonad_logo.png").default;

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;

const front = require("./front.js");
const Moonad = require("./components/Moonad.js");

window.onload = () => render(h(Moonad), document.getElementById("main"));
