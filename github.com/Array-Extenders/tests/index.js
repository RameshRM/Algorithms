var expect = require('chai').expect;
var rightRotator = require('../lib/shift-right');
var leftShiftor = require('../lib/shift-left');
var inputArray = [1, 2, 3, 4, 5, 6,7];
var alphabets = ['a','b','c','d','e','f','g','h'];

var rotateK = 3;


describe('add', function() {
    it('should return 3 when passed the params (1, 2)', function() {
        expect(1 + 2).to.equal(3);
    });
});


describe('Test Rotation Right', function() {
    it('Rotated element should equal == 5', function() {
        var rotated = rightRotator.rotate(inputArray, rotateK);
        expect(rotated[0]).to.equal(5);

    });
});



describe('Test Shift Left', function() {
    it('Shifted element should equal == h', function() {
        var shifted = leftShiftor.shiftLeft(alphabets, rotateK);
        expect(shifted[2]).to.equal('f');
    });
});
