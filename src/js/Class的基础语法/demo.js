// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Point.prototype.toString = function () {
//   return '(' + this.x + ', ' + this.y + ')';
// };

// var p = new Point(1, 2)

// console.log(p);

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   toString() {
//     return '(' + this.x + ', ' + this.y + ')';
//   }
// }

// console.log(typeof Point)

// class Bar {
//   constructor() {}
//   doStuff() {
//     console.log('stuff');
//   }
// }

// var b = new Bar()
// b.doStuff()

// class Point {
//   constructor() {}

//   toString() {}

//   toValue() {}
// }

// Point.prototype = {
//   constructor() {},
//   toString() {},
//   toValue() {},
// };

// class B {}

// let b = new B();

// console.log(b.constructor === B.prototype.constructor)

// class Point {
//   constructor() {}
// }

// Object.assign(Point.prototype, {
//   toString() {},
//   toValue() {},
// });

// console.log(Point.prototype.constructor === Point);

// class Point {
//   constructor(x, y) {}

//   toString() {}
// }

// console.log(Object.keys(Point.prototype))

// console.log(Object.getOwnPropertyNames(Point.prototype))

// var Point = function (x, y) {};

// Point.prototype.toString = function () {};

// console.log(Object.keys(Point.prototype))
// console.log(Object.getOwnPropertyNames(Point.prototype));

// note constructor方法

// class Point {}

// class Point {
//   constructor() {}
// }

// class Foo {
//   constructor() {
//     return Object.create(null);
//   }
// }

// console.log(new Foo() instanceof Foo)

// class Foo {
//   constructor() {
//     return Object.create(null);
//   }
// }

// Foo()

// class Point {

// }

// var point = Point(2, 3)

// var point = new Point(2, 3)

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   toString() {
//     return '(' + this.x + ', ' + this.y + ')';
//   }
// }

// var point = new Point(2, 3);
// console.log(point.toString());
// console.log(point.hasOwnProperty('x'));
// console.log(point.hasOwnProperty('y'));
// console.log(point.hasOwnProperty('toString'));
// console.log(point.__proto__.hasOwnProperty('toString'));

// var p1 = new Point(2, 3)
// var p2 = new Point(3, 2);
// console.log(p1.__proto__ === p2.__proto__);

// var p1 = new Point(2, 3);
// var p2 = new Point(3, 2);
// p1.__proto__.printName = function () {
//   return 'Oops';
// };

// console.log(p1.printName())
// console.log(p2.printName())

// var p3 = new Point(4, 2);

// console.log(p3.printName());

// class MyClass {
//   constructor() {

//   }

//   get prop() {
//     return 'getter';
//   }

//   set prop(value) {
//     console.log('setter:' + value);
//   }
// }

// let inst = new MyClass();

// inst.prop = 123;

// console.log(inst.prop);

// class CustomHTMLElement {
//   constructor(element) {
//     this.element = element;
//   }

//   get html() {
//     return this.element.innerHTML;
//   }

//   set html(value) {
//     this.element.innerHTML = value;
//   }
// }

// var descriptor = Object.getOwnPropertyDescriptor(
//   CustomHTMLElement.prototype,
//   'html'
// );

// console.log('get' in descriptor);
// console.log('set' in descriptor);

// let methodName = 'getArea';

// class Square {
//   constructor(length) {}

//   [methodName]() {}
// }

// const MyClass = class Me {
//   getClassName() {
//     return Me.name
//   }
// }

// let inst = new MyClass()
// console.log(inst.getClassName());
// console.log(MyClass.name);

// const MyClass = class {}

// let person = new (class {
//   constructor(name) {
//     this.name = name;
//   }

//   sayName() {
//     console.log(this.name);
//   }
// })('张三');
// person.sayName();

// class Point {}
// console.log(Point.name)

// class Foo {
//   constructor(...args) {
//     this.args = args;
//   }

//   *[Symbol.iterator]() {
//     for (let arg of this.args) {
//       yield arg;
//     }
//   }
// }

// for (let x  of new Foo('hello', 'world')) {
//   console.log(x);
// }

class Logger {
  constructor() {
    this.printName = this.printName.bind(this);
  }

  printName(name = 'there') {
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

// const logger = new Logger()
// const { printName } = logger;
// printName()

// class Obj {
//   constructor() {
//     this.getThis = () => this;
//   }
// }

// const myObj = new Obj()
// console.log(myObj.getThis() === myObj)

// function selfish(target) {
//   const cache = new WeakMap();
//   const handler = {
//     get(target, key) {
//       const value = Reflect.get(target, key);
//       console.log(value);
//       if (typeof value !== 'function') {
//         return value;
//       }
//       if (!cache.has(value)) {
//         cache.set(value, value.bind(target))
//       }

//       return cache.get(value)
//     }
//   }
//   const proxy = new Proxy(target, handler)
//   return proxy
// }

// const logger = selfish(new Logger());

// logger.printName()

// class Foo {
//   static classMethod() {
//     return 'hello'
//   }
// }

// console.log(Foo.classMethod())

// var foo = new Foo();
// foo.classMethod()

// class Foo {
//   static bar() {
//     this.baz();
//   }

//   static baz() {
//     console.log('hello');
//   }

//   baz() {
//     console.log('world');
//   }
// }

// Foo.bar()

// class Foo {
//   static classMethod() {
//     return 'hello';
//   }
// }

// class Bar extends Foo {

// }


// console.log(Bar.classMethod())

// class Foo {
//   static classMethod() {
//     return 'hello';
//   }
// }

// class Bar extends Foo {
//   static classMethod() {
//     return super.classMethod() + ', too'
//   }
// }

// console.log(Bar.classMethod())

