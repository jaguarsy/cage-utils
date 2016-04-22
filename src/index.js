/**
 * Created by johnnycage on 16/4/21.
 */
var cageUtils = require('./core');

var map = require('./libs/map'),
    isFunction = require('./libs/isFunction'),
    isPlainObject = require('./libs/isPlainObject'),
    toNumber = require('./libs/toNumber'),
    isNumeric = require('./libs/isNumeric'),
    range = require('./libs/range'),
    times = require('./libs/times'),
    delay = require('./libs/delay');

module.exports = (function () {
    cageUtils.extend({
        map: map,
        isFunction: isFunction,
        isPlainObject: isPlainObject,
        toNumber: toNumber,
        isNumeric: isNumeric,
        range: range,
        times: times,
        delay: delay
    });

    var root = typeof self == 'object' && self.self === self && self ||
        typeof global == 'object' && global.global === global && global ||
        this;

    root.cageUtils = root._ = cageUtils;
})();
