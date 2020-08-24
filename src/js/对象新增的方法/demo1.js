// console.log(Object.is('foo', 'foo'))
// console.log(Object.is({}, {}))
// console.log(+0 === -0)
// console.log(NaN === NaN);
// console.log(Object.is(+0, -0));
// console.log(Object.is(NaN, NaN))

// Object.defineProperty(Object, 'is', {
//   value: function(x, y) {
//     if (x ===y) {
//       return x != 0 || 1/x === 1/y;
//     }
//     return x !== x && y !== y;
//   },
//   configurable: true,
//   enumerable: true,
//   writable: true
// })

// console.log(Object.is(-0, +0))

// const target = {a: 1}
// const source1 = {b: 2}
// const source2 = {c: 3}
// Object.assign(target, source1, source2)
// console.log(target);

// const obj = {a: 1}
// console.log(Object.assign(obj) === obj)
// console.log(typeof Object.assign(2))

// Object.assign(undefined)
// Object.assign(null)

// let obj = {a: 1}
// console.log(Object.assign(obj, undefined) === obj)
// console.log(Object.assign(obj, null) === obj);
// const v1 = 'abc';
// const v2 = true;
// const v3 = 10;
// const obj = Object.assign({}, v1, v2, v3)
// console.log(obj);

// console.log(Object(true));
// console.log(Object(10));
// console.log(Object('abc'));

// console.log(Object.assign({b: 'c'}, Object.defineProperty({}, 'invisible', {
//   enumerable: false,
//   value: 'hello'
// })))

// console.log(Object.assign({a: 'b'}, {[Symbol('c')]: 'd'}))

// const obj1 = {a: {b: 1}};
// const obj2 = Object.assign({}, obj1)
// obj1.a.b = 2
// console.log(obj2.a.b);

// const target = { a: { b: "c", d: "e" } };
// const source = { a: { b: "hello" } };
// Object.assign(target, source);
// console.log(target);

// console.log(Object.assign([1, 2, 3], [4, 5]))

// const source = {
//   get foo() {return 1}
// }
// const target = {}
// Object.assign(target, source)
// console.log(target);

// class Point {
//   constructor(x, y) {
//     Object.assign(this, {x, y})
//   }
// }

// Object.assign(SomeClass.prototype, {
//   someMethod(arg1, arg2) {},
//   anotherMethod() {}
// })

// SomeClass.prototype.someMethod = function(x, y) {}
// someMethod.prototype.anotherMethod = function() {}

// function clone(origin) {
//   return Object.assign({}, origin)
// }

// 克隆对象
// function clone(origin) {
//   let originProto = Object.getPrototypeOf(origin)
//   Object.assign(Object.create(originProto), origin)
// }
// const merge = (target, ...sorces) => {
//   Object.assign(target, ...sorces)
// }

// const merge = (...sources) => {
//   Object.assign({}, ...sources)
// }

// const DEFAULTS = {logLevel: 0, outputFormat: 'html'}
// function processContent(options) {
//   options = Object.assign({}, DEFAULTS, options)
//   console.log(options);
// }

// const DEFAULTS = {
//   url: {
//     host: 'example.com',
//     port: 7070
//   }
// }

// const obj = {
//   foo: 123,
//   get bar() {return 'abc'}
// };
// console.log(Object.getOwnPropertyDescriptors(obj))

// function getOwnPropertyDescriptors(obj) {
//   const result = {}
//   for(let key of Reflect.ownKeys(obj)) {
//     result[key] = Object.getOwnPropertyDescriptor(obj, key)
//   }
//   return result;
// }

// const soruce = {
//   set foo(value) {
//     console.log(value);
//   }
// }
// const target = {}
// Object.assign(target, soruce)
// console.log(Object.getOwnPropertyDescriptor(target, 'foo'))

// const source = {
//   set foo(value) {
//     console.log(value);
//   }
// }
// const target2 = {}
// Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source))
// console.log(Object.getOwnPropertyDescriptors(target2))

// const shallowMerge = (target, ...source) => {
//   return Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
// }

// const clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))

// const shallowClone = (obj) => {
//   return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))
// }

// const obj = {
//   __proto__: prot,
//   foo: 123,
// }

// Object.create(prot)
// Object.foo = 123;

// const obj = Object.assign(Object.create(prot), {foo: 123})

// const obj = Object.create(
//   prot,
//   Object.getOwnPropertyDescriptors({foo: 123})
// )

// let mix = (object) => ({
//   with: (...mixins) =>
//     mixins.reduce((c, mixin) => {
//       return Object.create(c, Object.getOwnPropertyDescriptors(mixin));
//     }, object),
// });

// let a = { a: "a" };
// let b = { b: "b" };
// let c = { c: "c" };
// let d = mix(c).with(a, b);
// console.log(d);

// const obj = {
//   method: function() {}
// }
// obj.__proto__ = someOtherObj;

// const obj = Object.create(someOtherObj)
// obj.method = function() {}

// function isObject(value) {
//   return Object(value) === value
// }

// Object.defineProperty(Object.prototype, '__proto__', {
//   get() {
//     let _thisObj = Object(this);
//     return Object.getPrototypeOf(_thisObj)
//   },
//   set(proto) {
//     if (this === undefined || this.null) {
//       throw new Error()
//     }
//     if (!isObject(this)) {
//       return undefined
//     }
//     if (!isObject(proto)) {
//       return undefined
//     }
//     let status = Reflect.setPrototypeOf(this, proto);
//     if (!status) {
//       throw new TypeError()
//     }
//   }
// })

// let obj = Object.getPrototypeOf({__proto__: null})
// console.log(obj);

// Object.setPrototypeOf(object, prototype)
// const o = Object.setPrototypeOf({}, null)
// console.log(o);

// let proto = {};
// let obj = {x: 10}
// Object.setPrototypeOf(obj, proto)

// proto.y  = 20;
// proto.z = 40;
// console.log(obj.x);
// console.log(obj.y);
// console.log(obj.z);

// console.log(Object.setPrototypeOf(1, {}) === 1)
// console.log(Object.setPrototypeOf('foo', {}) === 'foo');
// console.log(Object.setPrototypeOf(true, {}) === true);

// Object.setPrototypeOf(undefined, {})
// Object.setPrototypeOf(null, {})

// function Rectangle() {

// }

// const rec = new Rectangle()

// console.log(Object.getPrototypeOf(rec) === Rectangle.prototype)

// Object.setPrototypeOf(rec, Object.prototype);
// console.log(Object.getPrototypeOf(rec) === Rectangle.prototype)

// console.log(Object.getPrototypeOf(1))

// console.log(Object.getPrototypeOf('foo'));

// console.log(Object.getPrototypeOf(true));

// console.log(Object.getPrototypeOf(1) === Number.prototype)
// console.log(Object.getPrototypeOf('foo') === String.prototype);
// console.log(Object.getPrototypeOf(true) === Boolean.prototype);

// var obj = {foo: 'bar', baz: 42}
// console.log(Object.keys(obj))

// let {keys, values, entries} = Object;
// let obj = {a: 1, b: 2, c: 3}
// for (let key of keys(obj)) {
//   console.log(key);
// }
// for (let value of values(obj)) {
//   console.log(value);
// }

// for (let [key, value] of entries(obj)) {
//   console.log(key, value);
// }

// const obj = {foo: 'bar', baz: 42}
// console.log(Object.values(obj));

// const obj = Object.create({}, {p: {
//   value: 42,
//   enumerable: true
// }})

// console.log(Object.values(obj));

// console.log(Object.values({[Symbol()]: 123, foo: 'abc'}));
// console.log(Object.values('foo'));

// console.log(Object.values(42))
// console.log(Object.values(true));

// const obj = {foo: 'bar', baz: 42}
// console.log(Object.entries(obj));
// console.log(Object.entries({[Symbol()]: 123, foo: 'abc'}));

// let obj = {one: 1, two: 2}
// for( let [key, value] of Object.entries(obj)) {
//   console.log(key);
//   console.log(value);
  // console.log(`${JSON.stringify(key)}: ${JSON.stringify(value)}`);
// }

// const obj = {foo: 'bar', baz: 42}
// const map = new Map(Object.entries(obj))
// console.log(map);

// function* entries(obj) {
//   for (let key of Object.keys(obj)) {
//     yield [key, obj[key]]
//   }
// }

// let iterator = entries({a: 1, b: 2, c: 3})
// for (const [key, value] of iterator) {
//   console.log(key);
//   console.log(value);
// }

// function entries(obj) {
//   let arr = []
//   for (const key of Object.keys(obj)) {
//     arr.push([key, obj[key]])
//   }
//   return arr;
// }
// console.log(entries({a: 1, b: 2, c: 3}));

// let obj = Object.fromEntries([
//   ['foo', 'bar'],
//   ['baz', 42]
// ])
// console.log(obj);

// const entries = new Map([
//   ['foo', 'bar'],
//   ['baz', 42]
// ])
// console.log(Object.fromEntries(entries))

// const map = new Map().set('foo', true).set('bar', false)
// console.log(Object.fromEntries(map))

// console.log(Object.fromEntries(new URLSearchParams('foo=bar&baz=qux')))
