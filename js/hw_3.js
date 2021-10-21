/*
HW#1
create a new home work file - hw2.js
use it in the current html
create a button and input fields (add those into html)
create h1 with js with textNode 'My shopping list'
create ul with js and add class name 'newUl'
add eventListener to button, so you can add text from input into the list
*/
// create button
let retrieved;
let saved;
window.addEventListener('load', function () {
  retrieved = JSON.parse(localStorage.getItem('saved'));
  console.log('retrieved', retrieved);
  if (!retrieved) saved = [];
  else {
    saved = retrieved;
    saved.forEach((el) => {
      const myLi = document.createElement('li');
      const myText = document.createTextNode(el);
      myLi.appendChild(myText);
      myUl.appendChild(myLi);
      myLi.addEventListener('click', function () {
        const added = this.classList.toggle('red');

        if (added) {
          const item = document.createElement('span');
          item.textContent = ' x';
          this.appendChild(item);
          item.addEventListener('click', function () {
            this.parentElement.remove();
            const index = saved.indexOf(el);
            saved.splice(index, 1);
          });
        } else {
          this.textContent = el;
        }
      });
    });
  }
  console.log('saved', saved);
});

function deleteBtn() {
  const added = this.classList.toggle('red');

  if (added) {
    const item = document.createElement('span');
    item.textContent = ' x';
    this.appendChild(item);
    item.addEventListener('click', function () {
      this.parentElement.remove();
      const index = saved.indexOf(el);
      saved.splice(index, 1);
    });
  } else {
    this.textContent = el;
  }
}

const myBtn = document.createElement('button');
myBtn.textContent = 'Click Me';
myBtn.style.padding = '5px 10px';
myBtn.style.fontSize = '20px';
myBtn.style.backgroundColor = 'Green';
myBtn.style.color = 'white';
myBtn.style.borderRadius = '5px';
document.body.prepend(myBtn);

// create input
const myInput = document.createElement('input');
document.body.prepend(myInput);
myInput.style.marginRight = '10px';
myInput.style.padding = '5px 10px';
myInput.style.fontSize = '20px';
myInput.style.marginBottom = '10px';

// create h1
const myH1 = document.createElement('h1');
const myText = document.createTextNode('My Shopping List');
myH1.appendChild(myText);
const shoppingDiv = document.querySelector('.shopping');
shoppingDiv.appendChild(myH1);

// create ul
const myUl = document.createElement('ul');
myUl.classList.add('newUl');
shoppingDiv.appendChild(myUl);

// add eventListener

myBtn.addEventListener('click', doSomething);

function doSomething() {
  const myLi = document.createElement('li');
  const myText = document.createTextNode(myInput.value);
  saved.push(myInput.value);
  myLi.addEventListener('click', function () {
    console.log('red', this.classList.toggle('red'));
  });
  myLi.appendChild(myText);
  myUl.appendChild(myLi);
  myInput.value = '';
}

myInput.addEventListener('keypress', function (event) {
  console.log('event', event);
  if (event.key === 'Enter' || event.code === 'Space') {
    const myLi = document.createElement('li');
    const myText = document.createTextNode(myInput.value);
    saved.push(myInput.value);
    myLi.addEventListener('click', function () {
      this.classList.toggle('red');
    });
    myLi.appendChild(myText);
    myUl.appendChild(myLi);
    myInput.value = '';
  }
});

const saving = document.querySelector('.clickMe');
saving.addEventListener('click', function () {
  console.log(saved);
  localStorage.setItem('saved', JSON.stringify(saved));
});

console.log('retrieved', retrieved);
