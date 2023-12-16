/*
Bubble sort : is a sorting algorithm that compares two adjacent elements and swaps them until they are in the intended order.
 After each iteration, the greatest value of the array becomes the last index value of the array. In each iteration, the comparison happens till the last unsorted element. After all the iteration and comparisons of elements, we get a sorted array.
 */

//Big 0 = 0(n^2)
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        //swap them with ternary
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr); //[ -6, -2, 4, 8, 20 ]
