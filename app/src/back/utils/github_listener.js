var path = require("path");
require('dotenv').config({path: path.join(__dirname, "..", "..", "..", ".env")});

var express = require("express");
var app = express();

var { createHmac }  = require("crypto");

var github_util = require("./github_util.js");

const secret = process.env.GITHUB_WEBHOOK_SECRET || 'none';

// Initialize
async function startup() {
  app.listen(81);
  console.log("Github listener open!");
};

startup();

app.post("/github", async (req, res) => {
  console.log("POST GITHUB");
  if(verify_signature(req)) {
    github_util.git_pull();
    res.send("Hi, there. What's up? I'm up...dated");
  } else {
    console.log("not authorized");
    res.send("You have no power here.");
  }
});

// Auxiliar
function verify_signature(req) {
  const signature = req.headers['x-hub-signature']
  return signature && (signature === sign(req.raw))
}

function sign (data) {
  const buffer = Buffer.from(data, 'utf8');
  return 'sha1=' + crypto.createHmac('sha1', secret).update(buffer).digest('hex');
}