'use strict';
var tree = new require('../btree/btree');
var treeLength = 0;

function buildTree(inputList, start, end) {
    if (start > end) {
        return null;
    } else {
        var node = new tree(inputList[start]);
        var left = null,
            right = null;
        var leftIdx = (2 * start) + 1;
        var rightIdx = (2 * start) + 2;
        if (leftIdx <= end) {
            left = buildTree(inputList, leftIdx, end);
            if (left !== null) {
                node.left = left;
            }
        }

        if (rightIdx <= end) {
            right = buildTree(inputList, rightIdx, end);
            if (right !== null) {
                node.right = right;
            }
        }
        return node;
    }
}

function walkTree(thisTree) {
    for (var key in thisTree) {
        if (thisTree.hasOwnProperty(key)) {
            if (key === "value") {
                treeLength = treeLength + 1;
            } else if (key === "left") {
                walkTree(thisTree.left);
            } else if (key === "right") {
                walkTree(thisTree.right);
            }
        }
    }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = {
        'toBtree': function(inputArray) {
            if (typeof inputArray === "object") {
                return buildTree(inputArray, 0, inputArray.length - 1);
            } else {
                return inputArray;
            }
        },
        treeLength: function(tree) {
            walkTree(tree);
            return treeLength;
        }
    };
};