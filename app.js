const fs = require('fs');
var inquirer = require('inquirer');
const { queueScheduler } = require('rxjs');
// markdown-it
var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
var result = md.render('# markdown-it rulezz!');
// remark
// import {reporter} from 'vfile-reporter'
// import {remark} from 'remark'
// import remarkPresetLintRecommended from 'remark-preset-lint-recommended'
// import remarkHtml from 'remark-html'

//-------------------------------------------------
//                  Code below
//-------------------------------------------------

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your GitHub username? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the Title of Your Project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project: (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Would you like to add in installation instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Are there any unique steps to install your project? (Required)',
            when: ({ confirmInstallation}) => {
                if (confirmInstallation) {
                    return true;
                } else {
                  return false;
                }
            }
        }
    ]);
};



// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
       fs.writeToFile('./dist/README.md', fileContent, err => {
           //if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                //return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve ({
                ok: true,
                message: 'Your README was created! You can find it in the /dist folder.'
            });
        }); 
    });
};

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
