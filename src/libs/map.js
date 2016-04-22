/**
 * Created by johnnycage on 16/4/21.
 */
var isFunction = require('./isFunction');
var chainResult = require('./chainResult');

module.exports = function (list, callback) {
    var result = [];

    if (list && callback && isFunction(callback)) {

        if (!list.length) {
            result = [].concat(list);
        } else if (list instanceof Array) {
            result = list.map(callback);
        } else {
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                result.push(callback(item, i) || item);
            }
        }
        
    }

    return chainResult(this, result);
};
