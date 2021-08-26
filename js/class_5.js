// console.log(test1(5));
// function test1(num) {
//   return num + 5;
// }

// let a = 5;

// function test() {
//   let b = 20;
//   console.log(a);
// }

// test();

// const secretNumber = 5;
// guesser();
function myGuesser() {
  const secretNumber = Math.floor(Math.random() * 100 + 1);
  console.log(secretNumber);
  let finish = false;
  let counter = 0;
  function guesser() {
    const guess = prompt('Guess the Number');

    counter++;
    const mydoc = document.getElementById('output');
    const myDiv = document.querySelector('.div_2');
    const guessNumber = parseInt(guess);
    if (guessNumber === secretNumber && counter <= 10) {
      mydoc.style.color = 'red';
      mydoc.textContent = 'You Got it!!!' + '🔥';
      myDiv.textContent = '';
      finish = true;
      return;
    } else if (counter >= 10) {
      mydoc.textContent = 'You tried more than 10 times !!!' + '🎂';
      myDiv.textContent = '';
    } else {
      const message = guessNumber < secretNumber ? 'higher' : 'lower';

      mydoc.textContent = `You entered ${guess}!!   
        wrong ... Go ${message} 🍍`;
      myDiv.textContent = `You have ${10 - counter} trial left`;
      // 'You entered ' + guess + '!!   wrong ... Go ' + message + '🍍';
      const myTime = setTimeout(() => guesser(), 1000); // recursive call
    }
  }
  if (!finish) guesser();
}

// const myMessage = 'hello, My name is Isaac';

// document.write(`<h3>${myMessage}</h3>`);

// (function (firstName) {
//   console.log('Welcome ' + firstName);
// })('Isaac');
// Immediately Invoked Function Expression (IIFE)

// (function () {
//   console.log('hello world.....');
// })();

// const test = function (x) {
//   return x + 10;
// };
// arrow function;
// const test = (x) => x + 10;

// console.log(test(15));

// const addition = function (a, b) {
//   return a + b;
// };

// const addition = (a, b) => a + b;

// write 4 function, addition, substraction, multiplcatio and division
// getting two parameters and return the value
// write all with arrow function

// get a value (1, 2, 3, 4) from prompt
// if the value is 1 -> call add function with parameter (20, 10);
// if the value is 2 -> call subtraction
// if the value is 3 -> call multiplication
// if the value is 4 -> call division

// return function value in console.log()

// const myOutput = document.getElementById('answer');
// const message = 'This is it Now';

// myOutput.textContent = message;
// const guess = prompt('Guess the Number');
// console.log(guess);
// const doMyWork = () => {
//   const mydoc = document.getElementById('answer').value;
//   //   console.log(mydoc);
//   const mydoc2 = document.getElementById('output').textContent;
//   console.log(mydoc2);
// };
