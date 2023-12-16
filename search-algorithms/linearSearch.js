/*
 Linear search
 Start at the first element in the array and move towards the last.
 at each element though, check if the element is equal to the target element.

Problem : Given an array of"n elements and a target element "t", find the index od "t" in the array. Return -1 it the target element is no found.

arr = [-5,2,10,4,6],t = 10 // 2
arr = [-5,2,10,4,6],t = 6 // 4
arr = [-5,2,10,4,6],t = 20 // -1
*/

//Big-O = O(n)
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10)); // 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); // 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)); // -1
