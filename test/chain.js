/**
 * Created by johnnycage on 16/4/22.
 */
var chai = require('chai');
var chain = require('../src/libs/chain');

chai.should();

describe('chain', function () {
    it('should return {_value:[1,2,3], _chain:true, value:function(){return this._value}} when put [1,2,3] into chain function', function () {
        var result = chain([1, 2, 3]);

        result.value().should.eql([1, 2, 3]);
        result._value.should.eql([1, 2, 3]);
        result._chain.should.eq(true);
    });
});