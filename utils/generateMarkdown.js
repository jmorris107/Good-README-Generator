// function to generate markdown for README
function generateMarkdown(data) {
 
  return `# ${data.title}
  
  <h1 align="center">${data.title} 👋</h1>
  
  
  # Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  # Installation
  ${data.installation}
  

  # Usage
  ${data.usage}
  # Contribution
  ${data.contributing}
  # Test
  ${data.test}
  # License
  ${data.license}
  # Question
  ${data.username.queryUrl}
  ${data.email}
  ${data.repo}
 
`;
}

module.exports = generateMarkdown;