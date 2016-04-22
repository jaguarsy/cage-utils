/**
 * Created by johnnycage on 16/4/22.
 */
var chai = require('chai');
var times = require('../src/libs/times');

chai.should();

describe('times', function () {
    it('should return [-1,-1,-1,-1,-1] when repeat 5 times return -1', function () {
        times(5, function () {
            return -1;
        }).should.eql([-1, -1, -1, -1, -1]);
    });

    it('should return 5 when the add 1 for 5 times', function () {
        var start = 0;

        times(5, function () {
            start++;
        });
        
        start.should.eql(5);
    });
});