// import { Animal, name } from 'foo';
// import { Directions } from './../../types/foo/index.d';
// import { Directions } from 'foo';
// import { bar } from 'foo';
// let createByNewBoolean: Boolean = new Boolean(1);
// let createdByBoolean: boolean = Boolean(1);
// let decLiteral: number = 6;
// let hexLiteral: number = 0xf00d;
// let binaryLiteral: number = 0b1010;
// let octalLiteral: number = 0o744;
// let notANumber: number = NaN;
// let infinityNumber: number = Infinity;
// import { create } from 'domain';
// import { Dir } from "fs";
// import { log } from 'console';
// import { type } from 'os';
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
// interface Cat {
//   name: string;
//   run(): void;
// }
// interface Fish {
//   name: string;
//   swim(): void;
// }
// function getName(animal: Cat | Fish) {
//   return animal.name;
// }
// interface Cat {
//   name: string;
//   run(): void;
// }
// interface Fish {
//   name: string;
//   swim(): void;
// }
// function isFish(animal: Cat | Fish) {
//   if (typeof (animal as Fish).swim === 'function') {
//     return true;
//   }
//   return false;
// }
// interface Cat {
//   name: string;
//   run(): void;
// }
// interface Fish {
//   name: string;
//   swim(): void;
// }
// function swim(animal: Cat | Fish) {
//   (animal as Fish).swim();
// }
// const tom: Cat = {
//   name: 'Tom',
//   run() {
//     console.log('run');
//   },
// };
// swim(tom)
// class ApiError extends Error {
//   code: number = 0;
// }
// class HttpError extends Error {
//   statusCode: number = 200;
// }
// function isApiError(error: Error) {
//   if (typeof (error as ApiError).code === 'number') {
//     return true;
//   }
//   return false;
// }
// class ApiError extends Error {
//   code: number = 0;
// }
// class HttpError extends Error {
//   statusCode: number = 200;
// }
// function isApiError(error: Error) {
//   if (error instanceof ApiError) {
//     return true;
//   }
//   return false;
// }
// interface ApiError extends Error {
//   code: number;
// }
// interface HttpError extends Error {
//   statusCode: number;
// }
// function isApiError(error: Error) {
//   if (error instanceof ApiError) {
//     return true;
//   }
//   return false;
// }
// interface ApiError extends Error {
//   code: number;
// }
// interface HttpError extends Error {
//   statusCode: number;
// }
// function isApiError(error: Error) {
//   if (typeof (error as ApiError).code === 'number') {
//     return true;
//   }
//   return false;
// }
// const foo: number = 1;
// foo.length = 1;
// window.foo  = 1;
// (window as any).foo = 1;
// function getCacheData(key: string): any {
//   return (window as any).cache[key];
// }
// interface Cat {
//   name: string;
//   run(): void;
// }
// const tom = getCacheData('tom') as Cat;
// tom.run()
// interface Animal {
//   name: string;
// }
// interface Cat {
//   name: string;
//   run(): void;
// }
// let tom: Cat = {
//   name: 'Tom',
//   run: () => {
//     console.log('run');
//   },
// };
// let animal: Animal = tom;
// interface Animal {
//   name: string;
// }
// interface Cat extends Animal {
//   run(): void;
// }
// interface Animal {
//   name: string;
// }
// interface Cat {
//   name: string;
//   run(): void;
// }
// function testAnimal(animal: Animal) {
//   return animal as Cat;
// }
// function testCat(cat: Cat) {
//   return cat as Animal;
// }
// interface Cat {
//   run(): void;
// }
// interface Fish {
//   swim(): void;
// }
// function testCat(cat: Cat) {
//   return (cat as any as Fish);
// }
// function toBoolean(something: any): boolean {
//   return something as boolean;
// }
// toBoolean(1);
// function toBoolean(something: any): boolean {
//   return Boolean(something);
// }
// toBoolean(1);
// function getCacheData(key: string): any {
//   return (window as any).cache[key];
// }
// interface Cat {
//   name: string;
//   run(): void;
// }
// const tom = getCacheData('tom') as Cat;
// tom.run()
// function getCacheData(key: string): any {
//   return (window as any).cache[key]
// }
// interface Cat {
//   name: string;
//   run(): void;
// }
// const tom: Cat = getCacheData('tom');
// tom.run();
// interface Animal {
//   name: string;
// }
// interface Cat {
//   name: string;
//   run(): void;
// }
// const animal: Animal = {
//   name: 'tom'
// }
// let tom  = animal as Cat;
// interface Animal {
//   name: string;
// }
// interface Cat {
//   name: string;
//   run(): void;
// }
// const animal: Animal = {
//   name: 'tom',
// }
// let tom: Cat = animal
// animal 断言为Cat, 只需要好满足Animal兼容Cat或Cat兼容Animal即可
// animal 赋值给tom, 需要满足Cat 兼容Animal才行;
// const tom = getCacheData('tom') as CanvasText;
// const tom: Cat = getCacheData('tom')
// 知道了他们的区别,就知道了类型声明是比类型断言更加的严格的.
// 所以为了增加代码的质量,我们最好优先使用类型声明,这比类型断言的as语法更加优雅
// function getCacheData<T>(key: string): T {
//   return (window as any).cache[key];
// }
// interface Cat {
//   name: string;
//   run(): void;
// }
// const tom = getCacheData<Cat>('tom');
// tom.run()
// declare var jQuery: (selector: string) => any;
// jQuery('#foo')
// declare let jQuery: (selector: string) => any;
// jQuery('#foo');
// jQuery = function (selector) {
//   return document.querySelector(selector);
// }
// declare const jQuery: (selector: string) => any;
// jQuery('#foo');
// jQuery = function (selector) {
//   return document.querySelector(selector);
// }
// declare const jQuery = function (selector) {
//   return document.querySelector(selector);
// };
// declare function jQuery(selector: string): any;
// declare function jQuery(domReadyCallback: () => any): any;
// jQuery('#foo');
// jQuery(function() {
//   alert('Dom Ready!')
// })
// declare class Animal {
//   name: string;
//   constructor(name: string);
//   sayHi(): string;
// }
// let cat = new Animal('Tom');
// declare class Animal {
//   name: string;
//   constructor(name: string);
//   sayHi() {
//   }
// }
// declare enum Directions {
//   Up,
//   Down,
//   Left,
//   Right
// }
// var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
// declare namespace jQuery {
//   function ajax(url: string, settings?: any): void
// }
// jQuery.ajax('/api/get_something');
// declare namespace jQuery {
//   function ajax(url: string, settings?: any): void;
//   const version: number;
//   class Event {
//     blur(eventType: EventType): void;
//   }
//   enum EventType {
//     CustomClick,
//   }
// }
// jQuery.ajax('/api/get_something');
// console.log(jQuery.version);
// const e = new jQuery.Event();
// e.blur(jQuery.EventType.CustomClick);
// declare namespace jQuery {
//   function ajax(url: string, settings?: any): void;
//   namespace fn {
//     function extend(object: any): void;
//   }
// }
// jQuery.ajax('/api/get_somethings');
// jQuery.fn.extend({
//   check: function () {
//     return this.each(function () {
//       this.checked = true;
//     });
//   },
// });
// declare namespace jQuery.fn {
//   function extend(object: any): void;
// }
// jQuery.fn.extend({
//   check: function () {
//     return this.each(function () {
//       this.checked = true;
//     });
//   },
// });
// interface AjaxSettings {
//   method?: 'GET' | 'POST';
//   data?: any;
// }
// declare namespace jQuery {
//   function ajax(url: string, settings?: AjaxSettings): void;
// }
// let settings: AjaxSettings = {
//   method: 'POST',
//   data: {
//     name: 'foo',
//   },
// };
// jQuery.ajax('/api/post_something', settings)
// declare namespace jQuery {
//   interface AjaxSettings {
//     method?: 'GET' | 'POST';
//     data?: any;
//   }
//   function ajax(url: string, settings?: AjaxSettings): void;
// }
// let settings: jQuery.AjaxSettings = {
//   method: 'POST',
//   data: {
//     name: 'foo',
//   },
// };
// jQuery.ajax('/api/post_something', settings)
// declare function jQuery(selector: string): any;
// declare namespace jQuery {
//   function ajax(url: string, settings?: any): void;
// }
// jQuery('#foo');
// jQuery.ajax('/api/get_something')
// import { name, getName, Animal, Directions, Options } from 'foo';
// console.log(name);
// let myName = getName();
// let cat = new Animal('Tom');
// let directions = [
//   Directions.Up,
//   Directions.Down,
//   Directions.Left,
//   Directions.Right,
// ];
// let options: Options = {
//   data: { name: 'foo' },
// };
// import {foo} from 'foo';
// console.log(foo.name);
// foo.bar.baz()
// import foo from 'foo'
// foo();
// module.exports = foo;
// exports.bar = bar;
// const foo = require('foo')
// const bar = require('foo').bar;
// import * as foo from 'foo';
// import { bar } from 'foo'
// import foo = require('foo')
// import bar = foo.bar;
// interface String {
//   prependHello(): string;
// }
// 'foo'.prependHello()
// jQuery.foo({
//   bar: ''
// })
// 'bar'.prependHello();
// import * as moment from 'moment';
// import 'moment-plugin';
// moment.foo()
// import { Foo } from 'foo';
// import * as bar from 'bar';
// let f: Foo;
// bar.bar()
// let b: Boolean = new Boolean(1);
// let e: Error = new Error('Error occurred')
// let d: Date = new Date()
// let r: RegExp = /[a-z]/
// let body: HTMLElement = document.body;
// let allDiv: NodeList = document.querySelectorAll('div');
// document.addEventListener('click', function(e: MouseEvent) {
// })
// Math.pow(10, '2')
// document.addEventListener('click', function(e) {
//   console.log(e.targetCurrent);
// })
// 类型别名
// type Name = string;
// type NameResolver = () => string;
// type NameOrResolver = Name | NameResolver;
// function getName(n: NameOrResolver): Name {
//   if (typeof n === 'string') {
//     return n;
//   } else {
//     return n();
//   }
// }
// type EventNames = 'click' | 'scroll' | 'mousemove'
// function handleEvent(ele: Element, event: EventNames) {
// }
// handleEvent(document.getElementById('hello'), 'scroll')
// handleEvent(document.getElementById('hello'), 'dbclick')
// let tom: [string, number] = ['Tom', 25]
// let tom: [string, number];
// tom[0] = 'Tom';
// tom[1] = 25;
// tom[0].slice(1)
// tom[1].toFixed(2)
// let tom: [string, number];
// tom[0] = 'Tom';
// let tom: [string, number];
// tom = ['Tom', 25]
// tom = ['Tom']
// let tom: [string, number];
// tom = ['Tom', 25];
// tom.push('male')
// tom.push(33);
// tom.push(true)
// enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
// console.log(Days['Sun'] === 0);
// console.log(Days['Mon'] === 1);
// console.log(Days['Tue'] === 2);
// console.log(Days['Sat'] === 6);
// console.log(Days[0] === 'Sun');
// console.log(Days[1] === 'Mon');
// console.log(Days[2] === 'Tue');
// console.log(Days[6] === 'Sat');
// enum Days { Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat}
// enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat}
// enum Days {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>'S'}
// enum Days {Sum = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat}
// enum Color {Red, Green, Blue = 'blue'.length}
// const enum Directions {
//   Up,
//   Down,
//   Left,
//   Right
// }
// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
// const enum  Color {Red, Green, Blue = 'blue'.length}
// declare enum Directions {
//   Up,
//   Down,
//   Left,
//   Right
// }
// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
// declare const enum Directions {
//   Up,
//   Down,
//   Left,
//   Right
// }
// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
// class Animal {
//   public name;
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     return `My name is ${this.name}`
//   }
// }
// let a = new Animal('Jack')
// console.log(a.sayHi());
// class Cat extends Animal {
//   constructor(name) {
//     super(name)
//     console.log(this.name);
//   }
//   sayHi() {
//     return 'Meow, ' + super.sayHi()
//   }
// }
// let c = new Cat('Tom');
// console.log(c.sayHi());
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   get name() {
//     return 'Jack'
//   }
//   set name(value) {
//     console.log('setter: ' + value);
//   }
// }
// let a = new Animal('Kitty')
// a.name = 'Tom'
// console.log(a.name);
// class Animal {
//   static isAnimal(a) {
//     return a instanceof Animal;
//   }
// }
// let a = new Animal('Jack')
// Animal.isAnimal(a)
// a.isAnimal(a);
// class Animal {
//   name = 'Jack';
//   constructor() {
//   }
// }
// class Animal {
//   static num = 42;
//   constructor() {
//   }
// }
// class Animal {
//   public name;
//   public constructor(name) {
//     this.name = name
//   }
// }
// let a = new Animal('Jack')
// console.log(a.name);
// a.name = 'Tom'
// console.log(a.name);
// class Animal {
//   private name;
//   public constructor(name) {
//     this.name = name;
//   }
// }
// let a = new Animal('Jack');
// class Animal {
//   protected name;
//   public constructor(name) {
//     this.name = name;
//   }
// }
// class Cat extends Animal {
//   constructor(name) {
//     super(name)
//     console.log(this.name);
//   }
// }
// class Animal {
//   public name;
//   private constructor(name) {
//     this.name = name;
//   }
// }
// class Cat extends Animal {
//   constructor(name) {
//     super(name)
//   }
// }
// class Animal {
//   public name;
//   protected constructor(name) {
//     this.name = name;
//   }
// }
// class Cat extends Animal {
//   constructor(name) {
//     super(name);
//   }
// }
// let a = new Animal('Jack')
// class Animal {
//   public constructor(public name) {
//   }
// }
// class Animal {
//   readonly name;
//   public constructor(name) {
//     this.name = name;
//   }
// }
// let a = new Animal('Jack');
// console.log(a.name);
// a.name = 'Tom';
// class Animal {
//   public constructor(public readonly name) {
//   }
// }
// abstract class Animal {
//   public name;
//   public constructor(name) {
//     this.name = name;
//   }
//   public abstract sayHi();
// }
// let a = new Animal('Jack')
// abstract class Animal {
//   public name;
//   public constructor(name) {
//     this.name = name;
//   }
//   public abstract sayHi();
// }
// class Cat extends Animal {
//   public eat() {
//     console.log(`${this.name} is eating.`);
//   }
// }
// abstract class Animal {
//   public name;
//   public constructor(name) {
//     this.name = name;
//   }
//   public abstract sayHi();
// }
// class Cat extends Animal {
//   public sayHi() {
//     console.log(`Moow, my name is ${this.name}`);
//   }
// }
// let cat = new Cat('Tom');
// class Animal {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   sayHi(): string {
//     return `My name is ${this.name}`
//   }
// }
// let a: Animal = new Animal('Jack');
// console.log(a.sayHi());
// interface Alarm {
//   alert(): void
// }
// class Door {}
// class SecurityDoor extends Door implements Alarm {
//   alert() {
//     console.log('SecurityDoor alert');
//   }
// }
// class Car implements Alarm {
//   alert() {
//     console.log('car alert');
//   }
// }
// interface Alarm {
//   alert(): void;
// }
// interface Light {
//   lightOn(): void;
//   lightOff(): void;
// }
// class Car implements Alarm, Light {
//   alert(): void {
//     console.log('car alert');
//   }
//   lightOn(): void {
//     console.log('car light on');
//   }
//   lightOff(): void {
//     console.log('car light off');
//   }
// }
// interface Alarm {
//   alert(): void;
// }
// interface LightableAlarm extends Alarm {
//   lightOn(): void;
//   lightOff(): void;
// }
// class Point {
//   x: number;
//   y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }
// interface Point3d extends Point {
//   z: number;
// }
// let point3d: Point3d = { x: 1, y: 2, z: 3 };
// class Point {
//   x: number;
//   y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }
// const p = new Point(1, 2)
// class Point {
//   x: number;
//   y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }
// function printPoint(p: Point) {
//   console.log(p.x, p.y);
// }
// printPoint(new Point(1, 2))
// class Point {
//   x: number;
//   y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }
// interface PointInstanceType {
//   x: number;
//   y: number;
// }
// function printPoint(p: PointInstanceType) {
//   console.log(p.x, p.y);
// }
// printPoint(new Point(1, 2))
// class Point {
//   x: number;
//   y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }
// interface PointInstanceType {
//   x: number;
//   y: number;
// }
// interface Point3d extends Point {
//   z: number;
// }
// let point3d: Point3d = {x: 1, y: 2, z: 3}
// class Point {
//   static origin = new Point(0, 0);
//   static distanceToOrigin(p: Point) {
//     return Math.sqrt(p.x * p.x + p.y * p.y);
//   }
//   x: number;
//   y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
//   printPoint() {
//     console.log(this.x, this.y);
//   }
// }
// interface PointInstanceType {
//   x: number;
//   y: number;
//   printPoint(): void;
// }
// let p1: Point;
// let p2: PointInstanceType;
// function createArray(length: number, value: any): Array<any> {
//   let result = [];
//   for (let i = 0; i < length; i++) {
//     result[i] = value;
//   }
//   return result;
// }
// createArray(3, 'x');
// function createArray<T>(length: number, value: T): Array<T> {
//   let result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result[i] = value;
//   }
//   return result;
// }
// createArray(3, 'x');
// function swap<T, U>(tuple: [T, U]): [U, T] {
//   return [tuple[1], tuple[0]];
// }
// swap([7, 'seven']);
// function loggingIdentity<T>(arg: T): T {
//   console.log(arg.length);
//   return arg
// }
// interface Lengthwise {
//   length: number;
// }
// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//   console.log(arg.length);
//   return arg;
// }
// loggingIdentity(7)
// function copyFields<T extends U, U>(target: T, source: U): T {
//   for (let id in source) {
//     target[id] = (<T>source)[id];
//   }
//   return target;
// }
// let x = { a: 1, b: 2, c: 3, d: 4 };
// copyFields(x, { b: 10, d: 20 });
// interface SearchFunc {
//   (source: string, subString: string): boolean
// }
// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//   return source.search(subString) != -1
// }
// interface CreateArrayFunc {
//   <T>(length: number, value: T): Array<T>
// }
// let createArray: CreateArrayFunc;
// createArray = function<T>(length: number, value: T): Array<T> {
//   let result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result[i] = value;
//   }
//   return result;
// }
// createArray(3, 'x');
// interface CreateArrayFunc<T> {
//   (length: number, value: T): Array<T>;
// }
// let createArray: CreateArrayFunc<any>;
// createArray = function <T>(length: number, value: T): Array<T> {
//   let result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result[i] = value;
//   }
//   return result;
// };
// createArray(3, 'x');
// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//   return x + y;
// };
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
