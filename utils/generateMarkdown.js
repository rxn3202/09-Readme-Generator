// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
      case 'MIT':
          return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0':
          return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      default:
          return '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
      case 'MIT':
          return 'https://opensource.org/licenses/MIT';
      case 'Apache 2.0':
          return 'https://opensource.org/licenses/Apache-2.0';
      default:
          return '';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
      return `## License

This project is licensed under the terms of the ${license} license. For more details, see [this link](${renderLicenseLink(license)}).`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

## Description
${data.description}

## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Mockup](#preview)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contributions}

## Tests
${data.test}

## Questions
${data.questions}

${renderLicenseBadge(data.license)}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;

