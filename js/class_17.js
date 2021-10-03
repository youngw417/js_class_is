/*
1. create random 50 numbers in an array ranging from 1 to 200
2. create a function returing an array of numbers
    for multiple of 3 or 7 
   




*/

// const myArr = [2, 43, 5, 63, 6, 46, 21, 55];
// const youArr = [4, 3, 6, 77, 83, 56];

// function multiples(arr) {
//   return arr;
// }

// console.log(arr);

// f(y) = y + 5,   f(5), f(7)

// const myArr = [];

// for (let i = 50; i > 0; i--) {
//   let ran = Math.ceil(Math.random() * 200);
//   myArr.push(ran);
// }

// console.log(myArr);

// function either(arr) {
//   // const eitherArr = arr.filter((el) => !(el % 3) || !(el % 7));

//   const num3 = arr.filter((el) => el > 100);
//   //   const eitherArr = [];
//   //   arr.forEach((el) => {
//   //     if (!(el % 3) || !(el % 7)) {
//   //       eitherArr.push(el);
//   //     }
//   //   });
//   return num3;
// }

// console.log(either(myArr));

// const arrWord = [
//   'this',
//   'is',
//   'the',
//   'apple',
//   'I',
//   'bought',
//   'from',
//   'the',
//   'store',
// ];

// const filtered = arrWord.filter((el) => el[el.length - 1] === 'e');
// console.log(filtered);
// const container = [];
// arrWord.forEach((el) => {
//   if (el[el.length - 1] === 'e') container.push(el);
// });

// console.log(container);
/*
HW#1
Lonely Integer
You are given an array of integers having both negative and positive values,
 except for one integer which can be negative or positive. 
 Create a function to find out that integer.

Examples
lonelyInteger([1, -1, 2, -2, 3]) ➞ 3
// 3 has no matching negative appearance.

lonelyInteger([-3, 1, 2, 3, -1, -4, -2]) ➞ -4
// -4 has no matching positive appearance.

lonelyInteger([-9, -105, -9, -9, -9, -9, 105]) ➞ -9


HW#2
1. create ul inside of class name firstDiv
2. create 3 lists (li)
3. add class name 'red' to the all 3 lists
4. add the text inside list "text number 1", "text number 2", "text number 3"
5. add those list inside of ul


*/

// function lonelyInteger(arr) {}
// const myH1 = document.querySelector('h1');
// console.log(myH1.className);

// if (myH1.className) {
//   console.log('I have class name');
// } else console.log('I have no class name');

// const myH1 = document.querySelector('h1');
// myH1.classList.add('red');
// console.log(myH1.classList.contains('red'));
const temp = document.createElement('h1'); // <h1></h1>
temp.classList.add('red'); // <h1 class="red"></h1>
temp.id = 'test'; // <h1 class="red" id="test"></h1>
temp.textContent = 'Hello Isaac!!!!'; //  <h1 class="red" id="test">Hello Isaac!!!!</h1>
const selectedDiv = document.querySelector('.firstDiv');
selectedDiv.appendChild(temp);
const temp2 = document.createElement('h2');
temp2.classList.add('item3');
temp2.textContent = 'this is sample text';
// selectedDiv.appendChild(temp2);
selectedDiv.prepend(temp2);

const mySchoolSub = ['Math', 'English', 'History', 'Chemistry', 'Economics'];

for (let i = 0; i < mySchoolSub.length; i++) {
  const item = document.createElement('li');
  item.textContent = mySchoolSub[i];
  item.style.listStyle = 'none';
  selectedDiv.appendChild(item);
}
