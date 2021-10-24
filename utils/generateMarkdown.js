// function to generate markdown for the README
function generateMarkdown(data) {
  
  return `# ${data.title}

${renderBadge(data.license)}
  
## Description
${data.description}
## Table of Contents
* [Installations](#dependencies)
* [Usage](#usage)
* [Contributors](#contributors)
* [Features](#features)
* [Tests](#tests)

## Installations (Dependencies) 💻
To install dependencies, run these commands:
\`\`\`
${data.dependencies}
\`\`\`

## Github URL
[${data.github}](https://github.com/${data.github}/)
 ;}

## Usage 🏆
${data.usage}
${renderSection(data.license)}

## Contributors 😃
${data.contributors}

* Contact me at ${data.email}
* Contact my contributors at ${data.contributorEmail}

## Features
${data.feature}  

## Tests 🧪
To run tests, run these commands:
\`\`\`
${data.test}
\`\`\`
`;
}

// Function to render badge
function renderBadge(license) {
  if (license === "None") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  } else {
    if (license === "MIT") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else {
      if (license === "APACHE2.0") {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      } else {
        if (license === "OpenBSD") {
          return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
        } else {
          if (license === "GPL3.0") {
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        }
        }
      }
    }
  }
}

// Function to render link
function renderLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}


// Function to render section
function renderSection(license) {
  if (license !== "None") {
    return (
      `## License 📛
      Copyright © ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`

    )
  } else {}
  return ''
}

module.exports = generateMarkdown;
