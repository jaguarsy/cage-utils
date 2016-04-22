/**
 * Created by johnnycage on 16/4/22.
 */

var chain = require('./chain');

module.exports = function (instance, obj) {
    return instance && instance._chain ? chain(obj) : obj;
};