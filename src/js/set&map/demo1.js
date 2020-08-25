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






