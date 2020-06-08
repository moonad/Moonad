// Code highlighting and hyperlinking

const fm = require("formality-lang");
const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;

const Code = ({code, on_click_post}) => {
  var tags = fm.lang.parse(code).tags;
  var elems = [];
  var txt_col = "rgb(102,172,182)";
  var nam_col = "rgb(160,162,166)";
  var nul_col = "rgb(112,146,188)";
  var str_col = "rgb(204,69,49)";
  var ref_col = "rgb(157, 147, 171)";
  var typ_col = "rgb(172,111,52)";
  for (let tag of tags) {
    let color = null;
    let click = null;
    let decor = null;
    let cursr = null;
    switch (tag.ctor) {
      case "nam":
        color = nam_col;
        break;
      case "var":
        color = nam_col;
        break;
      case "txt":
        if (tag.text === "Type") {
          color = typ_col;
        } else {
          color = txt_col;
        }
        break;
      case "nul": // ok 
        color = nul_col;
        break;
      case "str":
        color = str_col;
        break;
      case "ref":
        color = ref_col;
        click = () => {console.log("TODO")};
        decor = "underline";
        cursr = "pointer";
        break;
    }
    elems.push(h("span", {
      onClick: click,
      style: {
        "color": color,
        "text-decoration": decor,
        "cursor": cursr,
      }
    }, tag.text));
  };
  return h("div", {
    style: {
      "background": "rgb(247,248,250)",
      "padding": "4px",
    }
  }, elems);
};

module.exports = Code;
