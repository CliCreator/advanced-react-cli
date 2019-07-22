const fs = require('fs')

const customCMD = require('../../customNodeCMD')
const errorLogging = require('../../customNodeCMD/customError')
const {
  createReactApp,
  reactRouterObj,
  reduxObj
} = require('../../cliModel/install-commands')
const {
  createReactAppYarn,
  reactRouterObjYarn,
  reduxObjYarn
} = require('../../cliModel/install-commands-yarn')
const ReduxBoilerPlate = require('../../cliModel/starter-code/redux')

module.exports = function configureInstall (installInfo) {
  var yes = ['Y', 'y', 'Yes', 'yes', 'YES', '']
  var { packageManager, folderName } = installInfo
  var command = ''

  if (folderName !== '.' && folderName !== '') {
    command += `mkdir ${folderName} && cd ${folderName} &&`
  }

  if (packageManager) {
    command += ` ${
      packageManager.toLowerCase() == 'npm'
        ? createReactApp
        : createReactAppYarn
    } .`
  }

  if (yes.includes(installInfo.reactRouter)) {
    command += ` && ${
      packageManager.toLowerCase() == 'npm'
        ? reactRouterObj.install
        : reactRouterObjYarn.install
    }`
  }

  if (yes.includes(installInfo.reactRedux)) {
    fs.appendFile('store.js', ReduxBoilerPlate, err => {
      if (err) throw err
    })
    command += ` && ${
      packageManager == 'npm' ? reduxObj.install : reduxObjYarn.install
    } && mkdir store && cd store && touch store.js && cat < ../../store.js > store.js && cd .. && cd .. && rm store.js`
  }

  customCMD.get(
    command,
    (err, data, stderr) =>
      err ? console.log(err) : errorLogging(stderr, data),
    'install'
  )
}
