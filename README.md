# deque-ds
deque implementation in javascript

## Usage

``` js
var deque = require('deque-ds')();

for (var i = 0; i < 20; ++i)
  deque.push_back(i);

console.log(deque.pop_front());
console.log(deque.pop_back());

deque.push_front(100);

console.log(deque.size());
```

## Install

    npm install deque-ds

## Test

    npm run test
