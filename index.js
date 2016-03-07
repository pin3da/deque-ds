module.exports = Deque;

function Deque() {
  if (!(this instanceof Deque)) return new Deque();
  this.data = {};
  this.back = 0;
  this.front = 0;
}

Deque.prototype.push_back = function(value) {
  this.data[this.back++] = value;
}

Deque.prototype.push_front = function(value) {
  this.front--;
  this.data[this.front] = value;
}

Deque.prototype.front = function() {
  if (this.front < this.back)
    return this.data[this.front];
  return null;
}

Deque.prototype.pop_front= function() {
  if (this.front < this.back) {
    val = this.data[this.front];
    delete this.data[this.front];
    this.front++;
    return val;
  }
  return null;
}


Deque.prototype.back = function() {
  if (this.front < this.back)
    return this.data[this.back - 1];
  return null;
}

Deque.prototype.pop_back = function() {
  if (this.front < this.back) {
    val = this.data[this.back - 1];
    delete this.data[this.back - 1];
    this.back--;
    return val;
  }
  return null;
}

Deque.prototype.at = function(index) {
  if (index > this.back - this.front)
    return null;
  return this.data[this.front + index];
}

Deque.prototype.size = function() {
  return this.back - this.front;
}
