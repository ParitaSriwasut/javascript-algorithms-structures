const obj = {
  name: "Rita",
  age: 25,
  "key-tree": true,
  sayMyName: function () {
    console.log(this.name);
  },
};
obj.hobby = "snowbording";
delete obj.hobby;

console.log(obj);
console.log(obj.name);
console.log(obj["age"]);
console.log(obj["key-tree"]);
console.log(obj);
obj.sayMyName();

// Object.key() .value() .entries()

// Object - Big -O time complexity
/**
 * Insert -O(1)
 * REmove - O(1)
 * Access - O(1)
 * Search - O(n)
 * Object.key(s) - O(n)
 * Object.value() - O(n)
 * Object.entries() - O(n)
 */
