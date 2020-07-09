// Code highlighting and hyperlinking

const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;

const Link = (name, onClick) => {
  return h("span", {
    style: {
      "text-decoration": "underline",
      "cursor": "pointer",
    },
    onClick,
  }, name);
};

module.exports = Link;
