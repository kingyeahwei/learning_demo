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

let size = Symbol('size');
class Collection {
  constructor() {
    this[size] = 0;
  }
  add(item) {
    this[this[size]] = item;
    this[size]++;
  }
  static sizeOf(instance) {
    return instance[size]
  }
}

