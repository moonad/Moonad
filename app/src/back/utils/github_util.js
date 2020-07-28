const { exec } = require("child_process");

function git_pull() {
  exec("git status", (error, stdout, stderr) => {
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

module.exports = { git_pull };

