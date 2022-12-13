'use strict';

// 71.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// The DOM and DOM methods are actually part of something called the web APIs.
// The web APIs are like libraries that that browsers implement(Chrome, Firefox)
// and that we can (access/interact) from our JS code.
// API -> Application Programming Interface (more, later)
//      (интерфейс за програмиране на приложения)
// For now I need to know that web APIs are, basically, libraries that,
// are also written in JS and that are automatically available for us to use.
// All this happens behind the scenes and we don't have to import or do anything
// There is actually an official DOM specification that browsers implement,
// Which is the reason why DOM manipulation works the same in all browsers.
// Besides, the DOM, there are actually A TON more web APIs, such as,
// Timers, the Fetch API, and many more /More, later/.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// https://www.w3schools.com/js/js_api_intro.asp !!!! (Browser APIs)

/**
 *  @return {void} Game.
 */
function game() {
  const minNumber = 1;
  const maxNumber = 20;

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let currentScore = 20;
  let highScore = 0;

  let secretNumber = getRandomNumber(minNumber, maxNumber);

  const decreaseScore = (scoreEl) => {
    scoreEl.textContent = --currentScore;
  };

  const bodyEl = document.querySelector('body');

  bodyEl.addEventListener('click', function (ev) {
    if (ev.target.tagName.toLowerCase() === 'button') {
      const className = ev.target.attributes.class.value;

      const hiddenNumberEl = document.querySelector('.number');
      const checkBtn = document.querySelector('.btn.check');
      const messageEl = document.querySelector('.message');
      const inputEl = document.querySelector('.guess');
      const scoreEl = document.querySelector('.score');

      if (className === 'btn check') {
        const userGuess = Number(inputEl.value);

        if (!userGuess) {
          messageEl.textContent = 'No number! Try again!';
          return;
        }

        // Win
        if (userGuess === secretNumber) {
          hiddenNumberEl.textContent = secretNumber;
          messageEl.textContent = '🎉 Correct number!';
          bodyEl.style.backgroundColor = '#4caf50';

          if (currentScore > highScore) {
            highScore = currentScore;
            document.querySelector('.highscore').textContent = highScore;
          }

          checkBtn.disabled = true;
          return;
        }

        // This could become a ternary operator!
        /* It has value for true and false.(checking one condition)
        if (userGuess > secretNumber) {
          messageEl.textContent = 'Too High!';
        } else if (userGuess < secretNumber) {
          messageEl.textContent = 'Too Low!';
        }
        */
        // Like this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
        messageEl.textContent =
          userGuess > secretNumber ? 'Too High!' : 'Too Low!';

        decreaseScore(scoreEl);

        if (currentScore === 0) {
          messageEl.textContent = "You've lost! Try Again!";
          checkBtn.disabled = true;
        }
      } else if (className === 'btn again') {
        currentScore = maxNumber;
        scoreEl.textContent = currentScore;
        secretNumber = getRandomNumber(minNumber, maxNumber);
        hiddenNumberEl.textContent = '?';
        messageEl.textContent = 'Start Guessing...';
        bodyEl.style.backgroundColor = '#222222';
        inputEl.value = '';
        checkBtn.disabled = false;
      }
    }
  });
}

game();
