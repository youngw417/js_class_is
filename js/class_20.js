const myUl2 = document.querySelector('.ul2');
console.dir(myUl2);
// console.log(myUl2);
for (let i = 0; i < myUl2.children.length; i++) {
  console.log(myUl2.children[i]);
  myUl2.children[i].textContent = 'shopping item ' + (i + 1);
}
/*
select class holiday
use children property as the above example
loop thru all the children
for the first child (h1) - color to green
for the last child: loop thru again to change font-size 30px




*/

const helloH1 = document.querySelector('.holiday h2');

console.log('helloH1', helloH1.previousSibling);
