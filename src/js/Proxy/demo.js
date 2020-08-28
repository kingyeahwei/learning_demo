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
