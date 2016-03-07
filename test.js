var tap = require('tap');
var deque = require('./index')();

tap.test('testing deque', function(t) {
  t.equals(deque.size(), 0);

  for (var i = 0; i < 20; ++i)
    deque.push_back(i);

  t.equals(deque.size(), 20);

  for (var i = 0; i < 20; ++i)
    t.equals(deque.pop_front(), i);

  t.equals(deque.size(), 0);
  t.equals(deque.front(), null);
  t.equals(deque.back(), null);
  t.equals(deque.pop_front(), null);
  t.equals(deque.pop_back(), null);
  t.equals(deque.at(50), null);

  for (var i = 0; i < 20; ++i)
    deque.push_front(i);


  t.equals(deque.size(), 20);
  t.equals(deque.at(3), 16);
  t.equals(deque.front(), 19, 'testing front');
  t.equals(deque.back(), 0, 'testing back');

  for (var i = 0; i < 5; ++i)
    t.equals(deque.pop_back(), i);

  t.end();
});
