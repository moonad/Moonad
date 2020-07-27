const fs = require("fs");
const { gitCommitPush } = require("git-commit-push-via-github-api");
process.on("unhandledRejection", console.dir);
if (!process.env.GITHUB_API_TOKEN) {
  throw new Error("GITHUB_API_TOKEN=xxx node example.js");
}
// Reference: https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps

const git_commit = (owner, repo) => `https://api.github.com/repos/${owner}/${repo}/git/commits`

// TODO: commit a file 
// - stage locally

// var path = require("path");
// var files = path.join(__dirname,"../../db/*");

// test
function pushFiles(poid = "0x000000000000002c"){
  console.log("I'm in push files!!");
  const files = [{
    path: poid+".post", content: fs.readFileSync(__dirname + poid+".post", "utf-8"),
    path: poid+".cite", content: fs.readFileSync(__dirname + poid+".cite", "utf-8")
  }];

  gitCommitPush({
    // commit to https://github.com/maisamilena/moonad
    owner: "maisamilena",
    repo: "Moonad",
    // commit files
    files: files,
    fullyQualifiedRef: "heads/master",
    forceUpdate: false, // optional default = false
    commitMessage: "I'm commiting!"
  })
    .then(res => {
        console.log("success", res);
    })
    .catch(err => {
        console.error(err);
    });

}

module.exports = pushFiles;
