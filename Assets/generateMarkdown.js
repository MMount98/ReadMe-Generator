// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Mit":
      return `[![License: MIT](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT')`;
      break;
    case "Apache 2.0":
      return `[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-green)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "GPL 3.0":
      return `[![License: GPL 3.0](https://img.shields.io/badge/license-GPL%203.0-green)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "BSD 3":
      return `[![License: BSD 3.0](https://img.shields.io/badge/license-BSD%203-green)](https://opensource.org/licenses/BSD-3-Clause)`;
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

# Table of Contents

[Description](#description)\n
  [How to Install](#instal)\n
  [How to Use](#usage)\n
  [How to contribute](#contribute)\n
  [How to Test](#test)\n
[Contact Me](#contact)

<a name="description"></a>

## Description

    ${data.description}

<a name="install"></a>

## How to Install

    ${data.install}

<a name="usage"></a>

## How to Use this Application

    ${data.usage}

<a name="contribute"></a>

## How to Contribute

    ${data.contribution}

<a name="How to Test"></a>

## Testing

    ${data.test}

<a name="contact"></a>

## Contact Me!

My gitHub account is: ${data.userName}
  
[Link to my gitHub Account]('https://github.com/${data.userName}')  
 
You can always reach out via my email: ${data.email}
  `;
}

module.exports = {
  generateMarkdown,
};
