// let target = {}
// try {
//   Object.defineProperty(target, 'key', {
//     configurable: true,
//     writable: true,
//     enumerable: true,
//     value: '123'
//   });
//   console.log('success');
// } catch (e) {
//   console.log('fail');
// }

// if (Reflect.defineProperty(target, property, attributes)) {
//   console.log('success');
// } else {
//   console.log('failure');
// }

// console.log('assign' in Object)
// console.log(Reflect.has(Object, 'assign'));

// Proxy(target, {
//   set: function(target, name, value, receiver) {
//     var success = Reflect.set(target, name, value, receiver)
//     if (success) {
//       console.log('property' + name + ' on' + target + ' set to ' + value);
//     }
//     return success;
//   }
// })

// var loggedObj =  new Proxy({}, {
//   get(target, name) {
//     console.log('get', target, name);
//     return Reflect.get(target, name)
//   },
//   deleteProperty(target, name) {
//     console.log('delete' + name);
//     return Reflect.deleteProperty(target, name)
//   },
//   has(target, name) {
//     console.log('has' + name);
//     return Reflect.has(target, name)
//   }
// })

// console.log(Function.prototype.apply.call(Math.floor, undefined, [1.75]))
// console.log(Reflect.apply(Math.floor, undefined, [1.75]))
// Reflect.apply(target, thisArg, args)
// Reflect.construct(target, args)
// Reflect.get(target, name, receiver)
// Reflect.set(target, name, value, receiver)
// Reflect.defineProperty(target, name, desc)
// Reflect.deleteProperty(target, name)
// Reflect.has(target, name)
// Reflect.ownKeys(target)
// Reflect.isExtensible(target)
// Reflect.preventExtensions(target)
// Reflect.getOwnPropertyDescriptor(target, name)
// Reflect.getPrototypeOf(target)
// Reflect.setPrototypeOf(target, prototype)

// var myObject = {
//   foo: 1,
//   bar: 2,
//   get baz() {
//     return this.foo + this.bar;
//   }
// }

// console.log(Reflect.get(myObject, 'foo'))
// console.log(Reflect.get(myObject, 'bar'));
// console.log(Reflect.get(myObject, 'baz'));

// var myObject = {
//   foo: 1,
//   bar: 2,
//   get baz() {
//     return this.foo + this.bar;
//   }
// }

// var myReceiverObject = {
//   foo: 4,
//   bar: 4
// }

// console.log(Reflect.get(myObject, 'baz', myReceiverObject))
// Reflect.get(1, 'foo')
// Reflect.get(false, 'foo')

// var myObject = {
//   foo: 1,
//   set bar(value) {
//     return this.foo = value;
//   }
// }
// console.log(myObject.foo);
// Reflect.set(myObject, 'foo', 2)
// console.log(myObject.foo);

// Reflect.set(myObject, 'bar', 3)
// console.log(myObject.foo);

// var myObject = {
//   foo: 4,
//   set bar(value) {
//     return (this.foo = value);
//   },
// };

// var myReceiverObject = {
//   foo: 0,
// };

// Reflect.set(myObject, 'bar', 1, myReceiverObject)
// console.log(myObject.foo);
// console.log(myReceiverObject.foo);

// let p = {
//   a: "a",
// };
// let handler = {
//   set(target, key, value, receiver) {
//     console.log("set");
//     console.log(receiver);
//     Reflect.set(target, key, value, receiver);
//   },
//   defineProperty(target, key, attribute) {
//     console.log("defineProperty");
//     Reflect.defineProperty(target, key, attribute);
//   },
// };

// let obj = new Proxy(p, handler);
// obj.a = "A";

// let p = {
//   a: 'a'
// };
// let handler = {
//   set(target, key, value, receiver) {
//     console.log('set');
//     Reflect.set(target, key, value)
//   },
//   defineProperty(target, key, attribute) {
//     console.log('defineProperty');
//     Reflect.defineProperty(target, key, attribute)
//   }
// }

// let obj = new Proxy(p, handler)
// obj.a = 'A'
// console.log(p);

// Reflect.set(1, 'foo', {})
// Reflect.set(false, 'foo', {})

// var myObject = {
//   foo: 1
// }
// console.log('foo' in myObject);

// console.log('---', Reflect.has(myObject, 'foo'))

// const myObj = {
//   foo: 'bar'
// }
// console.log(Reflect.deleteProperty(myObj, 'foo'));

// function Greeting(name) {
//   this.name = name;
// }

// const instance = new Greeting('张三');

// const instance = Reflect.construct(Greeting, ['李四'])
// console.log(instance instanceof Greeting);
// function FancyThing() {}
// const myObj = new FancyThing()
// console.log(Object.getPrototypeOf(myObj) === FancyThing.prototype);
// console.log(Reflect.getPrototypeOf(myObj) === FancyThing.prototype)

// console.log(Object.getPrototypeOf(1))
// Reflect.getPrototypeOf(1)

// const myObj = {}
// Object.setPrototypeOf(myObj, Array.prototype)
// console.log(Reflect.setPrototypeOf(myObj, Array.prototype))
// console.log(myObj.length);
// console.log(Reflect.setPrototypeOf({}, null))
// console.log(Reflect.setPrototypeOf(Object.freeze({}), null))
// console.log(Object.setPrototypeOf(1, {}))
// Reflect.setPrototypeOf(1, {})

// Object.setPrototypeOf(null, {})
// Reflect.setPrototypeOf(null, {})

// const ages = [11, 13, 12, 54, 18, 96];
// const youngest = Math.min.apply(Math, ages)
// const oldest = Math.max.apply(Math, ages)
// console.log(youngest);
// console.log(Object.prototype.toString.call(youngest))
// const youngest = Reflect.apply(Math.min, Math, ages)
// const oldest = Reflect.apply(Math.max, Math, ages)
// const type = Reflect.apply(Object.prototype.toString, youngest, [])
// console.log(type);

// function MyData() {}
// Object.defineProperty(MyData, 'now', {value: () => Date.now()})
// console.log(typeof MyData.now);

// const p = new Proxy({}, {
//   defineProperty(target, prop, descriptor) {
//     console.log(descriptor);
//     return Reflect.defineProperty(target, prop, descriptor)
//   }
// })

// p.foo = 'bar'
// console.log(p.foo);

// var myObject = {};
// Object.defineProperty(myObject, "hidden", {
//   value: true,
//   enumerable: false,
// });

// var theDescriptor = Object.getOwnPropertyDescriptor(myObject, 'hidden')
// console.log(theDescriptor);
// const theDescriptor = Reflect.getOwnPropertyDescriptor(myObject, 'hidden')
// console.log(theDescriptor);

// const myObject = {};
// console.log(Object.isExtensible(myObject))
// console.log(Reflect.isExtensible(myObject))

// console.log(Object.isExtensible(1))
// console.log(Reflect.isExtensible(1));

// note Reflect.preventExtensions

// var myObject = {};
// console.log(Object.preventExtensions(myObject))
// console.log(Reflect.preventExtensions(myObject))

// console.log(Object.preventExtensions(1))
// Reflect.preventExtensions(1)

// var myObject = {
//   foo: 1,
//   bar: 2,
//   [Symbol.for('baz')]: 3,
//   [Symbol.for('bing')]: 4,
// }

// console.log(Object.getOwnPropertyNames(myObject))
// console.log(Object.getOwnPropertySymbols(myObject))
// console.log(Reflect.ownKeys(myObject))