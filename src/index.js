/**
 * Created by johnnycage on 16/4/21.
 */
var cageQuery = require('./query');
var cageUtils = require('./util');

var r = function (name) {
    return require('./libs/' + name);
};

var libObj = {};
var libChainObj = {};

//normal functions, add to cageUtils
['isFunction', 'isPlainObject', 'toNumber', 'isNumeric',
    'map', 'range', 'times', 'delay', 'chain'].forEach(function (name) {
    libObj[name] = r(name);
});

//chain functions, add to cageUtils' prototype
['toNumber', 'map'].forEach(function (name) {
    libChainObj[name] = function (callback) {
        return (libObj[name] || r(name)).call(this, this.value(), callback);
    };
});

module.exports = (function () {
    cageUtils.extend(libObj);
    cageUtils.fn.extend(libChainObj);

    var root = typeof self == 'object' && self.self === self && self ||
        typeof global == 'object' && global.global === global && global ||
        this;

    root.cageQuery = root.$ = cageQuery;
    root.cageUtils = root._ = cageUtils;
})();
