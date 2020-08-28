// var obj = new Proxy(
//   {},
//   {
//     get: function (target, propKey, receiver) {
//       console.log(`getting ${propKey}!`);
//       return Reflect.get(target, propKey, receiver)
//     },
//     set: function (target, propKey, value, receiver) {
//       console.log(`setting ${propKey}!`);
//       return Reflect.set(target, propKey, value, receiver)
//     }
//   }
// );

// obj.count = 1
// ++obj.count

// var proxy = new Proxy(
//   {},
//   {
//     get: function (target, propKey) {
//       return 35;
//     },
//   }
// );
// console.log(proxy.time);
// console.log(proxy.name);
// console.log(proxy.title);

// var target = {};
// var handler = {};
// var proxy = new Proxy(target, handler);
// proxy.a = 'b'
// console.log(proxy.a);

// var object = {proxy: new Proxy(target, handler)}

// var proxy = new Proxy(
//   {},
//   {
//     get: function (target, propKey) {
//       return 35;
//     },
//   }
// );

// let obj = Object.create(proxy);
// console.log(obj.time)

// var handler = {
//   get: function (target, name) {
//     if (name === "prototype") {
//       return Object.prototype;
//     }
//     return "Hello, " + name;
//   },
//   apply: function (target, thisBinding, args) {
//     return args[0];
//   },
//   construct: function (target, args) {
//     return { value: args[1] };
//   },
// };

// var fproxy = new Proxy(function (x, y) {
//   return x + y;
// }, handler);

// console.log(fproxy(1, 2))

// console.log(new fproxy(1, 2))

// console.log(fproxy.prototype === Object.prototype)
// console.log(fproxy.foo === 'Hello, foo')

// get(target, propKey, receiver): 拦截对象属性的读取, 比如proxy.foo和proxy['foo']
// set(target, propKey, value, receiver): 拦截对象属性的设置, 比如proxy.foo = v 或者proxy['foo'] = v, 返回一个布尔值
// has(target, propKey): 拦截propKey in proxy的操作,返回一个布尔值
// deleteProperty(target, propKey): 拦截delete proxy[propKey]的操作,返回一个布尔值
// ownKeys(target) 拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、
// for...in循环,返回一个数组,该方法返回目标对象所有自身的属性的属性名,而Object.keys()的返回结果仅包括目标对象自身的可遍历属性
// getOwnPropertyDescriptor(target, propKey)拦截Object.getOwnPropertyDescriptor(proxy, propKey), 返回属性的描述对象
// defineProperty(target, propKey, propDesc)拦截Object.defineProperty(proxy, propKey, propDesc)、Object.defineProperties(proxy, propDesc), 返回一个布尔值
// preventExtensions(target): 拦截Object.preventExtensions(proxy), 返回一个布尔值
// getPrototypeOf(target): 拦截Object.getPrototypeOf(proxy), 返回一个对象
// isExtensibile(target): 拦截Object.isExtensible(proxy), 返回一个布尔值
// setPrototypeOf(target, proto): 拦截Object.setPrototypeOf(proxy, proto): 返回一个布尔值. 如果目标对象十函数,那么还有两种额外操作可以拦截
// apply(target, object, args): 拦截Proxy实例作为函数调用的操作,比如: proxy(...args), proxy.call(object, ...args), proxy.apply(...)
// construct(target, args): 拦截proxy实例作为构造函数的调用的操作,比如new Proxy(...args)
// var person = { name: "张三" };
// var proxy = new Proxy(person, {
//   get: function (target, propKey) {
//     if (propKey in target) {
//       return target[propKey];
//     } else {
//       throw new ReferenceError('Prop name "' + propKey + '" does not exist.');
//     }
//   },
// });

// console.log(proxy.name);
// console.log(proxy.age);

// let proto = new Proxy(
//   {},
//   {
//     get(target, propertyKey, receiver) {
//       console.log("GET " + propertyKey);
//       return target[propertyKey];
//     },
//   }
// );

// let obj = Object.create(proto);
// console.log(obj.foo)

// function createArray(...elements) {
//   let handler = {
//     get: function (target, propKey, receiver) {
//       let index = Number(propKey);
//       console.log('index: ' + index);
//       if (index < 0) {
//         propKey = String(target.length + index);
//         console.log(propKey);
//       }
//       return Reflect.get(target, propKey, receiver);
//     },
//   };
//   let target = [];
//   target.push(...elements);
//   return new Proxy(target, handler);
// }

// let arr = createArray('a', 'b', 'c')
// arr[-1]

// var pipe = function (value) {
//   var funcStack = [];
//   var oproxy = new Proxy(
//     {},
//     {
//       get: function (pipeObject, fnName) {
//         if (fnName === "get") {
//           return funcStack.reduce(function (val, fn) {
//             return fn(val);
//           }, value);
//         }
//         funcStack.push(window[fnName]);
//         console.log(funcStack);
//         return oproxy;
//       },
//     }
//   );
//   return oproxy;
// };

// var double = n => n * 2;
// var pow = n => n * n;
// var reverseInt = n => n.toString().split('').reverse().join('') | '';

// pipe(3).double.pow.reverseInt.get

// console.log(pipe(3).double.pow.reverseInt.get);

// const dom = new Proxy(
//   {},
//   {
//     get(target, property) {
//       return function (attrs = {}, ...children) {
//         const el = document.createElement(property);
//         for (let prop of Object.keys(attrs)) {
//           el.setAttribute(prop, attrs[prop]);
//         }
//         for (let child of children) {
//           if (typeof child === "string") {
//             child = document.createTextNode(child);
//           }
//           el.appendChild(child);
//         }
//         return el;
//       };
//     },
//   }
// );

// const el = dom.div(
//   {},
//   "Hello, my name is ",
//   dom.a({ href: "//example.com" }, "Mark"),
//   ". I like:",
//   dom.ul(
//     {},
//     dom.li({}, "The web"),
//     dom.li({}, "Food"),
//     dom.li({}, "…actually that's it")
//   )
// );

// document.body.appendChild(el);
// const proxy = new Proxy({}, {
//   get: function(target, key, receiver) {
//     return receiver;
//   }
// })
// console.log(proxy.getReceiver === proxy)

// const proxy = new Proxy(
//   {},
//   {
//     get: function (target, key, receiver) {
//       return receiver;
//     },
//   }
// );

// const d = Object.create(proxy)
// console.log(d.a === d);

// const target = Object.defineProperties(
//   {},
//   {
//     foo: {
//       value: 123,
//       writable: false,
//       configurable: false,
//     },
//   }
// );

// const handler = {
//   get(target, propKey) {
//     if (propKey === 'foo') {
//       return target[propKey]
//     }
//     return 'abc';
//   }
// }

// const proxy = new Proxy(target, handler)
// console.log(proxy.foo)

// let validator = {
//   set: function(obj, prop, value) {
//     if (prop === 'age') {
//       if (!Number.isInteger(value)) {
//         throw new TypeError('The age is not an integer')
//       }
//       if (value > 200) {
//         throw new TypeError('The age seems invalid')
//       }
//     }
//     对于满足条件的age属性以及其他属性,直接保存
//     obj[prop] = value;
//   }
// }

// let person = new Proxy({}, validator);
// person.age = 100;
// person.age = 'young'
// person.age = 300;

// const handler = {
//   get(target, key) {
//     invariant(key, 'get');
//     return target[key]
//   },
//   set(target, key, value) {
//     invariant(key, 'set')
//     target[key] = value;
//     return true;
//   }
// }

// function invariant(key, action) {
//   if (key[0] === '_') {
//     throw new Error(`Invalid attempt to ${action} private ${key} property`)
//   }
// }

// const target = {}
// const proxy = new Proxy(target, handler);
// proxy._prop

// const handler = {
//   set: function(obj, key, value, receiver) {
//     obj[key] = receiver;
//   }
// }
// const proxy = new Proxy({}, handler)
// proxy.foo = 'bar'
// console.log(proxy.foo === proxy)

