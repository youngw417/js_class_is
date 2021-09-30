const theNews =
  'In Richmond, a city that was the capital of the Confederacy for much of the Civil War, the Lee statue became the epicenter of last summer’s protest movement. The city has removed more than a dozen other pieces of Confederate statuary on city land since Floyd’s death.';
// const newsArr = theNews.split(' ');
// console.log(newsArr);

// const sampleStr = 'this;is;sample';
// const sampleArr = sampleStr.split(';');
// // ["this", "is", "sample"]
// console.log(sampleArr);

// const longWords = newsArr.filter((item) => item.length > 5);
// console.log(longWords);
// const joinedWord = longWords.join(' ');
// console.log(joinedWord);

// const myStr = 'Hello Isaac!';
// console.log(myStr[0]);
// console.log(myStr.charAt(0));
// console.log(myStr.length);
// console.log(myStr[myStr.length - 1]);
// const theWords = newsArr.filter((item) => item.includes('er'));
// console.log(theWords);
// const myArray1 = ['a', 'hello', 4, 8, 2, 'javascript', 'course'];

// splice
// myArray1 will be mutated
// myArray2 will have removed items when splice delete the item
// const myArray2 = myArray1.splice(5, 2);
// console.log(myArray1, myArray2);

// slice
// return sliced items (extracted items in the array or string)
// 1st param is the starting index number
// 2nd param is index for the last slice index + 1;
// slice does not mutate the original array

// const myArray2 = myArray1.slice(1, 2);
// console.log(myArray2);
// console.log(myArray2, myArray1);
//for loop:

const myArray1 = ['a', 'hello', 4, 8, 2, 'javascript', 'course'];

for (let i = 0; i < myArray1.length; i++) {
  if (typeof myArray1[i] == 'number') {
    console.log(myArray1[i]);
  }
}
