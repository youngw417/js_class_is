/*
1. Read two numbers with prompt and display their sum.


console.log()

2. Read two numbers with prompt and display the larger with alert

if (a > b) {

} else {

}

a++
a += 1
a = a + 1;

a--
a -= 1
a = a -1

a *= b
a = a * b

a /= b

a = a / b


let firstNum = 5;
let secNum = 10;
firstNum++;
secNum--;

let total = firstNum + secNum;
console.log(total);
total = 500 + 100 / 5 + total;
console.log(total);

1 mile = 1.609 km


let miles = prompt('How many Miles?');
miles = Number(miles);
let kilo = miles * 1.609;
console.log(kilo);
let message1 = `${miles} Miles is ${kilo} Kilometers`; // template string
let message2 = miles + ' Miles is ' + kilo + ' Kilometers';

console.log(message1);
console.log(message2);


let checkNum = '10';

if (checkNum > 10) {
  console.log('yes greater than 10');
} else if (checkNum < 10) {
  console.log('the number is less than 10');
} else {
  console.log('the number is 10');
}

Ternery Operator
Trucy or Falsy




let val = 120;
let status = val % 2 ? 'Odd' : 'Even';
// if (val % 2) {
//   status = 'Odd';
// } else {
//   status = 'Even';
// }

console.log(status);


let myValue = '10';

if (myValue === 10) {
  console.log('10 is my Value');
} else {
  console.log('10 is my not value');
}

use prompt and get the value of your age
use ternary operator, if your age is greater and equal to 17, save the string value "allowed" 
or save the string value "deny"

console.log the value


// logical operator ( &&, ||, !)
let age = 16;
let user = 'Isaac';
let member = (user == 'Isaac');
// if (user == "Issac") {
//member = true;
//}

if (age >= 17 || member) {
  console.log('You are allowed');
} else {
  console.log('You are denied');
}

// x < 3 || x > 10
//  3 < x < 10,  x > 3 && x < 10
let myTime = 22;
let output;

if (myTime < 12) {
  output = 'Good Morning';
} else if (myTime >= 12 && myTime <= 17) {
  //    12 <= mytime <= 17
  output = 'Good Afternoon';
} else if (myTime > 17 && myTime <= 23) {
  output = "I'm Sleeping";
} else {
  output = 'See you tomorrow';
}

console.log(output);


let person = "Isaac";

switch (person) {
    case "John":
        console.log(person + " is not my friend");
        break;
    case "Isaac":
        console.log("found it");
        break;
    case "steve":
        console.log("hi Steve");
        break;
    default:
        console.log("Nobody found");
}

f(x) = 2x + 3
f(3) = 9



console.log(multi(4, 4));

function multi(a, b) {
  return a * b;
}

*/

let output = 'Hello World';

// function declaration
// functionwelcome(para) {
//   let counter = 0;
//   counter++;
//   let temp = counter + ' times run' + para;
//   //   console.log(para);
//   //   console.log(temp);
//   return temp;
// }

// function expression

const welcome = function (para) {
  let counter = 0;
  counter++;
  let temp = counter + ' times run ' + para;
  //   console.log(para);
  //   console.log(temp);
  return temp;
};

console.log(welcome('sample'));
