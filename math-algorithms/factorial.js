/*
Factorial number : represents the multiplication of all numbers between 1 and n.
n! = n*(n-1)*...*1

Factorial of zero is 1.
Factorial(4) => 4*3*2*1 = 24
Factorial(5) => 5*4*3*2*1 = 120
*/

// Problem : give an integer "n", find the factorial of that integer number.

const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    // current result = i
    result = result * i; // 5*4*3*2*1
  }
  return result;
};

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120
