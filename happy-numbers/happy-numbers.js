'use strict';
(function(root) {
    var foundNumbers = {};

    function findIsHappyNumber(inputNumber) {
        if (inputNumber === 1) {
            return true;
        } else {
            foundNumbers[inputNumber] = inputNumber;
            var inputString = numberToString(inputNumber);
            var max = inputString.length;
            var number;
            var sum = 0;
            var sqr = 0;

            for (var i = 0; i < max; i++) {
                number = inputString.substr(i, 1);
                sqr = Math.pow(number, 2);
                sum = sum + sqr;
            }
            if (sum === 1) {
                return true;
            } else if (foundNumbers.hasOwnProperty(sum)) {
                return false;
            } else {
                return findIsHappyNumber(sum);
            }
        }
    }

    function numberToString(inputNumber) {
        return inputNumber.toString();
    }

    root['isHappyNumber'] = function(inputNumber) {
        return findIsHappyNumber(inputNumber);
    }
}).call(this, (typeof module === "object" && module && typeof module.exports === "object" ? exports : window));