// HOISTING var
console.log(myName);
var myName = "Manuel";

// *********** Lo que hace JS ***********
var myName = undefined; // <- Hoisting
console.log(myName); // undefined
var myName = "Manuel";

// ----------------------------------------

// HOISTING function
hello('Manuel');
function hello(name) {
  console.log('Hello ' + name);
}

// *********** Lo que hace JS ***********
function hello(name) { // <- Hoisting
  console.log('Hello ' + name);
}
hello('Manuel'); // Hello Manuel