// Constructor function
function car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

// Instance 30 cars
var cars = [];

for (let i = 0; i < 30; i++) {
  var modelNumber = i + 1;
  var year = parseInt( "20" + (i + 18) );
  
  cars.push(new car("Tesla", `Model ${modelNumber}`, year));
}

// Print all cars
for (const car of cars) {
  console.log(`${car.brand} - ${car.model} (${car.year})`);
}