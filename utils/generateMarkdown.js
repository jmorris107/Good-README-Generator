// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    # Description
    ${data.description}

    # Table of contents
    - [Description](#Description)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [Licence](#Licence)
    - [Contributors](#Contributors)
    - [Test](#Test)
    - [Repository Link](#Repository)
    - [GitHub Info](#GitHub) 

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
    ${data.username}
    ${data.email}
    ${data.repo}


   


  `;
  }
  
  module.exports = generateMarkdown;
  