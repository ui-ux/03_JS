// In JavaScript, all numbers are stored in float64 format (8 bytes)
/*
NaN is not a number
Number.MAX_VALUE - maximum allowed value in JavaScript +9007199254740992
Number.MIN_VALUE - The minimum allowable value in JavaScript -9007199254740992
Number.NaN - not a number
Number.POSITIVE_INFINITY - + infinity 1.7976931348623157E + 10308
Number.NEGATIVE_INFINITY - - infinity -1.7976931348623157E + 10308
*/

console.log("Number.NaN = " + Number.NaN);
console.log("Number.MAX_VALUE = " + Number.MAX_VALUE);
console.log("Number.MIN_VALUE = " + Number.MIN_VALUE);
console.log("Number.MIN_VALUE/2 = " + Number.MIN_VALUE/2); // => 0 loss of significance
console.log(-Number.MIN_VALUE/2);  // => -0
console.log(-1/Infinity); // => -0
console.log("Number.POSITIVE_INFINITY = " + Number.POSITIVE_INFINITY);
console.log("Number.NEGATIVE_INFINITY = " + Number.NEGATIVE_INFINITY);
console.log("0/0 = " + 0/0); // => NaN
console.log("Infinity/Infinity = " + Infinity/Infinity); // => NaN

// ES 6
console.log("Number.parseInt() = " + Number.parseInt(22)); // => 22 the same global parseInt()
console.log("Number.parseFloat() = " + Number.parseFloat(22)); // => 22 the same global parseFloat()

abc = NaN;
cba = NaN;
console.log("Number.isNaN = " + Number.isNaN(abc)); // => is abc a NaN value // the same global isNaN
console.log(abc == cba); // => false
console.log(abc === cba); // => false
console.log(abc != cba); // => true
console.log(abc !== cba); // => true
console.log(NaN == NaN); // => false
console.log(NaN === NaN); // => false
console.log(NaN != NaN); // => true
console.log(NaN !== NaN); // => true

console.log("Number.isFinite = " + Number.isFinite(13)); // => true
console.log("Number.isFinite = " + Number.isFinite([])); // => false
// => to check that the parameter is a finite number (that is, not a string, array, etc., and not plus or minus infinity)

console.log("Number.isInteger = " + Number.isInteger(13.1)); // => false // Is x an integer
console.log("Number.isInteger = " + Number.isInteger(13)); // => true

console.log("Number.isSafeInteger = " + Number.isSafeInteger(13)); // => true // Is x an integer -(2**53) < x < 2**53
console.log("Number.MIN_SAFE_INTEGER = " + Number.MIN_SAFE_INTEGER); // => -(2**53-1)
console.log("Number.MAX_SAFE_INTEGER = " + Number.MAX_SAFE_INTEGER); // => 2**53-1

console.log("Number.EPSILON) = " + Number.EPSILON); // => 2**-52: smallest difference between numbers


let x = 0.5 - 0.3; // => 0.2
let y = 0.7 - 0.5; // => 0.19999999999999996
console.log(x===y); // =>  false

