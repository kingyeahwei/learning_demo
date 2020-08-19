// console.log(0b111110111 === 503);
// console.log(0o767 === 503);
// (function () {
//     console.log(0o11 === 011)
// })()
//
// ;(function () {
//     'use strict'
//     console.log(0o11 === 0o11)
// })()
//
// console.log(Number(0b111));
// console.log(Number(0o10));
//
// console.log(Number.isFinite(15));
// console.log(Number.isFinite(0.98))
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(Infinity));
// console.log(Number.isFinite(-Infinity))
// console.log(Number.isFinite('foo'));
// console.log(Number.isFinite('15'));
// console.log(Number.isFinite(true));
//
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(15));
// console.log(Number.isNaN('15'));
// console.log(Number.isNaN(true));
// console.log(Number.isNaN(9 / NaN));
// console.log(Number.isNaN('true' / 0));
// console.log(Number.isNaN('true' / 'true'));

// console.log(isFinite(25));
// console.log(isFinite('25'));
// console.log(Number.isFinite(25));
// console.log(Number.isFinite('25'));
// console.log(isNaN(NaN));
// console.log(isNaN('NaN'))
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN('NaN'));
// console.log(Number.isNaN(1));

// console.log(parseInt('12.34'));
// console.log(parseFloat('123.4#'));
//
// console.log(Number.parseInt('12.34'));
// console.log(Number.parseFloat('123.45#'));
//
// console.log(Number.parseInt == parseInt);
// console.log(Number.parseFloat === parseFloat);

// console.log(Number.isInteger(25));
// console.log(Number.isInteger(25.1));
//
// console.log(Number.isInteger(25));
// console.log(Number.isInteger(25.000));
//
// console.log(Number.isInteger());
// console.log(Number.isInteger(null));
// console.log(Number.isInteger('14'));
// console.log(Number.isInteger(true));

// console.log(Number.isInteger(3.0000000000000002));
// console.log(Number.isInteger(5E-324));
// console.log(Number.isInteger(5E-325))

// console.log((0.1 + 0.2 - 0.3) < Number.EPSILON * Math.pow(2, 2));

// function withinErrorMargin(left, right) {
//     return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
// }
//
// console.log(withinErrorMargin(0.1 + 0.2, 0.3));
//
// console.log(withinErrorMargin(1.1 + 1.3, 2.4));

// console.log(Math.pow(2, 53));
//
// console.log(Math.pow(2, 53) === Math.pow(2, 53) + 1);
//
// console.log(Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1);
//
// Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER

// console.log(Number.isSafeInteger('a'));
// console.log(Number.isSafeInteger(null));
// console.log(Number.isSafeInteger(NaN));
// console.log(Number.isSafeInteger(Infinity));
// console.log(Number.isSafeInteger(-Infinity));
// console.log(Number.isSafeInteger(3));
// console.log(Number.isSafeInteger(1.2));
// console.log(Number.isSafeInteger(9007199254740990));
// console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));
// console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER));
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));

Number.isSafeInteger = function (n) {
    return (typeof n === 'number' && Math.round(n) === n && Number.MIN_SAFE_INTEGER <= n && n <= Number.MAX_SAFE_INTEGER)
}

// console.log(Number.isSafeInteger());
//
// console.log(Number.isSafeInteger(9007199254740993));
// console.log(Number.isSafeInteger(990));
// console.log(Number.isSafeInteger(9007199254740993 - 990));
// console.log(9007199254740993 === 9007199254740992)

function trusty(left, right, result) {
    if (
        Number.isSafeInteger(left) &&
        Number.isSafeInteger(right) &&
        Number.isSafeInteger(result)
    ) {
        return result
    }
    throw new RangeError('Operation cannot be trusted!')
}

// trusty(9007199254740993, 990, 9007199254740993 - 990)

// trusty(1, 2, 3)

// 截断方法
// console.log(Math.trunc(4.1));
// console.log(Math.trunc(4.9));
// console.log(Math.trunc(-4.1));
// console.log(Math.trunc(-4.9));
// console.log(Math.trunc(-0.1234));
//
// console.log(Math.trunc('123.456'));
// console.log(Math.trunc(true));
// console.log(Math.trunc(false));
// console.log(Math.trunc(null));
//
// console.log(Math.trunc(NaN));
// console.log(Math.trunc('foo'));
// console.log(Math.trunc());
// console.log(Math.trunc(undefined));

// console.log(Math.sign(-5));
// console.log(Math.sign(5));
// console.log(Math.sign(0));
// console.log(Math.sign(-0));
// console.log(Math.sign(NaN));
//
// console.log(Math.sign(''));
// console.log(Math.sign(true));
// console.log(Math.sign(false));
// console.log(Math.sign(null));
// console.log(Math.sign('9'));
// console.log(Math.sign('foo'));
// console.log(Math.sign());
// console.log(Math.sign(undefined))

// console.log(Math.cbrt(-1));
// console.log(Math.cbrt(0));
// console.log(Math.cbrt(1));
// console.log(Math.cbrt(2));
// console.log(Math.cbrt('8'));
// console.log(Math.cbrt('hello'));

// console.log(Math.clz32(0));
// console.log(Math.clz32(1));
// console.log(Math.clz32(1000));
// console.log(Math.clz32(0b01000000000000000000000000000000));
// console.log(Math.clz32(0b00100000000000000000000000000000));
//
// console.log(Math.clz32(0));
// console.log(Math.clz32(1));
// console.log(Math.clz32(1 << 1));
// console.log(Math.clz32(1 << 2));
// console.log(Math.clz32(1 << 29));
// console.log(Math.clz32(3.2));
// console.log(Math.clz32(3.9));
//
// console.log(Math.clz32());
// console.log(Math.clz32(NaN));
// console.log(Math.clz32(Infinity));
// console.log(Math.clz32(null));
// console.log(Math.clz32('foo'));
// console.log(Math.clz32([]));
// console.log(Math.clz32({}));
// console.log(Math.clz32(true));

// console.log(Math.imul(2, 4));
// console.log(Math.imul(-1, 8));
// console.log(Math.imul(-2, -2));

// console.log(Math.hypot(3, 4));
// console.log(Math.hypot(3, 4, 5));
// console.log(Math.hypot());
// console.log(Math.hypot(NaN));
// console.log(Math.hypot(3, 4, 'foo'));
// console.log(Math.hypot(3, 4, '5'));
// console.log(Math.hypot(-3));
//
// console.log(Math.expm1(-1));
// console.log(Math.expm1(0));
// console.log(Math.expm1(1));

// console.log(Math.log1p(1));
// console.log(Math.log1p(0));
// console.log(Math.log1p(-1));
// console.log(Math.log1p(-2));
// console.log(Math.log1p(3));

// console.log(2 ** 2);
// console.log(2 ** 3)
//
// console.log(2 ** 3 ** 2)
//
// let a = 1.5
// console.log(a **= 2);
// let b = 4;
// console.log(b **= 3)

// console.log(typeof 123n);

// let p = 1n;
// for (let i = 1n; i <= 70n; i++) {
//     p *= i
// }
// console.log(p)

console.log(BigInt(123));
console.log(BigInt('123'));
console.log(BigInt(false));
console.log(BigInt(true));
// console.log(BigInt());
// console.log(BigInt(null));
// console.log(BigInt(undefined));
// console.log(BigInt('123n'));
// console.log(BigInt('abc'))
// console.log(BigInt(1.5));
// console.log(BigInt('1.5'));
