// function log(x, y) {
//     y = y || 'World'
//     console.log(x, y)
// }
//
// log('Hello')
// log('Hello', 'China')
// log('Hello', '')
//
// function log(x, y='World') {
//     console.log(x, y)
// }
// log('Hello')
// log('Hello', 'China')
// log('Hello', '')
//
// function Point(x = 0, y = 0) {
//     this.x = x
//     this.y = y
// }
// const p = new Point()
// console.log(p)
//
// function foo(x = 5) {
//     // let x = 1;
//     // const x = 2;
// }
//
// function foo(x, x, y) {
//     console.log(x, x, y)
// }
// foo(1, 2, 3)
//
// // function foo(x, x, y = 1) {
// //
// // }
//
// let x = 99;
// function foo(p = x + 1) {
//     console.log(p)
// }
// foo()
// x = 100;
// foo()
//
// function foo({x, y = 5}) {
//     console.log(x, y)
// }
// foo({})
//
//

// function foo({x, y = 5}) {
//     console.log(x, y);
// }
//
// foo({})
// foo({x: 1})
// foo({x: 1, y: 2})
// foo()

// function foo({x, y = 5} = {}) {
//     console.log(x, y)
// }
//
// foo()

// function fetch(url, {body = '', method = 'GET', headers = {}} = {}) {
//     console.log(method)
// }
// fetch('http://example.com', {})
// fetch("http://example.com")

// function m1({x = 0, y = 0} = {}) {
//     return [x, y]
// }
// function m2({x, y} = {x: 0, y: 0}) {
//     return [x, y]
// }
//
// console.log(m1());
// console.log(m2());
//
// console.log(m1({x: 3, y: 8}));
// console.log(m2({x: 3, y: 8}));
//
// console.log(m1({x: 3}));
// console.log(m2({x: 3}));
//
// console.log(m1({}));
// console.log(m2({}));
//
// console.log(m1({z: 3}));
// console.log(m2({z: 3}));

// function f(x = 1, y) {
//     return [x, y]
// }
//
// console.log(f());
// console.log(f(2));
// console.log(f(undefined,1));

// function f(x, y = 5, z) {
//     return [x, y, z]
// }
//
// console.log(f());
// console.log(f(1));
// // console.log(f(1, , 2));
// console.log(f(1, undefined, 2));

// function foo(x = 5, y = 6) {
//     console.log(x, y)
// }
// foo(undefined, null)

// console.log((function (a) {
//
// }).length);
//
// console.log((function (a = 5) {
//
// }).length);
//
// console.log((function (a, b, c = 5) {
//
// }).length);
//
// console.log((function (...args) {
//
// }).length);
//
// console.log((function (a = 0, b, c) {
//
// }).length);
//
// console.log((function (a, b = 1, c) {
//
// }).length);

// var x = 1;
// function f(x, y = x) {
//     console.log(y)
// }
// f(2)

// let x = 1;
// function f(y = x) {
//     let x = 2;
//     console.log(y)
// }
//
// f()
// function f(y = x) {
//     let x = 2;
//     console.log(y)
// }
// f()

// var x = 1;
//
// function foo(x = x) {
//     // ...
// }
//
// foo()

// let foo = 'outer'
//
// function bar(func = () => foo) {
//     let foo = 'inner'
//     console.log(func())
// }
//
// bar()

// function bar(func = () => foo) {
//     let foo = 'inner'
//     console.log(func())
// }
// bar()

// var x = 1;
// function foo(x, y = function () {
//     x = 2;
// }) {
//     var x = 3;
//     y()
//     console.log(x)
// }
// foo()
// console.log(x)

// var x = 1;
// function foo(x, y = function () {
//     x = 2
// }) {
//     x = 3;
//     y()
//     console.log(x)
// }
// foo()
// console.log(x)

// function throwIfMissing() {
//     throw new Error('Missing Parameter')
// }
//
// function foo(mustBeProvided = throwIfMissing()) {
//     return mustBeProvided;
// }
//
// console.log(foo('xxx'));

// function foo(option1 = undefined) {
//     console.log(option1)
// }
//
// foo()
//

// function add(...values) {
//     let sum = 0;
//     for (var val of values) {
//         sum += val
//     }
//     return sum;
// }
//
// console.log(add(2, 3, 5));

// function sortNumbers() {
//     return Array.prototype.slice.call(arguments).sort()
// }

// const sortNumbers = (...numbers) => console.log(numbers.sort())
//
// sortNumbers(1, 4, 5, 2);

// function push(array, ...items) {
//     items.forEach(function (item) {
//         array.push(item)
//         console.log(item)
//     })
//
// }
// var a = []
// push(a, 1, 2, 3)
// console.log(a)

// function doSomething(a, b = a) {
//     'use strict'
// }

// const doSomething = function ({a, b}) {
//     'use strict'
// }

// const doSomething = (...a) => {
//     'use strict'
// }

// const obj = {
//     doSomething({a, b}) {
//         'use strict'
//     }
// }

// 'use strict'
// function doSomething(a, b = 60) {
//
//
// }

// const doSomething = (function () {
//     'use strict'
//     return function (value = 42) {
//         return value;
//     }
// })()
//
// console.log(doSomething instanceof Function)
// function foo() {
//
// }
//
// console.log(foo.name);
//
// var f = function () {
//
// }
// console.log(f.name);

// const bar = function baz() {
//
// }
// console.log(bar.name);

// console.log(new Function().name);

// function foo() {}
// const xxx = foo.bind({});
// console.log(xxx.name);
//
// console.log((function () {
//
// }.bind({})).name);

// todo 箭头函数
// var f = v => v;
// var f = function (v) {
//     return v;
// }
//
// var f = () => 5
// var f = function () {
//     return 5;
// }
//
// var sum = (num1, num2) => num1 + num2
// var sum = function (num1, num2) {
//     return num1 + num2
// }

// var sum = (num1, num2) => {
//     return num1 + num2
// }

// let getTempItem = id => {id: id, name: 'Temp'};
// let getTempItem = id => ({id: id, name: 'Temp'})

// let foo = () => {a: 1}
// console.log(foo());

// let fn = () => void doesNotReturn();

// const full = ({first, last}) => first + ' ' + last;

// function full(person) {
//     return person.first + ' ' + person.last;
// }

// const isEven = n => n % 2 === 0;
// const square = n => n * n;

// [1, 2, 3].map(function (x) {
//     return x * x;
// });
//
// [1, 2, 3].map(x => x * x);
//
// var values = [2, 5, 3, 6]
//
// var result = values.sort(function (a, b) {
//     return a - b;
// })
//
// console.log(result)
//
// console.log(values.sort((a, b) => b - a));

// const numbers = (...nums) => nums
//
// console.log(numbers(1, 2, 3, 4, 5));
//
// const headAndTail = (head, ...tail) => [head, tail]
//
// console.log(headAndTail(1, 2, 3, 4, 5));

// warn
