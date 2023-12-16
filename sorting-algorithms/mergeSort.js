/* 
In merge sort algorithm, firstly the array will be divided into two parts and combined a particular sorted manner. The array will be divided into half until it cannot be divided. This means that if the array is completely divided and cannot be further divided, the dividing will be stopped.
*/

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  // if left or right still has element push it
  return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [8, 20, -2, -4, -6];
console.log(mergeSort(arr));
