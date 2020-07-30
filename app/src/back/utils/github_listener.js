var path = require("path");
require('dotenv').config({path: path.join(__dirname, "..", "..", "..", ".env")});

var express = require("express");
var app = express();
const { exec } = require("child_process");

const secret = process.env.GITHUB_WEBHOOK_SECRET || 'none';
const port = process.env.LISTENER_PORT || 81;

function git_pull() {
  exec("git pull", (error, stdout, stderr) => {
    console.log("exec git pull");
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

// Initialize
async function startup() {
  app.listen(port);
  console.log("Github listener open!");
};

startup();

app.post("/github", async (req, res) => {
  console.log("Updating from Github...");
  git_pull();git_pull
  res.send("Hi, there. What's up? I'm up...dated");
});

// // Auxiliar
// function verify_signature(req) {
//   // const signature = req.headers['x-hub-signature']
//   console.log("req raw: ",req.raw);
//   console.log(">>>> TYPE of:", typeof req.raw)
//   console.log("signature: ", signature);
//   console.log("signature sign: ", sign(req.raw));
//   // return signature && (signature === sign(req.raw))
// }

// function sign (data) {
//   const buffer = Buffer.from(data, 'utf8');
//   return 'sha1=' + crypto.createHmac('sha1', secret).update(buffer).digest('hex');
// }