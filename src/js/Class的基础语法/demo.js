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

// class Logger {
//   constructor() {
//     this.printName = this.printName.bind(this);
//   }

//   printName(name = 'there') {
//     this.print(`Hello ${name}`);
//   }

//   print(text) {
//     console.log(text);
//   }
// }

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

// class IncreasingCounter {
//   constructor() {
//     this._count = 0;
//   }
//   get value() {
//     console.log('Getting the current value!');
//     return this._count;
//   }
//   increment() {
//     this._count++;
//   }
// }

// class IncreasingCounter {
//   _count = 0;
//   get value() {
//     console.log('Getting the current value!');
//     return this._count;
//   }

//   increment() {
//     this._count++;
//   }
// }

// let inst = new IncreasingCounter()
// console.log(Object.getPrototypeOf(inst)._count);
// console.log(inst._count);
// tag 静态属性
// class Foo {}
// Foo.prop = 1;
// console.log(Foo.prop);

// class MyClass {
//   static myStaticProp = 42;
//   constructor() {
//     console.log(MyClass.myStaticProp);
//   }
// }

// new MyClass()

// class Widget {
//   foo(baz) {
//     this._bar(baz)
//   }
//   _bar(baz) {
//     return this.snaf = baz;
//   }
// }

// class Widget {
//   foo(baz) {
//     bar.call(this, baz);
//   }
// }

// function bar(baz) {
//   return this.snaf = baz;
// }

// const bar = Symbol('bar')
// const snaf = Symbol('snaf');

//  class MyClass {
//   [snaf] = '123'
//   foo(baz) {
//     this[bar](baz)
//   }
//   [bar](baz) {
//     return this[snaf] = baz
//   }
// }

// const inst = new MyClass();

// console.log(Reflect.ownKeys(MyClass.prototype))
// console.log(Reflect.ownKeys(inst));

// class IncreasingCounter {
//   #count = 0;
//   get value() {
//     console.log('Getting the current vlaue!');
//     return this.#count;
//   }

//   increment() {
//     this.#count++;
//   }
// }

// const counter = new IncreasingCounter();
// console.log(counter.value)

// class Point {
//   #x;
//   constructor(x = 0) {
//     this.#x = +x;
//   }

//   get x() {
//     return this.#x;
//   }

//   set x(value) {
//     this.#x = +value;
//   }
// }

// class Counter {
//   #xValue = 0;
//   constructor() {
//     super()
//   }

//   get #x() {
//     return this.#xValue;
//   }

//   set #x(value) {
//     this.#xValue = value;
//   }
// }

// class Foo {
//   #privateValue = 42;
//   static getPrivateValue(foo) {
//     return foo.#privateValue;
//   }
// }

// console.log(Foo.getPrivateValue(new Foo()))

// class FakeMath {
//   static PI = 22 / 7;
//   static #totallyRandomNumber = 4;

//   static #computeRandomNumber() {
//     return FakeMath.#totallyRandomNumber;
//   }

//   static random() {
//     console.log('I head you like random numbers...');
//     return FakeMath.#computeRandomNumber();
//   }
// }

// console.log(FakeMath.PI)
// console.log(FakeMath.random());
// FakeMath.#totallyRandomNumber;
// FakeMath.#computeRandomNumber()

// function Person(name) {
//   if (new.target !== undefined) {
//     this.name = name;
//   } else {
//     throw new Error('必须使用 new 命令生成实例');
//   }
// }

// function Person(name) {
//   if (new.target === Person) {
//     this.name = name;
//   } else {
//     throw new Error('必须使用 new 命令生成实例')
//   }
// }

// var person = new Person('张三');
// var notAPerson = Person.call(person, '张三')

// class Rectangle {
//   constructor(length, width) {
//     console.log(new.target === Rectangle);
//     this.length = length;
//     this.width = width
//   }
// }

// var obj = new Rectangle(3, 4)

// class Rectangle {
//   constructor(length, width) {
//     console.log(new.target === Rectangle);
//   }
// }

// class Square extends Rectangle {
//   constructor(length, width) {
//     super(length, width)
//   }
// }

// var obj = new Square(3, 5)

// class Shape {
//   constructor() {
//     if (new.target ===Shape) {
//       throw new Error('本类不能实例化')
//     }
//   }
// }

// class Rectangle extends Shape {
//   constructor(length, width) {
//     super(length, width)
//   }
// }

// var x = new Shape()

// var y = new Rectangle(2, 3);