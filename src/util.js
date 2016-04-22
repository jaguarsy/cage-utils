/**
 * Created by johnnycage on 16/4/22.
 */

var extend = require('./libs/extend');

module.exports = (function () {
    var cageUtils = function (value) {
        this._value = value;
    };

    cageUtils.fn = cageUtils.prototype = {
        value: function () {
            return this._value;
        }
    };

    cageUtils.extend = cageUtils.fn.extend = extend;

    return cageUtils;
})();