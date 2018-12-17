#!/usr/bin/env node

process.title = 'baycke';
const program = require('commander');
const song = require('../lib/song-generate');
const chalk = require('chalk');
const error = chalk.bold.red;
const init = require('../lib/init')
program.version(require('../package').version)
    .usage('<command> [options]')

const printGenerateExamples = () => {
    console.log('');
    console.log('Examples:');
    console.log('  song g module testpath1/testpath2 -n testname -d 测试文件 -p 我的项目');
    console.log('');
}

program
    .command('generate [type] [filepath]')
    .description('使用模版快速生成文件, (生成的文件将放入filepath文件夹)')
    .alias('g')
    .option('-n, --filename [filename]', '添加文件名称，不填写默认最后“/”后面的字符串')
    .option('-d, --description [description]', '添加文件描述，不填写默认最后“/”后面的字符串')
    .option('-p, --project [project]', '添加项目名称')
    .action(function(type, filepath, options) {
        if (!type || !filepath) {
            console.log('');
            console.log(error('是不是没整明白:'));
            console.log(error('    生产文件的类型和文件路径是必须的命令，请查看帮助！'));
            console.log('');
            options.outputHelp();
            printGenerateExamples();
            process.exit(1);
        }
        song.gen(type, filepath, options);
    })

program
    .command('init')
    .description('初始化项目')
    .action(() => {
        init.start();
    })

program.parse(process.argv);

if (!process.argv.slice(2).length) {
    program.outputHelp();
}
