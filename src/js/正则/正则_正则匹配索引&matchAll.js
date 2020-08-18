// const  text = 'zabbcdef'
// const re = /ab/;
// const result = re.exec(text);
// console.log(result.index)
// console.log(result.indices)

// const text = 'zabbcdef'
// const re = /ab+(cd)/;
// const result = re.exec(text)
// console.log(result.indices)

// const text = 'zabbcdef'
// const re = /ab+(cd(ef))/
// const result = re.exec(text)
// console.log(result.indices);

// const text = 'zabbcdef'
// const re = /ab+(?<Z>cd)/;
// const result = re.exec(text);
// console.log(result.indicies.groups)

// String.prototype.matchAll()
// var regexp = /t(e)(st(\d?))/g
// var string = 'test1test2test3'
// var matches = [];
// var match;
// while (match = regexp.exec(string)) {
//     matches.push(match)
// }
// console.log(matches)

const string = 'test1test2test3'
const regexp = /t(e)(st(\d?))/g
// for (const match of string.matchAll(regexp)) {
//     console.log(match)
// }

console.log([...string.matchAll(regexp)])
console.log(Array.from(string.matchAll(regexp)));


