// let s = Symbol();
// console.log(typeof s)

// let s1 = Symbol('foo')
// let s2 = Symbol('bar')
// console.log(s1);
// console.log(s2);

// const obj = {
//   toString() {
//     return 'abc';
//   }
// }
// const sym = Symbol(obj)
// console.log(sym);

// let s1 = Symbol()
// let s2 = Symbol()
// console.log(s1 === s2);

// let s1 = Symbol('foo')
// let s2 = Symbol('foo')
// console.log(s1 === s2);

// let sym = Symbol('My symbol')
// 'your symbol is ' + sym

// let sym = Symbol('My Symbol')
// `your symbol is ${sym}`

// let sym = Symbol('My Symbol')
// console.log(String(sym))
// console.log(sym.toString());

// let sym = Symbol()
// console.log(Boolean(sym))
// console.log(!sym)
// if (sym) {

// }

// let sym = Symbol()
// Number(sym)
// sym + 2

// const sym = Symbol('foo')
// console.log(sym.description);

// let mySymbol = Symbol();
// let a = {}
// a[mySymbol] = 'Hello!'

// let a = {
//   [mySymbol]: 'Hello!'
// }

// let a = {};
// Object.defineProperty(a, mySymbol, {
//   value: "Hello!",
//   enumerable: true,
//   writable: true,
//   configurable: true,
// });

// console.log(a[mySymbol]);

// const mySymbol = Symbol()
// const a = {}
// a.mySymbol = 'Hello!'
// console.log(a[mySymbol]);
// console.log(a['mySymbol']);

// let s = Symbol()
// let obj = {
//   [s]: function(org) {}
// }
// obj[s](123)

// let s = Symbol()
// let obj = {
//   [s](arg) {}
// }

// const log = {}
// log.levels = {
//   DEBUG: Symbol('debug'),
//   INFO: Symbol('info'),
//   WARN: Symbol('warn')
// };
// console.log(log.levels.DEBUG, 'debug message');
// console.log(log.levels.INFO, 'info message');

// const COLOR_RED = Symbol();
// const COLOR_GREEN = Symbol();
// function getComplement(color) {
//   switch (color) {
//     case COLOR_RED:
//       return COLOR_GREEN;
//     case COLOR_GREEN:
//       return COLOR_RED;
//     default:
//       throw new Error("undefined color");
//   }
// }

// function getArea(shape, options) {
//   let area = 0;
//   switch(shape) {
//     case 'Triangle':
//       area = .5 * options.width * options.height;
//       break;
//   }
//   return area;
// }
// console.log(getArea('Triangle', {width: 100, height: 100}))

// const shapeType = {
//   triangle: Symbol()
// }
// function getArea(shape, options) {
//   let area = 0;
//   switch(shape) {
//     case shapeType.triangle:
//       area = .5 * options.width * options.height;
//       break;
//   }
//   return area;
// }

// console.log(getArea(shapeType.triangle, {width: 100, height: 100}))

// const obj = {};
// let a = Symbol('a');
// let b = Symbol('b');
// obj[a] = 'Hello';
// obj[b] = 'world';
// console.log(Object.getOwnPropertySymbols(obj))

// const obj = {};
// const foo = Symbol('foo');
// obj[foo] = 'bar';
// for(let i in obj) {
//   console.log(i);
// };
// console.log(Object.getOwnPropertyNames(obj))
// console.log(Object.getOwnPropertySymbols(obj));

// let obj = {
//   [Symbol('my_key')]: 1,
//   enum: 2,
//   nonEnum: 3
// }

// console.log(Reflect.ownKeys(obj));

// let size = Symbol('size');
// class Collection {
//   constructor() {
//     this[size] = 0;
//   }
//   add(item) {
//     this[this[size]] = item;
//     this[size]++;
//   }
//   static sizeOf(instance) {
//     return instance[size]
//   }
// }

// const obj = {};
// const foo = Symbol('foo');
// obj[foo] = 'bar';
// console.log(Object.getOwnPropertyNames(obj))
// console.log(Object.getOwnPropertySymbols(obj));

// let obj = {
//   [Symbol('my_key')]: 1,
//   enum: 2,
//   nonEnum: 3
// }
// console.log(Reflect.ownKeys(obj))

// let size = Symbol('size');
// class Collection {
//   constructor() {
//     this[size] = 0;
//   }
//   add(item) {
//     this[this[size]] = item;
//     this[size]++;
//   }
//   static sizeOf(instance) {
//     return instance[size]
//   }
// }

// let x = new Collection()
// console.log(Collection.sizeOf(x))

// x.add('foo')
// console.log(Collection.sizeOf(x));

// console.log(Object.keys(x))
// console.log(Object.getOwnPropertyNames(x));
// console.log(Object.getOwnPropertySymbols(x));
// note Symbol.for() Symbol.keyFor()

// let s1 = Symbol.for('foo');
// let s2 = Symbol.for('foo');
// console.log(s1 === s2);

// console.log(Symbol.for('bar') === Symbol.for('bar'));
// console.log(Symbol('bar') === Symbol('bar'));

// let s1 = Symbol.for('foo')
// console.log(Symbol.keyFor(s1));

// let s2 = Symbol('foo')
// console.log(Symbol.keyFor(s2))

// function foo() {
//   return Symbol.for('bar');
// }
// const x = foo();
// const y = Symbol.for('bar')
// console.log(x === y);

// iframe = document.createElement('iframe')
// iframe.src = String(window.location);
// document.body.appendChild(iframe)

// console.log(iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo'))

// function A() {
//   this.foo = 'hello';
// }

// if (!global._foo) {
//   global._foo = new A();
// }

// const a = require('mod.js')

// const FOO_KEY = Symbol.for('foo')

// function A() {
//   this.foo = 'hello';
// }

// if (!global[FOO_KEY]) {
//   global[FOO_KEY] = new A();
// }

// module.exports = global[FOO_KEY]

// global[Symbol.for('foo')] = {foo: 'world'}

// const a = require('./mod.js')

// class MyClass {
//   [Symbol.hasInstance](foo) {
//     return foo instanceof Array
//   }
// }

// console.log([1, 2, 3] instanceof new MyClass())

// class Even {
//   static [Symbol.hasInstance](obj) {
//     return Number(obj) % 2 === 0;
//   }
// }

// console.log(1 instanceof Even)
// console.log(2 instanceof Even);
// console.log(12345 instanceof Even);

// let arr1 = ['c', 'd'];
// console.log(['a', 'b'].concat(arr1, 'e'))
// console.log(arr1[Symbol.isConcatSpreadable]);

// let arr2 = ['c', 'd'];
// arr2[Symbol.isConcatSpreadable] = false;
// console.log(['a', 'b'].concat(arr2, 'e'))

// let obj = {length: 2, 0: 'c', 1: 'd'};
// console.log(['a', 'b'].concat(obj, 'e'))
// obj[Symbol.isConcatSpreadable] = true
// // console.log(['a', 'b'].concat(obj, 'e'));
// class A1 extends Array {
//   constructor(args) {
//     super(args)
//     this[Symbol.isConcatSpreadable] = true
//   }
// }

// class A2 extends Array {
//   constructor(args) {
//     super(args)
//   }
//   get [Symbol.isConcatSpreadable] () {
//     return false;
//   }
// }

// let a1 = new A1()
// a1[0] = 3;
// a1[1] = 4;
// let a2 = new A2();
// a2[0] = 5;
// a2[1] = 6;
// console.log([1, 2].concat(a1).concat(a2))

// class MyArray extends Array {

// }
// const a = new MyArray(1, 2, 3);
// const b = a.map(x => x);
// const c = a.filter(x => x > 1)
// console.log(b instanceof MyArray);
// console.log(c instanceof MyArray);

// class MyArray extends Array {
//   static get [Symbol.species]() {return Array}
// }

// const a = new MyArray(1, 2, 3)
// const b = a.map(x => x)
// const c = a.filter(x => x > 1)

// console.log(b instanceof MyArray);
// console.log(c instanceof MyArray);

// class MyArray extends Array {
//   static get [Symbol.species]() {return Array}
// }

// const a = new MyArray()
// const b = a.map(x => x)
// console.log(b instanceof MyArray);
// console.log(b instanceof Array);

// class T1 extends Promise {

// }
// class T2 extends Promise {
//   static get [Symbol.species]() {
//     return Promise;
//   }
// }

// console.log(new T1(r => r()).then(v => v) instanceof T1)
// console.log(new T2(r => r()).then(v => v) instanceof T2);

// String.prototype.match(regexp)
// regexp[Symbol.match](this)

// note Symbol.match
// class MyMatcher {
//   [Symbol.match](string) {
//     return 'hello world'.indexOf(string)
//   }
// }

// console.log('e'.match(new MyMatcher()))

// String.prototype.replace(searchValue, replaceValue)
// searchValue[Symbol.replace](this, replaceValue)

// const x = {}
// x[Symbol.replace] = (...s) => {console.log(s);}
// 'Hello'.replace(x, 'world')

// String.prototype.search(regexp)
// regexp[Symbol.search](this)

// class MySearch {
//   constructor(value) {
//     this.value = value;
//   }
//   [Symbol.search](string) {
//     return string.indexOf(this.value)
//   }
// }

// 'foobar'.search(new MySearch('foo'))

// String.prototype.split(separator, limit)
// separator[Symbol.split](this, limit)

// class MySplitter {
//   constructor(value) {
//     this.value = value;
//   }
//   [Symbol.split](string) {
//     let index = string.indexOf(this.value)
//     if (index === -1) {
//       return string
//     }
//     return [
//       string.substr(0, index),
//       string.substr(index + this.value.length)
//     ]
//   }
// }

// console.log('foobar'.split(new MySplitter('foo')));
// console.log('foobar'.split(new MySplitter('bar')));
// console.log('foobar'.split(new MySplitter('baz')));

// const myIterable = {}
// myIterable[Symbol.iterator] = function* () {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// console.log([...myIterable]);

// class Collection {
//   *[Symbol.iterator]() {
//     let i = 0;
//     while(this[i] !== undefined) {
//       yield this[i];
//       ++i;
//     }
//   }
// }

// let myCollection = new Collection();
// myCollection[0] = 1;
// myCollection[1] = 2;
// for (const value of myCollection) {
//   console.log(value);
// }

// let obj = {
//   [Symbol.toPrimitive](hint) {
//     switch (hint) {
//       case "number":
//         return 123;
//       case "string":
//         return "str";
//       case "default":
//         return "default";
//       default:
//         throw new Error();
//     }
//   },
// };

// console.log(2 * obj);
// console.log(3 + obj);
// console.log(obj == 'default');
// console.log(String(obj));

// console.log({[Symbol.toStringTag]: 'Foo'}.toString());
// class Collection {
//   get [Symbol.toStringTag]() {
//     return 'xxx';
//   }
// }

// let x = new Collection();
// console.log(Object.prototype.toString.call(x))

// console.log(JSON[Symbol.toStringTag]);
// console.log(Math[Symbol.toStringTag]);

// console.log(Array.prototype[Symbol.unscopables])

// class MyClass {
//   foo() {return 1;}
// }

// var foo = function () {return 2;}

// with(MyClass.prototype) {
//   console.log(foo())
// }

// class MyClass {
//   foo() {return 1;}
//   get [Symbol.unscopables] () {
//     return {
//       foo: true
//     }
//   }
// }
// var foo = function() {return 2;}
// with(MyClass.prototype) {
//   console.log(foo());
// }
// TODO: CHESHI 

