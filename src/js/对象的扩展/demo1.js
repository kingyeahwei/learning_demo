// const foo = 'bar'
// const baz = {foo}
// console.log(baz);
// const baz = {foo: foo}
// console.log(baz);
// function f(x, y) {
//   return {x, y}
// }

// function f(x, y) {
//   return {x: x, y: y}
// }

// console.log(f(1, 2))

// const o = {
//   method() {
//     return 'hello world'
//   }
// }

// const o = {
//   method: function() {
//     return 'hello world'
//   }
// }

// let birth = '2000/01/01'

// const person = {
//   name: '张三',
//   birth,
//   hello() {
//     console.log('我的名字是', this.name);
//   }
// }

// console.log(person);

// function getPoint() {
//   const x = 1;
//   const y = 2;
//   return {x, y}
// }

// console.log(getPoint());

// let ms = {}

// function getItem(key) {
//   return key in ms ? ms[key] : null;
// }

// function setItem(key, value) {
//   ms[key] = value
// }

// function clear () {
//   ms = {}
// }

// module.exports = {
//   getItem,
//   setItem,
//   clear
// }

// const cart = {
//   _wheels: 4,
//   get wheels() {
//     return this._wheels;
//   },
//   set wheels(value) {
//     if (value < this._wheels) {
//       throw new Error('数值太小了!');
//     }
//     this._wheels = value;
//   } 
// }

// let user = {
//   name: 'test'
// }
// let foo = {
//   bar: 'baz'
// }
// console.log(user, foo);

// console.log({user, foo});

// const obj = {
//   f() {
//     this.foo = 'bar'
//   }
// }

// new obj.f()
// obj = {}
// obj.foo = true;
// obj['a' + 'bc'] = 123;
// console.log(obj);

// var obj = {
//   foo: true,
//   abc: 123
// }

// let propKey = 'foo'
// let obj = {
//   [propKey]: true,
//   ['a' + 'bc']: 123
// }
// console.log(obj);

// let lastWord = 'last word';

// const a = {
//   'first word': 'hello',
//   [lastWord]: 'world'
// }
// console.log(a);
// console.log(a['first word']);
// console.log(a[lastWord]);
// console.log(a['last word']);

// let obj = {
//   ['h' + 'ello']() {
//     return 'hi'
//   }
// }
// console.log(obj.hello());

// const foo = 'bar'
// const baz = {[foo]: 'abc'}
// console.log(baz);

// const keyA = {a: 1}
// const keyB = {b: 2}
// const myObject = {
//   [keyA]: 'valueA',
//   [keyB]: 'valueB'
// }

// console.log(myObject);

// const person = {
//   sayName() {
//     console.log('hello!');
//   }
// }

// console.log(person.sayName.name);

// const obj = {
//   get foo() {},
//   set foo(x) {}
// };

// // obj.foo.name
// // TypeError: Cannot read property 'name' of undefined

// const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');

// console.log(descriptor.get.name) // "get foo"
// console.log(descriptor.set.name) // "set foo"

// console.log((new Function()).name)

// var doSomething = function() {

// }

// console.log(doSomething.bind().name)

// const key1 = Symbol('description')
// const key2 = Symbol();

// let obj = {
//   [key1]() {},
//   [key2]() {}
// };

// console.log(obj[key1].name)
// console.log(obj[key2].name);

// let obj = {foo: 123}
// console.log(Object.getOwnPropertyDescriptor(obj, 'foo'))

// console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable)

// console.log(Object.getOwnPropertyDescriptor([], 'length').enumerable)

// console.log(Object.getOwnPropertyDescriptor(class {foo() {}}.prototype, 'foo').enumerable)

// console.log(Reflect.ownKeys({[Symbol()]: 0, b: 0, 10: 0, 2: 0, a: 0}))

// const proto = {
//   foo: 'hello'
// }

// const obj = {
//   foo: 'world',
//   find() {
//     return super.foo
//   }
// }

// Object.setPrototypeOf(obj, proto)
// console.log(obj.find());

// const obj = {
//   foo: super.foo
// }

// const obj = {
//   foo: () => {
//     return super.foo
//   }
// }

// const obj = {
//   foo: function() {
//     return super.foo
//   }
// }

// const proto = {
//   x: 'hello',
//   foo() {
//     console.log(this.x);
//   }
// }

// const obj = {
//   x:'world',
//   foo() {
//     super.foo()
//   }
// }

// Object.setPrototypeOf(obj, proto)
// obj.foo()

// let {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4}
// console.log(x);
// console.log(y);
// console.log(z);

// let {...z} = null
// console.log(z);
// let {...z} = undefined;
// console.log(z);
// const someObject = {}
// let {...x, y, z} = someObject
// let obj = {a: {b: 1}}
// let {...x} = obj
// obj.a.b = 2;
// console.log(x.a.b);

// let o1 = {a: 1}
// let o2 = {b: 2}
// o2.__proto__ = o1;
// let {...o3} = o2
// console.log(o3);
// console.log(o3.a);

// const o = Object.create({x: 1, y: 2});
// o.z = 3;
// let {x, ...newObj} = o;

// let {x, ...{y, z}} = o

// function baseFunction({a, b}) {

// }
// function wrapperFunction({x, y, ...restConfig}) {
//   return baseFunction(restConfig)
// }

// let z = {a: 3, b: 4}
// let n = {...z}
// console.log(n);

// let foo = {...['a', 'b', 'c']}
// console.log(foo);

// console.log({...{}, a: 1})

// console.log({...1})
// console.log({...undefined});
// console.log({...null});
// console.log({...true});
// console.log({...'hello'});
// let aClone = {...a}
// Object.assign({}, a)

// 完整的克隆一个对象
// const clone1 = {
//   __proto__: Object.getPrototypeOf(obj),
//   ...obj
// }

// 写法二
// const clone2 = Object.assign(
//   Object.create(Object.getPrototypeOf(obj)),
//   obj
// )

// 写法三
// const clone3 = Object.create(
//   Object.getPrototypeOf(obj), 
//   Object.getOwnPropertyDescriptors(obj)
// )

// let ab = {...a, ...b}
// let ob = Object.assign({}, a, b)

// let aWithOverrides = {...a, x: 1, y: 2};

// let aWithOverrides = {...a, ...{x: 1, y: 2}}

// let x = 1, y = 2, aWithOverrides = {...a, x, y}

// let aWithOverrides = Object.assign({}, a, {x: 1, y: 2})

// let newVersion = {
//   ...previousVersion,
//   name: 'New Name'
// }

// let aWithDefaults = {x: 1, y: 2, ...a};
// let aWithDefaluts = Object.assign({}, {x: 1, y: 2}, a)
// let aWithDefaluts = Object.assign({x: 1, y: 2}, a)

// const obj = {
//   ...(x > 1 ? {a: 1} : {}),
//   b: 2
// }
// let a = {
//   get x() {
//     throw new Error('not throw yet')
//   }
// }

// let aWithXGetter = {...a}

// const firstName = (message && message.body && message.body.user && message.body.user.firstName) || 'default'

// const fooInput = myForm.querySelector('input[name=foo]')
// const fooValue = fooInput ? fooInput.value : undefined;
// let message = {};
// const firstName = message?.body?.user?.firstName || 'default'
// console.log(firstName);

// NodeIterator.return?.()

// let hex = '#C0FFEE'.match(/#([A-Z]+)/i)?.[1]
// console.log(hex);

// a?.b
// a === null ? undefined : a.b

// a?.[x]
// a === null ? undefined : a[x]

// a?.b()
// a === null ? undefined : a.b()

// a?.()

// a === null ? undefined : a()

// a?.[++x]
// a === null ? undefined : a[++x]

// delete a?.b

// a === null ? undefined : delete a.b

// (a?.b).c
// (a === null ? undefined : a.b).c

// new a?.()

// new a?.b()

// const headerText = response.settings.headerText ?? 'hello, world'
// const animationDuration = response.settings.animationDuration ?? 300
// const showSplashScreen = response.settings.showSplashScreen ?? true

// const animationDuration = response.settings?.animationDuration ?? 300

// function Component (pros) {
//   const enable = props.enableed ?? true;
// }

// function Component(props) {
//   const {enabled: enable = true} = props;
// }

// (lhs && middle) ?? rhs;
// lhs && (middle ?? rhs);
// (lhs ?? middle) && rhs




