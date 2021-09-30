const myH1 = document.querySelector('h1');
// myH1.setAttribute('class', 'red');
const myImg = document.querySelector('img');
myImg.setAttribute('src', 'puppy3.jpg');
myImg.style.width = '300px';
myImg.setAttribute('alt', 'this_is_my_puppy');
// classList.add(), classList.remove(), classList.toggle()
myH1.classList.add('red');
myH1.classList.remove('red');
myH1.classList.toggle('red');
myH1.classList.toggle('red');
myH1.classList.toggle('red');
myH1.classList.toggle('red');
const selection = document.querySelector('.item3');
selection.classList.remove('item3');
selection.classList.toggle('item3');
selection.classList.toggle('item3');
selection.classList.toggle('item3');

const selectUl = document.querySelector('ul');

selectUl.classList.add('myUl');
const selectLis = document.querySelectorAll('.myUl li');
console.log(selectLis);

selectLis.forEach((isaac, ind) => {
  isaac.style.fontSize = '30px';
  if (ind % 2 === 0) isaac.classList.remove('red');
  else isaac.classList.add('red');
});

/* HW#1
1. select the 2nd list in classname .ul2
2. add class name red in the list where class name is not already in
3. create another forEach loop and removing all the class name added in number 2


HW#2
I will put in the chat.


*/
