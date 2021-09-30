const theList = [
  'Isaac',
  'James',
  true,
  35,
  null,
  undefined,
  {
    test: 'one',
    score: 55,
  },
  ['one', 'two', 'three'],
];

// array methods
// push and pop - adding and removing the last item in array
// theList[2] = false;
// console.log(theList);
// theList.push('hello');
// theList.push('My Name');
// console.log(theList);
// theList.pop();
// console.log('the first pop: ' + theList);
// const popped = theList.pop();
// console.log(theList);
// console.log('popped item: ' + popped);
// theList.pop();
// theList.pop();
// theList.pop();
// theList.pop();
// theList.pop();
// theList.pop();
// theList.pop();
// theList.pop();
// console.log(theList);
// const emptyPop = theList.pop();
// console.log(emptyPop);

// unshift and shift: adding and removing the first item

// theList.unshift("I'm the first");
// console.log(theList);
// theList.shift();
// console.log(theList);

const myArray1 = ['a', 'hello', 4, 8, 2, 'javascript', 'course'];
const myArray2 = [5, 1, 6, 7, 12, 2, 4, 71, 15];

// myArray1.sort();
// myArray2.sort(function (a, b) {
//   return b - a;
// });
// console.log('myArray1', myArray1);
// console.log('myArray2', myArray2);
// myArray1.reverse();
// console.log(myArray1);
// const myIndex = myArray1.indexOf('javascript');
// console.log(myIndex);

// const myIndex2 = myArray1.indexOf('python');
// console.log(myIndex2);

// if (myArray1.indexOf('python') === -1) {
//   console.log('item not found');
// } else {
//   console.log('item found');
// }

// const newArray = myArray1.concat(myArray2);
// console.log(newArray);

const found = myArray2.find(function (item) {
  return item > 10;
});

const found = myArray2.find((item) => item > 10);

console.log('found', found);

const foundArr = myArray1.filter(function (item) {
  return item > 'a';
});
console.log('foundArr', foundArr);

/*
Home work,
Use the  array you created in last home work,
and create another (you have 2 arrays)
work on both arrays
1. add 3 items from back and console.log 
2. remove 2 items from back and console.log
3. add 2 items into the front and console.log
4. remove 2 items from the front and console.log
5. combine 2 arrays into one
6. sort the combined array
7. reverse the combined array
8. use indexOf and if statment, console.log when item is in the array or not
9. use find method, find the item in the array and console.log
10 use filter method, console.log the array on the condition you created
* 9 and 10, use arrow function




*/
