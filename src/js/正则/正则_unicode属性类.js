// const regexpGreekSymbol = /\p{Script=Greek}/u
// console.log(regexpGreekSymbol.test('π'));
//
// const regexp = /^\p{Decimal_Number}+$/u;
// console.log(regexp.test('1234567'));
//
// const regexp1 = /^\p{Number}+$/u
// console.log(regexp1.test('²³¹¼½¾'));
// console.log(regexp1.test('㉛㉜㉝'));
// console.log(regexp1.test('ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ'));
//

// 先行断言
// console.log(/\d+(?=%)/.exec('100% of US presidents have been male'));
// console.log(/\d+(?!%)/.exec('that’s all 44 of them'));
// 后行断言
// console.log(/(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill'));
// console.log(/(?<!\$)\d+/.exec('it’s is worth about €90'));

// const RE_DOLLAR_PREFIX = /(?<=\$)foo/g;
// console.log('$foo %foo foo'.replace(RE_DOLLAR_PREFIX, 'bar'));
// console.log(/(?<=(\d+)(\d+))$/.exec('1053'));
// console.log(/^(\d+)(\d+)$/.exec('1053'));

// console.log(/(?<=(o)d\1)r/.exec('hodor'));
// console.log(/(?<=\1d(o))r/.exec('hodor'));
