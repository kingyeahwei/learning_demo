// var regexp = new RegExp('xyz', 'i')
// console.log(regexp instanceof RegExp)
// var regexp = new RegExp(/xyz/i);


// let regex = new RegExp(/xyz/ig, 'i');
// console.log(regex)

// console.log('abcabcabc'.match(/abc/g));
//
// console.log('abcabcabc'.replace(/abc/, '---'));
//
// console.log('abcabcabc'.search(/c/g));
// console.log('abcabcabc'.split(/c/));

// 会正常识别utf-16编码
console.log(/^\uD83D/u.test('\uD83D\uDC2A'));
console.log(/^\uD83D/.test('\uD83D\uDC2A'));

// 点字符识别码点大于0xFFFF的字符
let s = '𠮷';
console.log(/^.$/.test(s));
console.log(/^.$/u.test(s));

// unicode字符表示法
console.log(/\u{61}/.test('a'));
console.log(/\u{61}/u.test('a'));
console.log(/\u{20BB7}/u.test('𠮷'));

// 量词正确识别码点大于0xFFFF的字符
console.log(/a{2}/.test('aa'));
console.log(/a{2}/u.test('aa'));
console.log(/𠮷{2}/.test('𠮷𠮷'));
console.log(/𠮷{2}/u.test('𠮷𠮷'));

// 预定义模式
console.log(/^\S$/.test('𠮷'));
console.log(/^\S$/u.test('𠮷'));

function codePointLength(text) {
    var result = text.match(/[\s\S]/gu)
    return (result && result.length) || 0
}

var k = '𠮷𠮷'
console.log(k.length);
console.log(codePointLength(k));

// 识别非规范的字符
// console.log(/[a-z]/i.test('\u212A'));
// console.log(/[a-z]/iu.test('\u212A'));
//
// var m = 'aaa_aa_a';
// var r1 = /a+/g;
// var r2 = /a+/y;
//
// console.log(r1.exec(m));
// console.log(r2.exec(m));
// console.log(r1.exec(m));
// console.log(r2.exec(m));
//
// var mm = 'aaa_aa_a';
// var r = /a+_/y
// console.log(r.exec(mm));
// console.log(r.exec(mm));
//
// const REGEXP = /a/g
// REGEXP.lastIndex = 2;
// const match = REGEXP.exec('xaya');
// console.log(match.index);
// REGEXP.lastIndex = 4;
// console.log(REGEXP.exec('xaya'));

// const REGEXP = /a/y;
// REGEXP.lastIndex = 2;
// console.log(REGEXP.exec('xaya'));
// REGEXP.lastIndex = 3;
// let macth = REGEXP.exec('xaya');
// console.log(macth.index);
// console.log(REGEXP.lastIndex);

// console.log(/b/y.exec('aba'));

// const REGEXP = /a/yg
// console.log('aaxa'.replace(REGEXP, '-'));
//
// console.log('a1a2a3'.match(/a\d/y));
// console.log('a1a2a3'.match(/a\d/gy));

// const TOKEN_Y = /\s*(\+|[0-9]+)\s*/y
// const TOKEN_G = /\s*(\+|[0-9]+)\s*/g
//
// function tokenize(TOKEN_REGEXP, str) {
//     let result = []
//     let match;
//     while (match = TOKEN_REGEXP.exec(str)) {
//         result.push(match[1])
//     }
//     return result
// }
//
// console.log(tokenize(TOKEN_Y, '3 + 4'));
// console.log(tokenize(TOKEN_G, '3 + 4'));
//
// console.log(tokenize(TOKEN_Y, '3x + 4'));
// console.log(tokenize(TOKEN_G, '3x + 4'));

// 是否设置了y修饰符
// var r = /hello\d/y;
// console.log(r.sticky)

// source属性返回正则表达式的正文
// console.log(/abc/ig.source);

// flags属性范围正则表达式的修饰符
// console.log(/abc/ig.flags);

// console.log(/foo.bar/.test('foo\nbar'));
// console.log(/foo[^]bar/.test('foo\nbar'));

// const re = /foo.bar/s
// console.log(re.test('foo\nbar'));
// console.log(re.dotAll);
// console.log(re.flags);
