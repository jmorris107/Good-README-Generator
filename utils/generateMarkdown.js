// function to generate markdown for README
function generateMarkdown(data) {
 
  return `# ${data.title}💡
  
  
  
  # Description
  📝${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  # Installation
  🗳${data.installation}
  

  # Usage
  💻${data.usage}
  # Contribution
  👩🏻‍💻${data.contribution}
  # Test
  🧩${data.test}
  # License
  ${data.license}

  # Question
  ❓${data.username}
  <br />
:octocat: Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
 <li> 📩${data.email}</li>
 <li>📠${data.repo}</li>
 
`;
}

module.exports = generateMarkdown;