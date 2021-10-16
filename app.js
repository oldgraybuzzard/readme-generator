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
            name: 'dependencies',
            message: 'Any dependencies to install?',
            default: 'NPM'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license does your project have?',
            choices: ['MIT', 'APACHE2.0', 'OpenBSD', 'GPL3.0', 'None']
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
    ];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// const writeFile = fileContent () => {
//     return new Promise((resolve, reject) => {
//        fs.writeToFile('./dist/README.md', fileContent, err => {
//            //if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
//             if (err) {
//                 reject(err);
//                 //return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
//                 return;
//             }
//             // if everything went well, resolve the Promise and send the successful data to the `.then()` method
//             resolve ({
//                 ok: true,
//                 message: 'Your README was created! You can find it in the /dist folder.'
//             });
//         }); 
//     });
// };

// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(promptUser)
        .then((userAnswers) => {
            console.log('Generating your file, Just a few seconds more....');
            writeToFile('./dist/README.md', generateMarkdown({ ...userAnswers }));
        })
}

// // Function call to initialize app
init();
