import inquirer from 'inquirer';

const customCMD = require('../../customNodeCMD');
const { ErrorLogging } = require('../../customNodeCMD/customError');

// CLI Model
const cliModel = require('../../cliModel');
const addPackage = cliModel.addPackage

const prompt = inquirer.createPromptModule();

/*

  Gives user to custom install TypeScript + @types packages.

*/

module.exports = class CustomInstall {
  prompt (packageInstaller) {
    let addTypeScriptNPM: string,
      addTypesNodeNPM: string,
      addTypesReactNPM: string,
      addTypesReactRouterNPM: string,
      addTypesReactReduxNPM: string,
      addTypesJestNPM: string,
      addTypeScriptYarn: string,
      addTypesNodeYarn: string,
      addTypesReactYarn: string,
      addTypesReactRouterYarn: string,
      addTypesReactReduxYarn: string,
      addTypesJestYarn: string

    /*
        Prompts to install TypeScript
      */
    prompt({
      ...addPackage[0],
      message: 'Would you like to install TypeScript? (Y/N)'
    }).then(({ packageAdd }) => {
      if (['y', 'yes'].includes(packageAdd.toLowerCase())) {
        addTypeScriptNPM = 'typescript'
        addTypeScriptYarn = 'typescript'
      } else if (['n', 'no'].includes(packageAdd.toLowerCase())) {
        addTypeScriptNPM = ''
        addTypeScriptYarn = ''
      }
      /*
        Prompts to install @types/node
      */
      prompt({
        ...addPackage[0],
        message: 'Would you like to add @types/node? (Y/N)'
      }).then(({ packageAdd }) => {
        if (['y', 'yes'].includes(packageAdd.toLowerCase())) {
          addTypesNodeNPM = 'typescript'
          addTypesNodeYarn = '@types/node'
        } else if (['n', 'no'].includes(packageAdd.toLowerCase())) {
          addTypesNodeNPM = ''
          addTypesNodeYarn = ''
        };
        /*
          Prompts to install @types/react @types/react-dom
        */
        prompt({
          ...addPackage[0],
          message: 'Would you like to add @types/react? (Y/N)'
        }).then(({ packageAdd }) => {
          if (['y', 'yes'].includes(packageAdd.toLowerCase())) {
            addTypesReactNPM = '@types/react @types/react-dom'
            addTypesReactYarn = '@types/react @types/react-dom'
          } else if (['n', 'no'].includes(packageAdd.toLowerCase())) {
            addTypesReactNPM = ''
            addTypesReactYarn = ''
          };
          /*
            Prompts to install @types/react-router @types/react-router-dom
          */
          prompt({
            ...addPackage[0],
            message: 'Would you like to add @types/react-router? (Y/N)'
          }).then(({ packageAdd }) => {
            if (['y', 'yes'].includes(packageAdd.toLowerCase())) {
              addTypesReactRouterNPM =
                '@types/react-router @types/react-router-dom'
              addTypesReactRouterYarn =
                '@types/react-router @types/react-router-dom'
            } else if (['n', 'no'].includes(packageAdd.toLowerCase())) {
              addTypesReactRouterNPM = ''
              addTypesReactRouterYarn = ''
            };

            /*
              Prompts to install @types/react-redux
            */

            prompt({
              ...addPackage[0],
              message: 'Would you like to add @types/react-redux? (Y/N)'
            }).then(({ packageAdd }) => {
              if (['y', 'yes'].includes(packageAdd.toLowerCase())) {
                addTypesReactReduxNPM = '@types/react-redux'
                addTypesReactReduxYarn = '@types/react-redux'
              } else if (['n', 'no'].includes(packageAdd.toLowerCase())) {
                addTypesReactReduxNPM = ''
                addTypesReactReduxYarn = ''
              };

              /*
                Prompts to install @types/jest
              */
              prompt({
                ...addPackage[0],
                message: 'Would you like to add @types/jest? (Y/N)'
              }).then(({ packageAdd }) => {
                if (['y', 'yes'].includes(packageAdd.toLowerCase())) {
                  addTypesJestNPM = '@types/jest'
                  addTypesJestYarn = '@types/jest'
                } else if (['n', 'no'].includes(packageAdd.toLowerCase())) {
                  addTypesJestNPM = ''
                  addTypesJestYarn = ''
                };

                switch (packageInstaller) {
                  case 'NPM':
                    customCMD.get(
                      ` npm install --save ${addTypeScriptNPM} ${addTypesNodeNPM} ${addTypesReactNPM} ${addTypesReactRouterNPM} ${addTypesReactReduxNPM} ${addTypesJestNPM}`,
                      (err, data, stderr) => {
                        err ? console.log(err) : ErrorLogging(stderr, data)
                      },
                      'install'
                    );
                    break;

                  case 'Yarn':
                    customCMD.get(
                      `yarn add ${addTypeScriptYarn} ${addTypesNodeYarn} ${addTypesReactYarn} ${addTypesReactRouterYarn} ${addTypesReactReduxYarn} ${addTypesJestYarn}`,
                      (err, data, stderr) => {
                        err ? console.log(err) : ErrorLogging(stderr, data)
                      },
                      'install'
                    );
                };
              });
            });
          });
        });
      });
    });
  };
};
