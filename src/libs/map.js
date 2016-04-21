/**
 * Created by johnnycage on 16/4/21.
 */
var isFunction = require('./isFunction');


module.exports = function (list, callback) {
    var result = [];

    if (!list || !callback || !isFunction(callback)) {
        return result;
    }

    if (!list.length) {
        return [].concat(list);
    }

    if (list instanceof Array) {
        return list.map(callback);
    }

    for (var i = 0; i < list.length; i++) {
        var item = list[i];

        result.push(callback(item, i) || item);
    }

    return result;
};
