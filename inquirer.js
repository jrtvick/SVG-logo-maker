const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Square, Triangle } = require("./shape");

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
            shape = new Circle();
            break;
          case "square":
            shape = new Square();
            break;
          case "triangle":
            shape = new Triangle();
            break;
        }
        shape.setColour(data.shapeColour);
        const svg = new SVG();
        svg.setText(data.text, data.textColour);
        svg.setShape(shape);
        console.log(svg.render());
      });
  }
}

module.exports = CLI;
