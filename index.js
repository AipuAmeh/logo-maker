const inquirer = require('inquirer');
// const fs = require("fs");


inquirer 
   .prompt([
        {
            type: "input",
            name: "characters",
            message: "Please type in 3 characters"
        },
        {
            type: "input",
            name: "text color",
            message: "What text color would you like?",
        },
        {
            type: "list",
            name: "shape",
            message: "Choose one of the following shapes",
            choices: ["Circle", "Triangle", "Square"],
        }
   ])
   .then((svg) => {
    // fs.writeFileSync("logo.svg", svg, (err) => err ? console.log(err) : console.log("Success!"))
    console.log(svg)
   })
