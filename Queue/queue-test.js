'use strict';

var assert = require('assert');
var SimpleQueue = require('./index');

describe('Test Queue', function() {
  it('Should work with Queue', function(done) {
    var queue = new SimpleQueue(5);
    queue.add(1);
    assert.ok(queue.all().length === 1);
    done();
  });
  it('Should work with Queue and Error', function(done) {
    var queue = new SimpleQueue(2);
    queue.add(2);
    queue.add(2);
    assert.ok(queue.all().length === 2);
    try {
      queue.add(2);
    } catch (e) {
      assert.ok(e);
    }
    done();
  });

  it('Should work with Queue and dequeue', function(done) {
    var queue = new SimpleQueue(2);
    queue.add(2);
    queue.add(2);
    assert.ok(queue.all().length === 2);
    queue.dequeue();
    queue.add(2);
    assert.ok(queue.all().length === 2);
    done();
  });


  it('Should work with Queue and peek', function(done) {
    var queue = new SimpleQueue(2);
    queue.add(1);
    queue.add(2);
    assert.ok(queue.all().length === 2);
    assert.ok(queue.peek() === 1);
    queue.dequeue();
    assert.ok(queue.peek() === 2);
    queue.add(3);
    assert.ok(queue.peek() === 2);
    assert.ok(queue.all().length === 2);
    done();
  });

});
