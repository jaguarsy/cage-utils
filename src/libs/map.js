/**
 * Created by johnnycage on 16/4/21.
 */
var isFunction = require('./isFunction');
var chainResult = require('./chainResult');

module.exports = function (list, callback) {
    var result = [];

    if (!list || !callback || !isFunction(callback)) {
        return chainResult(this, result);
    }

    if (!list.length) {
        return chainResult(this, [].concat(list));
    }

    if (list instanceof Array) {
        return chainResult(this, list.map(callback));
    }

    for (var i = 0; i < list.length; i++) {
        var item = list[i];

        result.push(callback(item, i) || item);
    }

    return chainResult(this, result);
};
