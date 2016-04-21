/**
 * Created by johnnycage on 16/4/21.
 */
var chai = require('chai');
var isPlainObject = require('../src/libs/isPlainObject');

chai.should();

describe('isPlainObject', function () {
    it('should return false when the value is not a plain object', function () {
        isPlainObject({}).should.eq(true);
        isPlainObject([]).should.eq(false);
    });
});