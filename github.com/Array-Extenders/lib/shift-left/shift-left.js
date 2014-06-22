'use strict';

function shift(inputList, shiftByK) {
    var counter=-1;
    var max = inputList.length;
    var start = null;
    var current, shifted;
    var tempList = [];
    var i;
    for (i = 0; i < shiftByK; i++) {
        tempList.push(inputList[i]);
    }

    for (i = 0; i < max; i++) {
        counter++;
        if (counter < shiftByK) {
            current = inputList[i];
            shifted = inputList[counter + shiftByK];
            inputList[i] = shifted;
        } else {
            if (i > shiftByK) {
                shifted = inputList[i];
                inputList[i] = inputList[i + shiftByK];
            }
        }
    }
    start = max - shiftByK;
    for (i = 0; i < shiftByK; i++) {
        inputList[start] = tempList[i];
        start++;
    }
    return inputList;
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = {
        'shiftLeft': shift
    };
}