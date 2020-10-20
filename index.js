// array of questions for user
const generateMarkdown =require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");


const questions = [
{
    type: "input",
    name: "title",
    message: "What is your project title?"
},

{
    type: "input",
    name: "description",
    message: "Type description here."
},

{
    type: "input",
    name: "installation",
    message: "How do you install it?"
},

{
    type: "input",
    name: "usage",
    message: "How do you use it?"
},

{
    type: "input",
    name: "contribution",
    message: "What is your contribution?"
},

{
    type: "input",
    name: "test",
    message: "How do you run test?"
},

{
    type: "list",
        message: "what is your license? ",
        name: "license",
        choices: [

                "None",
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"

        ]
},

{
    type: "input",
    name: "username",
    message: "What is your Github username?"
},

{
    type: "input",
    name: "email",
    message: "What is your email address?"
},

{
    type: "input",
    name: "repo",
    message: "What is your repo link?"
},

];

// function to write README file
function writeToFile(fileName, data) {
    ("README.md", generateMarkdown.generateMarkdown(data), function (err){
        if(err) throw err;
        console.log("README page has generated.")    
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(userInfo) {
        // userInfo is an object
        // const userInfo = {
            //title: title from the user
            //description: description from the user
        // }
        const markdownString = generateMarkdown(userInfo)
        fs.writeFile('README.md', markdownString, function(err) {
            if(err) {
                console.log(err)
            }
            else {
                console.log('generated README')
            }
        })
    },
    // make the questions in the questions array
    // finish making the string that will be turned into the markdown file
    // the string will be in the generateMarkdown function {
     
     e => {
        console.log(`The file could not be generated because the user does not exist.`);
    })
};

// function call to initialize program
init();




