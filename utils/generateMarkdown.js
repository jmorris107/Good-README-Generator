// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    # description
    ${data.description}

    #installation
    ${data.installation}

    #usage
    ${data.usage}

    #contribution
    ${data.contributing}

    #test
    ${data.test}

    #license
    ${data.license}


  `;
  }
  
  module.exports = generateMarkdown;
  