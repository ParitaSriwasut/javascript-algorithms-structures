// Insertion sort : the first element is assumed to be sorted from index 1 till index at a length -1
let insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
};

const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr); //[ -6, -2, 4, 8, 20 ]
