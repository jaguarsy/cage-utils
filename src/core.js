/**
 * Created by johnnycage on 16/4/21.
 */
var map = require('./libs/map');
var isFunction = require('./libs/isFunction');
var isPlainObject = require('./libs/isPlainObject');

module.exports = (function (undefined) {
    var extend = function () {
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        if (typeof target === "boolean") {
            deep = target;

            target = arguments[i] || {};
            i++;
        }

        if (typeof target !== "object" && !isFunction(target)) {
            target = {};
        }

        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {
            if (( options = arguments[i] ) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    if (target === copy) {
                        continue;
                    }

                    if (deep && copy && ( isPlainObject(copy) ||
                        ( copyIsArray = Array.isArray(copy) ) )) {

                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && Array.isArray(src) ? src : [];

                        } else {
                            clone = src && isPlainObject(src) ? src : {};
                        }

                        // Never move original objects, clone them
                        target[name] = cageUtils.extend(deep, clone, copy);

                        // Don't bring in undefined values
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }

        return target;
    };

    if (typeof window === 'undefined') {
        return {
            extend: extend
        };
    }

    var doc = window.document;

    var cageUtils = function (selector, context) {
        return new cageUtils.fn.init(selector, context);
    };

    cageUtils.fn = cageUtils.prototype = {
        map: function (callback) {
            return cageUtils(map(this, callback));
        },
        attr: function (name, value) {
            if (this.length === 0) {
                return this;
            }

            if (value === undefined) {
                return this[0].getAttribute(name);
            }

            return this.map(function (item) {
                item.setAttribute(name, value);
            })
        }
    };

    cageUtils.extend = cageUtils.fn.extend = extend;

    var init = cageUtils.fn.init = function (selector, context) {
        var self = this;
        var nodeList;

        if (typeof selector === 'string') {
            nodeList = (context || doc).querySelectorAll(selector);
        } else if (selector instanceof Element) {
            nodeList = [selector];
        } else if (
            selector instanceof NodeList ||
            selector instanceof cageUtils ||
            selector instanceof Array) {
            nodeList = selector;
        }

        self.length = nodeList.length;

        map(nodeList, function (item, index) {
            self[index] = item;
        });
    };

    init.prototype = cageUtils.fn;

    return cageUtils;
})();