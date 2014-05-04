"use strict";
var sortOrder = getSortOrder(process.argv);
var unSortedInput = getUnsortedInput(process.argv);
var unSorted=[];

for(var i=0; i<unSortedInput.length;i++){
    unSorted.push(parseInt(unSortedInput[i]));
}

var result = [];
var sortedList = mergeSort(unSorted, unSorted.slice(),unSorted.length);
console.log(unSorted);

function mergeSort(unSortedList, tempList, listLength){
    if(listLength<=1){
        return;
    }

    var left, middle, right;
    var list0, list1 = [];
    middle = Math.floor(listLength / 2);
    left = {type: "left", start:0, end: middle};
    right = {type: "right",start:middle, end: listLength+1};

    list0 = tempList.slice(0, middle);
    list1 = tempList.slice(middle);
    mergeSort(list0, list0, middle);
    mergeSort(list1, list1, listLength-middle);
    if(sortOrder === "desc"){
        mergeDesc(list0, list1, unSortedList);
    }else{
        merge(list0, list1, unSortedList);
    }
}


function merge(left, right, sorted){

    var idx=0;
    while(left.length >0 && right.length>0){
        if(left[0] <= right[0]){
            sorted[idx++]=left[0];
            left.shift();
        }else{
            sorted[idx++]=right[0];
            right.shift();
        }
    }
    /**Copy the remaining **/
    while(left.length >0){
        sorted[idx++]=left[0];
        left.shift();
    }
    /**Copy the remaining **/
    while(right.length >0){
        sorted[idx++]=right[0];
        right.shift();
    }
    return sorted;
}

function mergeDesc(left, right, sorted){
    var idx=0;
    while(left.length >0 && right.length>0){
        if(left[0] <= right[0]){
            sorted[idx++]=right[0];
            right.shift();
        }else{
            sorted[idx++]=left[0];
            left.shift();
        }
    }
    /**Copy the remaining **/
    while(right.length >0){
        sorted[idx++]=right[0];
        right.shift();
    }
    /**Copy the remaining **/
    while(left.length >0){
        sorted[idx++]=left[0];
        left.shift();
    }
    return sorted;
}


function getUnsortedInput(ioProcessArgs){
    return ioProcessArgs.slice(2,3)[0].split(",");
}

function getSortOrder(ioProcessArgs){
    var sortOrder = ioProcessArgs.slice(2)[1];
    if(typeof sortOrder === "undefined"){
        return "asc";
    }else{
        return sortOrder;
    }
}
