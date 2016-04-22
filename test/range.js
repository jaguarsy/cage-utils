/**
 * Created by johnnycage on 16/4/22.
 */
var chai = require('chai');
var range = require('../src/libs/range');

chai.should();

describe('range', function () {
    it('should return [] when the start is undefined', function () {
        range().should.eql([]);
    });

    it('should return [0,1,2] when the start is 3 and end is undefined', function () {
        range(3).should.eql([0, 1, 2]);
    });

    it('should return [2,3,4] when the start is 2 and end is 4', function () {
        range(2, 4).should.eql([2, 3, 4]);
    });

    it('should return [0,1,2] when the start is 0 and end is 2', function () {
        range(0, 2).should.eql([0, 1, 2]);
    });
});