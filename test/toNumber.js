/**
 * Created by johnnycage on 16/4/22.
 */
var chai = require('chai');
var toNumber = require('../src/libs/toNumber');

chai.should();

describe('toNumber', function () {
    it('should return 0 when the value is not a number', function () {
        toNumber('a').should.eq(0);
    });

    it('should return 100 when the value is a number', function () {
        toNumber('100').should.eq(100);
    });
});