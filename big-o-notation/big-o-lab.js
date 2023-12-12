//for loop is the worst case of bigO its executed many times depends on the input.
//here in this code is 4+2 (n + 2) In this case, with n = 4, the loop will execute 4 times, resulting in a time complexity of O(4), which simplifies to O(n) in big-O notation.
//for loop is going to iterates over the entire input and hence the time complexity.
//time complexity. O(n) - Linear

// const summation = (n) =>
// {
//   let sum = 0; //execute 1
//   for (let i = 1; i <= n; i++) {
//     sum += i; //execute 4 (n = 4)
//   }
//   return sum; //execute 1
// };

//Solution
const summation = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(summation(4)); //10
