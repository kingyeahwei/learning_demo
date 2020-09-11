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

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }
}

let inst = new ColorPoint(1, 2, 'red')

console.log(inst instanceof ColorPoint)
console.log(inst instanceof Point);
