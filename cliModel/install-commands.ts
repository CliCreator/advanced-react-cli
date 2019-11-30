type InstallCommandsNPM = {
  createReactApp: string;
  TypeScriptReactObj: {
    TypeScript: {
      install: string;
      uninstall: string;
    };
    typesNode: {
      install: string;
      uninstall: string;
    };
    typesReact: {
      install: string;
      uninstall: string;
    };
    typesReactRouter: {
      install: string;
      uninstall: string;
    };
    typesReactRedux: {
      install: string;
      uninstall: string;
    };
    typesJest: {
      install: string;
      uninstall: string;
    };
  };
  propTypesObj: {
    install: string;
    uninstall: string;
  };
  reactRouterObj: {
    install: string;
    uninstall: string;
  };
  nodeSassObj: {
    install: string;
    uninstall: string;
  };
  styledComponentsObj: {
    install: string;
    uninstall: string;
  };
  reduxObj: {
    install: string;
    uninstall: string;
  };
  reduxThunkObj: {
    install: string;
    uninstall: string;
  };
  unstatedObj: {
    unstated: {
      install: string;
      uninstall: string;
    };
    unstatedNext: {
      install: string;
      uninstall: string;
    };
  };
};

const npmInstallCommands: InstallCommandsNPM = {
  createReactApp: "npx create-react-app",
  TypeScriptReactObj: {
    TypeScript: {
      install: "npm install --save typescript",
      uninstall: "npm uninstall typescript"
    },
    typesNode: {
      install: "npm install --save @types/node",
      uninstall: "npm uninstall @types/node"
    },
    typesReact: {
      install: "npm install --save @types/react @types/react-dom",
      uninstall: "npm uninstall @types/react @types/react-dom"
    },
    typesReactRouter: {
      install: "npm install --save @types/react-router @types/react-router-dom",
      uninstall: "npm uninstall @types/react-router @types/react-router-dom"
    },
    typesReactRedux: {
      install: "npm install --save @types/react-redux",
      uninstall: "npm uninstall @types/react-redux"
    },
    typesJest: {
      install: "npm install --save @types/jest",
      uninstall: "npm uninstall @types/jest"
    }
  },
  propTypesObj: {
    install: "npm i prop-types --save",
    uninstall: "npm uninstall prop-types"
  },
  reactRouterObj: {
    install: "npm i react-router react-router-dom --save",
    uninstall: "npm uninstall react-router react-router-dom"
  },
  nodeSassObj: {
    install: "npm i node-sass --save",
    uninstall: "npm uninstall node-sass"
  },
  styledComponentsObj: {
    install: "npm install styled-components",
    uninstall: "npm uninstall styled-components"
  },
  reduxObj: {
    install: "npm i redux react-redux --save",
    uninstall: "npm uninstall redux react-redux"
  },
  reduxThunkObj: {
    install: "npm i redux-thunk --save",
    uninstall: "npm uninstall redux-thunk"
  },
  unstatedObj: {
    unstated: {
      install: "npm install unstated --save",
      uninstall: "npm uninstall unstated"
    },
    unstatedNext: {
      install: "npm install unstated-next --save",
      uninstall: "npm uninstall unstated-next"
    }
  }
  // easyPeasy: "npm install easy-peasy"
};

module.exports = npmInstallCommands;
