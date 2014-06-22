"use strict";
var happyNumbers = require('./happy-numbers');

Number.prototype.ishappy = function() {
    return happyNumbers.isHappyNumber(this);
}