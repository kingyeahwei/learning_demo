// 扩展运算符
// console.log(...[1, 2, 3]);


// console.log(1, ...[2, 3, 4], 5);
// console.log(...document.querySelectorAll('div'));

// function push(array, ...items) {
//   array.push(...items)
// }

// function add(x, y) {
//   return x + y;
// }

// const numbers = [4, 38]
// add(...numbers)
// console.log('add(...numbers): ', add(...numbers));

// function f(v, w, x, y, z) {}
// const args = [0, 1];
// f(-1, ...args, ...[3])

// let x = 1;
// const arr = [
//   ...(x > 0 ? ['a'] : []),
//   'b'
// ]
// console.log(arr);
// console.log(...[1, 2]);

// function f(x, y, z) {}
// var args = [1, 2, 3];
// f.apply(null, args)

// f(...args)

// console.log(Math.max.apply(null, [14, 3, 77]));
// console.log(Math.max(...[14, 3, 77]))

// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// Array.prototype.push.apply(arr1, arr2)
// console.log(arr1);

// arr1.push(...arr2)
// console.log(arr1);

// let xxx = new (Date.bind.apply(Date, [null, 2015, 1, 1]))
// console.log(xxx);
// console.log(Date.bind instanceof Function);

// let date = new Date(...[2015, 1, 1])

// const a1 = [1, 2]
// const a2 = a1;
// a2[0] = 2
// console.log(a1);

// const a1 = [1, 2];
// const a2 = a1.concat()
// a2[0] = 2;
// console.log(a1);
// console.log(a2);

// const a1 = [1, 2]
// const a2 = [...a1]
// console.log(a2);

// const [...a2] = a1

// console.log(a2);

// concat返回一个新的数组
// const arr1 = ['a', 'b'];
// const arr2 = ['c'];
// const arr3 = ['d', 'e'];
// let xxx = arr1.concat(arr2, arr3)
// console.log(xxx);

// let yyy = [...arr1, ...arr2, ...arr3]
// console.log(yyy);

// const a1 = [{foo: 1}]
// const a2 = [{bar: 2}]
// const a3 = a1.concat(a2)
// const a4 = [...a1, ...a2]

// console.log(a3[0] == a1[0])
// console.log(a4[0] == a1[0]);

// const [first, ...rest] = [1, 2, 3, 4, 5]
// console.log(first);
// console.log(rest);

// const [first, ...rest] = []
// console.log(first);
// console.log(rest);

// const [first, ...rest] = ['foo']
// console.log(first);
// console.log(rest);

// const [...butLast, last] = [1, 2, 3, 4, 5]

// const [first, ...middle, last] = [1, 2, 3, 4, 5]

// console.log([...'hello'])

// console.log('x\uD83D\uDE80y'.length)
// console.log([...'x\uD83D\uDE80y'].length)

// function length(str) {
//   return [...str].length
// }
// console.log(length('x\uD83D\uDE80y'))

// let str = 'x\uD83D\uDE80y';
// console.log(str.split('').reverse().join('')),
// console.log([...str].reverse().join(''))

// let divList = document.querySelectorAll('div');
// let array = [...divList];
// console.log(array);

// Number.prototype[Symbol.iterator] = function*() {
//   let i = 0;
//   let num = this.valueOf();
//   while (i < num) {
//     yield i++;
//   }
// }
// console.log([...5]);

// let arrayLike = {
//   '0': 'a',
//   '1': 'b',
//   '2': 'c',
//   length: 3
// }
// arrayLike[Symbol.iterator] = function* () {
//   yield 0
// }

// let arr = [...arrayLike]
// console.log(arr);

// let map = new Map([
//   [1, "one"],
//   [2, "two"],
//   [3, "three"],
// ]);

// let arr = [...map.keys()]
// console.log(arr);

// const go = function* () {
//   yield 1;
//   yield 2;
//   yield 3;
// };

// console.log([...go()])

// const obj = {
//   a: 1,
//   b: 2
// }
// let arr = [...obj]

// let arrayLike = {
//   '0': 'a',
//   '1': 'b',
//   '2': 'c',
//   length: 3
// }

// var arr1 = [].slice.call(arrayLike)

// var arr2 = Array.from(arrayLike)
// console.log(arr1);
// console.log(arr2);

// let ps = document.querySelectorAll('div');
// let result = Array.from(ps).filter(p => {
//   return p.textContent.length > 100;
// })
// console.log(result);

// function foo() {
//   var args = Array.from(arguments)
//   console.log(args);
// }

// foo(1, 2, 3, 4, 5)
// console.log(Array.from('hello'))

// let namesSet = new Set(['a', 'b'])
// console.log(Array.from(namesSet))

// let arr0 = [{a: 'a'}];
// let arr1 = Array.from(arr0)

// console.log(arr0[0] === arr1[0]);

// console.log(Array.from([1, 2, 3]))

// function foo() {
//   const args = [...arguments];
// }

// console.log(Array.from({length: 3}));

// const toArray = (() => Array.from ? Array.from : obj => [].slice.call(obj))()

// let arr = Array.from([1, 2, 3], (x) => x * x)
// console.log(arr);

// let spans = document.querySelectorAll('span.name')

// let names1 = Array.prototype.map.call(spans, s => s.textContent)

// let names2 = Array.from(spans, s => s.textContent)

// console.log(Array.from([1, , 2, , 3], (n) => n||0))

// function typesOf() {
//   return Array.from(arguments, value => typeof value)
// }

// console.log(typesOf(null, [], NaN))

// let result = Array.from({length: 2}, (item) => 'jack')
// console.log(result);

// function countSymbols(string) {
//   return Array.from(string).length
// }

// let arr = Array.of(3, 11, 8)
// console.log(arr);
// let arr = Array.of(3)
// console.log(arr.length);

// console.log(Array())
// console.log(new Array(3));
// console.log(Array(3, 11, 8));

// console.log(Array.of())
// console.log(Array.of(undefined));
// console.log(Array.of(1));
// console.log(Array.of(1, 2));

// function ArrayOf() {
//   return [].slice.call(arguments);
// }

// console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4))
// console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1));
// let arr = [].copyWithin.call({length: 5, 3: 1}, 0, 3)
// console.log(arr);

// console.log(Array.from({length: 5, 3: 1}))
// console.log([].copyWithin.call(Array.from({length: 5, 3: 1}), 0, 3));

// console.log([].copyWithin.call({length: 5, 3: 1}, 0, 3));

// let i32a = new Int32Array([1, 2, 3, 4, 5])
// console.log(i32a.copyWithin(0, 2))

// console.log([1, 4, -5, 10].find((n) => n < 0))
// let re = [1, 5, 10, 15].find(function(value, index, arr) {
//     return value > 9;
// })
// console.log(re);

// let ind = [1, 5, 10, 15].findIndex(function(value, index, arr) {
//   return value > 9;
// })
// console.log(ind);

// function f(v) {
//   return v > this.age
// }

// let person = {name: 'john', age: 20};

// console.log([10, 12, 26, 15].find(f, person))

// console.log([NaN].indexOf(NaN))
// console.log([NaN].findIndex(y => Object.is(NaN, y)))

// console.log(['a', 'b', 'c'].fill(7))

// console.log(new Array(3).fill(7))

// console.log(['a', 'b', 'c'].fill(7, 1, 2))

// let arr = new Array(3).fill({name: 'mike'})
// arr[0].name = 'Ben';
// console.log(arr);

// let arr = new Array(3).fill([])
// console.log(arr);
// arr[0].push(5)
// console.log(arr);

// for (let index of ['a', 'b'].keys()) {
//   console.log(index);
// }

// for (const elem of ['a', 'b'].values()) {
//   console.log(elem);
// }

// for (const [index, elem] of ['a', 'b'].entries()) {
//   console.log(index, elem);
// }
 
// let letter = ['a', 'b', 'c']
// let entries = letter.entries();
// console.log(entries.next().value);
// console.log(entries.next().value);
// console.log(entries.next().value);

// let re = [1, 2, [3, 4]].flat()
// console.log(re);

// let re =  [1, 2, [3, [4, 5]]].flat()
// console.log(re);

// let re = [1, 2, [3, [4, 5]]].flat(2)
// console.log(re);

// let re = [1, [2, [3]]].flat(Infinity)
// console.log(re);

// let result =  [1, 2, , 4, 5].flat()
// console.log(result);
// let re = [2, 3, 4].flatMap(x => [x, x * 2])
// console.log(re);

// let re = [1, 2, 3, 4].flatMap(x => [[x * 2]])
// console.log(re);

// todo 数组的空位

// console.log(0 in [undefined, undefined, undefined])
// console.log(0 in [,,,]);

// forEach 会跳过空位
// [, 'a'].forEach((x, i) => console.log(i))
// filter  会跳过空位
// console.log(['a', , 'b'].filter(x => true))
// every会跳过空位
// console.log([, 'a'].every(x => x ==='a'))
// reduce 会跳过空位
// console.log([1, , 2].reduce((x, y) => { return x + y}, 0))
// some 会跳过空位
// console.log([, 'a'].some(x => x !== 'a'))

// map 方法会保留空位
// console.log([, 'a'].map(x => 1))

// console.log([, 'a', undefined, null].join('#'));
// console.log([,'a', undefined, null].toString())

// console.log(Array.from(['a', , 'b']))
// console.log([...['a',, 'b']]);
// console.log([, 'a', 'b', ,].copyWithin(2, 0))

// console.log(new Array(3).fill('a'))

// let arr = [, ,]
// forof 空位不会被忽略的
// for (const i of arr) {
//   console.log(1);
// }
// arr.map(function() {console.log(1);})

// console.log([...[, 'a'].entries()])
// console.log([...[, 'a'].keys()]);
// console.log([...[, 'a'].values()]);
// console.log([, 'a'].find(x => true))
// console.log([, 'a'].findIndex(x => true))
// todo 排序稳定性

