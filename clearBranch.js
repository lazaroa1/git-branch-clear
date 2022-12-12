const { exec } = require("child_process");

let branchs = [];
const repos = ["server-exmed", "web-exmed"];

repos.forEach((repo) =>
  exec(`cd ${repo} && git branch`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  })
);
