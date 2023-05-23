const inquirer = require('inquirer');
const fs = require("fs");
const shapes = require("./lib/circles");


inquirer 
   .prompt([
        {
            type: "input",
            name: "characters",
            message: "Please type in 3 characters"
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
            message: "What shape color would you like?"
        }
   ])
   .then((svg) => {
    // console.log(JSON.stringify(svg));
    console.log(svg);
    svg.shape;
    svg.characters;
    let newShape = new shapes(this.shape).render(svg)
    // console.log(newShape);
  
    //what data do you want to be written to logo file
    //call the circle shape class if it is chosen and render it to svg file
    fs.writeFileSync("logo.svg",newShape, (err) => err ? console.log(err) : console.log("Generated logo.svg"))

   })
