const inquirer = require('inquirer')

// Cli Model
const { addPackage, installFolder, YarnOrNpm } = require('../../cliModel')
const { generalQuestions } = require('../../cliModel')

//Import CRA Install Dependencies
const configureInstall = require('./configureInstall')

const prompt = inquirer.createPromptModule()

var questions = [
  ...generalQuestions,
  {
    type: 'input',
    name: 'reactRouter',
    message: 'Would you like to add React Router? (Y/N)'
  },
  {
    type: 'input',
    name: 'reactRedux',
    message: 'Would you like to add Redux? (Y/N)'
  }
]

/*

  Installs a Boilerplate react application using Create-react-app + optional packages

*/
module.exports = {
  async CRAPrompt () {
    try {
      var answers = await prompt(questions)
      configureInstall(answers)
    } catch (err) {
      console.error(`Something went wrong: ${err}`)
    }
  }
}
