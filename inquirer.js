const inquirer = require("inquirer");

class CLI {
  init() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "logoText",
          message: "Input a 1-3 character title for your logo",
        },
      ])
      .then((data) => {
        console.log(data);
      });
  }
}

module.exports = CLI;