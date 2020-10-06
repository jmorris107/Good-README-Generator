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
    name: "username",
    message: "Enter your Github username."
},

{
    type: "list",
        message: "So, what's your favourite color? ",
        name: "color",
        choices: [
            "green",
            "blue",
            "pink",
            "red"
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
