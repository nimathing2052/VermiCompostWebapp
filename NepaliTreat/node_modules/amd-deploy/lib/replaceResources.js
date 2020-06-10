/**
 * @file 替换资源地址，用于解决静态资源缓存问题
 * @author musicode
 */

var esprima = require('esprima');

var estraverse = require('estraverse');
var Syntax = estraverse.Syntax;

var resourceIdToFilePath = require('./resourceIdToFilePath');
var resolveResourceId = require('./resolveResourceId');

var parseRequireConfig = require('./parseRequireConfig');
var parseFactoryResources = require('./parseFactoryResources');
var util = require('./util');


module.exports = function (fileInfo, config) {

    var replaceRequireConfig = config.replaceRequireConfig;
    if (replaceRequireConfig) {

        var configs = fileInfo.configs;

        configs.forEach(function (item, index) {

            var code;
            var object;

            try {
                code = util.generateCode(item.arguments[0]);
                object = eval( '(' + code + ')' );
            }
            catch (e) {
                console.log('[amd-deploy][parse require.config fail]');
                console.log(fileInfo.path);
            }

            if (object) {

                var ast = esprima.parse(
                      'require.config('
                    +     JSON.stringify(replaceRequireConfig(object))
                    + ');'
                );

                var node = parseRequireConfig(ast)[0];

                configs[ index ].arguments = node.arguments;

            }

        });

    }

    var replaceRequireResource = config.replaceRequireResource;
    if (replaceRequireResource) {

        var replace = function (resource, baseId) {

            var resourceId = resource.id;

            if (util.keywords[ resourceId ]) {
                return;
            }

            var rawId = resourceId;

            if (baseId) {
                resourceId = resolveResourceId(resourceId, baseId);
            }

            var filePath = resourceIdToFilePath(resourceId, config);

            if (filePath) {
                var result = replaceRequireResource(resource, filePath);
                if (typeof result === 'string') {
                    result = {
                        id: result
                    };
                }
                return result;
            }

        };

        fileInfo.modules.forEach(function (module) {

            var moduleId = module.id;

            var result = replace(module);
            if (result) {
                util.extend(module, result);
            }

            module.dependencies.forEach(
                function (dependency, index) {
                    result = replace(dependency, moduleId);
                    if (result) {
                        util.extend(dependency, result);
                    }
                }
            );

            var resources = parseFactoryResources(module.factory);

            [
                resources.sync,
                resources.async,
                resources.other
            ]
            .forEach(function (resources) {

                resources.forEach(function (resource) {
                    result = replace(resource, moduleId);
                    if (result) {
                        util.extend(resource, result);
                    }
                });

            });

        });
    }

};