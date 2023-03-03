// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Mit":
      return `[![License: MIT]('https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT')`;
      break;
    case "Apache 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "GPL 3.0":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "BSD 3":
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case "None":
      return "";
      break;
    default:
      return;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    userName,
    license,
    email,
    title,
    description,
    install,
    usage,
    contribution,
    test,
  } = data;
  const licenseBadge = renderLicenseBadge(data.license);
  return `
# ${data.title}

## ${licenseBadge}

##### Table of Contents

1. [Description](#description)
2. [How to Install](#instal)
3. [How to Use](#usage)
4. [How to contribute](#contribute)
5. [How to Test](#test)
6. [Contact Me](#contact)

<a name="description"></a>

## 1. Description

    ${data.description}

<a name="install"></a>

## 2. How to Install

    ${data.install}

<a name="usage"></a>

## 3. How to Use

    ${data.usage}

<a name="contribute"></a>

## 4. How to Contribute

    ${data.contribution}

<a name="How to Test"></a>

## 5. Testing

    ${data.test}

<a name="contact"></a>

## 6. Contact Me!

My gitHub account is: ${data.userName}
  
[Link to my gitHub Account]('https://github.com/${data.userName}')  
 
You can always reach out via my email: ${data.email}
  `;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
};
