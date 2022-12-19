const { exec } = require("child_process");

// Branches that will be deleted
let branches = [];

// Repositories that will navigate
const repositories = ["back"];

// Repositories that will not be deleted
const notDeleteBranches = ["dev", "staging", "master"];

repositories.forEach((repository) =>
  exec(`cd ${repository} && git branch`, (error, stdout) => {
    if (error) {
      console.error(`Error adding branch: ${error.message}`);
    } else {
      branches = [...stdout.replace(/[ *]/g, "").trim().split("\n")];

      if (notDeleteBranches.length > 0) {
        branches = branches.filter(
          (branch) => !notDeleteBranches.includes(branch)
        );
      }

      branches.forEach((branch) => {
        exec(`cd ${repository} && git branch -D ${branch}`, (error, stdout) => {
          if (error) {
            console.log(`Error deleting branch: ${error.message}`);
          } else {
            console.log(`branch deleted: ${stdout}`);
          }
        });
      });
    }
  })
);
