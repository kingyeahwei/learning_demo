// class Point {}

// class ColorPoint extends Point {
//   constructor(x, y, color) {
//     super(x, y);
//     this.color = color;
//   }

//   toString() {
//     return this.color + ' ' + super.toString();
//   }
// }

// let inst = new ColorPoint(1, 2, 'red');
// console.log(inst.toString())

// class Point {}
// class ColorPoint extends Point {
//   constructor() {

//   }
// }

// let cp = new ColorPoint()

// class ColorPoint extends Point {
//   constructor(...args) {
//     super(...args);
//   }
// }

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
// }

// class ColorPoint extends Point {
//   constructor(x, y, color) {
//     super(x, y);
//     this.color = color;
//   }
// }

// let inst = new ColorPoint(1, 2, 'red')

// console.log(inst instanceof ColorPoint)
// console.log(inst instanceof Point);

// console.log(Object.getPrototypeOf(ColorPoint) === Point)

// class A {}

// class B extends A {
//   constructor() {
//     super()
//   }
// }

// new B()

// class A {
//   constructor() {
//     console.log(new.target.name);
//   }
// }

// class B extends A {
//   constructor() {
//     super()
//   }
// }

// new A()

// new B()

// class A {}
// class B extends A {
//   m() {
//     super()
//   }
// }

// class A {
//   p() {
//     return 2;
//   }
// }

// class B extends A {
//   constructor() {
//     super()
//     console.log(super.p());
//   }
// }

// let b = new B()

// class A {
//   constructor() {
//     this.p = 2;
//   }
// }

// class B extends A {
//   get m() {
//     return super.p;
//   }
// }

// let b = new B();
// console.log(b.m)

// class A{}
// A.prototype.x = 2;

// class B extends A {
//   constructor() {
//     super()
//     console.log(super.x);
//   }
// }

// let b = new B();

// class A {
//   constructor() {
//     this.x = 1;
//   }

//   print() {
//     console.log(this.x);
//   }
// }

// class B extends A {
//   constructor() {
//     super();
//     this.x = 2;
//   }

//   m() {
//     super.print();
//   }
// }

// let b = new B();
// console.log(b.m())

// class A {
//   constructor() {
//     this.x = 1;
//   }
// }

// class B extends A {
//   constructor() {
//     super()
//     this.x = 2;
//     super.x = 3;
//     console.log(super.x);
//     console.log(this.x);
//     console.log(this.prototype.x);
//   }
// }

// let b = new B()

// super 在静态方法中指向父类在普通方法中指向原型对象
// class Parent {
//   static myMethod(msg) {
//     console.log('static', msg);
//   }

//   myMethod(msg) {
//     console.log('instance', msg);
//   }
// }

// class Child extends Parent {
//   static myMethod(msg) {
//     super.myMethod(msg)
//   }

//   myMethod(msg) {
//     super.myMethod(msg)
//   }
// }

// Child.myMethod(1)

// var child = new Child();
// child.myMethod(2)

// class A {
//   constructor() {
//     this.x = 1;
//   }

//   static print() {
//     console.log(this.x);
//   }
// }

// class B extends A{
//   constructor() {
//     super()
//     this.x = 2;
//   }

//   static m() {
//     super.print()
//   }
// }

// B.x = 3;
// B.m()

// class A {}
// class B extends A {
//   constructor() {
//     super()
//     console.log(super);
//   }
// }

// class A {}
// class B extends A {
//   constructor() {
//     super();
//     console.log(super.valueOf());
//   }
// }
// let b = new B()

// var obj = {
//   toString() {
//     return 'MyObject' + super.toString();
//   }
// }

// console.log(obj.toString())

// class A {}

// class B extends A {}

// console.log(B.__proto__ === A)

// console.log(B.prototype.__proto__ === A.prototype);

// class A {}
// class B {}

// Object.setPrototypeOf(B.prototype, A.prototype)
// Object.setPrototypeOf(B, A);

// const b = new B();

// Object.setPrototypeOf = function(obj, proto) {
//   obj.__proto__ = proto;
//   return obj;
// }

// Object.setPrototypeOf(B.prototype, A.prototype)
// B.prototype.__proto__ = A.prototype

// Object.setPrototypeOf(B, A);
// B.__proto__ = A;

// B.prototype = Object.create(A.prototype)
// B.prototype.__proto__ = A.prototype;

// class A extends Object {}
// console.log(A.__proto__ === Object)
// console.log(A.prototype.__proto__ === Object.prototype)

// class A {}
// console.log(A.__proto__ === Function.prototype)
// console.log(A.prototype.__proto__ === Object.prototype);

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
// }

// class ColorPoint extends Point {
//   constructor(color, x, y) {
//     super(x, y);
//     this.color = color;
//   }
// }

// var p1 = new Point(2, 3);

// var p2 = new ColorPoint('red', 2, 3);

// console.log(p2.__proto__ === ColorPoint.prototype)
// console.log(p2.__proto__.__proto__ === p1.__proto__);
// console.log(p1.__proto__ === Point.prototype);
// console.log(ColorPoint.prototype.__proto__ === Point.prototype);

// p2.__proto__.__proto__.printName = function () {
//   console.log('ha');
// }

// p1.printName()

// console.log(ColorPoint.__proto__ === Point);



