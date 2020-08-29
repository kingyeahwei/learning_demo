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

// note Promise.prototype.finally()
