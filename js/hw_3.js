// Create a function that takes an array of strings and return an array, sorted from shortest to longest.

// Examples
// sortByLength(["Google", "Apple", "Microsoft"])
// ➞ ["Apple", "Google", "Microsoft"]

// sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
// ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

// sortByLength(["Turing", "Einstein", "Jung"])
// ➞ ["Jung", "Turing", "Einstein"]
// Notes
// All test cases contain arrays with strings of different
// lengths, so you won't have to deal with multiple strings
// of the same length.

const arr1 = ['Google', 'Apple', 'Microsoft'];
const arr2 = ['Leonardo', 'Michelangelo', 'Raphael', 'Donatello'];
const arr3 = ['Turing', 'Einstein', 'Jung'];
function sortByLength(arr) {
  arr.sort(arrSort);
  return arr;
  function arrSort(a, b) {
    return a.length - b.length;
  }
}

console.log(sortByLength(arr3));

for (let i = 'a'; i < 'z'; i++) {
  console.log(i);
}

const x = 10;
console.log(x.toString(36));
let alphabet = '';

for (i = 65; i < 91; i++) {
  alphabet += String.fromCharCode(i);
}

// abcdefghijklmnopqrstuvwxyz
console.log(alphabet);
