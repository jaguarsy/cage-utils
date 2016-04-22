/**
 * Created by johnnycage on 16/4/22.
 */

var isFunction = require('./isFunction');
var range = require('./range');

module.exports = function (value, callback) {
    if (!isFunction(callback)) {
        return;
    }

    return range(value).map(callback);
};