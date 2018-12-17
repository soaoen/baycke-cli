const initConfig = require('./init-config');
const inquirer = require('inquirer');

const init = {};

let configTemp = {};

init.start = () => {
    nameInit();
}

//专题名
const nameInit = () => {
    inquirer.prompt(initConfig.nameInit).then((args) => {
        getConfig(args);
        //作者名
        authorInit()
    })
};

//作者名
const authorInit = () => {
    inquirer.prompt(initConfig.author).then((args) => {
        getConfig(args, true);
    })
};

const getConfig = (args, last) => {
    configTemp = Object.assign(configTemp, args);
    if (last) {
        console.log(configTemp);
        return configTemp;
    }
}

module.exports = init;