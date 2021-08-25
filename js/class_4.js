// const addition = function (a, b) {
//   return a + b;
// };
// console.log(addition(3, 5));

// console.log(getCircumference(25).toFixed(2));
// function getCircumference(radius) {
//   const circum = Math.PI * 2 * radius;
//   return circum;
// }

// function multiply(num1, num2) {
//   // ternary operator
//   //   num2 = typeof num2 !== 'undefined' ? num2 : 5;
//   //   num2 = num2 || 5;
//     if (typeof num2 !== 'undefined') {

//   } else {
//     num2 = 5;
//   }
//   console.log('num1 = ' + num1);
//   console.log('num2 = ' + num2);

//   return num1 * num2;
// }
// console.log(multiply(10, 2));

// DOM (Document Object Model)
const btns = document.querySelectorAll('.myBtn');
console.dir(document);
console.log(btns);

btns[0].onclick = message1;
btns[1].onclick = message2;
btns[2].onclick = message3;

let var1, var2, var3;
var1 = var2 = var3 = 0;

function message1() {
  var1++;
  message();
}
function message2() {
  var2++;
  message();
}
function message3() {
  var3++;
  message();
}

function message() {
  const total = var1 + var2 + var3;
  console.log('var1 = ' + var1 + ', var2 = ' + var2 + ', var3 = ' + var3);
  console.log('total = ' + total);
  // const selected = document.getElementsByClassName('output')[0];
  // selected.textContent = total;
  document.getElementsByClassName('output')[0].textContent = total;
  // selected.style.color = 'red';
}

/* Home Work
1. create 4 buttons on the web page (button1 - bubtton 4)
2. when you click any other button, 
 - console.log which button was clicked
 - count total number of clicks and console.log together 
 
*/

const animals = ['dog', 'cat', 'elephant', 'bird'];

console.log(animals[animals.length - 2]);
