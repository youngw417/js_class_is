/*
1. Filter
- use the following paragraph for string
"A towering statue of Confederate General Robert E. Lee in Richmond, Virginia, is set to come down on Wednesday, more than 130 years"

- console.out the new array
a. words ending with comma or period
b. words starting uppercase and word length greater than 3
- convert array in a and b to string and console.log

2. slice and splice
from the array from the given paragraph in problem 1, delete the last three items
and console.log the array with deleted items and mutated array not showing deleted items. - use Splice

Display (with console.log) deleted items in the array using slice

3. For loops
a. Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

b. Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

*/

// const sampleStr =
//   'A towering statue of Confederate General Robert E. Lee in Richmond, Virginia, is set to come down on Wednesday, more than 130 years';
// const sampleArr = sampleStr.split(' ');
// console.log(sampleArr);
// const filteredWord = sampleArr.filter(
//   (each) => each[each.length - 1] === ',' || each[each.length - 1] === '.'
// );
// console.log(filteredWord);

// const myString = 'TheGreatWallOfChina';
// myString.split('').sort().join('');

// console.log(myString.split('').sort().join(''));

// const myArr = ['a', 'A', 'b'];
// myArr.sort();
// console.log('sorted', myArr);
// CGTWa.......
// I want to diplay myString in Alphabetical order
/*
1. convert myString to array
2. use .sort()
3. use .join()

*/

// use a loop to display the integers 9 through 0 in decending order
// const myWork = [];
// for (let x = 1; x < 10; x++) {
//   let stat = x % 2 ? true : false;
//   let temp = {
//     name: `Lesson ${x}`,
//     status: stat,
//   };
//   myWork.push(temp);
// }

// console.log(myWork);

// const getTrue = myWork.filter((item) => item.status);
// console.log(getTrue);

// const myArr = [2, 4, 6, 8, 10, 12, 14, 16];

// const myObj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
// };
// // use for loop
// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
// }

// // use for-of (for array)

// for (let item of myArr) {
//   console.log(item);
// }

// // for object, use for-in
// for (let item in myObj) {
//   console.log(item, myObj[item]);
// }

// const myArray1 = ['a', 'hello', 4, 8, 2, 'javascript', 'course'];

// from this array, create a new arry with only strings using for-of
/*
1. create container array (empty)
2. use for-of check each item whether is string or not
3 if the item is string, push to the container array
4. console.log (container array)


HW
1. create 30 numbers using random number generator generating number 1 to 100
2. put it in array = [5, 34, 76, 22, 99.....]
3. using for-of, create a new array containing multiple of 3
4. create array of object from 2
    with the first key as name, value as `random number ${}`
    with the senconde key as status with value as true or false depending on multiple of 3
5. create only array of object only with multiple of 3
6. use for-in and console.log each of object

*/
const numArr = [];
for (let i = 0; i < 30; i++) {
  numArr.push(Math.round(Math.random() * 100));
}

console.log(numArr);

const objArr = [];
// for - of

for (let item of numArr) {
  const mul = item % 3 ? false : true;

  const temp = {
    name: `random number ${item}`,
    status: mul,
  };

  objArr.push(temp);
}

console.log(objArr);

// const mulOf3Obj = [];

// for (let item of objArr) {
//   if (item.status) {
//     mulOf3Obj.push(item);
//   }
// }

// try with filter method
const mulOf30Oj = objArr.filter((isaac) => isaac.status);
console.log(mulOf30Oj);

for (let item of mulOf30Oj) {
  for (let el in item) {
    console.log(el, item[el]);
  }
}
