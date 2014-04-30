'use strict';

var inputNumbers = [1,2,3,4,5,6,7];
var rotateK = 3;
printList(inputNumbers);
printList(rotate(inputNumbers, rotateK));

var alphabets = ['a', 'b','c','d','e','f', 'g'];
printList(alphabets);
printList(rotate(alphabets, rotateK));


function rotate(inputList, rotateByK){
   var counter = -1;
   var end = inputList.length;
   var start = end - rotateByK;
   var current, shifted;
   for(var i=start; i<end; i++){
     counter++;
     shifted = inputList[i];
     current = inputList[counter];
     inputList[i] = current;
     inputList[counter] = shifted;
   }    
   return inputList; 
} 
 

function printList(inputList){
    console.log(inputList.join(" | "));
}

if(typeof module !== "undefined" && typeof module.exports !== "undefined"){
   module.exports.rotateArrayRight = rotate; 
}
