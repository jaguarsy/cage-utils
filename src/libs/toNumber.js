/**
 * Created by johnnycage on 16/4/22.
 */

module.exports = function (source) {
    var result = +source;
    return isNaN(result) ? 0 : result;
};