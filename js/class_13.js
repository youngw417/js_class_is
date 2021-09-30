/* DOM (Document Object Model) is a programming interface for 
HTML documents. It represents the page so that programs can change
the document structure, style and content. The DOM represents
the document as nodes and objects.

const obj = {
    name: 'Isaac',
    grade: 'Jr. high',
    hobby: 'reading',
    commuting: function () {
        console.log('communting with a car');
    }
}

HW
1 use getElmentById, select myID change the content (2 ways) with your sentence
2. change style: color, font-size, center, background-color, font-weight
3. do the same with querySelector selecting any other 3 items
4. change style as in number 2.

5. create 10 numbers in array, 1 thru 50 with random num generator [ 2, 6,11, ....]
6. using map, create another array with 3 times of each element [6, 18, 33, ...]
7. using forEach, console.log for the following items in 6.

item in the array index 0 is 6
item in the array index 1 is 18
item in the array index 2 is 33
.
.
.

*/

// console.dir(document);

document.getElementById('myID').innerHTML = 'wow this is easy....';
document.getElementById('myID').textContent = 'wow this is easy again....';
document.getElementById('myID').style.backgroundColor = 'red';

document.querySelector('p').style.backgroundColor = 'yellow';
