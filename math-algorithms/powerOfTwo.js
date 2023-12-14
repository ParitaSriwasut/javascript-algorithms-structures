/*
Power of two : a number of the form 2n where n is an integer two if there exists an integer "x" such that "n" === 2x
isPowerOfTwo(1) = true(2[0])
isPowerOfTwo(2) = true(2[1])
isPowerOfTwo(5) = false
*/
// TODO : if remainder is not 0 every step n is not a power of two.  if remainder is 0 and "n" comes down to 1 eventually, n is a power of two.
// Problem : Give a positive integer "n", determine if the number is a power of 2 or not

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitWise(1)); // true
console.log(isPowerOfTwoBitWise(2)); // true
console.log(isPowerOfTwoBitWise(5)); // false

//Big-O = O(logn)
// function isPowerOfTwo(n) {
//   if (n < 1) {
//     return false;
//   }
//   // loop will run as long as n is greater than 1
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true;
// }

// console.log(isPowerOfTwo(1)); // true
// console.log(isPowerOfTwo(2)); // true
// console.log(isPowerOfTwo(5)); // false
// console.log("Hello");
