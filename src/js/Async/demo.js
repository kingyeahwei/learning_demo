// const fs = require('fs');

// const readFile = function (fileName) {
//   return new Promise(function (resolve, reject) {
//     fs.readFile(fileName, function (error, data) {
//       if (error) {
//         reject(error);
//       }
//       resolve(data);
//     });
//   });
// };

// const gen = function* () {
//   const f1 = yield readFile('src/a.txt');
//   const f2 = yield readFile('src/b.txt');
//   console.log(f1.toString());
//   console.log(f2.toString());
// };

// const asyncReadFile = async function () {
//   const f1 = await readFile('src/a.txt');
//   const f2 = await readFile('src/b.txt');
//   console.log(f1.toString());
//   console.log(f2.toString());
// }

// (1) 内置执行器
// (2) 更好的语义
// (3) 更广的适用性
// (4) 返回值是promise对象

// async function getStockPriceByName(name) {
//   const symbol = await getStrockSymbol(name);
//   const stockPrice = await getStockPriceByName(symbol);
//   return stockPrice;
// }

// getStockPriceByName('goog').then(function (result) {
//   console.log(result);
// });

// function timeout(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function asyncPrint(value, ms) {
//   await timeout(ms);
//   console.log(value);
// }

// asyncPrint('hello world', 50)

// async function timeout (ms) {
//   await new Promise((resolve) => {
//     setTimeout(resolve, ms)
//   })
// }

// async function asyncPrint(value, ms) {
//   await timeout(ms)
//   console.log(value);
// }

// asyncPrint('hello world', 50)

// 函数声明
// async function foo() {}

// 函数表达式
// const foo = async function () {};

// 对象的方法
// let obj = { async foo() {} };
// obj.foo().then(function () {});

// Class 方法
// class Storage {
//   constructor() {
//     this.cachePromise = caches.open('avatars');
//   }

//   async getAvatar(name) {
//     const cache = await this.cachePromise;
//     return cache.match(`/avatars/${name}.jpg`);
//   }
// }
// const storage = new Storage();
// storage.getAvatar('jake').then(function () {});

// 箭头函数
// const foo = async () => {};

// async function f () {
//   return 'hello world';
// }

// f().then(v => console.log(v))

// async function f() {
//   throw new Error('出错了');
// }

// f().then(
//   (v) => console.log(v),
//   (e) => console.log(e)
// );

// async function getTitle(url) {
//   let response = await fetch(url)
//   let html = await response.text()
//   return html.match(/<title>([\s\S]+)<\/title>/i)[i];
// }
// getTitle('http://tc39.github.io/ecma262/').then(console.log)

// async function f() {
//   return await 123;
// }

// f().then(v => console.log(v))

// class Sleep {
//   constructor(timeout) {
//     this.timeout = timeout;
//   }
//   then(resolve, reject) {
//     const startTime = Date.now();
//     setTimeout(() => {
//       resolve(Date.now() - startTime)
//     }, this.timeout);
//   }
// }

// (async () => {
//   const sleetTime = await new Sleep(1000);
//   console.log(sleetTime);
// })()

// note sleep

// function sleep(interval) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, interval);
//   });
// }

// async function one2FiveInAsync() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     await sleep(1000)
//   }
// }

// one2FiveInAsync()

// async function f() {
//   await Promise.reject('出错了');
// }

// f()
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// async function f() {
//   await Promise.reject('出错误了')
//   await Promise.resolve('hello world');
// }

// f().then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// })

// async function f() {
//   try {
//     await Promise.reject('出错了')
//   } catch (e) {

//   }

//   return await Promise.resolve('hello world');
// }

// f().then(v => {console.log(v);})

// async function f() {
//   await Promise.reject('出错了').catch((e) => {
//     console.log(e);
//   });

//   return await Promise.resolve('hello world');
// }

// f().then((v) => console.log(v));

// async function f() {
//   await new Promise(function (resolve, reject) {
//     throw new Error('出错了');
//   });
// }

// f()
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// async function main() {
//   try {
//     const val1 = await firstStep();
//     const val2 = await secondStep(val1);
//     const val3 = await thirdStep(val1, val2);
//     console.log('Final: ' + val3);
//   } catch (e) {
//     console.error(e);
//   }
// }

// async function f() {
//   try {
//     await new Promise(function (resolve, reject) {
//       throw new Error('出错了')
//     })
//   } catch (e) {

//   }
//   return await 'hello world';
// }

// const superagent = require('superagent')
// const NUM_RETRIES = 3;
// async function test () {
//   let i;
//   for (i = 0; i < NUM_RETRIES; i++) {
//     try {
//       await superagent('http://google.com/this-throws-an-error');
//       break;
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   console.log(i);
// }

// test()

// async function myFunction() {
//   try {
//     await somethingThatReturnsAPromise();
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function myFunction () {
//   await somethingThatReturnsAPromise().catch(function(err) {
//     console.log(err)
//   })
// }

// let [foo, bar] = await Promise.all([getFoo(), getBar()])

// let fooPromise = getFoo()
// let barPromise = getBar()
// let foo = await fooPromise;
// let bar = await barPromise;

// async function dbFunc(db) {
//   let docs = [{}, {}, {}];
//   docs.forEach(function(doc) {
//     await db.post(doc)
//   })
// }

// function dbFunc (db) {
//   let docs = [{}, {}, {}];
//   docs.forEach(async function(doc) {
//     await db.post(doc)
//   })
// }

// async function dbFunc(db) {
//   let docs = [{}, {}, {}];
//   for (let doc of docs) {
//     await db.post(doc)
//   }
// }

// async function dbFunc(db) {
//   let docs = [{}, {}, {}];
//   await docs.reduce(async (_, doc) => {
//     await _;
//     await db.post(doc);
//   }, undefined);
// }

// async function dbFunc(db) {
//   let docs = [{}, {}, {}];
//   let promises = docs.map((doc) => db.post(doc))
//   let result = await Promise.all(promises)
//   console.log(result);
// }

// async function dbFunc(db) {
//   let docs = [{}, {}, {}];
//   let promises = docs.map(doc => db.post(doc))
//   let results = [];
//   for (let promise of promises) {
//     results.push(await promise)
//   }
//   console.log(results);
// }

// dbFunc({post: function() {}})

// async function fn(args) {}

// function fn(args) {
//   return spawn(function* () {});
// }

// function spawn(genF) {
//   return new Promise(function (resolve, reject) {
//     const gen = genF();
//     function step(nextF) {
//       let next;
//       try {
//         next = nextF();
//       } catch (e) {
//         return reject(e);
//       }
//       if (next.done) {
//         return resolve(next.value);
//       }
//       Promise.resolve(next.value).then(
//         function (v) {
//           step(function () {
//             return gen.next(v);
//           });
//         },
//         function (e) {
//           step(function () {
//             return gen.throw(e);
//           });
//         }
//       );
//     }

//     step(function () {
//       return gen.next(undefined);
//     });
//   });
// }

// spawn(function* () {
//   yield 1;
//   yield 2;
//   return 3;
// })

// function chainAnimationsPromise(elem, animations) {
//   let ret = null;
//   let p = Promise.resolve();
//   for (let anim of animations) {
//     p = p.then(function(val) {
//       ret = val;
//       return anim(elem)
//     })
//   }
//   return p.catch(function(e) {
//     // 错误处理
//   }).then(function() {
//     return ret;
//   })
// }

// function chainAnimationsGenerator(elem, animations) {
//   return spawn(function* () {
//     let ret = null;
//     try {
//       for (let anim of animations) {
//         ret = yield anim(elem);
//       }
//     } catch (e) {}
//     return ret;
//   });
// }

// async function chainAnimationsAsync(elem, animations) {
//   let ret = null;
//   try {
//     for (let anim of animations) {
//       ret = await anim(elem);
//     }
//   } catch (e) {}
//   return ret;
// }

// function logInOrder(urls) {
//   const textPromises = urls.map((url) => {
//     return fetch(url).then((response) => response.text());
//   });

//   textPromises.reduce((chain, textPromise) => {
//     return chain.then(() => textPromise).then((text) => console.log(text));
//   }, Promise.resolve());
// }

// async function logInOrder(urls) {
//   for (const url of urls) {
//     const response = await fetch(url)
//     console.log(await response.text());
//   }
// }

// async function logInOrder(urls) {
//   const textPromises = urls.map(async url => {
//     const response = await fetch(url);
//     return response.text()
//   })

//   for(const textPromise of textPromises ) {
//     console.log(await textPromise);
//   }
// }

// let output;
// async function main() {
//   const dynamic = await import(someMission);
//   const data = await fetch(url);
//   output = someProcess(dynamic.default, data);
// }

// main();
// export { output };

// let output;
// (async function main() {
//   const dynamic = await import(someMission);
//   const data = await fetch(url);
//   output = someProcess(dynamic.default, data);
// })();

// export { output };

// import { output } from './awaiting.js';

// function outputPlusValue(value) {
//   return output + value;
// }

// console.log(outputPlusValue(100));

// setTimeout(() => {
//   console.log(outputPlusValue(100));
// }, 1000);

// let output;

// export default (async function main() {
//   const dynamic = await import(someMission);
//   const data = await fetch(url);
//   output = someProcess(dynamic.default, data);
// })();

// export { output };

// import promise, { output } from './awaiting.js';
// function outputPlusValue(value) {
//   return output + value;
// }

// promise.then(() => {
//   console.log(outputPlusValue(100));
//   setTimeout(() => {
//     console.log(outputPlusValue(100));
//   }, 1000);
// });

// const dynamic = import(someMission);
// const data = fetch(url);
// export const output = someProcess((await dynamic).defalut, await data);

// import { output } from './awaiting.js';
// function outputPlusValue(value) {
//   return output + value;
// }

// console.log(outputPlusValue(100));
// setTimeout(() => {
//   console.log(outputPlusValue(100));
// }, 1000);

// const strings = await import(`/i18n/${navigator.language}`);
// const connection = await dbConnector()

// let jQuery;
// try {
//   jQuery = await import('https://cdn-a.com/jQuery');
// } catch {
//   jQuery = await import('https://cdn-b.com/jQuery')
// }


