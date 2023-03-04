// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  switch (license) {
    case "Mit":
      return `[![License: MIT](https://img.shields.io/badge/license-MIT-green)](https://www.mit.edu/~amini/LICENSE.md)`;
      break;
    case "Apache 2.0":
      return `[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-green)](https://www.apache.org/licenses/LICENSE-2.0)`;
      break;
    case "GPL 3.0":
      return `[![License: GPL 3.0](https://img.shields.io/badge/license-GPL%203.0-green)](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
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
};

const renderLicenseDescription = (license) => {
  switch (license) {
    case "Mit":
      return `This project is licensed under the MIT license. \n See [LICENSE](https://www.mit.edu/~amini/LICENSE.md) for more information!`;
      break;
    case "Apache 2.0":
      return `This project is licensed under the Apache 2.0 license. \n See [LICENSE](https://www.apache.org/licenses/LICENSE-2.0) for more information!`;
      break;
    case "GPL 3.0":
      return `This project is licensed under the Apache 2.0 license. \n See [LICENSE](https://www.gnu.org/licenses/gpl-3.0.en.html) for more information!`;
      break;
    case "BSD 3":
      return `This project is licensed under the BSD 3 license. \n See [LICENSE](https://opensource.org/licenses/BSD-3-Clause) for more information!`;
      break;
    case "None":
      return "";
      break;
    default:
      return;
  }
};

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
  const licenseDesciption = renderLicenseDescription(data.license);
  return `
# ${title}   ${licenseBadge}

<a name="description"></a>

## Description

${description}


# Table of Contents

[Description](#description)\n
  [How to Install](#install)\n
  [How to Use](#usage)\n
  [How to contribute](#contribute)\n
  [How to Test](#test)\n
  [License](#license)\n
[Contact Me](#contact)


<a name="install"></a>

## Installation

${install}

<a name="usage"></a>

## Usage

${usage}

<a name="contribute"></a>

## Contributing

${contribution}

<a name="test"></a>

## Tests

${test}

<a name="license"></a>

## License

${licenseDesciption}

<a name="contact"></a>

## Question

If you have any questions or concerns about this project please contact me!

My gitHub account is: ${userName}
  
Link to my [gitHub](https://github.com/${userName}) Account
 
You can always reach out via my email: ${email}
  `;
}

module.exports = {
  generateMarkdown,
};
