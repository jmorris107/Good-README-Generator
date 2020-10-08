// function to generate markdown for README
function generateMarkdown(data) {
 
  return `# ${data.title}💡
  
  
  
  # 📝 Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)

  # 🗳 Installation
  ${data.installation}
  

  # 💻 Usage
  ${data.usage}
  # 👩🏻‍💻 Contribution
  ${data.contribution}
  # 🧩 Test
  ${data.test}
  # 🚀 License
  ${data.license}

  # Question❓
  :octocat: My GitHub link: [${data.username}](https://github.com/${data.username})<br />
  <br />
   📩 If you have any question, email me here: jenniferinbaranoseidou@gmail.com<br /><br />

 📠 My repo link: ${data.repo}</li>
 
`;
}

module.exports = generateMarkdown;