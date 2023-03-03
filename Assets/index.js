//REQUIRES
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your gitHub username?",
      name: "userName",
    },
    {
      type: "input",
      message: "Provide a contact Email:",
      name: "email",
    },
    {
      type: "input",
      message: "Please enter Project Title:",
      name: "title",
    },
    {
      type: "list",
      message: "Provide Licensing:",
      choices: ["Mit", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
      name: "license",
    },
    {
      type: "input",
      message: "Provide a Description:",
      name: "description",
    },
    {
      type: "input",
      message: "Provide Installation Instructions:",
      name: "install",
    },
    {
      type: "input",
      message: "Provide Usage Instructions:",
      name: "usage",
    },
    {
      type: "input",
      message: "Provide Contribution Instructions:",
      name: "contribution",
    },
    {
      type: "input",
      message: "Provide Testing Instructions:",
      name: "test",
    },
  ])
  .then((data) => {
    console.log(data);
    fs.writeFile(
      "ReadMe.md",
      generateMarkdown.generateMarkdown(data),
      (error) => {
        error ? console.log("error") : console.log("Writing File...");
      }
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    }
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
