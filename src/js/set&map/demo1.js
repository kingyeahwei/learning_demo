// const s = new Set();
// [2, 3, 5, 4, 5, 2, 2].forEach((x) => s.add(x));
// for (let i of s) {
//   console.log(i);
// }



// const set = new Set([1, 2, 3, 4, 4])
// console.log([...set]);

// const items = new Set([1, 2, 3, 4, 5, 5, 5, 5])
// console.log(items.size);

// const set = new Set(document.querySelectorAll('div'))
// console.log(set.size);

// const set = new Set()
// document.querySelectorAll('div').forEach(div => set.add(div))

// console.log(set.size);
// let array = [1, 2, 3, 3, 4];
// console.log([...new Set(array)])

// console.log([...new Set('ababbbc')].join(''))

// let set = new Set()
// let a = NaN
// let b = NaN;
// set.add(a)
// set.add(b)
// console.log(set);

// let set = new Set();
// set.add({})
// console.log(set.size);
// set.add({})
// console.log(set.size);

// let s = new Set()
// s.add(1).add(2).add(2);
// console.log(s.size);
// console.log(s.has(1));
// console.log(s.has(2));
// console.log(s.has(3));
// s.delete(2)
// console.log(s.has(2));

// 对象的写法
// const properties = {
//   'width': 1,
//   'height': 1
// }
// if(properties[someName]) {

// }

// set 的写法
// const properties = new Set()
// properties.add('width')
// properties.add('height')
// if(properties.has(someName)) {

// }
// const items = new Set([1, 2, 3, 4, 5])
// const array = Array.from(items)
// console.log(array);

// function dedupe(array) {
//   return Array.from(new Set(array))
// }
// console.log(dedupe([1, 2, 3, 4, 2, 3]));

// let set = new Set(['red', 'green', 'blue']);
// for (let item of set.keys()) {
//   console.log(item);
// }
// for (const item of set.values()) {
//   console.log(item);
// }
// for (const item of set.entries()) {
//   console.log(item);
// }

// let set = new Set(['red', 'green', 'blue'])
// for (const x of set) {
//   console.log(x);
// }

// let set = new Set(['red', 'green', 'blue']);
// set.forEach((value, key) => console.log(key + ': ' + value))

// let set = new Set(['red', 'green', 'blue'])
// let arr = [...set]
// console.log(arr);

// let arr = [3, 5, 2, 2, 5, 5]
// let unique = [...new Set(arr)]
// console.log(unique);

// let set = new Set([1, 2, 3]);
// console.log(new Set([...set].map(x => x * 2)))

// let set = new Set([1, 2, 3, 4, 5]);
// console.log(new Set([...set].filter(x => (x % 2 == 0))));


// let a = new Set([1, 2, 3])
// let b = new Set([4, 3, 2])
// let union = new Set([...a, ...b])
// console.log(union);

// let intersect = new Set([...a].filter(x => b.has(x)))
// console.log(intersect);

// let difference = new Set([...a].filter(x => !b.has(x)))
// console.log(difference);

// let set = new Set([1, 2, 3])
// set = new Set([...set].map(val => val * 2))
// console.log(set);

// let set = new Set([1, 2, 3]);
// set = new Set(Array.from(set, val => val * 2))
// console.log(set);

// note weakset
// const ws = new WeakSet();
// ws.add(1)
// ws.add(Symbol())
// const a = [[1, 2], [3, 4]];
// const ws = new WeakSet(a)
// console.log(ws);

// const b = [3, 4];
// const ws = new WeakSet(b)

// const ws = new WeakSet()
// const obj = {}
// const foo = {}
// ws.add(window)
// ws.add(obj)
// console.log(ws.has(window));
// console.log(ws.has(foo));
// ws.delete(window)
// console.log(ws.has(window));

// const ws = new WeakSet()
// ws.add({})
// ws.add({})
// console.log(ws.size);
// console.log(ws.forEach);
// ws.forEach(function(item) {console.log('weakSet has' + item);})

// const foos = new WeakSet()
// class Foo {
//   constructor() {
//     foos.add(this)
//   }
//   method() {
//     if(!foos.has(this)) {
//       throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用!')
//     }
//   }
// }

// note map
// const m = new Map();
// const o = {p: 'Hello World'};
// m.set(o, 'content')
// console.log(m.get(o));
// console.log(m.has(o))
// m.delete(o)
// console.log(m.has(o));

// const map = new Map([
//   ['name','张三'],
//   ['title', 'Author']
// ])
// console.log(map.size);
// console.log(map.has('name'))
// console.log(map.get('name'));
// console.log(map.has('title'));
// console.log(map.get('title'));

// const items = [
//   ['name', '张三'],
//   ['title', 'Author']
// ]
// const map = new Map()
// items.forEach(([key, value]) => map.set(key, value))

// console.log(map);

// const set = new Set([
//   ['foo', 1],
//   ['bar', 2]
// ])
// const m1 = new Map(set)
// // console.log(m1.get('foo'));
// const m2 = new Map([['baz', 3]])
// const m3 = new Map(m2)
// console.log(m3);

// const map = new Map();
// map.set(1, 'aaa').set(1, 'bbb')
// console.log(map.get(1))

// console.log(new Map().get('adfsfsdf'))

// const map = new Map()
// map.set(['a'], 555)
// console.log(map.get(['a']));

// const map = new Map()
// const k1 = ['a'];
// const k2 = ['a'];
// map.set(k1, 111).set(k2, 222)
// console.log(map.get(k1));
// console.log(map.get(k2));

// let map = new Map()
// map.set(-0, 123)
// console.log(map.get(+0))
// map.set(true, 1)
// map.set('true', 2)
// console.log(map.get(true));
// map.set(undefined, 3)
// map.set(null, 4)
// console.log(map.get(undefined));
// map.set(NaN, 123)
// console.log(map.get(NaN))

// note size
// const map = new Map();
// map.set('foo', true);
// map.set('bar', false);
// console.log(map.size);

// const m = new Map();
// m.set('edition', 6);
// m.set(262, 'standard');
// m.set(undefined, 'nah');
// console.log(m);

// let map = new Map();
// map.set(1, 'a')
// .set(2, 'b')
// .set(3, 'c')
// console.log(map);

// const m = new Map()
// const hello = function() {console.log('hello');};
// m.set(hello, 'Hello ES6!')
// console.log(m.get(hello));

// const m = new Map();
// m.set('edition', 6);
// m.set(262, 'standard');
// m.set(undefined, 'nah');
// console.log(m.has('edition'));
// console.log(m.has('years'));
// console.log(m.has(262));
// console.log(m.has(undefined));

// const m = new Map();
// m.set(undefined, 'nah');
// console.log(m.has(undefined))
// m.delete(undefined)
// console.log(m.has(undefined));

// let map = new Map();
// map.set('foo', true);
// map.set('bar', false)
// console.log(map.size)
// map.clear()
// console.log(map.size);

// const map = new Map([
//   ['F', 'no'],
//   ['T', 'yes']
// ])
// for (const key of map.keys()) {
//   console.log(key);
// }
// for (const value of map.values()) {
//   console.log(value);
// }
// for (const item of map.entries()) {
//   console.log(item[0], item[1]);
// }

// for (const [key, value] of map.entries()) {
//   console.log(key, value);
// }

// for (const [key, value] of map) {
//   console.log(key, value);
// }
// console.log(map[Symbol.iterator] === map.entries);

// const map = new Map([
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three']
// ])
// console.log([...map.keys()]);
// console.log([...map.values()]);
// console.log([...map.entries()]);
// console.log([...map]);

// const map0 = new Map().set(1, 'a').set(2, 'b').set(3, 'c')
// const map1 = new Map([...map0].filter(([k, v]) => k < 3))
// console.log([...map0].filter(([key, value]) => key < 3));
// const map2 = new Map([...map0].map(([k, v]) => [k * 2, '_' + v]))
// console.log(map2);

// const map = new Map().set(1, 'a').set(2, 'b').set(3, 'c');
// map.forEach(function(value, key, map) {
//   console.log("Key: %s, Value: %s", key, value);
// });
// const map = new Map();
// const reporter = {
//   report: function(key, value) {
//     console.log("Key: %s, Value: %s", key, value);
//   }
// }
// map.forEach(function(value, key, map) {
//   this.report(key, value)
// }, reporter)

// note map转数组
// const myMap = new Map().set(true, 7).set({foo: 3}, ['abc'])
// console.log(...myMap);

// const bb = new Map([
//   [true, 7],
//   [{foo: 3}, ['abc']]
// ])
// console.log(bb);

// function strMapToObj(strMap) {
//   let obj = Object.create(null);
//   for (const [k, v] of strMap) {
//     obj[k] = v;
//   }
//   return obj
// }

// const myMap = new Map().set('yes', true).set('no', false)
// console.log(strMapToObj(myMap));

// let obj = {'a': 1, 'b': 2}
// let map = new Map(Object.entries(obj))
// console.log(map);

function objToStrMap(obj) {
  let strMap = new Map();
  for (const k of Object.keys(obj)) {
    strMap.set(k, obj[k])
  }
  return strMap
}
// console.log(objToStrMap({yes: true, no: false}));

// function strMapToJson(strMap) {
//   return JSON.stringify(strMapToObj(strMap))
// }

// let myMap = new Map().set('yes', true).set('no', false)
// console.log(strMapToJson(myMap))

// function mapToArrayJson(map) {
//   return JSON.stringify([...map])
// }
// let myMap = new Map().set(true, 7).set({foo: 3}, ['abc'])
// console.log(mapToArrayJson(myMap));

// function jsonToStrMap(jsonStr) {
//   return objToStrMap(JSON.parse(jsonStr))
// }

// console.log(jsonToStrMap('{"yes": true, "no": false}'))

// function jsonToMap(jsonStr) {
//   return new Map(JSON.parse(jsonStr))
// }
// console.log(jsonToMap('[[true, 7], [{"foo": 3}, ["abc"]]]'))

// note weakMap
// const wm1 = new WeakMap();
// const key = {foo: 1};
// wm1.set(key, 2)
// console.log(wm1.get(key));

// const map = new WeakMap()
// console.log(map.set(1, 2))

// const k1 = [1, 2, 3]
// const k2 = [4, 5, 6]
// const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']])
// console.log(wm2);
// console.log(wm2.get(k2) )

// const map = new WeakMap();
// map.set(1, 2)
// map.set(Symbol(), 2)
// map.set(null, 3)

// const e1 = document.getElementById('foo')
// const e2 = document.getElementById('bar')
// const arr = [[e1, 'foo 元素'], [e2, 'bar 元素']]
// arr[0] = null
// arr[1] = null
// console.log(arr);

// const wm = new WeakMap();
// const element = document.getElementsByTagName('div');
// wm.set(element, 'some infomation')
// console.log(wm.get(element));

// const wm = new WeakMap();
// let key = {};
// let obj = {foo: 1};
// wm.set(key, obj)
// obj = null
// console.log(wm.get(key));

// const wm = new WeakMap();
// console.log(wm.size)
// console.log(wm.forEach);
// console.log(wm.clear);

// let myWeakmap = new WeakMap();
// myWeakmap.set(document.getElementsByTagName('div'), {timesClicked: 0});
// document.getElementsByTagName('div').addEventListener('click', function () {
//   let logoData = myWeakmap.get(document.getElementsByTagName('div'))
//   logoData.timesClicked++;
// }, false)

// const _counter = new WeakMap();
// const _action = new WeakMap();
// class Countdown {
//   constructor(counter, action) {
//     _counter.set(this, counter)
//     _action.set(this, action)
//   }
//   dec() {
//     let counter = _counter.get(this)
//     if (counter < 1) {
//       return;
//     }
//     counter--;
//     _counter.set(this, counter)
//     if (counter ===0) {
//       _action.get(this)();
//     }
//   }
// }

// const c = new Countdown(2, () => {console.log('DONE');});
// c.dec()
// c.dec()


