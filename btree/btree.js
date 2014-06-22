'use strict';

function BTree(value) {
    this.value = value;
}

BTree.prototype = {
    setLeft: function(value) {
        this.left = new BTree(value);
    },
    setRight: function(value) {
        this.right = new BTree(value);
    }
};

module.exports = BTree;