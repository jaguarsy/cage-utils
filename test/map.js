/**
 * Created by johnnycage on 16/4/21.
 */
var chai = require('chai');
var map = require('../src/libs/map');

chai.should();

describe('map', function () {
    it('should return [2,4,6]', function () {
        map([1, 2, 3], function (item) {
            return item * 2;
        }).should.eql([2, 4, 6]);
    });
});
