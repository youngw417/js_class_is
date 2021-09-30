// Object key and value pairs
// dot notation
// bracket notation

// Object literal
const car = {
  color: 'red',
  year: 2010,
  make: 'Toyota',
  model: 'Camry',
  price: 1500,
  turnOn: function () {
    console.log('Your ' + this.model + ' is moving'); // method
  },
  //   start: () => {
  //     console.log('your ' + this.color + ' car is starting');
  //   },
};

car.type = 'hybrid';
car['numOfDoors'] = 2;

console.log(car);
console.log(car.year);
console.log(car.price);
console.log(car['color']);
car.color = 'black';
console.log(car['color']);
console.log(car.turnOn());

// Can you declare object of book
// to define object with constructor function;

function MyCar(miles, company, color) {
  this.color = color;
  this.miles = miles;
  this.company = company;
}

const car1 = new MyCar(3000, 'Honda', 'white');
const car2 = new MyCar(5000, 'Ford', 'green');
const car3 = new MyCar(2000, 'BMW', 'silver');

console.log(car1);
console.log(car2);
console.log(car3);

car1.price = 2000;

console.log(car1);
car2.year = 2010;
console.log(car2['year']);
// Home Work #2
// Create 2 Objects with 4 properties each with object literal
// with one more property with method
// add one each more properties using dot notation and bracket notation
// console.log two objects
// console.log each properties using combination of dot and bracket notation

// Create 2 same Objects with constructor function
