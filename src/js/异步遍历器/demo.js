// const asyncIterable = createAsyncIterable(['a', 'b']);
// const asyncIterator = asyncIterable[Symbol.asyncIterator]();

// asyncIterator
//   .next()
//   .then((iterResult1) => {
//     console.log(iterResult1);
//     return asyncIterator.next();
//   })
//   .then((iterResult2) => {
//     console.log(iterResult2);
//     return asyncIterator.next();
//   })
//   .then((iterResult3) => {
//     console.log(iterResult3);
//   });

// async function f() {
//   const asyncIterable = createAsyncIterable(['a', 'b']);
//   const asyncIterator = asyncIterable[Symbol.asyncIterator]();
//   console.log(await asyncIterator.next());
//   console.log(await asyncIterator.next());
//   console.log(await asyncIterator.next());
// }

// const asyncIterable = createAsyncIterable(['a', 'b']);
// const asyncIterator = asyncIterable[Symbol.asyncIterator]();
// const [{ value: v1 }, { value: v2 }] = await Promise.all([
//   asyncIterator.next(),
//   asyncIterator.next(),
// ]);

// console.log(v1, v2);

// async function runner() {
//   const writer = openFile('someFile.txt');
//   writer.next('hello');
//   writer.next('world');
//   await writer.return();
// }

// runner()

// async function f() {
//   for await (const x of createAsyncIterable(['a', 'b'])) {
//     console.log(x);
//   }
// }

// let body = '';
// async function f() {
//   for await (const data of req) {
//     body += data;
//   }
//   const parsed = JSON.parse(body)
//   console.log('got', parsed);
// }

// async function xxx() {
//   try {
//     for await (const x of createRejectingIterable()) {
//       console.log(x);
//     }
//   } catch (e) {
//     console.error(e);
//   }
// }

// (async function () {
//   for await (const x of ['a', 'b']) {
//     console.log(x);
//   }
// })();

// const fs = require('fs');

// function main(inputFilePath) {
//   const readStream = fs.createReadStream(inputFilePath, {
//     encoding: 'utf8',
//     highWaterMark: 1024
//   });
//   readStream.on('data', (chunk) => {
//     console.log('>>>' + chunk);
//   })

//   readStream.on('end', () => {
//     console.log('### DONE ###');
//   })
// }

// async function main(inputFilePath) {
//   const readStream = fs.createReadStream(inputFilePath, {
//     encoding: 'utf8',
//     highWaterMark: 1024
//   })

//   for await (const chunk of readStream) {
//     console.log('>>>' + chunk);
//   }

//   console.log('### DONE ###');

// }

// async function* gen() {
//   yield 'hello';
// }

// const genObj = gen();
// genObj.next().then(x => console.log(x))

// function* map(iterable, func) {
//   const iter = iterable[Symbol.iterator]();
//   while(true) {
//     const {value, done} = iter.next()
//     if (done) break;
//     yield func(value);
//   }
// }

// async function* map(iterable, func) {
//   const iter = iterable[Symbol.asyncIterator]();
//   while(true) {
//     const {value, done} = await iter.next();
//     if (done) {
//       break;
//     }
//     yield func(value);
//   }
// }

// async function* readLines(path) {
//   let file = await fileOpen(path);
//   try {
//     while(!file.EOF) {
//       yield await file.readLine();
//     }
//   } finally {
//     await file.close();
//   }
// }

// (async function(filePath) {
//   for await (const line of readLine(filePath)) {
//     console.log(line);
//   }
// })()

// async function* prefixLines(asyncIterable) {
//   for await (const line of asyncIterable) {
//     yield '> ' + line;
//   }
// }

// function fetchRandom() {
//   const url = 'https://www.random.org/decimal-franctions/' +
//   '?num=1&dec=10&col=1&format=plain&rnd=new';
//   return fetch(url);
// }

// async function* asyncGenerator() {
//   console.log('Start');
//   const result = await fetchRandom();
//   yield 'Result: ' + await result.text();
//   console.log('Done');
// }

// const ag = asyncGenerator();
// ag.next().then(({value, done}) => {
//   console.log(value);
// })

// return new Promise((resolve, reject) => {
//   fetchRandom()
//   .then(result => result.text())
//   .then(result => {
//     resolve({
//       value: 'Result:' + result,
//       done: false
//     })
//   })
// })

// async function* asyncGenerator() {
//   throw new Error('Problem!');
// }

// asyncGenerator()
//   .next()
//   .catch((err) => console.log(err));

// async function takeAsync(asyncIterable, count = Infinity) {
//   const result = [];
//   const iterator = asyncIterable[Symbol.asyncIterator]();
//   while (result.length < count) {
//     const { value, done } = await iterator.next();
//     if (done) break;
//     result.push(value);
//   }
// }

// async function f() {
//   async function* gen() {
//     yield 'a';
//     yield 'b';
//     yield 'c';
//   }

//   return await takeAsync(gen());
// }

// f().then(function (result) {
//   console.log(result);
// })

// async function* createAsyncIterable(syncIterable) {
//   for (const elem of syncIterable) {
//     yield elem;
//   }
// }

async function* gen1() {
  yield 'a';
  yield 'b';
  return 2;
}

async function* gen2() {
  const result = yield* gen1();
}

(async function () {
  for await (const x of gen2()) {
    console.log(x);
  }
})()