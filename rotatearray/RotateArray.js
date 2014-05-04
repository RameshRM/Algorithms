'use strict';

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

if(typeof module !== "undefined" && typeof module.exports !== "undefined"){
   module.exports = {'rotate' : rotate};
}
