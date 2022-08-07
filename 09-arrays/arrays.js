var fruits = ["apple", "banana", "cherry", "strawberry"];
console.log(fruits); // ["apple", "banana", "cherry", "strawberry"]
console.log(fruits.length); // 4

fruits.indexOf("banana"); // 1


// push: Insert in last position
var moreFruits = fruits.push("grape");
console.log(fruits); // ["apple", "banana", "cherry", "strawberry", "grape"]

// pop: Delete last item
fruits.pop("cherry");
console.log(fruits); // ["apple", "banana", "cherry", "strawberry"]


// unshift: Insert in first position
fruits.unshift("kiwi");
console.log(fruits); // ["kiwi", "apple", "banana", "cherry", "strawberry"]

// shift: Delete first item
fruits.shift("kiwi");
console.log(fruits); // ["kiwi", "apple", "banana", "cherry", "strawberry"]