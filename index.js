module.exports = Deque;

var self;
function Deque() {
  if (!(this instanceof Deque)) return new Deque();
  data = {};
  back = 0;
  front = 0;
  self = this;
}

Deque.prototype.push_back = function(value) {
  data[back++] = value;
}

Deque.prototype.push_front = function(value) {
  front--;
  data[front] = value;
}

Deque.prototype.front = function() {
  if (front < back)
    return data[front];
  return null;
}

Deque.prototype.pop_front= function() {
  if (front < back) {
    val = data[front];
    delete data[front];
    front++;
    return val;
  }
  return null;
}


Deque.prototype.back = function() {
  if (front < back)
    return data[back - 1];
  return null;
}

Deque.prototype.pop_back = function() {
  if (front < back) {
    val = data[back - 1];
    delete data[back - 1];
    back--;
    return val;
  }
  return null;
}

Deque.prototype.at = function(index) {
  if (index > back - front)
    return null;
  return data[front + index];
}

Deque.prototype.size = function() {
  return back - front;
}
