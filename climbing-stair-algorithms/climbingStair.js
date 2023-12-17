/* 
Climbing Stair case :
If n = 2, we can easily determine that there are two ways for us to take these two steps — we can go slow & steady and take one step at a time, or we can feel adventurous, skip a step, and take two steps.

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

function climbingStairCase(n) {
  const noOfWays = [1, 2];

  for (let i = 2; i <= n; i++) {
    //
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
}

console.log(climbingStairCase(1)); // 1
console.log(climbingStairCase(2)); // 2
console.log(climbingStairCase(3)); // 3
console.log(climbingStairCase(4)); // 5
console.log(climbingStairCase(5)); // 8
