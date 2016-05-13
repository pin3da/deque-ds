[![Build Status](https://travis-ci.org/pin3da/deque-ds.svg?branch=master)](https://travis-ci.org/pin3da/deque-ds)

# deque-ds
deque implementation in javascript

## Usage

``` js
var deque = require('deque-ds')();

for (var i = 0; i < 20; ++i)
  deque.pushBack(i);

console.log(deque.popFront());
console.log(deque.popBack());

deque.pushFront(100);

console.log(deque.size());
```

## Install

    npm install deque-ds

## Test

    npm run test


## API

    pushBack(value)
    pushFront(value)
    
    front()         // get front element
    popFront()      // get and remove front element
    
    back();         // get last element
    popBack();      // get and remove last element
    
    at(index);      // get element at specific location
    size();
