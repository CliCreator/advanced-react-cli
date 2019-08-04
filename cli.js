#!/usr/bin/env node
//tyest
const [...args] = process.argv

// console.log(`folder name ${args[2]}`);
// console.log(`folder location ${args[3]}`);

// Current working directory
const cwd = process.cwd()
console.log(cwd)

const inquirer = require('inquirer')

const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')

// Cli Model
const cliModel = require('./cliModel')
const cliCommand = cliModel.cliCommand

// CLI Main Options
const options = require('./options')
const prompt = inquirer.createPromptModule()

clear()
console.log(
  chalk.green(
    figlet.textSync('Adv. React CLI', {
      horizontalLayout: 'fitted',
      font: 'Small',
      verticalLayout: 'full'
    })
  )
)

prompt(cliCommand).then(answers => {
  options(answers)
})
