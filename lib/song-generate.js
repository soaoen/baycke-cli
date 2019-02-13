const template = require('art-template');
const path = require('path');
const date = new Date();
const fs = require('fs-extra');
const utils = require('./utils');
const chalk = require('chalk');
const error = chalk.bold.red;

/**
 * 生成文件
 * @Author   宋宝文
 * @DateTime 2018-12-17T13:51:24+0800
 * @param    {string}                 type     生成的类型，有module,model,interface,controller,index,router
 * @param    {string}                 filepath 文件路径
 * @param    {string}                 options  参数
 * @return   {void}                          
 */
const gen = (type, filepath, options) => {
    const src = path.join(process.cwd(), 'src');
    fs.pathExists(src)
        .then((exists) => {
            if (!exists) {
                console.error('没有src目录');
                process.exit(1);
                return;
            } else {
                const filename = options.filename || utils.getFileName(filepath);
                const startCaseName = utils.startCaseTrim(filename); // 转换为首字母大写
                const camelCaseName = utils.camelCase(filename); // 转换为首字母小写
                const pluralName = utils.camelCase(utils.pluralize(filename)); // 转换为复数

                const content = {
                    date: date.toString(),
                    file: {
                        name: filename,
                        startCaseName: startCaseName,
                        camelCaseName: camelCaseName,
                        pluralName: pluralName,
                        description: options.description || filename,
                        project: options.project || ''
                    }
                }
                const thispath = path.join(process.cwd(), 'src/modules', filepath);

                switch (type) {
                    case 'module':
                        gModule(thispath, content);
                        console.log('已经生成Module');
                        break;
                    case 'mmodule':
                        gMModule(thispath, content);
                        console.log('已经生成Module');
                        break;
                    case 'controller':
                        const controller = template(path.resolve(__dirname, '../template/module/filename.controller.art'), content);
                        fs.ensureDir(thispath).then(() => {
                            fs.writeFile(path.join(thispath, `${content.file.name}.controller.ts`), controller);
                        })
                        gController(thispath, content)
                        console.log('已经生成controller');
                        break;
                    default:
                        console.error('no command type!');
                        process.exit(1);
                        break;
                }
            }
        })

}

/**
 * 生成controller
 * @Author   宋宝文
 * @DateTime 2018-12-17T13:41:16+0800
 * @param    {string}                 thispath 当前文件夹
 * @param    {object}                 content  模版替换内容
 * @return   {void}                          
 */
const gController = (thispath, content) => {
    const controller = template(path.resolve(__dirname, '../template/module/filename.controller.art'), content);
    fs.ensureDir(thispath).then(() => {
        fs.writeFile(path.join(thispath, `${content.file.name}.controller.ts`), controller);
    })
}

/**
 * 生成全部文件,没有mongoose
 * @Author   宋宝文
 * @DateTime 2018-12-17T13:43:12+0800
 * @param    {string}                 thispath 当前文件夹
 * @param    {object}                 content  模版替换内容
 * @return   {void}                          
 */
const gModule = (thispath, content) => {
    const controller = template(path.resolve(__dirname, '../template/module/filename.controller.art'), content);
    const interface = template(path.resolve(__dirname, '../template/module/filename.interface.art'), content);
    const model = template(path.resolve(__dirname, '../template/module/filename.model.art'), content);
    const router = template(path.resolve(__dirname, '../template/module/filename.router.art'), content);
    const index = template(path.resolve(__dirname, '../template/module/index.art'), content);
    fs.ensureDir(thispath).then(() => {
        fs.writeFile(path.join(thispath, `${content.file.name}.controller.ts`), controller);
        fs.writeFile(path.join(thispath, `${content.file.name}.interface.ts`), interface);
        fs.writeFile(path.join(thispath, `${content.file.name}.model.ts`), model);
        fs.writeFile(path.join(thispath, `${content.file.name}.router.ts`), router);
        fs.writeFile(path.join(thispath, `index.ts`), index);
    })
}

/**
 * 生成全部文件, 包含mongoose 的model,和 interface
 * @Author   宋宝文
 * @DateTime 2018-12-18T10:57:04+0800
 * @param    {[type]}                 thispath [description]
 * @param    {[type]}                 content  [description]
 * @return   {[type]}                          [description]
 */
const gMModule = (thispath, content) => {
    const controller = template(path.resolve(__dirname, '../template/module/filename.controller.art'), content);
    const interface = template(path.resolve(__dirname, '../template/module/filename.m.interface.art'), content);
    const model = template(path.resolve(__dirname, '../template/module/filename.m.model.art'), content);
    const router = template(path.resolve(__dirname, '../template/module/filename.router.art'), content);
    const index = template(path.resolve(__dirname, '../template/module/index.art'), content);
    fs.ensureDir(thispath).then(() => {
        fs.writeFile(path.join(thispath, `${content.file.name}.controller.ts`), controller);
        fs.writeFile(path.join(thispath, `${content.file.name}.interface.ts`), interface);
        fs.writeFile(path.join(thispath, `${content.file.name}.model.ts`), model);
        fs.writeFile(path.join(thispath, `${content.file.name}.router.ts`), router);
        fs.writeFile(path.join(thispath, `index.ts`), index);
    })
}

module.exports = {
    gen
}
