/**
 * @file 格式化资源
 * @author musicode
 */

var path = require('path');

var util = require('./util');

/**
 * @param {Object|string} node
 * @return {Object}
 */
module.exports = function (node) {

    var data = { };

    if (typeof node === 'string') {
        node = util.createStringLiteralNode(node);
    }

    var id = node.value;

    // 处理插件
    var parts = id.split('!');
    var hasPlugin = parts.length === 2;
    var plugin;

    if (hasPlugin) {
        plugin = parts[0];
        id = parts[1];
    }

    // 处理有 ?query 后缀的情况
    parts = id.split('?');
    var hasQuery = parts.length === 2;
    var query;

    if (hasQuery) {
        query = parts[1];
        id = parts[0];
    }

    var setNodeValue = function (value) {

        var newValue = '';

        if (hasPlugin) {
            newValue += plugin + '!';
        }

        newValue += value;

        if (hasQuery) {
            newValue += '?' + query;
        }

        node.value = newValue;
        node.raw = '"' + newValue + '"';

    };

    Object.defineProperty(data, 'plugin', {
        get: function () {
            return plugin || '';
        },
        set: function (value) {

            plugin = value;
            hasPlugin = !!plugin;

            setNodeValue(id);

        }
    });

    Object.defineProperty(data, 'id', {
        get: function () {
            return id;
        },
        set: function (value) {
            id = value;
            setNodeValue(value);
        }
    });

    Object.defineProperty(data, 'node', {
        get: function () {
            return node;
        }
    });

    return data;
};
