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
 *  @return {void} Game. A bit more DRY, though.
 *  Should all functions be in this one or can be outside
 */
function game() {
  const minNumber = 1;
  const maxNumber = 20;

  const getEl = (selector) => document.querySelector(selector);

  const bodyEl = getEl('body');
  const hiddenNumberEl = getEl('.number');
  const checkBtn = getEl('.btn.check');
  const messageEl = getEl('.message');
  const inputEl = getEl('.guess');
  const scoreEl = getEl('.score');

  const displayContent = (el, text) => (el.textContent = text);

  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const decreaseScore = () => {
    scoreEl.textContent = --currentScore;
  };

  const toggleEl = (el, disable = false) => (el.disabled = disable);

  const changeElCSSProperty = (el, prop, value) => (el.style[prop] = value);

  const onWin = function () {
    displayContent(hiddenNumberEl, secretNumber);
    displayContent(messageEl, '🎉 Correct number!');
    changeElCSSProperty(bodyEl, 'backgroundColor', '#4caf50'); // green.

    if (currentScore > highScore) {
      highScore = currentScore;
      getEl('.highscore').textContent = highScore;
    }

    toggleEl(checkBtn, true);
  };

  const noMoreTries = function () {
    displayContent(messageEl, "You've lost! Try Again!");
    toggleEl(checkBtn, true);
  };

  let currentScore = 20;
  let highScore = 0;
  let secretNumber = getRandomNumber(minNumber, maxNumber);

  bodyEl.addEventListener('click', function (ev) {
    if (ev.target.tagName.toLowerCase() === 'button') {
      const className = ev.target.className;

      if (className === 'btn check') {
        const userGuess = Number(inputEl.value);

        if (!userGuess) {
          displayContent(messageEl, 'No number! Try again!');
          return;
        }

        if (userGuess === secretNumber) {
          onWin();
          return;
        }

        displayContent(
          messageEl,
          userGuess > secretNumber ? 'Too High!' : 'Too Low!',
        );

        decreaseScore();

        if (currentScore === 0) {
          noMoreTries();
        }
      } else if (className === 'btn again') {
        secretNumber = getRandomNumber(minNumber, maxNumber);
        currentScore = maxNumber;

        displayContent(scoreEl, currentScore);
        displayContent(hiddenNumberEl, '?');
        displayContent(messageEl, 'Start Guessing...');

        changeElCSSProperty(bodyEl, 'backgroundColor', '#222222'); // default
        inputEl.value = '';
        toggleEl(checkBtn);
      }
    }
  });
}

game();
