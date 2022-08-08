var articles = [
  { name: "Bike", cost: 400 },
  { name: "TV", cost: 1000 },
  { name: "Book", cost: 70 },
  { name: "Smartphone", cost: 1600 },
  { name: "Laptop", cost: 4000 },
  { name: "Keyboard", cost: 70 },
  { name: "Headphones", cost: 300 }
];

// filter: new array filtered with condition
var filteredArticles = articles.filter( function(article) {
    return article.cost <= 500;
});

console.log(filteredArticles);

// map: new array of one attribute
var mapCostArticles = articles.map( function(article) {
  return article.cost;
});

console.log(mapCostArticles);


// *Cost value in currency PEN (Soles)*