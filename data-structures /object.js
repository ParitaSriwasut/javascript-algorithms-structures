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
