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
const myFood = ['apple', 'pizza', 'kimchi', 'noodle', 'cake', 'icecream'];
const myColor = ['red', 'pink', 'blue', 'green', 'cyan', 'purple'];

const firstDiv = document.querySelector('.firstDiv');
const myUl = document.createElement('ul');
firstDiv.appendChild(myUl);
myUl.style.display = 'flex';

for (let i = 0; i < 6; i++) {
  myLi = document.createElement('li');
  myLi.classList.add('classLi');
  myUl.appendChild(myLi);
  //   console.log(myLi, i);
  //   myLi.style.color = myColor[i];
  //   myLi.style.listStyle = 'none';
  //   myLi.textContent = myFood[i];
  //   myLi.style.marginRight = '10px';
  //   myLi.style.fontSize = '20px';
  //   myUl.appendChild(myLi);
}

const newH1 = document.getElementById('myH1');
console.log(newH1);
newH1.style.cursor = 'pointer';
newH1.addEventListener('mouseover', () => {
  newH1.classList.toggle('red');
  newH1.style.fontSize = '80px';
});

newH1.addEventListener('mouseout', () => {
  newH1.classList.remove('red');
  newH1.style.fontSize = '20px';
});

const liList = document.querySelectorAll('.classLi');
console.log(liList);

liList.forEach((el, i) => {
  el.style.color = myColor[i];
  el.style.listStyle = 'none';
  el.textContent = myFood[i];
  el.style.marginRight = '10px';
  el.addEventListener('mouseover', () => {
    el.style.fontSize = '50px';
  });
  el.addEventListener('mouseout', () => {
    el.style.fontSize = '20px';
  });
});

const data1 = [1, -1, 2, -2, 3];
const data2 = [-3, 1, -1, 2, 3, -4, -2];
const data3 = [-9, -105, -9, -9, -9, -9, 105];
const data4 = [2, 4, -2, 7, -4];

console.log(data1.includes(-4));

function lonelyInteger(arr) {
  const matched = []; //[-3, 3, 1, -1, 2, -2]
  for (const item of arr) {
    if (!matched.includes(item)) {
      if (arr.includes(item * -1)) {
        matched.push(item);
        matched.push(item * -1);
      } else return item;
    } else continue;
  }
}

console.log(lonelyInteger(data4));

// iteration (of-of or for loop)
// continue and break

// for (const el of data2) {
//   if (el === -1) break;
//   console.log(el);
// }

// for (let i = 0; i < data2.length; i++) {
//   if (data2[i] === -1) break;
//   console.log(data2[i]);
// }
// console.log('I am outside');

/*
HW #1

create a new div and add class name myNewDiv
add two buttons with JavaScript (<button>) with some padding with text button 1 , button 2 side by side
put the button inside of myNewDiv
create ul and 10 list inside with for loop with text content of list1, list2.....

when first button is clicked, change all li - the background color Blue, color white
when 2nd button is clicked, change all li back to original

*/
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

const myUl2 = document.createElement('ul');
anotherDiv.appendChild(myUl2);
// const testLi = document.createElement('li');
// const myText = 'Hello';
// append - you can insert node or text (String)
// appendChild - you can insert only node
// myUl2.appendChild(myText);

for (let i = 0; i < 10; i++) {
  myUl2.append(document.createElement('li'));
}

const myFirstLis = document.querySelectorAll('.myNewDiv ul li');
console.log(myFirstLis);

myFirstLis.forEach((el, index) => {
  el.textContent = `List  ${index + 1}`;
  el.style.listStyle = 'none';
  el.style.marginBottom = '5px';
});

// selectedBtn.forEach((el, index) => {
//   if (index === 0) {
//     el.addEventListener('click', function () {
//       myFirstLis.forEach((item) => {
//         item.style.backgroundColor = 'blue';
//         item.style.color = 'white';
//       });
//     });
//   } else if (index === 1) {
//     el.addEventListener('click', function () {
//       myFirstLis.forEach((item) => {
//         item.style.backgroundColor = 'white';
//         item.style.color = 'black';
//       });
//     });
//   }
// });

// when the first button is clicked,
selectedBtn[0].addEventListener('click', function () {
  myFirstLis.forEach((item) => {
    item.style.backgroundColor = 'blue';
    item.style.color = 'white';
  });
});

selectedBtn[1].addEventListener('click', function () {
  const myColor = 'rgb(33, 121, 112)';
  myFirstLis.forEach((item) => {
    item.style.backgroundColor = myColor;
    item.style.color = 'black';
  });
});

/*
HW #1
when you click button1:
 - H1 add classname to 'red' and font-size: 30px
 - all items (1 to 8) changed the text content to 'button 1 clicked for item 1'
 - change the font-color all green

 When you click button2:
 all back to the original condtion

 #HW2
 Create a function that takes a string and returns a string in which each character is repeated once.

Examples
doubleChar("String") ➞ "SSttrriinngg"

doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

doubleChar("1234!_ ") ➞ "11223344!!__  "
Notes
All test cases contain valid strings. Don't worry about spaces, 
special characters or numbers. They're all considered valid characters.

*/
