/**
 * Created by johnnycage on 16/4/21.
 */
var cageUtils = require('./core');

var r = function (name) {
    return require('./libs/' + name);
};

var libObj = {};

['isFunction', 'isPlainObject', 'toNumber', 'isNumeric',
    'map', 'range', 'times', 'delay'].forEach(function (item) {
    libObj[item] = r(item);
});

module.exports = (function () {
    cageUtils.extend(libObj);

    var root = typeof self == 'object' && self.self === self && self ||
        typeof global == 'object' && global.global === global && global ||
        this;

    root.cageUtils = root._ = cageUtils;
})();
