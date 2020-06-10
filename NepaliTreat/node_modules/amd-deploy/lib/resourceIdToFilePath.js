/**
 * @file 模块 ID 转为文件路径
 * @author musicode
 */

var path = require('path');
var util = require('./util');

/**
 * 文件路径的转换取决与 baseUrl 的配置，如果是绝对路径，返回就是绝对路径
 *
 * @param {string} moduleId 模块 ID
 * @param {Object} config 包含 baseUrl paths 等配置项
 * @return {string} 文件路径
 */
module.exports = function (moduleId, config) {

    var baseUrl = config.baseUrl;

    var resolvePath = function (relativePath, name) {

        if (!util.isRelativePath(relativePath)) {
            return null;
        }

        var url = util.joinPath(
            baseUrl,
            relativePath,
            name ? moduleId.replace(name, '.') : moduleId
        );

        var ext = url.split('.').pop();

        // 为了避免路径包括 /2.0.1/ 之类的版本号
        // 这里判断扩展名长度要小余 5，即最大的为 jpeg
        // 有问题再改
        if (ext && ext.length < 5) {
            return url;
        }

        return url + '.js';

    };

    var i = 0;
    var item;


    var packages = config.packages || [ ];
    var firstTerm = moduleId.split('/')[0];

    while (item = packages[i++]) {

        var name = item.name;

        if (firstTerm === name) {

            if (moduleId === name) {
                moduleId += '/' + (item.main || 'main');
            }

            return resolvePath(item.location, name);

        }

    }

    i = 0;

    var paths = config.paths || { };
    var pathKeys = Object.keys(paths);

    while (item = pathKeys[i++]) {

        // 前缀匹配
        if (moduleId.indexOf(item) === 0) {
            return resolvePath(paths[item], item);
        }

    }

    return resolvePath('.');

};
