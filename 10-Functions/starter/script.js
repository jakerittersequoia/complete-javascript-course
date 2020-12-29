'use strict';
/*const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

//Higher Order function (takes a function as an argument)
const transformer = function(str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best', oneWord);
*/
/*
const greet = function(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Jake');

greet('Hello')('Jake');

const greetArr = greeting => name => console.log(`${greeting} ${name}`)

greetArr('Hello')('Jake');
*/

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on the ${this.airline} flight ${this.iataCode}-${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}-${flightNum}`, name})
  }
}

lufthansa.book(239, 'Jake Ritter');
lufthansa.book(240, 'Kelly Ritter');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book();

book.call(eurowings, 23, 'Robin Williams');
console.log(eurowings)
