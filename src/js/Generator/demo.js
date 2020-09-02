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

// const g = function* (x, y) {
//   let result = yield x + y;
//   return result;
// }

// const gen = g(1, 2);
// console.log(gen.next())
// console.log(gen.throw(new Error('出错了')));
// console.log(gen.return(2));

// tag yield* 表达式
// function* foo() {
//   yield 'a';
//   yield 'b';
// }

// function* bar() {
//   yield 'x';
//   for (const i of foo()) {
//     console.log(i);
//   }
//   yield 'y'
// }

// for (const v of bar()) {
//   console.log(v);
// }

// function* bar() {
//   yield 'x';
//   yield* foo();
//   yield 'y'
// }

// function* bar() {
//   yield 'x';
//   yield 'a';
//   yield 'b';
//   yield 'y';
// }

// for (const v of bar()) {
//   console.log(v);
// }

// function* bar() {
//   yield 'x';
//   for (const v of foo()) {
//     yield v;
//   }
//   yield 'y'
// }

// for (const v of bar()) {
//   console.log(v);
// }

// function* inner() {
//   yield 'hello!';
// }

// function* outer1() {
//   yield 'open';
//   yield inner();
//   yield 'close';
// }

// var gen = outer1();

// console.log(gen.next().value)
// console.log(gen.next().value);
// console.log(gen.next().value);

// function* outer2() {
//   yield 'open';
//   yield* inner();
//   yield 'close';
// }

// var gen = outer2()

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// let deletatedIterator = (function* () {
//   yield 'Hello!';
//   yield 'Bye!';
// })();

// let delegatingIterator = (function* () {
//   yield 'Greetings';
//   yield* deletatedIterator;
//   yield 'Ok, bye.';
// })();

// for (let value of delegatingIterator) {
//   console.log(value);
// }

// function* concat(iter1, iter2) {
//   yield* iter1;
//   yield* iter2;
// }

// function* concat(iter1, iter2) {
//   for (const value of iter1) {
//     yield value;
//   }
//   for (const value of iter2) {
//     yield value;
//   }
// }

// function* gen() {
//   yield* ['a', 'b', 'c'];
// }

// console.log(gen().next())

// let read = (function* () {
//   yield 'hello';
//   yield* 'hello';
// })();

// console.log(read.next().value)
// console.log(read.next().value)

// function* foo() {
//   yield 2;
//   yield 3;
//   return 'foo';
// }

// function* bar() {
//   yield 1;
//   var v = yield* foo();
//   console.log('v: ' + v);
//   yield 4;
// }

// var it = bar();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// function* genFuncWithReturn() {
//   yield 'a';
//   yield 'b';
//   return 'The result'
// }

// function* logReturned(genObj) {
//   let result = yield* genObj;
//   console.log(result);
// }

// console.log([...logReturned(genFuncWithReturn())]);

// function* iterTree(tree) {
//   if (Array.isArray(tree)) {
//     for (let i = 0; i < tree.length; i++) {
//       yield* iterTree(tree[i]);
//     }
//   } else {
//     yield tree;
//   }
// }

// const tree = ['a', ['b', 'c'], ['d', 'e']];

// for (let x of iterTree(tree)) {
//   console.log(x);
// }

// console.log(...iterTree(tree));

// function Tree(left, label, right) {
//   this.left = left;
//   this.label = label;
//   this.right = right;
// }

// function* inorder(t) {
//   if (t) {
//     yield* inorder(t.left);
//     yield t.label;
//     yield* inorder(t.right);
//   }
// }

// function make(array) {
//   if (array.length == 1) {
//     return new Tree(null, array[0], null);
//   }
//   return new Tree(make(array[0]), array[1], make(array[2]));
// }

// let tree = make([
//   [['a'], 'b', ['c']],
//   'd',
//   [['e'], 'f', ['g']]
// ]);

// var result = [];

// for(let node of inorder(tree)) {
//   result.push(node)
// }

// console.log(result);

// tag 作为对象属性的generator函数
// let obj = {
//   * myGeneratorMethod() {

//   }
// }

// let obj = {
//   myGeneratorMethod: function* () {

//   }
// }

// function* g() {}

// g.prototype.hello = function () {
//   return 'hi!';
// };

// let obj = g();

// console.log(obj instanceof g);

// console.log(obj.hello())

// function* g() {
//   this.a = 11;
// }

// let obj = g();

// obj.next()
// console.log(obj.a);

// function* F() {
//   yield this.x = 2;
//   yield this.y = 3;
// }

// new F()
// function* F() {
//   this.a = 1;
//   yield this.b = 2;
//   yield this.c = 3;
// }

// var obj = {}
// var f = F.call(obj);

// console.log(f.next());
// console.log(f.next());
// console.log(f.next());

// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);

// function* F() {
//   this.a = 1;
//   yield this.b = 2;
//   yield this.c = 3;
// }

// var f = F.call(F.prototype);

// console.log(f.next());
// console.log(f.next());
// console.log(f.next());

// console.log(f.a);
// console.log(f.b);
// console.log(f.c);

// function* gen() {
//   this.a = 1;
//   yield this.b = 2;
//   yield this.c = 3;
// }

// function F() {
//   return gen.call(gen.prototype);
// }

// var f = new F();

// console.log(f.next());
// console.log(f.next());
// console.log(f.next());

// console.log(f.a);
// console.log(f.b);
// console.log(f.c);

// var ticking = true;
// var clock = function() {
//   if (ticking) {
//     console.log('Tick!');
//   } else {
//     console.log('Tock!');
//   }
//   ticking = !ticking;
// }

// var clock = function* () {
//   while (true) {
//     console.log('Tick!');
//     yield;
//     console.log('Tock!');
//     yield;
//   }
// };

// note Generator与协程

// function* gen() {
//   yield 1;
//   yield 2;
// }

// let g = gen();

// console.log(g.next().value, g.next().value);

// function* loadUI() {
//   showLoadingScreen();
//   yield loadUIDataAsynchronously();
//   hideLoadingScreen();
// }

// var loader = loadUI();

// loader.next();
// loader.next()

// function* main() {
//   var result = yield request('http://some.url');
//   var resp = JSON.parse(result);
//   console.log(resp.value);
// }

// function request(url) {
//   makeAjaxCall(url, function (response) {
//     it.next(response);
//   });
// }

// var it = main();
// it.next();

// function* numbers() {
//   let file = new FileReader('numbers.txt');
//   try {
//     while (!file.eof) {
//       yield parseInt(file.readLine(), 10);
//     }
//   } finally {
//     file.close();
//   }
// }

// step1(function (value1) {
//   step2(value1, function (value2) {
//     step3(value2, function (value3) {
//       step4(value3, function (value4) {
//         console.log(value4);
//       });
//     });
//   });
// });

// Promise.resolve(step1)
//   .then(step2)
//   .then(step3)
//   .then(step4)
//   .then(
//     function () {},
//     function () {}
//   )
//   .done();

// function* longRunningTask(value1) {
//   try {
//     var value2 = yield step1(value1);
//     var value3 = yield step2(value2);
//     var value4 = yield step3(value3);
//     var value5 = yield step4(value4);
//   } catch (e) {}
// }

// function scheduler(task) {
//   var taskObj = task.next(task.value);
//   if (!taskObj.done) {
//     task.value = taskObj.value;
//     scheduler(task);
//   }
// }

// scheduler(longRunningTask(initialValue));

// let steps = [step1Func, step2Func, step3Func];

// function* iterateSteps(steps) {
//   for (var i = 0; i < steps.length; i++) {
//     var step = steps[i];
//     yield step();
//   }
// }

// let jobs = [jobs1, jobs2, jobs3];
// function* iterateJobs(jobs) {
//   for (var i = 0; i < jobs.length; i++) {
//     var job = jobs[i];
//     yield iterateSteps(job.steps);
//   }
// }

// for (var step of iterateJobs(jobs)) {
//   console.log(step.id);
// }

// var it = iterateJobs(jobs);
// var res = it.next();

// while (!res.done) {
//   var result = res.value;
//   res = it.next()
// }

// 部署Iterator接口
// function* iterEntries(obj) {
//   let keys = Object.keys(obj);
//   for (let i = 0; i < keys.length; i++) {
//     let key = keys[i];
//     yield [key, obj[key]];
//   }
// }

// let myObj = { foo: 3, bar: 7 };
// for (let [key, value] of iterEntries(myObj)) {
//   console.log(key, value);
// }

// function* makeSimpleGenerator(array) {
//   var nextIndex = 0;
//   while (nextIndex < array.length) {
//     yield array[nextIndex++]
//   }
// }
// var gen = makeSimpleGenerator(['yo', 'ya']);
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().done)

// tag 作为数据结构
// function* doStuff() {
//   yield fs.readFile.bind(null, 'hello.txt');
//   yield fs.readFile.bind(null, 'world.txt');
//   yield fs.readFile.bind(null, 'and-such.txt');
// }

// for (task of doStuff()) {
//   task()
// }

// function doStuff() {
//   return [
//     fs.readFile.bind(null, 'hello.txt'),
//     fs.readFile.bind(null, 'world.txt'),
//     fs.readFile.bind(null, 'and-such.txt'),
//   ];
// }
