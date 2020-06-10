/**
 * @file 通过正则匹配 amd config
 * @author musicode
 */

/**
 * 从 content 中解析 require.config
 *
 * @inner
 * @param {string} content
 * @param {number} fromIndex
 * @return {Object}
 */
function readRequireConfig(content, fromIndex) {

    content = content.substr(fromIndex);

    var index = content.search(/(require\.config\(\s*\{)/);
    if (index < 0) {
        return;
    }

    index += RegExp.$1.length - 1;

    // 取缩进层级，便于生成代码时格式化
    var whitespace = 0;
    var startIndex = index;

    var readIndent = function () {
        while (++startIndex) {
            switch (content[startIndex]) {
                case ' ':
                    whitespace++;
                    break;
                case '\n':
                    whitespace = 0;
                    break;
                default:
                    return;
            }
        }
    };

    readIndent();


    var result = {
        content: content,
        fromIndex: index,
        indentBase: whitespace
    };

    var len = content.length;
    var braceLevel = 0;

    do {

        switch (content[ index ]) {
            case '{':
                braceLevel++;
                break;
            case '}':
                braceLevel--;
                break;
        }

        index++;

    }
    while (braceLevel && index < len);

    result.toIndex = index;

    // 取配置数据
    content = content.slice(result.fromIndex, index);

    try {
        result.data = eval( '(' + content + ')' );
    }
    catch(e) {
        result.data = null;
    }

    return result;

}

/**
 * 从内容中读取 loader 配置信息
 *
 * @param {string} content 内容
 * @return {Array}
 */
module.exports = function (content) {

    var list = [ ];

    var fromIndex = 0;
    var item;

    while (item = readRequireConfig(content, fromIndex)) {

        item.content = content;
        item.fromIndex += fromIndex;
        item.toIndex += fromIndex;

        list.push(item);

        fromIndex = item.toIndex;

    }

    return list;

};
