/**
 * @file 根据文件信息生成代码
 * @author musicode
 */

var estraverse = require('estraverse');
var Syntax = estraverse.Syntax;

var util = require('./util');


/**
 * 根据模块信息生成 ast
 *
 * @inner
 * @param {Object} moduleInfo parseModule 的返回结果
 * @return {Object}
 */
function getDefineArguments(moduleInfo) {

    var defineArguments = [ moduleInfo.factory ];

    if (moduleInfo.dependencies.length > 0) {
        defineArguments.unshift({
            type: Syntax.ArrayExpression,
            elements: moduleInfo.dependencies.map(
                function (dependency) {
                    return dependency.node;
                }
            )
        });
    }

    if (moduleInfo.id) {
        defineArguments.unshift(
            util.createStringLiteralNode(moduleInfo.id)
        );
    }

    return defineArguments;

}

/**
 * 输出模块代码
 *
 * @param {Array|Object} fileInfo parseFile 的返回结果
 * @param {boolean=} minify 是否要压缩
 * @return {string}
 */
module.exports = function (fileInfo, minify) {

    if (!Array.isArray(fileInfo)) {
        fileInfo = [ fileInfo ];
    }

    // 按字母表顺序排序
    fileInfo.sort(function (fileInfo1, fileInfo2) {
        if (fileInfo1.path > fileInfo2.path) {
            return 1;
        }
        else if (fileInfo1.path < fileInfo2.path) {
            return -1;
        }
        else {
            return 0;
        }
    });

    var astList = [ ];

    fileInfo.forEach(function (fileInfo) {

        astList.push(fileInfo.ast);

        fileInfo.modules.forEach(function (moduleInfo) {

            moduleInfo.define.arguments = getDefineArguments(moduleInfo);

            if (Array.isArray(moduleInfo.shadows)) {
                moduleInfo.shadows.forEach(function (moduleInfo) {
                    astList.push(moduleInfo.define);
                });
            }

        });

    });

    return util.generateCode(astList, minify);

};