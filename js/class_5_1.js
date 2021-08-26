function myGuesser() {
  const secretNumber = Math.floor(Math.random() * 100 + 1);
  console.log(secretNumber);
  let finish = false;
  let counter = 0;

  function guesser() {
    const guessNum = document.querySelector('.guessInput');

    guessNum.addEventListener('change', (e) => {
      const guess1 = e.target.value;
      return onGuess(guess1);
    });
    function onGuess(guess) {
      console.log(guess, typeof guess);
      if (guess.length) {
        counter++;
        const mydoc = document.getElementById('output');
        const myDiv = document.querySelector('.div_2');
        const guessNumber = parseInt(guess);
        if (guessNumber === secretNumber && counter <= 10) {
          mydoc.style.color = 'red';
          mydoc.textContent = 'You Got it!!!' + '🔥';
          myDiv.textContent = '';
          finish = true;
          return;
        } else if (counter >= 10) {
          mydoc.textContent = 'You tried more than 10 times !!!' + '🎂';
          myDiv.textContent = 'The correct number was ' + secretNumber;
        } else {
          const message = guessNumber < secretNumber ? 'higher' : 'lower';

          mydoc.textContent = `You entered ${guess}!!   
          wrong ... Go ${message} 🍍`;
          myDiv.textContent = `You have ${10 - counter} trial left`;
          guessNum.value = '';
          // 'You entered ' + guess + '!!   wrong ... Go ' + message + '🍍';
          // recursive call
          const myTime = setTimeout(() => guesser(), 1000);
        }
      }
    }
  }
  if (!finish) guesser();
}

function reset() {
  const guessNum = document.querySelector('.guessInput');
  const mydoc = document.getElementById('output');
  const myDiv = document.querySelector('.div_2');
  guessNum.value = '';
  mydoc.textContent = '';
  myDiv.textContent = '';
}
