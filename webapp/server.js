var express = require("express");
var fs = require("fs");
var path = require("path");
var app = express();
var path_of = dirs => path.join(__dirname, ...dirs);

app.get("*", async (req, res, next) => {
  var file = req.url.split("/").pop().replace(/[^0-9a-zA-Z_.]/g,"");
  if (file.length > 0 && fs.existsSync(path_of(["docs", file]))) {
    res.sendFile(path_of(["docs", file]));
  } else {
    res.sendFile(path_of(["docs", "index.html"]));
  }
  //} else if (req.url.slice(0,3) === "/c/") {
    //var name = req.url.slice(3);
    //if (Defs[name] && Defs[name].core) {
      //res.set("Content-Type", "text/plain").send(name + ": "
        //+ fm.synt.stringify(Defs[name].core.type) + "\n  "
        //+ fm.synt.stringify(Defs[name].core.term));
    //} else {
      //res.set("Content-Type", "text/plain").send("-term_not_found");
    //};
  //} else if (req.url.slice(0,3) === "/f/") {
    //var name = req.url.slice(3);
    //if (name.indexOf("..") === -1 && fs.existsSync(path_of(["lib", name+".fm"]))) {
      //res.set("Content-Type", "text/plain").send(fs.readFileSync(path_of(["lib", name+".fm"]), "utf8"));
    //} else {
      //res.set("Content-Type", "text/plain").send("-term_not_found");
    //};
  //} else if (req.url === "/a") {
    //var code = "";
    //var lib_files = fs.readdirSync(path_of(["lib"])).filter(x => x.slice(-3) === ".fm");
    //for (var lib_file of lib_files) {
      //var lib_code = fs.readFileSync(path_of(["lib",lib_file]), "utf8");
      //code += lib_code+"\n\n";
    //}
    //res.set("Content-Type", "text/plain").send(code);
  //} else {
    //var file = req.url.split("/").pop().replace(/[^0-9a-zA-Z_.]/g,"");
    //if (file.length > 0 && fs.existsSync(path_of(["sys", "docs", file]))) {
      //res.sendFile(path_of(["sys", "docs", file]));
    //} else {
      //res.sendFile(path_of(["sys", "docs", "index.html"]));
    //}
  //};
});

app.listen(80);
console.log("Listening at 80");
