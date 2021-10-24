var inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


//-------------------------------------------------
//                  Code below
//-------------------------------------------------

// TODO: Create an array of questions for user input
const promptUser = [
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
            type: "input",
            name: "email",
            message: "What's your email?"
        },
        {
            type: 'input',
            name: 'title',
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
            type: 'input',
            name: 'github',
            message: 'What is the url of Your Project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a url for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'dependencies',
            message: 'Any dependencies to install?',
            default: 'NPM Inquirer'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license does your project have?',
            choices: ['MIT', 'APACHE2.0', 'OpenBSD', 'GPL3.0', 'None']
        },
        {
            type: "input",
            name: "test",
            message: "What command should be run to run tests?",
            default: "None"
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
            message: 'Provide any unique steps to install your project?',
            when: ({ confirmInstallation}) => {
                if (confirmInstallation) {
                    return true;
                } else {
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmFeatures',
            message: 'Do you have any features you would like to list?',
            default: true
        },
        {
            type: 'input',
            name: 'feature',
            message: 'List your project features.',
            when: ({ confirmFeatures}) => {
                if (confirmFeatures) {
                    return true;
                } else {
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContributors',
            message: 'Do you have any contributors you would like to list?',
            default: true
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'List your contributors.',
            when: ({ confirmContributors}) => {
                if (confirmContributors) {
                    return true;
                } else {
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributorEmail',
            message: 'List your contributors email.',
            when: ({ confirmContributors}) => {
                if (confirmContributors) {
                    return true;
                } else {
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to add any screen shots?',
            default: true
        },
        {
            type: 'input',
            name: 'usage',
            message: 'To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax: /dist/assets/images/##IMAGE FILE##',
            when: ({confirmUsage}) => {
                if (confirmUsage) {
                    return true;
                } else {
                  return false;
                }
            }
        },

    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(promptUser)
        .then((userAnswers) => {
            console.log('Generating your file, Just a few seconds more....');
            console.log('Your file is created and located in the /dist folder.');
            writeToFile('./dist/README.md', generateMarkdown({ ...userAnswers }));
        })
}

// // Function call to initialize app
init();
