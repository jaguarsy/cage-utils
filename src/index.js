/**
 * Created by johnnycage on 16/4/21.
 */
var cageUtils = require('./core');

var map = require('./libs/map'),
    isFunction = require('./libs/isFunction');

module.exports = (function () {
    cageUtils.extend({
        map: map,
        isFunction: isFunction
    });

    var root = typeof self == 'object' && self.self === self && self ||
        typeof global == 'object' && global.global === global && global ||
        this;

    root.cageUtils = root._ = cageUtils;
})();
