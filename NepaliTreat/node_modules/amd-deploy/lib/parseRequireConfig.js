/**
 * @file 解析 require.config 配置
 * @author musicode
 */

var estraverse = require('estraverse');
var Syntax = estraverse.Syntax;

var util = require('./util');

module.exports = function (ast) {

    var configs = [ ];

    estraverse.traverse(
        ast,
        {
            enter: function (node) {
                if (util.isRequireConfig(node)) {
                    configs.push(node);
                }
            }
        }
    );

    return configs;

};
