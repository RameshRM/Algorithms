'use strict';
var tree = new require('../btree/btree');


function buildBTree(inputArray, start, end) {

    var i = start;
    var left, right;

    left = ((2 * i) + 1);
    right = ((2 * i) + 2);
    if (start > end) {
        return null;
    }
    var max = inputArray.length;
    var node = new tree(inputArray[start]);

    if (left <= end) {
        node.setLeft(buildBTree(inputArray, left, end));
    }
    if (right <= end) {
        node.setRight(buildBTree(inputArray, right, end));
    }
    return node;
}



if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = {
        'toBtree': function(inputArray) {
            if (typeof inputArray === "object") {
                return buildBTree(inputArray, 0, inputArray.length);
            } else {
                return inputArray;
            }

        }
    };
};
