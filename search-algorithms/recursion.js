/**
 * Recursive binary search :
 * Problem : Given a sorted array of "n" elements and a target element "t", find the index od "t" in the array. Return -1 it the target element is no found.
  arr = [-5,2,4,6,10],t = 10 // 4
  arr = [-5,2,4,6,10],t = 6 // 3
  arr = [-5,2,4,6,10],t = 20 // -1
 * 
 */

// Big-O = O(logn)
function recursiveBinarySearch(arr, target) {
  // helper function => start from index[0] till last index
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    // in case not found
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // -1
