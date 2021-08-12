/**
 *  parseFloat()
 */
// 下面的例子都返回3.14
console.log(parseFloat(3.14));
console.log(parseFloat('3.14'));
console.log(parseFloat('  3.14  '));
console.log(parseFloat('314e-2'));
console.log(parseFloat('0.0314E+2'));
console.log(parseFloat('3.14some non-digit characters'));
console.log(parseFloat({ toString: function() { return "3.14" } }));

console.log(parseFloat("FF2")); // NaN

console.log(parseFloat(900719925474099267n));  // 900719925474099267
console.log(parseFloat('900719925474099267n'));  // 900719925474099267

/**
 *  parseInt()
 */
// 下面的例子都返回15
console.log(parseInt("0xF", 16));
console.log(parseInt("F", 16));
console.log(parseInt("17", 8));
console.log(parseInt(021, 8));
console.log(parseInt("015", 10));   // parseInt(015, 8); 返回 13
console.log(parseInt(15.99, 10));
console.log(parseInt("15,123", 10));
console.log(parseInt("FXX123", 16));
console.log(parseInt("1111", 2));
console.log(parseInt("15 * 3", 10));
console.log(parseInt("15e2", 10));
console.log(parseInt("15px", 10));
console.log(parseInt("12", 13));

console.log(parseInt("Hello", 8)); // NaN
console.log(parseInt("546", 2));   // NaN, 除了“0、1”外，其它数字都不是有效二进制数字

/**
 *  encodeURI() and encodeURIComponent()
 */
var set1 = ";,/?:@&=+$";  // 保留字符
var set2 = "-_.!~*'()";   // 不转义字符
var set3 = "#";           // 数字标志
var set4 = "ABC abc 123"; // 字母数字字符和空格

console.log(encodeURI(set1)); // ;,/?:@&=+$
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // #
console.log(encodeURI(set4)); // ABC%20abc%20123 (the space gets encoded as %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // %23
console.log(encodeURIComponent(set4)); // ABC%20abc%20123 (the space gets encoded as %20)

/**
 *  escape()
 */

console.log(escape("abc123"));     // "abc123"
console.log(escape("äöü"));        // "%E4%F6%FC"
console.log(escape("ć"));          // "%u0107"

// 特殊字符
console.log(escape("@*_+-./"));    // "@*_+-./"

/**
 *  unescape()
 */

console.log(unescape('abc123'));     // "abc123"
console.log(unescape('%E4%F6%FC'));  // "äöü"
console.log(unescape('%u0107'));     // "ć"

