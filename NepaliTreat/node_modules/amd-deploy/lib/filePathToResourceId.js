/**
 * @file 文件路径转为模块 ID
 * @author musicode
 */

var path = require('path');
var util = require('./util');

/**
 * 确保路径以 / 结束
 *
 * @inner
 * @param {string} filePath
 * @return {string}
 */
function endWithSlash(filePath) {

    if (filePath[ filePath.length - 1 ] !== '/') {
        filePath += '/';
    }

    return filePath;

}

/**
 * 文件路径的转换取决与 baseUrl 的配置，如果是绝对路径，返回就是绝对路径
 *
 * @param {string} filePath 文件路径
 * @param {Object} config 包含 baseUrl paths 等配置项
 * @return {Array} 模块 ID
 */
module.exports = function (filePath, config) {

    var baseUrl = util.toUnixFilePath(
        config.baseUrl
    );

    filePath = util.toUnixFilePath(
        filePath.replace(/\.js$/i, '')
    );

    var modules = [ ];
    var modulesMap = { };

    var addModule = function (part1, part2) {

        var list = [ ];

        [
            part1,
            part2
        ]
        .forEach(function (part) {

            if (part) {
                if (part[0] === '/') {
                    part = part.substr(1);
                }
                list.push(part);
            }

        });

        var moduleId = list.join('/');

        if (!modulesMap[moduleId]) {
            modules.push(moduleId);
            modulesMap[moduleId] = 1;
        }
    };

    var packages = config.packages || [ ];

    packages.forEach(function (pkg) {

        var name = pkg.name;
        var main = pkg.main || 'main';
        var location = pkg.location;

        if (!util.isRelativePath(location)) {
            return;
        }

        location = util.toUnixFilePath(
            util.joinPath(baseUrl, location)
        );

        location = endWithSlash(location);

        // 匹配上一个包
        if (filePath.indexOf(location) === 0) {

            // 如果模块 id 是包名
            // 比如 cobble，也可以写作 cobble/main
            // 这时 cobble/main 要排前面，cobble 排后面
            //
            // 反应在模块定义上，如下
            // define('cobble/main', [], function (require) {
            //     require('./a');
            // });
            // define('cobble', ['cobble/main'], function (e) {return e;});
            //
            // 模块的逻辑要定义在完整 id 下，如 cobble/main
            // 这样它下面的 relative id 才能被正确解析

            // 这里保证完整 id 在前面，这样外部优先用第一个即可

            addModule(
                name,
                filePath.replace(location, '')
            );

            if (filePath === location + '/' + main) {
                addModule(name);
            }

        }
    });


    var paths = config.paths || { };
    var pathKeys = Object.keys(paths);

    pathKeys.forEach(function (key) {

        var modulePath = paths[key];

        if (!util.isRelativePath(modulePath)) {
            return;
        }

        modulePath = util.toUnixFilePath(
            util.joinPath(baseUrl, modulePath)
        );

        // paths 可以匹配目录或是文件
        var pattern = new RegExp('^' + modulePath + '(?:/|$)');
        if (pattern.test(filePath)) {
            addModule(
                key,
                filePath.replace(modulePath, '')
            );
        }

    });

    if (filePath.indexOf(baseUrl) === 0) {
        addModule(
            filePath.replace(baseUrl, '')
        );
    }

    return modules;

};