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
