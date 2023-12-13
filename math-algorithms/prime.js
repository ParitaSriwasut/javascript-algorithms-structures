/*
Prime number : a natural number grater than 1 that is not a product of two small natural numbers.
isPrime(5) => true (1*5 or 5*1)
isPrime(4) => false (1*4 2*2 4*1)
*/

// Big-O => 0O(n) : linear
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
    return true;
  }
}
console.log(isPrime(1)); // false
console.log(isPrime(5)); //true
console.log(isPrime(4)); // false
console.log(isPrime(27)); // true
