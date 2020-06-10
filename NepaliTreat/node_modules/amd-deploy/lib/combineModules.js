/**
 * @file 模块合并
 * @author musicode
 */

var minimatch = require('minimatch');

var resolveResourceId = require('./resolveResourceId');
var util = require('./util');


//
// combine: {
//    include: [ ],
//    exclude: [ ],
//    modules: {
//        moduleId: {
//           include: [ ],
//           exclude: [ ]
//        }
//    }
// }
//
// modules 的 key 支持模糊匹配，如
//
// {
//     "common/**/*": {
//         exclude: [
//             'cobble/**/*'
//         ]
//     },
//     "common/store": {
//         include: [ ],
//         exclude: [ ]
//     }
// }
//
// include 不支持模糊匹配，因为 没有模块列表，遍历文件系统太重了
//
// exclude 只支持带 * 的模糊匹配，否则很容易误杀
//
// 整个配置，最佳实践是范围从大到小进行控制
//
// 比如 combine.include 和 combine.exclude 是全局配置，modules 可以对它进行覆盖，即
//
// 如果 combine.include 包含了一些模块，module.exclude 可以去掉
// 如果 combine.exclude 排除了一些模块，module.include 可以加上
//
// 因为 modules 是个无序的 Object，因此不能依赖它的先后顺序进行配置覆盖
//
// 如果不需要应用全局的 include 和 exclude，可以按如下方式配置：
//
// modules: {
//     moduleId: {
//         inheritInclude: false,
//         inheritExclude: false
//     }
// }
//

/**
 * 是否可以使用模糊匹配
 *
 * @inner
 * @param {string} pattern
 * @return {boolean}
 */
function canFuzzyMatch(pattern) {
    return pattern.indexOf('*') >= 0;
}

/**
 * 模糊匹配
 *
 * @inner
 * @param {string} target
 * @param {string} pattern
 * @return {boolean}
 */
function fuzzyMatch(target, pattern) {
    return minimatch(target, pattern, { matchBase: true });
}

/**
 * 模块合并
 *
 * @param {Object} moduleInfo 模块信息
 * @param {Object} config 配置信息
 * @return {Array.<string>}
 */
module.exports = function (moduleInfo, config) {

    var dependencies = [ ];
    var dependenciesMap = { };

    var addDependency = function (dependency) {
        if (dependenciesMap[dependency] == null) {
            dependenciesMap[dependency] = dependencies.push(dependency) - 1;
        }
    };

    var mainId = moduleInfo.id;
    var moduleIds = [ mainId ];

    if (Array.isArray(moduleInfo.shadows)) {
        moduleInfo.shadows.forEach(function (module) {
            if (module.id) {
                moduleIds.push(module.id);
            }
        });
    }

    var combineConfig = config.combine || { };
    var combineModulesConfig = combineConfig.modules || { };

    // 默认需要合并
    var needCombine = true;

    // 打包合并策略
    var include = [ ];
    var exclude = [ ];

    // 默认继承全局配置
    var inheritInclude = true;
    var inheritExclude = true;

    // 匹配到的模块配置
    var matchModule = function (config) {

        if (config === false) {
            needCombine = false;
            return false;
        }

        if (config) {

            if (config.inheritInclude === false) {
                inheritInclude = false;
            }

            if (config.inheritExclude === false) {
                inheritInclude = false;
            }

            if (config.include) {
                include = util.merge(
                    include,
                    item.include
                );
            }
            if (config.exclude) {
                exclude = util.merge(
                    exclude,
                    item.exclude
                );
            }
            return true;
        }

    };

    moduleIds.forEach(function (moduleId) {

        // 精确匹配
        if (needCombine) {
            matchModule(combineModulesConfig[ moduleId ]);
        }

        // 模糊匹配
        if (needCombine) {

            util.each(
                combineModulesConfig,
                function (item, key) {
                    if (needCombine
                        && canFuzzyMatch(key)
                        && fuzzyMatch(moduleId, key)
                    ) {
                        matchModule(item);
                    }
                }
            );
        }

    });

    if (!needCombine) {
        return dependencies;
    }

    if (inheritInclude) {
        include = util.merge(
            util.filter(combineConfig.include, exclude),
            include
        );
    }

    if (inheritExclude) {
        exclude = util.merge(
            util.filter(combineConfig.exclude, include),
            exclude
        );
    }

    // 模块自身的依赖
    moduleInfo.dependencies.forEach(
        function (dependency) {

            if (util.keywords[ dependency.id ]) {
                return;
            }

            addDependency(
                resolveResourceId(dependency.id, mainId)
            );

        }
    );

    include.forEach(addDependency);

    exclude.forEach(function (pattern) {

        var index = dependenciesMap[ pattern ];

        if (index >= 0) {

            // 精确匹配
            dependencies[ index ] = null;

        }
        else if (canFuzzyMatch(pattern)) {

            // 模糊匹配
            dependencies.forEach(
                function (dependency, index) {
                    if (dependency && fuzzyMatch(dependency, pattern)) {
                        dependencies[ index ] = null;
                    }
                }
            );

        }

    });

    return dependencies.filter(
        function (dependency) {
            return dependency != null;
        }
    );

};