const arr = [1, 2, 3, "Rita"];
arr.push(4); // push from last index
arr.unshift(0); // add from first index
arr.pop(); // remove from last index
arr.shift(); //remove from first index

console.log(arr);

for (const item of arr) {
  console.log(item);
}

/**
**** The big O of stack methods is the following:
-Insert/remove from the end O(1)
-Insert/remove from the beginning O(n)
-Searching - O(n)
-Access - O(n)
 * Array methods
-Push/pop O(1)
-Shift/Unshift/concat/slice/splice O(n)
-map/filter/reduce/foreach O(n)
 
 * Adding, Removing and Replacing Elements inside an Array using splice():
>splice(start)
>splice(start, deleteCount)
>splice(start, deleteCount, item1)
>splice(start, deleteCount, item1, item2, itemN)

 */
