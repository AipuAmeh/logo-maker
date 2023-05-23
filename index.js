const inquirer = require("inquirer");
const fs = require("fs/promises");
const Triangle = require("./lib/Triangle");
const Square = require("./lib/Square");
const Circle = require("./lib/Circle");
const SVG = require("./lib/Svg")

inquirer
  .prompt([
    {
      type: "input",
      name: "characters",
      message: "Please type in 3 characters",
    },
    {
      type: "input",
      name: "textColor",
      message: "What text color would you like?",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose one of the following shapes",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What shape color would you like?",
    },
  ])
  .then(async (svg) => {
    //if user responds to prompts, enter response in to render method based on the class
    let newShape;
    if (svg.shape == "Circle") {
      newShape = new Circle(
        svg.characters,
        svg.shapeColor,
        svg.textColor
      );
    }
    if (svg.shape == "Triangle") {
      newShape = new Triangle(
        svg.characters,
        svg.shapeColor,
        svg.textColor
      );
    }
    if (svg.shape == "Square") {
      newShape = new Square(
        svg.characters,
        svg.shapeColor,
        svg.textColor
      );
    }
    
    try {
      console.log(newShape)
      var svgLogo = new SVG(newShape)
      console.log(svgLogo)
      await fs.writeFile("logo.svg", svgLogo.renderSVG());
      console.log("Generated logo.svg");
    } catch (error) {
      console.log(error);
    }
  });
