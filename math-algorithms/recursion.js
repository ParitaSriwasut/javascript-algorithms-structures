/* 
Recursion is a process of calling itself. A function that calls itself is called a recursive function.
*/

//RecursiveFibonacci
//Big-O => O(n)
function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(3));
console.log(recursiveFibonacci(7));

//Recursive Factorial => the pattern of 5! = 5*4*3*2*1, 4! = 4*3*2*1, 3! = 3*2*1, 2! = 2*1, 1! = 1*1, 0! = 1 // syntax n! = n * (n-1)!

//Big-O => O(n)
// function recurSiveFactorial(n) {
//   if (n < 0) {
//     return -1;
//   } else if (n == 0) {
//     return 1;
//   } else {
//     return n * recurSiveFactorial(n - 1);
//   }
// }

//Big-O => O(n)
function recurSiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recurSiveFactorial(n - 1);
}

console.log(recurSiveFactorial(1));
console.log(recurSiveFactorial(3));
console.log(recurSiveFactorial(7));
