const selectDiv = document.querySelector('.firstDiv');
console.log(selectDiv);

const anotherDiv = document.createElement('div');
selectDiv.appendChild(anotherDiv);
anotherDiv.classList.add('myNewDiv');

for (let i = 0; i < 2; i++) {
  anotherDiv.appendChild(document.createElement('button'));
}

const selectedBtn = document.querySelectorAll('button');
console.log(selectedBtn);

selectedBtn.forEach((el, ind) => {
  el.style.padding = '5px 10px';
  el.style.marginRight = '10px';
  el.style.backgroundColor = 'green';
  el.style.color = 'white';
  el.style.fontSize = '25px';
  el.style.borderRadius = '10px';
  el.style.cursor = 'pointer';
  el.textContent = 'button' + (ind + 1);
});

const selectH1 = document.getElementById('myH1');
const allLis = document.querySelectorAll('.ul2 li');
// selectedBtn[0].addEventListener('click', function () {
//   selectH1.classList.add('red');
//   selectH1.style.fontSize = '50px';
//   const randomCol = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
//   allLis.forEach((el, index) => {
//     el.textContent = `button 1 clicked for item ${index + 1}`;
//     el.style.color = 'green';
//     el.style.backgroundColor = randomCol;
//   });
// });

function randomColor() {
  return Math.floor(Math.random() * 256);
}

console.log(randomColor());

const myImg = document.querySelector('.puppy1');
myImg.style.width = '300px';

// selectedBtn[1].addEventListener('click', function () {
//   selectH1.classList.remove('red');
//   selectH1.style.fontSize = '30px';
//   allLis.forEach((el, index) => {
//     el.textContent = `item ${index + 1}`;
//     el.style.color = 'black';
//     el.style.backgroundColor = 'white';
//   });
// });
// decimal: 0-255 (256 numbs)
// hexdemcimal: FF (16 X 16)
/*
Examples
doubleChar("String") ➞ "SSttrriinngg"

doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

doubleChar("1234!_ ") ➞ "11223344!!__  "
Notes
All test cases contain valid strings. Don't worry about spaces, 
special characters or numbers. They're all considered valid characters.
*/

// const str1 = 'String is longer and longer after all';
// const str2 = 'Hello World!';
// const str3 = '1234!_ ';

// console.log(str1[0]);
// function doubleChar(str) {
//   let doubled = '';
//   for (let i = 0; i < str.length; i++) {
//     doubled += str[i] + str[i];
//     console.log('inside of loop', doubled);
//   }
//   return doubled;
// }

// console.log(doubleChar(str1));

const newDiv = document.createElement('div');
document.body.prepend(newDiv);
// newDiv.textContent = 'This is new Div';
const textDiv = document.createTextNode('This is new text node');
const anotherText = document.createTextNode('This is another');
newDiv.appendChild(textDiv);
newDiv.appendChild(anotherText);
newDiv.textContent = '';

const imgList = document.querySelectorAll('.puppy1');

// imgList.forEach((el) => {
//     el.addEventListener('click', function () {
//         window.open(this.src, 'myImage', 'width=500');
//   });
// });

// imgList.forEach((el) => {
//   el.addEventListener('click', openWindow);
// });

// function openWindow() {
//   window.open(this.src, 'myImage', 'width=500');
// }

imgList.forEach((el) => {
  el.onclick = function () {
    window.open(this.src, 'myImage', 'width=500');
  };
});

const clickMe = document.querySelector('.clickMe');
const inputItem = document.querySelector('.myInput');
const myList = document.querySelector('.inputList');

clickMe.addEventListener('click', function () {
  const li = document.createElement('li');
  const temptext = document.createTextNode(inputItem.value);
  li.appendChild(temptext);
  myList.appendChild(li);
  setTimeout(function () {
    inputItem.value = '';
  }, 0);
});

/*
HW#1
create a new home work file - hw2.js
use it in the current html
create a button and input fields (add those into html)
create h1 with js with textNode 'My shopping list'
create ul with js and add class name 'newUL'
add eventListener to button, so you can add text from input into the list

HW#2
We will discuss later



*/
