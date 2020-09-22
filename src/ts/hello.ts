// let createByNewBoolean: Boolean = new Boolean(1);
// let createdByBoolean: boolean = Boolean(1);
// let decLiteral: number = 6;
// let hexLiteral: number = 0xf00d;
// let binaryLiteral: number = 0b1010;
// let octalLiteral: number = 0o744;
// let notANumber: number = NaN;
// let infinityNumber: number = Infinity;

// let myName: string = 'Tom';
// let myAge: number = 25;
// let sentence: string = `Hello, my name is ${myName}. I'll be ${myAge} years old next month.`

// function alertName(): void {
//   alert('My name is Tom');
// }

// let unusable: void = undefined;

// let u: undefined = undefined;
// let n: null = null;

// let num: number = undefined;

// let u: undefined;
// let num: number = u;

// let u: void;
// let num: number = u;

// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;

// let myFavoriteNumber: any = 'seven';

// myFavoriteNumber = 7;

// let anyThing: any = 'hello';
// console.log(anyThing.myName);
// console.log(anyThing.myName.firstName);

// let anyThing: any = 'Tom';
// anyThing.setName('Jerry');
// anyThing.setName('Jerry').sayHello();
// anyThing.myName.setFristName('Cat');

// let something;
// something = 'seven';
// something = 7;
// something.setName('Tom')

// let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;

// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;

// let myFavoriteNumber;
// myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;

// let myFavoriteNumber: number | string;
// myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;

// let myFavoriteNumber: string | number;
// myFavoriteNumber = true

// function getLength(something: string | number): number {
//   return something.length;
// }

// function getString(something: string | number): string {
//   return something.toString();
// }

// let myFavoriteNumber: string | number;
// myFavoriteNumber = 'seven';
// console.log(myFavoriteNumber.length);
// myFavoriteNumber = 7;
// console.log(myFavoriteNumber.length);

// interface Person {
//   name: string;
//   age: number;
// }

// let tom: Person = {
//   name: 'Tom',
//   age: 25
// }

// interface Person {
//   name: string;
//   age: number;
// }

// let tom: Person = {
//   name: 'Tom',
//   age: 25,
//   gender: 'male'
// }

// interface Person {
//   name: string;
//   age?: number;
// }

// let tom: Person = {
//   name: 'Tom'
// }

// interface Person {
//   name: string;
//   age?: number;
// }

// let tom: Person = {
//   name: 'Tom',
//   age: 35,
// };

// interface Person {
//   name: string;
//   age?: number;
// }

// let tom: Person = {
//   name: 'Tom',
//   age: 25,
//   gender: 'male'
// }

// interface Person {
//   name: string;
//   [propName: string]: string;
// }

// let tom: Person = {
//   name: 'Tom',
//   gender: 'male'
// }

// interface Person {
//   name: string;
//   age?: number;
//   [propName: string]: string;
// }

// let tom: Person = {
//   name: 'Tom',
//   age: 25,
//   gender: 'male'
// }

// interface Person {
//   name: string;
//   age?: number;
//   [propName: string]: string | number;
// }

// let tom: Person = {
//   name: 'Tom',
//   age: 25,
//   gender: 'male',
// }

// interface Person {
//   readonly id: number;
//   name: string;
//   age?: number;
//   [propName: string]: any;
// }

// let tom: Person = {
//   id: 89757,
//   name: 'Tom',
//   gender: 'male'
// }

// tom.id = 897

// interface Person {
//   readonly id: number;
//   name: string;
//   age?: number;
//   [propName: string]: any
// }

// let tom: Person = {
//   name: 'Tom',
//   gender: 'male'
// }

// tom.id = 89757

// let fibonacci: number[] = [1, 1, 2, 3, 5];

// let fibonacci: number[] = [1, '1', 2, 3, 5]

// let fibonacci: number[] = [1, 1, 2, 3, 5];
// fibonacci.push('8')

// let fibonacci: Array<number> = [1, 1, 2, 3, 5];

// interface NumberArray {
//   [index: number]: number;
// }

// let fibonacci: NumberArray = [1, 1, 2, 3, 5];

// function sum() {
//   let args: number[] = arguments;
// }

// function sum() {
//   let args: {
//     [index: number]: number;
//     length: number;
//     callee: Function;
//   } = arguments;
// }

// function sum() {
//   let args: IArguments = arguments;
// }

// interface IArguments {
//   [index: number]: any;
//   length: number;
//   callee: Function;
// }

// let list: any[] = ['xcatliu', 25, { website: 'http://xcaliu.com' }];

// function sum(x, y) {
//   return x + y;
// }

// let mySum = function(x, y) {
//   return x + y;
// }

// function sum(x: number, y: number): number {
//   return x + y;
// }

// sum(1, 2, 3)

// sum(1)

// let mySum = function (x: number, y: number): number {
//   return x + y;
// }

// let mySum: (x: number, y: number) => number = function (
//   x: number,
//   y: number
// ): number {
//   return x + y;
// };

// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;
// mySearch = function (source: string, subString: string) {
//   return source.search(subString) !== -1;
// };

// function buildName(firstName: string, lastName?: string) {
//   if (lastName) {
//     return firstName + ' ' + lastName;
//   } else {
//     return firstName;
//   }
// }

// let tomcat = buildName('Tom', 'Cat')
// let tom = buildName('Tom');

// function buildName(firstName?: string, lastName: string) {
//   if (firstName) {
//     return firstName + ' ' + lastName;
//   } else {
//     return lastName;
//   }
// }

// function buildName(firstName: string, lastName: string = 'Cat') {
//   return firstName + ' ' + lastName;
// }

// let tomcat = buildName('Tom', 'Cat');
// let tom = buildName('Tom');

// function buildName(firstName: string = 'Tom', lastName: string) {
//   return firstName + ' ' + lastName;
// }

// let tomcat = buildName('Tom', 'Cat');
// let cat = buildName(undefined, 'Cat')

// function push(array, ...items) {
//   items.forEach(function (item) {
//     array.push(item);
//   });
// }

// let a: any[] = [];

// push(a, 1, 2, 3);

// function push(array: any[], ...items: any[]) {
//   items.forEach(function (item) {
//     array.push(item)
//   })
// }

// let a = [];
// push(a, 1, 2, 3);

// function reverse(x: number | string): number | string {
//   if (typeof x === 'number') {
//     return Number(x.toString().split('').reverse().join(''));
//   } else if (typeof x === 'string') {
//     return x.split('').reverse().join();
//   }
// }

// function reverse(x: number): number;
// function reverse(x: string): string;
// function reverse(x: number | string): number | string {
//   if (typeof x === 'number') {
//     return Number(x.toString().split('').reverse().join(''));
//   } else if (typeof x === 'string') {
//     return x.split('').reverse().join('');
//   }
// }
