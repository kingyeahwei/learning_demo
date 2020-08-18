// 正则中引用
// const RE_TWICE = /^(?<word>[a-z]+)!\k<word>$/;
// console.log(RE_TWICE.test('abc!abc'));
// console.log(RE_TWICE.test('abc!ab'));

// const RE_TWICE = /^(?<word>[a-z]+)!\1$/;
// console.log(RE_TWICE.test('abc!abc'));
// console.log(RE_TWICE.test('abc!ab'));

// const RE_TWICE = /^(?<word>[a-z]+)!\k<word>!\1$/;
// console.log(RE_TWICE.test('abc!abc!abc'));
// console.log(RE_TWICE.test('abc!abc!ab'));

// 结构赋值和替换
// let {groups: {one, two}} = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar');
// console.log(one)
// console.log(two)
//
// let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
// console.log('2015-01-01'.replace(re, '$<day>/$<month>/$<year>'));

// let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u
// let str = '2015-01-02'.replace(re, (
//     matched,
//     capture1,
//     capture2,
//     capture3,
//     position,
//     S,
//     groups
// ) => {
//     let {day, month, year} = groups;
//     return `${day}/${month}/${year}`;
// })
//
// console.log(str)

// 具名组匹配
// const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/
// let matchObj = RE_DATE.exec('1990-12-31');
// let year = matchObj[1];
// let month = matchObj[2];
// let day = matchObj[3];
// console.log(year)
// console.log(month)
// console.log(day)

// const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
// const matchObj = RE_DATE.exec('1999-12-31');
// console.log(matchObj.groups.year);
// console.log(matchObj.groups.month)
// console.log(matchObj.groups.day);

// const re_opt_a = /^(?<as>a+)?$/;
// const matchObj = re_opt_a.exec('');
// console.log(matchObj)
// console.log(matchObj.groups.as);
// console.log('as' in matchObj.groups);
