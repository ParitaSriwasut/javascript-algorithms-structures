// Object -Big-O
// Object is a collection of key value pairs.
// Time complexity
// Insert - O(1) => constant
// Remove -O(1) => constant
// Access --O(1) => constant
// Search -O(n) => Linear : worst case is search all the properties
// Object.key() -O(n) => Linear
// Object.values() -O(n) => Linear : which returns an array of all the values on the object
// Object.entries() -O(n) => Linear

const person = {
  firstName: "Rita",
  lastName: "Sri",
};

// Array -Big-O
// Array is an ordered collection of values.
// Time complexity
// Inset / Remove at (end) -O(1) => constant
// Inset / Remove at (beginning) -O(n) => linear : bcs index has to be reset for every remaining element in the array.
// Access -O(1) => constant
// Search -O(n) => linear
// Push / Pop -O(1) => constant
// Shift / Unshift / Concat / Slice / Splice -O(n) => linear

// TODO : This is very important when solving a problem we might use (forEach, Filter) and the callback function would also contain a (for loop) in such a scenario. making Time complexity is quadratic and the interviewer might no happy with that!

// forEach / Map / Filter / Reduce -O(n) => linear
const odd = [1, 3, 5, 7, 9];
