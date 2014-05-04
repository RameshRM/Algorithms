'use strict';

var inputNumbers = [1,2,3,4,5,6,7];
var rotateK = 3;
var rotate = require('./rotate-array');

printList(inputNumbers);
printList(rotate(inputNumbers, rotateK));

var alphabets = ['a', 'b','c','d','e','f', 'g'];
printList(alphabets);
printList(rotate(alphabets, rotateK));


/**Helper Function To Print Array ***/
function printList(inputList){
    console.log(inputList.join(" | "));
}
