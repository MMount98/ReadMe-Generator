// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Mit":
      return "https://img.shields.io/aur/license/in";
      break;
    case "Apache 2.0":
      return "https://img.shields.io/hexpm/l/plug";
      break;
    case "GPL 3.0":
      return "https://img.shields.io/badge/license-GPL%203.0-green";
      break;
    case "BSD 3":
      return "https://img.shields.io/badge/license-BSD%203-green";
      break;
    case "None":
      return "";
      break;
    default:
      return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    userName,
    email,
    title,
    description,
    install,
    usage,
    contribution,
    test,
  } = data;
  console.log("hello");
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
};
