/*
Fibonacci sequence lesson
Fibonacci sequence : a set of integers (the Fibonacci numbers) that starts with a zero, followed by a one, then by another one, and then by a series of steadily increasing numbers. the first two numbers in the sequence are 0 and 1.
the third number is the sum of previous two numbers.
fibonacci(2) = [0,1] , fibonacci(3) = [0,1,1], fibonacci(7) = [0,1,1,2,3,5,8]
*/

// Problem : Give a number "n", find the first "n" element of the Fibonacci sequence
// Solve By Big-O
// O(n) => linear
function fibonacci(n) {
  let fib = [0, 1]; // executed 2

  // i = 2 bcs since we already have element with index is [0,1] and iterate till we have n elements in the array.
  for (let i = 2; i < n; i++) {
    // executed n times

    // fib3 would be fib2 + fib1
    fib[i] = fib[i - 1] + fib[i - 2]; // constant time
  }
  return fib; // execute 1
}
console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(3)); // [0,1,1]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]
