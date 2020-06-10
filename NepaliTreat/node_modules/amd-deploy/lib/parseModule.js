/**
 * @file 解析模块 ID 和依赖
 * @author musicode
 */

var estraverse = require('estraverse');
var Syntax = estraverse.Syntax;

var parseFactoryResources = require('./parseFactoryResources');
var formatResource = require('./formatResource');
var util = require('./util');


/**
 * 解析 define ast node，获取模块信息
 *
 * @inner
 * @param {Object} node
 * @return {Object}
 */
function parseDefineAst(node) {

    var id = '';

    var factory;

    var dependencies = [ ];
    var dependenciesMap = { };

    var addDependency = function (dependency) {
        if (!dependenciesMap[dependency.id]) {
            dependenciesMap[dependency.id] = 1;
            dependencies.push(dependency);
            return true;
        }
    };

    // define(factory)
    // define(dependencies, factory)
    // define(id, factory)
    // define(id, dependencies, factory)

    node.arguments.forEach(
        function (node, index) {
            if (index === 0 && util.isStringLiteralNode(node)) {
                id = node.value;
            }
            else if (index < 2 && node.type === Syntax.ArrayExpression) {
                node.elements.forEach(
                    function (node) {
                        addDependency(
                            formatResource(node)
                        );
                    }
                );
            }
            else {
                factory = node;
                return false;
            }
        }
    );

    // 是否是函数封装的 factory
    var isFunctionFactory = factory
                         && factory.type === Syntax.FunctionExpression;

    // 计算 factory 函数的形参数量
    var argumentsLength = isFunctionFactory
                        ? factory.params.length
                        : 0;

    if (dependencies.length === 0) {
        dependencies = [
            formatResource('require'),
            formatResource('exports'),
            formatResource('module')
        ]
        .slice(0, argumentsLength);
    }

    var resources = parseFactoryResources(factory);
    resources.sync.forEach(addDependency);

    return {
        id: id,
        dependencies: dependencies,
        factory: factory,
        define: node
    };

}

module.exports = function (ast) {

    var modules = [ ];

    estraverse.traverse(
        ast,
        {
            enter: function (node) {
                if (node.type === Syntax.CallExpression
                    && node.callee.name === 'define'
                ) {

                    // 无需遍历子节点
                    this.skip();

                    modules.push(
                        parseDefineAst(node)
                    );

                }
            }
        }
    );

    return modules;

};