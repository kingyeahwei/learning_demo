// var it = makeIterator(['a', 'b']);
// function makeIterator(array) {
//   var nextIndex = 0;
//   return {
//     next: function() {
//       return nextIndex < array.length ?
//       {value: array[nextIndex++], done: false} :
//       {value: undefined, done: true}
//     }
//   }
// }
// console.log(it.next())
// console.log(it.next());
// console.log(it.next());

// function makeIterator(array) {
//   var nextIndex = 0;
//   return {
//     next: function () {
//       return nextIndex < array.length
//         ? { value: array[nextIndex++] }
//         : { done: true };
//     },
//   };
// }
// var it = idMaker();
// function idMaker() {
//   var index = 0;
//   return {
//     next: function () {
//       return { value: index++, done: false };
//     },
//   };
// }

// console.log(it.next().value);
// console.log(it.next().value);

// const obj = {
//   [Symbol.iterator]: function () {
//     return {
//       next: function () {
//         return {
//           value: 1,
//           done: true
//         }
//       },
//     };
//   },
// };

/**
 * Array,
 * Map,
 * Set,
 * String,
 * TypedArray,
 * 函数的arguments
 * NodeList对象
 */
// let arr = ['a', 'b', 'c']
// let iter = arr[Symbol.iterator]();
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next());

// class RangeIterator {
//   constructor(start, stop) {
//     this.value = start;
//     this.stop = stop;
//   }

//   [Symbol.iterator]() {
//     return this;
//   }

//   next() {
//     var value = this.value;
//     if (value < this.stop) {
//       this.value++;
//       return { done: false, value: value };
//     }
//     return { done: true, value: undefined };
//   }
// }

// function range(start, stop) {
//   return new RangeIterator(start, stop);
// }

// for (var value of range(0, 3)) {
//   console.log(value); // 0, 1, 2
// }

// function Obj(value) {
//   this.value = value;
//   this.next = null;
// }
// Obj.prototype[Symbol.iterator] = function () {
//   var iterator = { next: next };
//   var current = this;
//   function next() {
//     if (current) {
//       var value = current.value;
//       current = current.next;
//       return { done: false, value: value };
//     } else {
//       return { done: false };
//     }
//   }
//   return iterator;
// };

// var one = new Obj(1);
// var two = new Obj(2);
// var three = new Obj(3);
// one.next = two;
// two.next = three;

// var it = one[Symbol.iterator]();

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// let obj = {
//   data: ['hello', 'world'],
//   [Symbol.iterator]() {
//     const self = this;
//     let index = 0;
//     return {
//       next() {
//         if (index < self.data.length) {
//           return {
//             value: self.data[index++],
//             done: false,
//           };
//         } else {
//           return { value: undefined, done: true };
//         }
//       },
//     };
//   },
// };

// NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]
// NodeList.prototype[Symbol.iterator] = [][Symbol.iterator];

// let iterator = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3,
//   [Symbol.iterator]: Array.prototype[Symbol.iterator],
// };

// for (const item of iterator) {
//   console.log(item);
// }

// let iterable = {
//   a: 'a',
//   b: 'b',
//   c: 'c',
//   length: 3,
//   [Symbol.iterator]: Array.prototype[Symbol.iterator],
// };

// for (const item of iterable) {
//   console.log(item);
// }

// var obj = {};

// obj[Symbol.iterator] = () => 1;

// [...obj]

// var $iterator = ITERABLE[Symbol.iterator]();
// var $result = $iterator.next();
// while(!$result.done) {
//   var x = $result.value;
//   $result = $iterator.next();
// }

// let set = new Set().add('a').add('b').add('c');

// let [x, y] = set;
// console.log(x);
// console.log(y);
// let [first, ...rest] = set;
// console.log(first);
// console.log(rest);

// var str = 'hello'
// console.log([...str])

// let arr = ['b', 'c'];
// console.log(['a', ...arr, 'd']);
// let arr = [...iterable]

// let generator = function* () {
//   yield 1;
//   yield* [2, 3, 4];
//   yield 5;
// };

// var iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// var someString = 'hi';
// console.log(typeof someString[Symbol.iterator])
// var iterator = someString[Symbol.iterator]();
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// var str = new String('hi');
// console.log([...str]);
// str[Symbol.iterator] = function () {
//   return {
//     next: function () {
//       if (this._first) {
//         this._first = false;
//         return { value: 'bye', done: false };
//       } else {
//         return { done: true };
//       }
//     },
//     _first: true
//   };
// };

// console.log([...str]);
// console.log(str);

// let myIterable = {
//   [Symbol.iterator]: function* () {
//     yield 1;
//     yield 2;
//     yield 3;
//   },
// };

// console.log([...myIterable]);

// let obj = {
//   *[Symbol.iterator]() {
//     yield 1;
//     yield 2;
//     yield 3;
//   },
// };

// for (const x of obj) {
//   console.log(x);
// }

// function readLinesSync(file) {
//   return {
//     [Symbol.iterator]() {
//       return {
//         next() {
//           return { done: false };
//         },
//         return() {
//           file.close();
//           return { done: false };
//         },
//       };
//     },
//   };
// }

// for (const line of readLinesSync(fileName)) {
//   console.log(line);
//   break;
// }

// for (let line of readLinesSync(fileName)) {
//   console.log(line);
//   throw new Error();
// }

// note for...of 循环

// const arr = ['red', 'green', 'blue'];
// for (let v of arr) {
//   console.log(v);
// }

// const obj = {};
// obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr)
// for (let v of obj) {
//   console.log(v);
// }

// const arr = ['red', 'green', 'blue'];
// arr.forEach(function (element, index) {
//   console.log(element);
//   console.log(index);
// });

// var arr = ['a', 'b', 'c', 'd'];
// for (let a in arr) {
//   console.log(a);
// }

// for (let a of arr) {
//   console.log(a);
// }

// for (const [key, value] of arr.entries()) {
//   console.log(key);
//   console.log(value);
// }

// let arr = [3, 5, 7]
// arr.foo = 'hello'
// for (let i in arr) {
//   console.log(i);
// }
// for (let i of arr) {
//   console.log(i);
// }

// note set和map结构

// var engines = new Set(['Gecko', 'Trident', 'Webkit', 'Webkit']);
// for (var e of engines) {
//   console.log(e);
// }

// var es6 = new Map();
// es6.set('edition', 6);
// es6.set('committee', 'TC39');
// es6.set('standard', 'ECMA-262');
// for (const [name, value] of es6) {
//   console.log(name + ':' + value);
// }
// let map = new Map().set('a', 1).set('b', 2);
// for (const pair of map) {
//   console.log(pair);
// }

// for (const [key, value] of map) {
//   console.log(key + ':' + value);
// }

// 有些数据结构是在现有的数据结构的基础上,计算生成的.比如es6的数组、Set、Map都部署了以下三个方法，调用后都返回遍历器对象
// let arr = ['a', 'b', 'c'];
// for (const pair of arr.entries()) {
//   console.log(pair);
// }

// let str = 'hello';
// for (const s of str) {
//   console.log(s);
// }

// let paras = document.querySelectorAll('html');
// for (const p of paras) {
//   console.log(p);
// }

// function printArgs() {
//   for (const x of arguments) {
//     console.log(x);
//   }
// }

// printArgs('a', 'b')

// for (const x of 'a\uD83D\uDC0A') {
//   console.log(x);
// }

// let arrayLike = { length: 2, 0: 'a', 1: 'b' };
// for (let x of arrayLike) {
//   console.log(x);
// }

// for (const x of Array.from(arrayLike)) {
//   console.log(x);
// }

// let es6 = {
//   edition: 6,
//   committee: 'TC39',
//   standard: 'ECMA-262'
// }

// for (const e in es6) {
//   console.log(e);
// }

// for (const e of es6) {
//   console.log(e);
// }

// for (const key of Object.keys(es6)) {
//   console.log(key + ':' + es6[key]);
// }

// function* entries(obj) {
//   for (const key of Object.keys(obj)) {
//     yield [key, obj[key]]
//   }
// }

// for (const [key, value] of entries(es6)) {
//   console.log(key + '->' + value);
// }
// for (let index = 0; index < myArray.length; index++) {
//   console.log(myArray[index]);
// }
// myArray.forEach(function(value) {
//   console.log(value);
// })
// for (const index in myArray) {
//   console.log(typeof index);
// }
// for (const value of myArray) {
//   console.log(value);
// }
// for (const n of fibonnacci) {
//   if (n > 1000) {
//     break
//   }
//   console.log(n);
// }

