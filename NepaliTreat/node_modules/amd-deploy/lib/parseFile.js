/**
 * @file 解析模块文件
 * @author musicode
 */

var fs = require('fs');

var esprima = require('esprima');

var parseModule = require('./parseModule');
var parseRequireConfig = require('./parseRequireConfig');
var filePathToResourceId = require('./filePathToResourceId');
var combineModules = require('./combineModules');

var util = require('./util');

var fileCache = { };

/**
 * 源码解析成语法树
 *
 * @inner
 * @param {string} code
 * @return {Object}
 */
function parseAst(code) {
    return esprima.parse(code);
}

/**
 * 创建影子模块
 *
 * @inner
 * @param {string} id
 * @param {string} dependency
 * @return {string}
 */
function createShadowModule(id, dependency) {

    var code = 'define(';

    if (id) {
        code += '"' + id + '",';
    }

    code += '["' + dependency + '"], function (e) { return e; });';

    return code;

}

/**
 * 解析模块文件
 *
 * @param {string} file 文件路径
 * @param {string} content 文件代码
 * @param {Object} config 模块配置
 */
module.exports = function (file, content, config) {

    if (!fileCache[file]) {

        var ast = parseAst(content);
        var modules = parseModule(ast);

        modules.forEach(function (module) {

            // 影子模块（我发明的词...）
            // 指没有任何逻辑，只是脑残的引用了另一个模块
            var shadowModules = [ ];

            // 需要合并的模块
            var combine = [ ];

            if (!module.id) {

                // 类似 cobble/main, cobble 表示同一个模块
                // 那么可以在 cobble/main 进行完整定义
                // cobble 只是引用一下 cobble/main

                var counter = 0;

                filePathToResourceId(file, config)
                .forEach(function (moduleId) {

                    if (!moduleId) {
                        return;
                    }

                    if (counter === 0) {
                        module.id = moduleId;
                    }
                    else {

                        shadowModules.push(
                            createShadowModule(moduleId, module.id)
                        );

                    }

                    counter++;

                });

            }

            if (shadowModules.length > 0) {

                shadowModules = parseModule(
                    parseAst(shadowModules.join(''))
                );

                module.shadows = modules;

            }

            combineModules(module, config)
            .forEach(function (moduleId) {
                combine.push(moduleId);
            });

            module.combine = util.unique(combine);

        });

        fileCache[ file ] = {
            path: file,
            ast: ast,
            configs: parseRequireConfig(ast),
            modules: modules
        };

    }

    return fileCache[file];

};
