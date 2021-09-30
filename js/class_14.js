// Multiple Element Selection
/*
1. getElementsByClassName
2. getElementsByTagName
3. querySelectorAll *******



*/
// HTMLCollection
// const first1 = document.getElementsByClassName('first');
// console.log(first1);
// console.log(first1.item(1)); //first[1]
// const tagName = document.getElementsByTagName('li');
// console.log(tagName);

// // NodeList, can convert to array using Array.from();
// const selectedItems = document.querySelectorAll('.first');
// console.log(selectedItems);

// selectedItems.forEach((item, index) => {
//   item.style.backgroundColor = 'yellow';
//   item.textContent = index + 1 + ' updated';
//   item.style.fontSize = '20px';
// });
// // setting id with JavaScript
// const h1ToSelect = document.querySelector('h1');
// console.log(h1ToSelect);
// h1ToSelect.id = 'myId';

// // setAttribute, getAttribute
// const selectP = document.querySelector('p');
// selectP.setAttribute('class', 'hello');

// const myLink = document.querySelector('.alink');
// myLink.setAttribute('href', 'https://www.google.com/');

// const myImage = document.querySelector('.imgClass img');
// myImage.setAttribute('src', 'js/puppy.jpeg');
// myImage.remove();

/*
1. create 20 random numbers in range 1 thru 120
2. create a function take these 20 numbers as a array
3. return 1 array with two elements min and max

input = [13, 4, 105, 55, 119, .....]
output = [4, 119]

*/
// const selectedList = document.querySelectorAll('li');
// console.log(selectedList);
// selectedList.forEach(function (each, index) {
//   each.id = 'li' + index;
//   each.textContent = 'list item #' + index;
// });
const arr = [];
for (let i = 0; i < 20; i++) {
  arr.push(Math.ceil(Math.random() * 120));
}
console.log(arr);

function minMax(arr) {
  const container = [];
  let min = arr[0]; // 12
  let max = arr[0]; // 12
  arr.forEach((item) => {
    if (item > max)
      //12  55  77  99
      max = item;
    if (item < min) min = item; //4
  });

  return [min, max];
}

console.log(minMax(arr));

document.querySelector('h1').setAttribute('class', 'holiday');
document.querySelector('ul').setAttribute('id', 'days');
const list = document.getElementById('days');
list.style.listStyle = 'none';
list.style.textAlign = 'center';
const myList = document.querySelectorAll('li');
console.log(myList);

myList.forEach((item, index) => {
  item.id = `Item${index + 1}`;
  item.style.marginRight = '20px';
});

for (let i = 2; i < myList.length; i++) {
  myList[i].style.fontSize = '20px';
  myList[i].style.color = 'blue';
}

list.style.display = 'flex';
list.style.justifyContent = 'center';

const myImg = document.querySelector('img');
myImg.setAttribute('src', 'puppy2.jpg');
myImg.style.width = '600px';
const myCon = document.querySelector('div');
myCon.style.textAlign = 'center';

document.querySelector('body').style.backgroundColor = '#ccc';
myCon.setAttribute('class', 'myImg');
