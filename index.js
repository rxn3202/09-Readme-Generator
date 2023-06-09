// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// title, description, installation instructions, usage information, contribution guidelines, test instructions, and questions
const questions = [
    {
        type: "input",
        message: "What is the title of the project",
        name: "title",
    },
    {
        type: "input",
        message: "what is the description of the project",
        name: "description",
    },
    {
        type: "input",
        message: "installation of the project",
        name: "installation",
    },
    {
        type: "input",
        message: "what is the usage of the project",
        name: "usage",
    },
    {
        type: "input",
        message: "what are the contributions of the project",
        name: "contributions",
    },
    {
        type: "input",
        message: "project test",
        name: "test",
    },
    {
        type: "input",
        message: "any questions for the project",
        name: "questions",
    },
    {
        type: "list",
        message: "Which license would you like to use for this project?",
        name: "license",
        choices: ['MIT', 'Apache 2.0', 'Mozilla 2.0', 'None'],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log("Success!");
    })
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        console.log(generateMarkdown(response));
        writeToFile("testreadme.md" , response);
    });
    
}

// Function call to initialize app
init();
