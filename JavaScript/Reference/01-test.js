/**
 * Infinity 无穷
 */

console.log(100 * Infinity); /* Infinity */
console.log(100 * -Infinity); /* -Infinity */
console.log(-100 * Infinity); /* -Infinity */
console.log(-100 * -Infinity); /* Infinity */
console.log(Infinity * Infinity); /* Infinity */
console.log(-Infinity * -Infinity); /* Infinity */
console.log(Infinity * -Infinity); /* -Infinity */
console.log(0 * Infinity); /* NaN */
console.log(0 * -Infinity); /* NaN */
console.log(NaN * Infinity); /* NaN */
console.log(NaN * -Infinity); /* NaN */
console.log(Infinity / -Infinity); /* NaN */
console.log(Infinity / -100); /* -Infinity */
console.log(Infinity / 100); /* Infinity */
console.log(-Infinity / -100); /* Infinity  */
console.log(-Infinity / 100); /* -Infinity */
console.log(100 / Infinity); /* 0 */
console.log(100 / -Infinity); /* -0 */

/**
 *  NaN
 */

console.log(NaN === NaN); /* false */
console.log(Number.NaN === NaN); /* false */
console.log(isNaN(NaN)); /* true */
console.log(isNaN(Number.NaN)); /* true */
console.log(isNaN('hello world')); /* true */
console.log(Number.isNaN('hello world')); /* true */

/**
 * undefined
 */
// 不要这样做---start
(function () {
    var undefined = 'foo';
    console.log(undefined, typeof undefined)
})()
// 不要这样做---end

console.log(null === undefined) /* false */
console.log(null == undefined) /* true */
console.log(void (0) === undefined) /* true */

if (typeof y === 'undefined') {       // 没有错误，执行结果为true
    console.log("y is " + typeof y)  // y is undefined
}
/**
 * globalThis
 */

var getGlobal = function () {
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
};

var globals = getGlobal();
console.log(globals)