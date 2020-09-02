// fs.readFile('/etc/passwd', 'utf-8', function(err, data) {
//   if (err) {
//     throw err
//   }
//   console.log(data);
// })

// var readFile = require('fs-readfile-promise');
// readFile(fileA)
//   .then(function (data) {
//     console.log(data);
//   })
//   .then(function () {
//     return readFile(fileB);
//   })
//   .then(function (data) {
//     console.log(data.toString());
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// function* asyncJob() {
//   // ...其他的代码
//   var f = yield readFile(fileA)
//   // ... 其他的代码
// }

// function* gen(x) {
//   var y = yield x + 2;
//   return y;
// }

// var g = gen(1);
// console.log(g.next());
// console.log(g.next());

// function* gen(x) {
//   try {
//     var y = yield x + 2;
//   } catch (e) {
//     console.log(e);
//   }
//   yield 4;
//   return y;
// }

// var g = gen(1);
// g.next()
// g.throw('出错了')

// var fetch = require('node-fetch');
// function* gen() {
//   var url = 'https://api.github.com/users/github';
//   var result = yield fetch(url);
//   console.log(result.bio);
// }

// var g = gen();
// var result = g.next();
// result.value
//   .then(function (data) {
//     return data.json();
//   })
//   .then(function (data) {
//     g.next(data)
//   });

// tag Thunk 函数
// function f(m) {
//   return m * 2;
// }

// f(x + 5);

// var thunk = function () {
//   return x + 5;
// };

// function f(thunk) {
//   return thunk() * 2;
// }

// fs.readFile(fileName, callback);

// var Thunk = function(filename) {
//   return function(callback) {
//     return fs.readFile(filename, callback)
//   }
// }

// var readFileThunk = Thunk(fileName);
// readFileThunk(callback)

// var Thunk = function (fn) {
//   return function () {
//     var args = Array.prototype.slice.call(arguments);
//     return function (callback) {
//       args.push(callback);
//       console.log(this);
//       return fn.apply(this, args);
//     };
//   };
// };

// var readFileThunk = Thunk(function () {
//   console.log('name');
// });
// readFileThunk('hello.txt')(function() {
//   console.log('成功!');
// })

// const Thunk = function(fn) {
//   return function (...args) {
//     return function (callback) {
//       return fn.call(this, ...args, callback)
//     }
//   }
// }

// var thunkify = require('thunkify');
// var fs = require('fs');
// var read = thunkify(fs.readFile);
// read('package.json')(function(err, str) {

// })

function thunkify(fn) {
  return function () {
    var args = new Array(arguments.length);
    var ctx = this;
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return function (done) {
      var called;
      args.push(function () {
        if (called) return;
        called = true;
        console.log(arguments);
        done.apply(null, arguments);
      });

      try {
        fn.apply(ctx, args);
      } catch (e) {
        done(e);
      }
    };
  };
}

// function f(a, b, callback) {  
//   var sum = a + b;
//   callback(sum)
//   callback(sum)
// }

// var ft = thunkify(f)
// var print = console.log.bind(console)

// ft(1, 2)(print)

// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// var g = gen();
// var res = g.next();

// while(!res.done) {
//   console.log(res.value);
//   res = g.next()
// }

// var fs = require('fs');
// var readFileThunk = thunkify(fs.readFile)

// var gen = function* () {
//   var r1 = yield readFileThunk('src/a.txt')
//   console.log(r1.toString());
//   var r2 = yield readFileThunk('src/b.txt')
//   console.log(r2.toString());
// }

// var g = gen();
// var r1 = g.next()
// r1.value(function (err, data) {
//   if (err) throw err;
//   var r2 = g.next(data);
//   r2.value(function(err, data) {
//     if (err) throw err;
//     g.next(data)
//   })
// })

// note thunk start
// var fs = require('fs');
// var readFileThunk = thunkify(fs.readFile)

// var gen = function* () {
//   var r1 = yield readFileThunk('src/a.txt')
//   console.log(r1.toString());
//   var r2 = yield readFileThunk('src/b.txt')
//   console.log(r2.toString());
// }

// function run (fn) {
//   var gen = fn();

//   function next(err, data) {
//     var result = gen.next(data);
//     if (result.done) return;
//     result.value(next)
//   }

//   next()
// }

// run(gen)

// note thunk end