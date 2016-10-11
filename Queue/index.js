'use strict';

module.exports = Queue;

function Queue(size) {
  this.size = size || 100;
  this.list = [];
}



Queue.prototype.add = function(element) {
  if (this.list.length < this.size) {
    this.list.push(element);
    return element;
  }
  throw new Error('Queue reached maximum');
};

Queue.prototype.dequeue = function() {
  return this.list.length > 0 ? this.list.shift() : null;
};


Queue.prototype.peek = function() {
  if (this.list.length > 0) {
    return this.list[0];
  }
  return;
};

Queue.prototype.all = function(element) {
  return this.list;
};
