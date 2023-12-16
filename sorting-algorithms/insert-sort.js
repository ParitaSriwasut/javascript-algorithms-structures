/* 
Insertion sort : the first element is assumed to be sorted from index 1 till index at a length -1 (like a playing cards)
To sort an array of size N in ascending order iterate over the array and compare the current element (key) to its predecessor, if the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.
*/

// Big-O = O(n^2)
let insertionSort = (arr) => {
  // iterate sorted aprt the array
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    // compare the sorted elements in arr with the number to insert trying to find the index where the insertion has to happen.
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    // then insert the number to the right of that index
    arr[j + 1] = numberToInsert;
  }
};

const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr); //[ -6, -2, 4, 8, 20 ]
