var articles = [
  { name: "Bike", cost: 400 },
  { name: "TV", cost: 1000 },
  { name: "Book", cost: 70 },
  { name: "Smartphone", cost: 1600 },
  { name: "Laptop", cost: 4000 },
  { name: "Keyboard", cost: 70 },
  { name: "Headphones", cost: 300 }
];

// filter: new array filtered --------------------------------------------------------------------------------------

// filter abbreviate 
var filteredArticles = articles.filter(article => article.cost == 400);
console.log(filteredArticles); // [ { "name": "Bike", "cost": 400 } ]

/*
// filter, with function with condition
var filteredArticles = articles.filter( function(article) {
  return article.cost <= 500;
});

console.log(filteredArticles); // [{"name":"Bike","cost":400},{"name":"Book","cost":70},{"name":"Keyboard","cost":70},{"name":"Headphones","cost":300}]
*/


// map: new array result of function ------------------------------------------------------------------------------

// map abbreviate
var mapCostArticles = articles.map( article => article.cost / 10);
console.log(mapCostArticles); // [40, 100, 7, 160, 400, 7, 30]

/*
// same map, with function
var mapCostArticles = articles.map( function(article) {
  return article.cost / 10;
});

console.log(filteredArticles); // [40, 100, 7, 160, 400, 7, 30]
*/

// find: Return first element validated success -------------------------------------------------------------------

var findLaptopArticle = articles.find(function (article) {
  return article.name === "Laptop";
});
console.log(findLaptopArticle);// [{ "name": "Bike", "cost": 400 }]

// forEach: Execute function for any element ---------------------------------------------------------------------

articles.forEach(function (article) {
  console.log(article.name);
});

// some: Return boolean if anyone in list validate -------------------------------------------------------------------

var articlesSome = articles.some(function (article) {
  return article.cost <= 700;
});
console.log(articleSome); // true


// *Cost value in currency PEN (Soles)*