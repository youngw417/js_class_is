// const selectH2 = document.querySelector('h2');
// console.log(selectH2.className);
// const selectLi = document.querySelectorAll('.ul2 li');
// console.log(selectLi);

// selectLi.forEach((el) => {
//   el.textContent = el.className ? el.className : 'No Class';
// });

/*
1: in Ul2 class, if there is className, change the color to red
else (no class name), change the color green



's'


*/
// const s1 = 'a';
// const s2 = "Isaac";
console.log(charCount('great wall of china', 'a'));
function charCount(s1, s2) {
  let counter = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2) counter--;
  }

  return counter;
}

// console.log(charCount('a', 'Isaac'));
// console.log(charCount('c', 'Isaac'));
// console.log(charCount('b', 'Isaac'));
// console.log(charCount('k', 'this was a great looking kite'));
// console.log(charCount('a', 'great wall of china'));

// f(x) = x^2 + 2X + 1,  f(1), f(3)

// const myStr = 'Hello Isaac';

// console.log(myStr[0], myStr[1]);

// for (let i = 0; i < myStr.length; i++) {
//   console.log(myStr[i]);
// }
// create a funtion you name it.
// pass the string
// return number of charcters
// str = "Isaac";
// str1 = "Isppc"

const stringCounter = (str) => {
  let str1 = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') str1 += 'p';
    else str1 += str[i];
    // str1 = str1 + str[i]
  }

  return str1;
};
console.log(stringCounter('Isaac'));
