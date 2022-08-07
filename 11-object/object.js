// Object attributes and functions
var car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2022,
  carDetail: function() {
    console.log(`${this.brand} - ${this.model} (${this.year})`);
  }
}

car.carDetail();

// function constructor
function carConstructor(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

var carTest = new carConstructor("A", "B", 1);
console.log(carTest);