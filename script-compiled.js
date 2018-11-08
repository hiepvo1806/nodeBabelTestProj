'use strict';

var _test = require('./test2');

var rx = require('rxjs');
var rxOperator = require('rxjs/operators');

// import foo from "test2";
//emit every second

// const k = require('test3');


var source = rx.from([1, 1, 2, 3, 3, 4, 5]);
//filter out all values until interval is greater than 5
var example = source.pipe(rxOperator.filter(function (num) {
    return num > 2;
}), rxOperator.tap(function (r) {
    return console.log("from tap", r);
}), rxOperator.distinctUntilChanged(function (p, q) {
    return p == q;
}));

var subscribe = example.subscribe(function (val) {
    return console.log('Number greater than 2: ' + val);
});

console.log((0, _test.abc)());
console.log("xys");
