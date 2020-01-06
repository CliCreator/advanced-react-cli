const inquirer = require('inquirer')

const customCMD = require('../../customNodeCMD')
const errorLogging = require('../../customNodeCMD/customError')

// Cli Model
const cliModel = require('../../cliModel')
const installOption = cliModel.installOption

// CLI Install Commands
const { reactaxeObj } = require('../../cliModel/install-commands')

const { reactaxeObjYarn } = require('../../cliModel/install-commands-yarn')

const prompt = inquirer.createPromptModule()

/*

  Installs/Uninstalls Node-Sass package

*/

module.exports = class Reactaxe {
  installOrUninstall (packageInstaller) {
    prompt(installOption).then(({ decision }) => {
      if (decision === 'Install') {
        this.install(packageInstaller)
      } else if (decision === 'Uninstall') {
        this.uninstall(packageInstaller)
      }
    })
  }

  install (packageInstaller) {
    switch (packageInstaller) {
      case 'NPM':
        customCMD.get(
          `${reactaxeObj.install}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data)
          },
          'install'
        )
        console.log('Package: react-axe has been installed successfully!')
        break

      case 'Yarn':
        customCMD.get(
          `${reactaxeObjYarn.install}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data)
          },
          'install'
        )
        console.log('Package: react-axe has been installed successfully!')
        break
    }
  }

  uninstall (packageInstaller) {
    switch (packageInstaller) {
      case 'NPM':
        customCMD.get(
          `${reactaxeObj.uninstall}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data)
          },
          'uninstall'
        )
        console.log('Package: react-axe has been uninstalled successfully!')
        break

      case 'Yarn':
        customCMD.get(
          `${reactaxeObjYarn.uninstall}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data)
          },
          'uninstall'
        )
        console.log('Package: react-axe has been uninstalled successfully!')
        break
    }
  }
}
