'use strict';
var btree = new require('../btree/btree');
var max;

function buildTree(inputList, start, end) {
    if (start > end) {
        return null;
    } else {
        var node = new btree(inputList[start],start);
        var left = null,
            right = null;
        var leftIdx = (2*start) + 1;
        var rightIdx = (2*start) + 2;
        if(leftIdx<=end){
            left = buildTree(inputList, leftIdx, end);
            if (left !== null) {
                node.left = left;
            }
        }

        if(rightIdx<=end){
            right = buildTree(inputList, rightIdx, end);
            if (right !== null) {
                node.right = right;
            }
        }




        return node;
    }
}

module.exports = {
    heapify: function(inputList) {
        var start = 0;
        max = inputList.length;
        var node = new btree(inputList[start], start);
        var left , right;
        node.value = inputList[start];
        left = buildTree(inputList, ((2 * start) + 1), max);
        right = buildTree(inputList, ((2 * start) + 2), max);
        if(typeof left !== "undefined" && left !== null ){
            node.left = left;
        }
        if(typeof right !== "undefined" && right !== null ){
            node.right = right;
        }
        return node;
    }
};

function inOrderTraverse(node){
    if(node !== null){
        if(typeof node.left !== "undefined"){
            inOrderTraverse(node.left);
        }
        if(node.value !== null){
            // console.info(node.value);
        }

        if(typeof node.right !== "undefined"){
            inOrderTraverse(node.right);
        }
    }
}

function treeLength (tree){

}

function traverse(inputList){
    var max = parseInt((inputList.length/2))-1;
    // max = inputList.length;
    var maxLength = inputList.length;

    for(var i=max; i>=0; i--){
       maxHeapify(inputList,i,maxLength);
    }
    return inputList;
}

function maxHeapify(inputList, idx, maxLength){
    var leftIdx = (2*idx+1);
    var rightIdx = (2*idx+2);
    var min , minIdx;

    min = inputList[idx];

    minIdx = idx;

    if(leftIdx <= maxLength && inputList[leftIdx] < inputList[idx]){
        min = inputList[leftIdx];
        minIdx = leftIdx;
    }

    if(rightIdx <= maxLength && inputList[rightIdx] < min){
        min = inputList[rightIdx];
        minIdx = rightIdx;
    }

    if(minIdx != idx){
        var tmp = inputList[idx];
        inputList[idx] = inputList[minIdx];
        inputList[minIdx] = tmp;
        maxHeapify(minIdx);
    }

}

function maxHeapify2(inputs){
    for(var i=inputs.length-1; i>=0;i--){
        buildMaxHeap(inputs,i);
    }
    console.log("Max Heap Is : ");
    console.log(inputs);
}

function minHeapify2(inputs){
    var max = parseInt(inputs.length/2);
    for(var i=max; i>=0;i--){
        buildMinHeap(inputs,i);
    }
    console.log("Min Heap Is : ");
    console.log(inputs);
}

function buildMaxHeap(inputs,idx){
    var _this , _left, _right;
    var _max, _temp;
    var _inputLength = inputs.length;
    var i = idx;
    _this = inputs[i];
    _left = (2*i)+1;
    _right = (2*i)+2;
    _max = i;

    if(_left <= _inputLength && inputs[_left] >= _this){
       _max = _left;
    }

    if(_right <= _inputLength && inputs[_right] >= inputs[_max]){
        _max = _right;
    }

    if(_max !== i){
        _temp = inputs[i];
        inputs[i] = inputs[_max];
        inputs[_max] = _temp;
        buildMaxHeap(inputs, _max);
    }
}

function buildMinHeap(inputs,idx){
    var _this , _left, _right;
    var _min, _temp;
    var _inputLength = inputs.length;
    var i = idx;
    _this = inputs[i];
    _left = (2*i)+1;
    _right = (2*i)+2;
    _min = i;

    if(_left <= _inputLength && inputs[_left] <= _this){
       _min = _left;
    }

    if(_right <= _inputLength && inputs[_right] <= inputs[_min]){
        _min = _right;
    }

    if(_min !== i){
        _temp = inputs[i];
        inputs[i] = inputs[_min];
        inputs[_min] = _temp;
        buildMinHeap(inputs, _min);
    }
}

function checkMinHeap(inputs,idx){
    var _this , _left, _right;
    var _min, _temp;
    var _inputLength = inputs.length;
    for(var i=idx;i<inputs.length; i++){
        _this = inputs[i];
        _left = (2*i)+1;
        _right = (2*i)+2;
        _min = i;

        if(_left <= _inputLength && inputs[_left] < _this){
           _min = _left;
        }

        if(_right <= _inputLength && inputs[_right] < inputs[_min]){
            _min = _right;
        }

        if(_min !== i){
            inputs[i] = inputs[_min];
            inputs[_min] = _this;
            checkMinHeap(inputs, _min);
        }
    }
}


function leftIdx(idx, max){
    var leftIdx = (2*idx)+1;
    if(leftIdx > max){
        return idx;
    }else{
        return leftIdx;
    }
}
function rightIdx(idx, max){
    var rightIdx = (2*idx)+2;
    if(rightIdx > max){
        return idx;
    }else{
        return rightIdx;
    }
}
var heaper = require('../heapify/index');
var inputs = [8,12,9,7,22,3,26,14,11,15,22];
inputs = [8,12,9,7,22,3,26,14,11,15,22];
var hTree = heaper.heapify(inputs);
console.log("Heaped Tree");
console.log(JSON.stringify(hTree));
inOrderTraverse(hTree);
// console.log(inputs.join(","))
var outputs = traverse(inputs);
var nonMaxHeap = [27,17,3,16,13,10,1,5,7,12,4,8,9,0];
var trreOnHeap = buildTree(nonMaxHeap, 0, nonMaxHeap.length);
// checkMaxHeap(nonMaxHeap,0);
nonMaxHeap = [5,3,17,10,84,19,6,22,9];
// maxHeapify2(nonMaxHeap);
maxHeapify2([27,17,3,16,13,10,1,5,7,12,4,8,9,0])
// checkMaxHeap(nonMaxHeap,0);

// console.log(nonMaxHeap);

var nonMinHeap = [ 27, 17, 10, 7, 13, 9, 1, 5, 16, 12, 4, 8, 3, 0 ];
// minHeapify2(nonMaxHeap);
minHeapify2([6,3,2,8,4,5]);

checkMinHeap(nonMinHeap,0);


