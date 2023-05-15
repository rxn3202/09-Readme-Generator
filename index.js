// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require('fs');
// TODO: Create an array of questions for user input
// title, description, installation instructions, usage information, contribution guidelines, test instructions, and questions
const questions = [
    {
        type: "input",
        message: "Wwat is the title of the project",
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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
