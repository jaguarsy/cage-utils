/**
 * Created by johnnycage on 16/4/22.
 */

var isNumeric = require('./isNumeric');
var toNumber = require('./toNumber');

module.exports = function (start, end) {
    var endNum = toNumber(end);
    var startIsNumber = isNumeric(start);
    var endIsNumber = isNumeric(end);

    if (!startIsNumber ||
        endNum === 0 && start === 0 ||
        endIsNumber && start > endNum) {
        return [];
    }

    var length = !endIsNumber ? start : (end - start + 1);

    return Array.apply(null, Array(length)).map(function (value, index) {
        return index + (endIsNumber && start);
    });
};