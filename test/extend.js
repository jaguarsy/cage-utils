/**
 * Created by johnnycage on 16/4/22.
 */
var chai = require('chai');
var extend = require('../src/libs/extend');

chai.should();

describe('extend', function () {
    it('should return {a:2,b:1} when {a:1, b:1} extend {a:2}', function () {

        extend({}, {a: 1, b: 1}, {a: 2}).should.deep.equal({a: 2, b: 1});
        extend({a: 1, b: 1}, {a: 2}).should.deep.equal({a: 2, b: 1});

    });
});