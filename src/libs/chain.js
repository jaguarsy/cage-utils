/**
 * Created by johnnycage on 16/4/22.
 */

var cageUtils = require('../util');

module.exports = function (value) {
    var instance = new cageUtils(value);
    instance._chain = true;
    return instance;
};