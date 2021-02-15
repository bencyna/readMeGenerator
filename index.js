// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const promptUser = () => {
  // Create an array of questions for user input
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of your project? ",
        name: "title",
      },
      {
        type: "list",
        message: "What liscnece are you using? ",
        name: "licence",
        choices: ["MIT", "Apache", "BSD", "Other"],
      },
      {
        type: "input",
        message: "Provide a description for your project. ",
        name: "description",
      },
      {
        type: "input",
        message: "Provide the installation instructions for this project. ",
        name: "installation",
      },
      {
        type: "input",
        message: "Provide the usage of this application",
        name: "usage",
      },
      {
        type: "input",
        message: "Who contributed to this project? ",
        name: "contributing",
      },
      {
        type: "input",
        message: "Provide some test instructions. ",
        name: "tests",
      },

      {
        type: "input",
        message: "What is your email",
        name: "email",
      },
      {
        type: "input",
        message: "What is your GitHub URL? ",
        name: "GitHub",
      },
    ])
    .then((answers) => {
      let badge = "";
      let licenseName = "";
      let {
        title,
        license,
        description,
        installation,
        usage,
        contributing,
        tests,
        email,
        GitHub,
      } = answers;
      if ((license = "MIT")) {
        badge =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        licenseName = "MIT license";
      }
      if ((license = "Apache")) {
        badge =
          "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        licenseName = "Apache License";
      }
      if ((licence = "BSD")) {
        badge =
          "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        licenseName = "BSD License";
      }

      const newFile = `# ${title}

   ${badge}
    
   ## Description
   ${description}    
  
   ## Table Of Contents
   * [Installation](##Installation)
   * [Usage](##Usage)
   * [License](##License)
   * [Contributing](##Contributing)
   * [Tests](##Tests)
   * [Questions](##Questions)
  
   ## Installation
   ${installation}
  
   ## Usage
   ${usage}

   ## License
   This project is covered under the ${licenseName}  
      
   ## Contributing
   ${contributing}
  
   ## Tests
   ${tests}
  
   ## Questions
   If you have any questions about this project, you can veiw my github account at ${GitHub} or email me at ${email}
   `;

      fs.writeFile("README.md", newFile, null, (err) => {
        err
          ? console.log(err)
          : console.log("ReadMe file successfully created!");
      });
    });
};
promptUser()

