// if (true) {
//   let x = 'hello';
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// var a = 1, b = 2, c = 3;

// const a = 1;
// const b = 2;
// const c = 3;

// const [a, b, c] = [1, 2, 3];

// const a = "foobar"
// const b = 'foo' + a + 'bar';

// const c = `foobar`;

// const a = 'foobar',
// const b = `foo${a}bar`;

// const arr = [1, 2, 3, 4];

// const first = arr[0];
// const second = arr[1];

// const [first, second] = arr;

// bad
// function getFullName(user) {
//   const firstName = user.firstName;
//   const lastName = user.lastName;
// }

// function getFullName(obj) {
//   const {firstName, lastName} = obj;
// }

// function getFullName({firstName, lastName}) {

// }

// function processInput(input) {
//   return [left, right, top, bottom];
// }

// function processInput(input) {
//   return { left, right, top, bottom };
// }

// const { left, right } = processInput(input);

// const a = { k1: v1, k2: v2 };
// const b = {
//   k1: v1,
//   k2: v2,
// };

// const a = {};
// a.x = 3;

// const a = {};
// Object.assign(a, { x: 3 });

// const a = {x: null}
// a.x = 3;

// const obj = {
//   id: 5,
//   name: 'San Francisco',
// };

// obj[getKey('enabled')] = true;

// const obj = {
//   id: 5,
//   name: 'San Francisco',
//   [getKey('enabled')]: true,
// };

// var ref = 'some value';

// const atom = {
//   ref: ref,
//   value: 1,
//   addValue: function (value) {
//     return atom.value + value;
//   },
// };

// const atom = {
//   ref,
//   value: 1,
//   addValue(value) {
//     return atom.value + value;
//   },
// };

// const len = items.length;
// const itemsCopy = [];
// let i;
// for (i = 0; i < len; i++) {
//   itemsCopy[i] = items[i]
// }

// const itemsCopy = [...items]

// const foo = document.querySelectorAll('.foo');
// const nodes = Array.from(foo)

// (() => {
//   console.log('Welcome to the Internet.');
// })()

// [1, 2, 3].map(function (x) {
//   return x * x;
// });

// [1, 2, 3].map((x) => {
//   return x * x;
// });

// [1, 2, 3].map((x) => x * x);

// const self = this;
// const boundMethod = function (...params) {
//   return method.apply(self, params);
// }

// const boundMethod = method.bind(this);

// const boundMethod = (...params) => method.apply(this, params);

// function divide(a, b, option = false) {}

// function divide(a, b, {option = false} = {}) {}

// function concatenateAll() {
//   const args = Array.prototype.slice.call(arguments);
//   return args.join('')
// }

// function concatenateAll(...args) {
//   return args.join('');
// }

// function handleThings(opts) {
//   opts = opts || {};
// }

// function handleThings(opts = {}) {}

// let map = new Map(arr);

// for (let key of map.keys()) {
//   console.log(key);
// }

// for (let value of map.values()) {
//   console.log(value);
// }

// for (let item of map.entries()) {
//   console.log(item[0], item[1]);
// }

// function Queue(contents = []) {
//   this._quene = [...contents]
// }

// Queue.prototype.pop = function() {
//   const value = this._quene[0]
//   this._quene.splice(0, 1);
//   return value;
// }

// class Quene {
//   constructor(contents = []) {
//     this._quene = [...contents];
//   }
//   pop() {
//     const value = this._quene[0];
//     this._quene.splice(0, 1);
//     return value;
//   }
// }

// const inherits = require('inherits');

// function PeekableQueue(contents) {
//   Queue.apply(this, contents);
// }

// inherits(PeekableQueue, Queue)

// PeekableQueue.prototype.peek = function() {
//   return this._queue[0];
// }

// class PeekableQueue extends Queue {
//   peek() {
//     return this._queue[0]
//   }
// }

// const moduleA = require('moduleA');

// const func1 = moduleA.func1;
// const func2 = moduleA.func2;

// import { func1, func2 } from 'moduleA'

// var React = require('react');

// var Breadcrumbs = React.creatClass({
//   redner() {
//     return <nav />
//   }
// })

// module.exports = Breadcrumbs;

// import React from 'react'

// class Breadcrumbs extends React.Component {
//   render() {
//     return <nav />;
//   }
// }

// export default Breadcrumbs;

// import * as myObject from './importModule'

// import myObject from './importModule';

// function makeStyleGuide() {}
// export default makeStyleGuide;


// const StyleGuide = {
//   es6: {}
// }

// export default StyleGuide;


