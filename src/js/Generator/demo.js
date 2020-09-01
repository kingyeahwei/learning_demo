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

// tag for...of 循环
// function* foo() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
//   return 6;
// }

// for (let v of foo()) {
//   console.log(v);
// }

// function* fibonacci() {
//   let [prev, curr] = [0, 1];
//   for (;;) {
//     yield curr;
//     [prev, curr] = [curr, prev + curr];
//   }
// }

// for (let n of fibonacci()) {
//   if (n > 1000) {
//     break;
//   }
//   console.log(n);
// }

// function* objectEntries(obj) {
//   let propKeys = Reflect.ownKeys(obj);
//   for (const propKey of propKeys) {
//     yield [propKey, obj[propKey]];
//   }
// }

// let jane = {
//   first: 'jane',
//   last: 'Don',
//   [Symbol.for('jjj')]: 'xxxx'
// }

// for (const xx of objectEntries(jane)) {
//   console.log(xx);
// }
// function* objectEntries() {
//   let propKeys = Object.keys(this);
//   for (let propKey of propKeys) {
//     yield [propKey, this[propKey]]
//   }
// }

// let jane = {first: 'Jane', last: 'Doe'};
// jane[Symbol.iterator] = objectEntries;

// for (const [key, value] of jane) {
//   console.log(`${key}: ${value}`);
// }

// function* numbers() {
//   yield 1;
//   yield 2;
//   return 3;
//   yield 4;
// }

// console.log([...numbers()])
// console.log(Array.from(numbers()));
// let [x, y] = numbers()
// console.log(x);
// console.log(y);

// for (const n of numbers()) {
//   console.log(n);
// }

// var g = function* () {
//   try {
//     yield;
//   } catch (e) {
//     console.log('内部捕获:', e);
//   }
// };

// var i = g();
// i.next();
// try {
//   i.throw('a');
//   i.throw('b');
// } catch (e) {
//   console.log('外部捕获:', e);
// }

// var g = function* () {
//   try {
//     yield;
//   } catch (e) {
//     console.log('---',e);
//   }
// }

// var i = g();
// i.next()
// i.throw(new Error('出错了!'))

// var g = function* () {
//   while (true) {
//     try {
//       yield;
//     } catch (e) {
//       if (e != 'a') throw e;
//       console.log('内部捕获', e);
//     }
//   }
// };

// var i = g();
// i.next();
// try {
//   throw new Error('a');
//   throw new Error('b');
// } catch (e) {
//   console.log('外部捕获:', e);
// }

// var g = function* () {
//   while (true) {
//     yield;
//     console.log('内部捕获:', e);
//   }
// }

// var i = g();
// i.next();
// try {
//   i.throw('a');
//   i.throw('b');
// } catch (e) {
//   console.log('外部捕获的错误', e);
// }

// var gen = function* gen() {
//   yield console.log('hello');
//   yield console.log('world');
// }

// var g = gen();
// g.next()
// g.throw();

// function* gen() {
//   try {
//     yield 1;
//   } catch (e) {
//     console.log('内部捕获');
//   }
// }

// var g = gen();
// g.throw(1)

// var gen = function* gen() {
//   try {
//     yield console.log('a');
//   } catch (e) {

//   }
//   yield console.log('b');
//   yield console.log('c');
// }

// var g = gen();
// console.log(g.next())
// console.log(g.throw())
// console.log(g.next())

// var gen = function* gen() {
//   yield console.log('hello');
//   yield console.log('world');
// };

// var g = gen();
// g.next()

// try {
//   throw new Error()
// } catch(e) {
//   g.next();
// }

// function* foo() {
//   var x = yield 3;
//   var y = x.toUpperCase()
//   yield y;
// }

// var it = foo();
// console.log(it.next())

// try {
//   it.next(42)
// } catch(error) {
//   console.log(error);
// }

// function* g() {
//   yield 1;
//   console.log('throwing an exception');
//   throw new Error('generator broke!');
//   yield 2;
//   yield 3;
// }

// function log(generator) {
//   var v;
//   console.log('starting generator');
//   try {
//     v = generator.next();
//     console.log('第一次运行next方法', v);
//   } catch (e) {
//     console.log('捕获错误', v);
//   }

//   try {
//     v = generator.next();
//     console.log('第二次运行next方法', v);
//   } catch (e) {
//     console.log('捕获错误', v);
//   }

//   try {
//     v = generator.next();
//     console.log('第三次运行next方法', v);
//   } catch (e) {
//     console.log('捕获错误', v);
//   }

//   console.log('caller done');
// }

// log(g())

// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// var g = gen();

// console.log(g.next())
// console.log(g.return('foo'));
// console.log(g.next());

// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// var g = gen()
// console.log(g.next())
// console.log(g.return());

// function* numbers() {
//   yield 1;
//   try {
//     yield 2;
//     yield 3;
//   } finally {
//     yield 4;
//     yield 5;
//   }
//   yield 6;
// }

// var g = numbers()

// console.log(g.next())
// console.log(g.next())
// console.log(g.return(7))
// console.log(g.next());
// console.log(g.next());

// tag next()、throw()、return()共同点


