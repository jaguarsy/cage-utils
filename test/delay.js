/**
 * Created by johnnycage on 16/4/22.
 */
var chai = require('chai');
var times = require('../src/libs/times');
var delay = require('../src/libs/delay');

chai.should();

describe('delay', function () {
    it('should return 1 when add 1 for 5 times in a very short time', function () {
        var start = 0;

        var func = delay(function () {
            start++;
        });

        times(5, func)

        start.should.eq(0);

        setTimeout(function () {
            start.should.eq(1);
        }, 600);
    });
});