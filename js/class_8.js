// array

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

console.log(theList.length);
console.log(theList[3]);
console.log(theList[6].score);
console.log(theList[7][1]);
//  access test and
console.log(theList[6].test);
console.log(theList[7][0]);
// Home Work #3
// create 1 array with 6 elements (string, Number, boolean, array with length 3, object with 3 properties)
// console.log to output all 6 elements