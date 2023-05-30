const inquirer = require("inquirer");

class CLI {
  init() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "text",
          message: "Input a 1-3 character title for your logo",
        },
        {
          type: "input",
          name: "textColour",
          message: "What colour do you want your font to be? (as a hex code)",
        },
        {
          type: "list",
          name: "logoShape",
          message: "What shape do you want your logo to be?",
          choices: ["circle", "square", "triangle"]
        },
        {
          type: "input",
          name: "shapeColour",
          message: "What colour do you want your shape to be? (as a hex code)",
        }
      ])
      .then((data) => {
        console.log(data);
      });
  }
}

module.exports = CLI;
