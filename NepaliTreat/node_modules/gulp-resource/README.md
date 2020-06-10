# gulp-resource

静态资源处理器

## 实例化

```
var resource = new Resource({

    getAmdConfig: function (file) {
        // 根据 file 返回不同的 amd config
        // 至少要有 baseUrl，paths 和 packages 看需求
        // 比如 project/src/ 和 project/output/asset/ 配置的 baseUrl 肯定不一样
    },

    renameFile: function (file, hash) {
        // 返回 string，可改写文件路径
        // 注意：使用 file.path
        // 对于 gulp 来说，路径不一样意味着生成一个新文件
    },

    renameDependency: function (file, fileHash, dependency, dependencyHash) {
        // 返回 string，改写 file 中的依赖路径
        // 注意：使用 dependency.raw
    },

    filterDependency: function (file, dependency) {
        // 返回 true 可以过滤 file 中的某些不合法的依赖
    },

    correctDependency: function (file, dependency) {
        // 纠正某些依赖的路径
        // 比如  dependency.raw 是 "src/a.js"
        // 那么依赖的绝对路径可以纠正为
        // dependency.absolute = projectDir + 'src/a.js'
    },

    htmlRules: [
        {
            pattern: //,
            match: function (result) {
                // 返回匹配块中希望提取的依赖路径
                // 也可以返回依赖对象，格式如下：
                // {
                //     raw: result
                // }
            }
        }
    ]

});
```

## 依赖对象

格式如下：

```
{
    raw: '代码中的原始写法',
    absolute: '经过分析后的依赖文件在硬盘上的绝对路径'
}
```

## 分析文件的 md5

用于生成 hashMap

```
resource.analyzeHash();
```

## 分析文件的依赖

用于生成 dependencyMap

```
resource.analyzeDependencies();
```

## 生成带 md5 信息的文件

根据 md5 递归计算结果修改文件名，替换规则通过 renameFile 配置

```
resource.renameFiles();
```

## 替换文件中的依赖

根据 md5 递归计算结果修改依赖，替换规则通过 renameDependency 配置

```
resource.renameDependencies();
```

## 编译 amd

```
resource.buildAmdModules();
```