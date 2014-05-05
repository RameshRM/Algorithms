'use strict';

var inputs = ['a', 'b','c','d','e','f','g','h'];
printList(inputs);
var shiftBy = 5;
var shiftor = require('./ShiftArray');
var shifted = shiftor.shift(inputs, shiftBy);
printList(shifted);


/**Helper Function To Print Array ***/
function printList(inputList){
    console.log(inputList.join(" | "));
}
