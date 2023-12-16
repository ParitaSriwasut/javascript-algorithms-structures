/*
Binary Search :
Find the middle element of the given array.
Compare the middle element with the value we are looking for (called key).
If the key is less than the middle element, search in the left half.
If the key is more than the middle element, search in the right half.
If the key is equal to the middle element, return the index of the middle element.
Continue with steps 1, 2 until we are left with a single element.
If the key is still not found, return -1.

Problem : Given a sorted array of "n" elements and a target element "t", find the index od "t" in the array. Return -1 it the target element is no found.

arr = [-5,2,4,6,10],t = 10 // 4
arr = [-5,2,4,6,10],t = 6 // 3
arr = [-5,2,4,6,10],t = 20 // -1
*/

// Big-O = O(logn)
function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); //3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); //-1
