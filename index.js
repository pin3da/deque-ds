module.exports = Deque;

function Deque() {
  if (!(this instanceof Deque)) return new Deque();
  this._data = {};
  this._back = 0;
  this._front = 0;
}

Deque.prototype.push_back = function(value) {
  this._data[this._back++] = value;
}

Deque.prototype.push_front = function(value) {
  this._front--;
  this._data[this._front] = value;
}

Deque.prototype.front = function() {
  if (this._front < this._back)
    return this._data[this._front];
  return null;
}

Deque.prototype.pop_front= function() {
  if (this._front < this._back) {
    val = this._data[this._front];
    delete this._data[this._front];
    this._front++;
    return val;
  }
  return null;
}


Deque.prototype.back = function() {
  if (this._front < this._back)
    return this._data[this._back - 1];
  return null;
}

Deque.prototype.pop_back = function() {
  if (this._front < this._back) {
    val = this._data[this._back - 1];
    delete this._data[this._back - 1];
    this._back--;
    return val;
  }
  return null;
}

Deque.prototype.at = function(index) {
  if (index > this._back - this._front)
    return null;
  return this._data[this._front + index];
}

Deque.prototype.size = function() {
  return this._back - this._front;
}
