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