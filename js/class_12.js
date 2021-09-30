// const myString = 'TheGreatWallOfChina';
// myString.split('').sort().join('');

// can you create a function taking myString as parameter
// return the string with reverse order ?

// const reverse = (item) => item.split('').reverse().join('');
// const reverse = function (item) {
//   return item.split('').reverse().join('');
// };

// console.log(reverse(myString));

// function declaration
// function reverse(item) {
//   return item.split('').reverse().join('');
// }

// write a function that accept a string as a param and counts the number
// of vowels within the string

// const aStr = 'TheGreatWallOfChina';

// const vowelCounter = (word) => {
//   let count = 0;
//   const vowels = 'aeiouAEIOU';

//   for (let i = 0; i < word.length; i++) {
//     if (vowels.indexOf(word[i]) !== -1) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(vowelCounter(aStr));

// if (vowels.includes(aStr[i]))

/*
looping through items
1. for - loop, we can use for string, array
2. for-of, we can use in array
3, for-in, we can use in object

today, another array method for-each and map
*/
// const myArray1 = ['a', 'hello', 4, 8, 2, 'javascript', 'course'];

// myArray1.forEach((el, index) => {
//   if (typeof el === 'number') console.log(el, index);
// });
// // forEach: do not return anything. only do operation inside of function

// const myMap = myArray1.map((el) => el + ' hello');

// let len = 0;
// const myMap2 = myArray1.map((el) => {
//   if (typeof el === 'string') {
//     len = el.length;
//     return len;
//   } else return 0;
// });
// console.log(myMap2);

// map: return modified array, with modification as in the function

/*

hw: 
1. Write a JavaScript function that Accept a string as a parameter and 
can converts the first letter of each word of the string in upper case.

const sample = "Write a JavaScript function that Accept a string as a parameter and 
can converts the first letter of each word of the string in upper case"

2. use forEach: convert the sample string into array and console.log each string with
modification to such as  
string 0 Write 
string 1 a
string 2 Javascript
string 3 function
....

3. use map: 
create aonther array from problem 1, showing number of letters in each string
[5, 1, 10, .....]

*/
// for loop[]
// const sample =
//   'Write a JavaScript function that Accept a string as a parameter and can converts the first letter of each word of the string in upper case';

// function toFirstUp(str) {
// logics here
// const upperArr = [];
// const strArr = str.split(' ');
// for (let i = 0; i < strArr.length; i++) {
//   const item = strArr[i].charAt(0).toUpperCase() + strArr[i].substr(1);
//   upperArr.push(item);
// }
// for (let each of strArr) {
//   const item = each.charAt(0).toUpperCase() + each.slice(1);
//   upperArr.push(item);
// }

// strArr.forEach((each) => {
//   const item = each.charAt(0).toUpperCase() + each.slice(1);
//   upperArr.push(item);
// });

//   const upperArr = strArr.map((each) => {
//     const item = each.charAt(0).toUpperCase() + each.slice(1);
//     return item;
//   });
//   const upperSample = upperArr.join(' ');

//   return upperSample;
// }

// console.log(toFirstUp(sample));

const sample =
  'Write a JavaScript function that Accept a string as a parameter and can converts the first letter of each word of the string in upper case';

const sampArr = sample.split(' ');
console.log(sampArr);
// sampArr.forEach((el, index) => {
//   // const str = `isaac ${index + 1} ${el} this is the end......`;
//   const str = 'string ' + (index + 1) + ' ' + el + ' this is the end......';
//   console.log(str);
// });
const mapArr = sampArr.map((el) => el.length);
// [5, 1, 10, ......]
console.log(mapArr);
