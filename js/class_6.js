function myGuesser() {
  const secretNumber = Math.ceil(Math.random() * 100);

  // secretNumer = '30'
  // user entered the guess number 50;
  // it will let user know "go lower... guess the number greater 0 and less than 50"
  // you guessed 20
  // it will say "go higher .. guess the  number greater 20 less and 50";
  // you guess 39
  // it will say "go lower ... guess the number greater 20 less than 39"
  // let lowest = 1;
  // let highest = 100

  guesser();

  function guesser() {
    console.log(secretNumber);
    const guess = prompt('Guess the Number');
    console.log(guess);
    const mydoc = document.getElementById('output');
    console.log(mydoc);
    const guessNumber = parseInt(guess);
    // Number(guess)
    if (guessNumber === secretNumber) {
      // document.getElementById('answer').innerHTML = 'You Got it!!';
      mydoc.style.color = 'red';
      mydoc.textContent = 'You Got it!!! 🔥';
      return;
    } else {
      const message = guessNumber < secretNumber ? 'higher' : 'lower';
      // console.log('wrong.. Go ' + message);
      // document.getElementById('answer').innerHTML = message;
      mydoc.textContent = `wrong ... Go ${message}, Guess the number grater than ${lowest} and less ${highet}`;
      const myTime = setTimeout(() => guesser(), 1000);
    }
  }
}
/*
1. create another folder with css html js files.
2. copy js, css and html to there.
3. in html and css, create header title of game with h1 or h2
    two buttons for start, reset
4. add counter
    if counter is <= 10 and you got the secret number: you got it
    else if counter > 10: output to DOM: you tried more than 10 times and exit (return)
    else ( couter <= 10 and did not get answer): Go lower or higher, output 
    number of trial left, call the function again

*/
