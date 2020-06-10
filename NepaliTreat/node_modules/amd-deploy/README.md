# amd-deploy

## 功能

* 支持模块合并，用两级 include/exclude，实现最好的合并规则
* 支持资源替换，便于缓存控制

## 配置

```
{
    // baseUrl 指向的本地硬盘路径
    baseUrl: '',

    // amd paths
    paths: { },

    // amd packages
    packages: [ ]
}
```

## 替换资源

```
{
    // 资源 ID 替换，如 require('underscore')
    // resource.id 表示代码中写的字面量，即 underscore
    // absolute 表示硬盘中的文件路径，如 project/dep/underscore/1.0.0/src/underscore.js
    replaceRequireResource: function (resource, absolute) {
        return resource.id + Date.now();
    },

    // 替换 require.config 中的一些值，比如 src 转为 asset
    replaceRequireConfig: function (config) {
        if (config.baseUrl) {
            config.baseUrl = config.baseUrl.replace('url', 'asset');
        }
        return config;
    }
}
```

## 模块合并

```
{
    combine: {

        // 全局 include 配置，应用于所有模块
        // include 表示即使模块不依赖某些模块，也会合并进去，避免需要时发请求
        include: [
            'underscore'
        ],

        // 全局 exclude 配置，应用于所有模块
        // exclude 表示即使模块依赖某些模块，也不会合并进去，第三方库和业务 common 层通常会用到
        exclude: [
            'cobble',
            'cobble/**/*'
        ],

        // 模块默认按自己的依赖进行合并（不合并 build 个毛...）
        // 只有配置成 false 才表示不需要合并（给你不合并的权利）

        // 模块默认继承全局 include 和 exclude
        // 只有按如下配置才表示不需要继承
        // {
        //     moduleId: {
        //         inheritInclude: false,
        //         inheritExclude: false
        //     }
        // }

        // 每个模块可以单独配置自己的 include 和 exclude，且优先级比全局 include exclude 更高，即
        // 如果 combine.include 包含了一些模块，module.exclude 可以去掉
        // 如果 combine.exclude 排除了一些模块，module.include 可以加上

        // exclude 和 moduleId 支持模糊匹配（为了避免误杀，只当 * 存在时开启），规则请参考 glob
        modules: {
            moduleId: {
                include: [ ],
                exclude: [ ]
            }
        }
    }
}
```

## 合并插件资源

如果需要合并样式或模板，可自己写规则，如下

```
{
    fileReader: {

        styl: function (filePath) {

            return 'define("id", [], function () {'
                 +     'return style;'
                 + '})';
        }

    }
}
```

## 压缩成一行

语法树生成代码，默认会被格式化，如果输入的代码已经过 uglify 处理，可用 minify 参数保持压缩状态

```
{
    minify: true
}
```