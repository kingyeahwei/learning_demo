// function* helloWorldGenerator() {
//   yield 'hello';
//   yield 'world';
//   return 'ending';
// }
// var hw = helloWorldGenerator()
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());


// function * foo(x, y) {}
// function *foo(x, y) {}
// function* foo(x, y) {}
// function*foo(x, y) {}

// function* f() {
//   console.log('执行了!');
// }
// var generator = f();
// setTimeout(() => {
//   generator.next();
// }, 2000);

// (function() {
//   yield 1;
// })()
// var arr = [1, [[2, 3], 4], [5, 6]];
// var flat = function* (a) {
//   a.forEach(function (item) {
//     if (typeof item !== 'number') {
//       yield* flat(item)
//     } else {
//       yield item;
//     }
//   });
// };

// for (const f of flat(arr)) {
//   console.log(f);
// }
// var flat = function* (a) {
//   var length = a.length;
//   for (var i = 0; i < length; i++) {
//     var item = a[i];
//     if (typeof item !== 'number') {
//       yield* flat(item);
//     } else {
//       yield item;
//     }
//   }
// };

// for (const f of flat(arr)) {
//   console.log(f);
// }

// function* demo() {
// console.log('Hello' + yield);
// console.log('Hello' + yield 123);
//   console.log('Hello' + (yield));
//   console.log('Hello' + (yield 123));
// }

// let iterator = demo()
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// var myIterable = {};
// myIterable[Symbol.iterator] = function* () {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// console.log([...myIterable]);

// function* gen() {
// }
// var g = gen();
// console.log(g[Symbol.iterator]() == g)

// yield 表达式本身没有返回值,或者总是放回undefined.next方法可以带一个参数,该参数就会被当做上一个yield表达式的返回值
// function* f() {
//   for (var i = 0; true; i++) {
//     var reset = yield i;
//     console.log(reset);
//     if (reset) {
//       i = -1;
//     }
//   }
// }
// var g = f();
// g.next()
// g.next()
// g.next(true)

// function* foo(x) {
//   var y = 2 * (yield (x + 1));
//   var z = yield (y / 3);
//   return (x + y + z);
// }

// var a = foo(5);
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());

// var b = foo(5)
// console.log(b.next())
// console.log(b.next(12))
// console.log(b.next(13))

// function* dataConsumer() {
//   console.log('Standard');
//   console.log(`1.${yield}`);
//   console.log(`2.${yield}`);
//   return 'result';
// }

// let genObj = dataConsumer();
// console.log(genObj.next())
// console.log(genObj.next('a')); 
// console.log(genObj.next('b')); 

// function wrapper(generatorFunction) {
//   return function (...args) {
//     let generatorObject = generatorFunction(...args); 
//     generatorObject.next();
//     return generatorObject;
//   }
// }
// const wrapped = wrapper(function* () {
//   console.log(`First input: ${yield}`);
//   return 'DONE';
// })
// console.log(wrapped().next('hello!'));

