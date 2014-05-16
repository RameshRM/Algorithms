var expect = require('chai').expect;
var btree = require('../array-to-btree');
var inputArray = [1, 2, 3, 4, 5, 6];
var tree;

describe('add', function() {
    it('should return 3 when passed the params (1, 2)', function() {
        expect(1 + 2).to.equal(3);
    });
});


describe('Test BTree', function() {
    it('Should construct btree with root == 1', function() {
        tree = btree.toBtree(inputArray);
        expect(tree.value).to.equal(1);
        expect(tree.left.value).to.equal(2);
        expect(tree.right.value).to.equal(3);

        var treeLength = btree.treeLength(tree);
        expect(inputArray.length).to.equal(treeLength);

    });
});