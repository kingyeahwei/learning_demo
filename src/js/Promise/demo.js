// const promise = new Promise(function(resolve, reject) {
//   if (/*异步操作成功*/) {
//     resolve(value)
//   } else {
//     reject(error)
//   }
// })

// promise.then(function(value) {}, function(error) {})

// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   })
// }

// timeout(100).then((value) => {
//   console.log(value);
// })

// let promise = new Promise(function (resolve, reject) {
//   console.log('promise');
//   resolve()
// })

// promise.then(function () {
//   console.log('resolved');
// })

// console.log('Hi!');

// function loadImageAsync(url) {
//   return new Promise(function (resolve, reject) {
//     const image = new Image();
//     image.onload = function () {
//       resolve(image);
//     };
//     image.onerror = function () {
//       reject(new Error("Could not load image at " + url));
//     };
//     image.src = url;
//   });
// }

// const getJSON = function (url) {
//   const promise = new Promise(function (resolve, reject) {
//     const handler = function () {
//       if (this.readState !== 4) {
//         return;
//       }
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//     const client = new XMLHttpRequest();
//     client.open("GET", url);
//     client.onreadystatechange = handler;
//     client.responseType = "json";
//     client.setRequestHeader("Accept", "application/json");
//     client.send();
//   });
//   return promise;
// };

// getJSON("/posts.json").then(
//   function (json) {
//     console.log("Contents: " + json);
//   },
//   function (error) {
//     console.error("出错了", error);
//   }
// );

// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject(new Error("fail"));
//   }, 3000);
// });

// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve(p1);
//   }, 1000);
// });
// p2.then((result) => console.log(result)).catch((error) => console.log(error));

// new Promise((resolve, reject) => {
//   resolve(1);
//   console.log(2);
// }).then(r => {
//   console.log(r);
// })

// new Promise((resolve, reject) => {
//   return resolve(1);
//   console.log(2);
// })

// getJSON("/posts.json")
//   .then(function (json) {})
//   .then(function (post) {});

// getJSON('/post/1.json')
//   .then(function (post) {
//     return getJSON(post.commentURL);
//   })
//   .then(
//     function (comments) {
//       console.log('resolved: ', comments);
//     },
//     function (err) {
//       console.log('reject: ', err);
//     }
//   );
// p.then((value) => console.log('fulfilled:', val)).catch((err) =>
//   console.log('rejected', err)
// );

// p.then((val) => console.log('fulfilled:' + val)).then(null, (err) =>
//   console.log('rejected:', err)
// );

// const promise = new Promise(function (resolve, reject) {
//   throw new Error('test')
// });
// promise.catch(function(error) {
//   console.log(error);
// })

// const promise = new Promise(function (resolve, reject) {
//   try {
//     throw new Error('test');
//   } catch (e) {
//     reject(e);
//   }
// });
// promise.catch(function (error) {
//   console.log(error);
// });

// const promise = new Promise(function (resolve, reject) {
//   reject(new Error('test'));
// });

// promise.catch(function (error) {
//   console.log(error);
// });

// const promise = new Promise(function (resolve, reject) {
//   resolve('ok');
//   throw new Error('test');
// });
// promise
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// getJSON('/post/1.json')
//   .then(function (post) {
//     return getJSON(post.commentURL);
//   })
//   .then(function (comments) {})
//   .catch(function (error) {
//     console.log(error);
//   });

// promise.then(
//   function (data) {},
//   function (error) {}
// );

// promise.then(function (data) {}).catch(function (err) {});

// const someAsyncThing = function () {
//   return new Promise(function (resolve, reject) {
//     resolve(x + 2);
//   });
// };

// someAsyncThing().then(function () {
//   console.log('everything is great');
// });

// setTimeout(() => {
//   console.log(123);
// }, 2000);

// const promise = new Promise(function (resolve, reject) {
//   resolve('ok');
//   setTimeout(() => {
//     throw new Error('test');
//   }, 0);
// });
// promise.then(function(value) {console.log(value);})

// const someAsyncThing = function () {
//   return new Promise(function (resolve, reject) {
//     resolve(x + 2);
//   });
// };

// someAsyncThing()
//   .catch(function (error) {
//     console.log('oh no', error);
//   })
//   .then(function () {
//     console.log('carry on');
//   });

// Promise.resolve()
//   .catch(function (error) {
//     console.log('oh no ', error);
//   })
//   .then(function () {
//     console.log('carry on');
//   });

// const someAsyncThing = function () {
//   return new Promise(function (resolve, reject) {
//     resolve(x + 2);
//   });
// };

// someAsyncThing()
//   .then(function () {
//     return someAsyncThing();
//   })
//   .catch(function (error) {
//     console.log('on no', error);
//     y + 2;
//   })
//   .then(function () {
//     console.log('carry on');
//   });

// someAsyncThing().then(function() {
//   return someAsyncThing()
// }).catch(function(error) {
//   console.log('oh no ', error);
//   y + 2
// }).catch(function(error) {
//   console.log('carry on', error);
// })

// note 5.Promise.prototype.finally()
// promise.finally(() => {
//   console.log();
// })

// promise.then(
//   (result) => {
//     return result;
//   },
//   (error) => {
//     return error;
//   }
// );

// Promise.prototype.finally = function (callback) {
//   let P = this.constructor;
//   return this.then(
//     (value) => P.resolve(callback()).then(() => value),
//     (reason) =>
//       P.resolve(callback()).then(() => {
//         throw reason;
//       })
//   );
// };

// const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
//   return getJSON('/post/' + id + '.json');
// });

// Promise.add(promises)
//   .then(function (posts) {})
//   .catch(function (reason) {});

// const databasePromise = connectDatabase();
// const booksPromise = databasePromise.then(findAllBooks);
// const userPromise = databasePromise.then(getCurrentUser);
// Promise.all([booksPromise, userPromise]).then(([books, user]) =>
//   pickTopRecommentdations(books, user)
// );

// const p1 = new Promise((resolve, reject) => {
//   resolve('hello');
// })
//   .then((result) => result)
//   .catch((e) => e);

// const p1 = new Promise((resolve, reject) => {
//   resolve('hello');
// }).then((result) => result);

// const p2 = new Promise((resolve, reject) => {
//   throw new Error('报错了');
// })
//   .then((result) => result)
//   .catch((e) => e);

// Promise.all([p1, p2])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => console.log(e));

// const p1 = new Promise((resolve, reject) => {
//   resolve('hello');
// }).then((result) => result);

// const p2 = new Promise((resolve, reject) => {
//   throw new Error('报错了');
// }).then((result) => result);

// Promise.all([p1, p2])
//   .then((result) => console.log(result))
//   .catch((e) => console.log(e));

// const p = Promise.race([
//   fetch('/resource-that-may-take-a-while'),
//   new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       reject(new Error('request timeout'));
//     }, 5000);
//   }),
// ]);

// p.then(console.log).catch(console.error);

// const promises = [fetch('/api-1'), fetch('/api-2'), fetch('/api-3')];

// await Promise.allSettled(promises);
// removeLoadingIndicator()

// const resolved = Promise.resolve(42);
// const rejected = Promise.reject(-1);
// const allSettledPromise = Promise.allSettled([resolved, rejected]);
// allSettledPromise.then(function (results) {
//   console.log(results);
// });

// const promises = [fetch('index.html'), fetch('https://does-not-exist/')];
// const results = await Promise.allSettled(promises);

// const successfulPromises = results.filters((p) => p.status === 'fulfilled');
// const errors = results.filters((p) => p.status === 'rejected').map((p) => p.reason);

// const urls = [];
// const requests = urls.map((x) => fetch(x));
// try {
//   await Promise.all(requests);
//   console.log('所有请求都成功!');
// } catch {
//   console.log('至少一个请求失败,其他请求可能还没结束!');
// }

// const promises = [
//   fetch('/endpoint-a').then(() => 'a'),
//   fetch('/endpoint-b').then(() => 'b'),
//   fetch('/endpoint-c').then(() => 'c'),
// ];

// try {
//   const first = await Promise.any(promises);
//   console.log(first);
// } catch (error) {
//   console.log(error);
// }

// new AggregateError() extends Array -> AggregateError

// const err = new AggregateError();
// err.push(new Error("first error"));
// err.push(new Error("second error"));
// throw err;

// Promise.any(promises).then(
//   (first) => {
//     // Any of the promises was fulfilled
//   },
//   (error) => {
//     // All of the promises were rejected
//   }
// );

// var resolved = Promise.resolve(42);
// var rejected = Promise.reject(-1);
// var alsoRejected = Promise.reject(Infinity);

// Promise.any([resolved, rejected, alsoRejected]).then(function (result) {
//   console.log(result);
// });

// Promise.any([rejected, alsoRejected]).catch(function (results) {
//   console.log(results);
// });

// let thenable = {
//   then: function(resolve, reject) {
//     resolve(42)
//   }
// }

// let p1 = Promise.resolve(thenable)

// const p = Promise.resolve('hello')
// p.then(function(s) {
//   console.log(s);
// })

// setTimeout(() => {
//   console.log('three');
// }, 0);

// Promise.resolve().then(function () {
//   console.log('two');
// });

// console.log('one');

// const p = Promise.reject('出错了');
// const p = new Promise((resolve, reject) => reject('出错了'));

// p.then(null, function(s) {
//   console.log(s);
// })

// const thenable = {
//   then(resolve, reject) {
//     reject('出错了');
//   },
// };

// Promise.reject(thenable).catch(e => {
//   console.log(e === thenable);
// })

// function getFoo() {
//   return new Promise(function (resolve, reject) {
//     resolve('foo');
//   });
// }

// const g = function* () {
//   try {
//     const foo = yield getFoo();
//     console.log(foo);
//   } catch (e) {
//     console.log(e);
//   }
// };

// function run(genertator) {
//   const it = genertator();
//   function go(result) {
//     if (result.done) return result.value;
//     return result.value.then(
//       function (value) {
//         return go(it.next(value));
//       },
//       function (error) {
//         return go(it.throw(error));
//       }
//     );
//   }

//   go(it.next());
// }

// run(g);

// const f = () => console.log('now');
// Promise.resolve().then(f);
// console.log('next');

// const f = () => {
//   console.log('now');
// };
// (async () => f())();
// console.log('next');

// (async () => f())().then().catch()

// const f = () => console.log('now');
// (() => new Promise((resolve) => resolve(f())))();
// console.log('next');

// const f = () => console.log('now');
// Promise.try(f);
// console.log('next');

// function getUsername(userId) {
//   return database.users.get({ id: userid }).then(function (user) {
//     return user.name;
//   });
// }

// database.users
//   .get({ id: userId })
//   .then(function () {})
//   .catch(function () {});

// try {
//   database.users
//     .get({ id: userId })
//     .then(function () {})
//     .catch(function () {});
// } catch (e) {}

// Promise.try(() => database.users.get({ id: userId }))
//   .then(function () {})
//   .catch(function () {});
