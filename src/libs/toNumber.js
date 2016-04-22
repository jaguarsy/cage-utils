/**
 * Created by johnnycage on 16/4/22.
 */

var chainResult = require('./chainResult');

module.exports = function (source) {
    var result = +source;

    return chainResult(this, isNaN(result) ? 0 : result);
};