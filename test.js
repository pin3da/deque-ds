var tap = require('tap');
var deque = require('./index')();

tap.test('testing deque', function (t) {
  'use strict';
  t.equals(deque.size(), 0);

  for (let i = 0; i < 20; ++i) {
    deque.pushBack(i);
  }

  t.equals(deque.size(), 20);

  for (let i = 0; i < 20; ++i) {
    t.equals(deque.popFront(), i);
  }

  t.equals(deque.size(), 0);
  t.equals(deque.front(), null);
  t.equals(deque.back(), null);
  t.equals(deque.popFront(), null);
  t.equals(deque.popBack(), null);
  t.equals(deque.at(50), null);

  for (let i = 0; i < 20; ++i) {
    deque.pushFront(i);
  }

  t.equals(deque.size(), 20);
  t.equals(deque.at(3), 16);
  t.equals(deque.front(), 19, 'testing front');
  t.equals(deque.back(), 0, 'testing back');

  for (let i = 0; i < 5; ++i) {
    t.equals(deque.popBack(), i);
  }

  t.end();
});
