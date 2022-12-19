<h1 align="center">Branch Clear</h1>

This script is used to delete multiple branches from multiple repositories or from just one repository.

## Installation and running the branch

It is necessary to install [NODEJS](https://nodejs.org/en/) to be able to run this script

Insert the **clearBranch.js** file in the root folder where you have the folders of the repositories you want to delete the branches from.

#### Multiple repositories

- Open the file with a code editor that supports the JavaScript language.

- Insert the repositories that will have the branches deleted:
  `const repositories = ["repo_one", "repo_two", ...];`

- If you have any branch that you do not want to delete:
  `const notDeleteBranches = ["branch_one", "branch_two", ...];`
- To run the script, run the command:
  `node clearBranch.js`

#### Single branch

## Author

[lazaroa1](https://github.com/lazaroa1)
