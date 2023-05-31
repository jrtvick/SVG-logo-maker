const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Square, Triangle } = require("./shape");
const { writeFile } = require("fs/promises");

class CLI {
  init() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "text",
          message: "Input a 1-3 character title for your logo",
          validate: (text) => {
            if (text.length <= 3) {
              return true;
            } else return "The title must be 3 characters or less";
          }
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
          choices: ["circle", "square", "triangle"],
        },
        {
          type: "input",
          name: "shapeColour",
          message: "What colour do you want your shape to be? (as a hex code)",
        },
      ])
      .then((data) => {
        let shape;
        switch (data.logoShape) {
          case "circle":
            shape = new Circle(data.shapeColour);
            break;
          case "square":
            shape = new Square(data.shapeColour);
            break;
          case "triangle":
            shape = new Triangle(data.shapeColour);
            break;
        }
        const svg = new SVG();
        svg.setText(data.text, data.textColour);
        svg.setShape(shape);
        return writeFile("generated-logo.svg", svg.render());
      })
      .then(() => {
        console.log("success!")
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

module.exports = CLI;
