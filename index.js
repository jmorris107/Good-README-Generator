// array of questions for user
const generateMarkdown =require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs")



const questions = [
{
    type: "input",
    name: "title",
    message: "Enter your project title."
},

{
    type: "input",
    name: "description",
    message: "Enter description."
},

{
    type: "input",
    name: "installation",
    message: "Enter installation instructions."
},

{
    type: "input",
    name: "usage",
    message: "Enter usage information."
},

{
    type: "input",
    name: "contribution",
    message: "Enter contribution guidlines."
},

{
    type: "input",
    name: "test",
    message: "Enter test instructions."
},

{
    type: "list",
        message: "what's your license? ",
        name: "license",
        choices: [

    "None",

    "Apache License 2.0",

    "GNU General Public License v3.0",

    "MIT License",

    "BSD 2-Clause 'Simplified' License",

    "BSD 3-Clause 'New' or 'Revised' License",

    "Boost Software License 1.0",

    "Creative Commons Zero v1.0 Universal",

    "Eclipse Public License 2.0",

    "GNU Affero General Public License v3.0",

    "GNU General Public License v2.0",

    "GNU Lesser General Public License v2.1",

    "Mozilla Public License 2.0",

    "The Unlicense"

        ]
}
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
