/**
 * Created by johnnycage on 16/4/21.
 */
var chai = require('chai');
var isFunction = require('../src/libs/isFunction');

chai.should();

describe('isFunction', function () {
    it('should return false when the value is not a function', function () {
        var func = function () {
        };

        isFunction(func).should.eq(true);
    });
});
