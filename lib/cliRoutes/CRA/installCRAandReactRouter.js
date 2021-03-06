'use strict'

var customCMD = require('../../customNodeCMD')

var errorLogging = require('../../customNodeCMD/customError')

var _require = require('../../cliModel/install-commands'),
  createReactApp = _require.createReactApp,
  reactRouterObj = _require.reactRouterObj

var _require2 = require('../../cliModel/install-commands-yarn'),
  createReactAppYarn = _require2.createReactAppYarn,
  reactRouterObjYarn = _require2.reactRouterObjYarn

module.exports = function (folderName, packageInstaller) {
  switch (packageInstaller) {
    case 'NPM':
      customCMD.get(
        ' mkdir '
          .concat(folderName, ' && cd ')
          .concat(folderName, ' && ')
          .concat(createReactApp, ' . && ')
          .concat(reactRouterObj.install),
        function (err, data, stderr) {
          return err ? console.log(err) : errorLogging(stderr, data)
        },
        'install'
      )
      break

    case 'Yarn':
      customCMD.get(
        ' mkdir '
          .concat(folderName, ' && cd ')
          .concat(folderName, ' && ')
          .concat(createReactAppYarn, ' . && ')
          .concat(reactRouterObjYarn.install),
        function (err, data, stderr) {
          return err ? console.log(err) : errorLogging(stderr, data)
        },
        'install'
      )
      break
  }
}
