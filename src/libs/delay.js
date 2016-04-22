/**
 * Created by johnnycage on 16/4/22.
 */

var delayCache = {};

module.exports = function (func, time) {
    time = time || 500;

    var name = func.toString();

    return function () {
        var args = arguments;

        return new Promise(function (resolve, reject) {
            if (delayCache[name]) {
                reject(name);
                clearTimeout(delayCache[name]);
            }

            delayCache[name] = setTimeout(function () {
                var returnResult = func.apply(null, args);

                if (returnResult && returnResult.constructor === Promise) {
                    returnResult.then(resolve).catch(reject);
                } else {
                    resolve(returnResult);
                }

            }, time);
        });

    }
};