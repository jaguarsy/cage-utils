/**
 * Created by johnnycage on 16/4/21.
 */
var map = require('./libs/map');
var extend = require('./libs/extend');

module.exports = (function (undefined) {

    if (typeof window === 'undefined') {
        return {
            extend: extend
        };
    }

    var doc = window.document;

    var cageQuery = function (selector, context) {
        return new cageQuery.fn.init(selector, context);
    };

    cageQuery.fn = cageQuery.prototype = {
        map: function (callback) {
            return cageQuery(map(this, callback));
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

    cageQuery.extend = cageQuery.fn.extend = extend;

    var init = cageQuery.fn.init = function (selector, context) {
        var self = this;
        var nodeList;

        if (typeof selector === 'string') {
            nodeList = (context || doc).querySelectorAll(selector);
        } else if (selector instanceof Element) {
            nodeList = [selector];
        } else if (
            selector instanceof NodeList ||
            selector instanceof cageQuery ||
            selector instanceof Array) {
            nodeList = selector;
        }

        self.length = nodeList.length;

        map(nodeList, function (item, index) {
            self[index] = item;
        });
    };

    init.prototype = cageQuery.fn;

    return cageQuery;
})();