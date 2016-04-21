/**
 * Created by johnnycage on 16/4/21.
 */

module.exports = function (obj) {
    var proto, ctor;

    if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
    }

    proto = Object.getPrototypeOf(obj);

    if (!proto) {
        return true;
    }

    ctor = proto.hasOwnProperty('constructor') && proto.constructor;
    return typeof ctor === "function" && ctor.toString() === Object.toString();
};