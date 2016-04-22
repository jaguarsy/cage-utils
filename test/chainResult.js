/**
 * Created by johnnycage on 16/4/22.
 */
var chai = require('chai');
var chain = require('../src/libs/chain');
var chainResult = require('../src/libs/chainResult');

chai.should();

describe('chainResult', function () {
    it('should return a chain object when put a chan object in, and value is [2,3,4]', function () {
        var result = chainResult(chain([1, 2, 3]), [2, 3, 4]);

        result.value().should.eql([2, 3, 4]);
        result._chain.should.eq(true);
    });
});