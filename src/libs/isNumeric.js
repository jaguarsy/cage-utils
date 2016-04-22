/**
 * Created by johnnycage on 16/4/22.
 */

module.exports = function (obj) {
    return !Array.isArray(obj) && (obj - parseFloat(obj) + 1) >= 0;
};