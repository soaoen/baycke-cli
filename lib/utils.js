const _ = require('lodash');
const pluralize = require('pluralize');


const utils = {};

/**
 * 首字母大写，包括涵盖这些符号 ‘-’ 或 ‘_’
 * @Author   宋宝文
 * @DateTime 2018-12-16T22:27:19+0800
 * @param    {string}                 value
 * @return   {string}                       
 */
utils.startCaseTrim = (value) => {
    return _.replace(_.startCase(value), / /g, '');
};

/**
 * 首字母小写，包括涵盖特色符号 ‘-’ 或 ‘_’
 * @Author   宋宝文
 * @DateTime 2018-12-16T22:55:42+0800
 * @param    {string}                 value 
 * @return   {string}                       
 */
utils.camelCase = (value) => {
    return _.camelCase(value);
};

/**
 * 复数化字符串,如果有'-','_'这种符号，先分解成数组，然后最后一个数组复数化后再用‘-’转换成字符串
 * 如 shop-article-me 复数化以后 shop-article-us
 * @Author   宋宝文
 * @DateTime 2018-12-17T00:25:48+0800
 * @param    {string}                 value 
 * @return   {string}                 
 */
utils.pluralize = (value) => {
    const words = _.words(value)
    const plural = pluralize(words[words.length - 1]);
    let result = ''
    _.forEach(words, (value, i) => {
        if (i !== words.length - 1) {
            result += value + '-';
        }
    })
    return result + plural;
}

/**
 * 获取路径中的文件名，截取最后‘/’后面的字符串
 * @Author   宋宝文
 * @DateTime 2018-12-17T13:35:47+0800
 * @param    {string}                 filepath 路径
 * @return   {string}                          
 */
utils.getFileName = (filepath) => {
    const index = filepath.lastIndexOf('\/');
    const str = filepath.substring(index + 1, filepath.length);
    return str;
}

module.exports = utils;