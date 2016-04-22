/**
 * Created by johnnycage on 16/4/22.
 */
var chai = require('chai');
var isNumeric = require('../src/libs/isNumeric');

chai.should();

describe('isNumeric', function () {
    it('should return false when the value is not a number', function () {
        isNumeric('a').should.eq(false);
        isNumeric(undefined).should.eq(false);
        isNumeric(null).should.eq(false);
    });

    it('should return true when the value is a number', function () {
        isNumeric('1').should.eq(true);
        isNumeric(1).should.eq(true);
        isNumeric('+1').should.eq(true);
    });
});