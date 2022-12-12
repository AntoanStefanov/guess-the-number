'use strict';

/*
// All of the interface is implemented in HTML. (index.html)
// We will select HTML elements based on classes, id, tag names,
// in order to manipulate them (DOM manipulation).

// It's a little bit like the way, we can select elements in CSS,
// we can do the same in JS.

// querySelector is a method available on the document object.
// arg -> selector, it's exactly the same selector that we would use in CSS.
const queryMessage = document.querySelector('.message');
// const getMessage = document.getElementsByClassName('message')[0];
// exactly the same way as selecting it in CSS.

console.log(queryMessage);
// console.log(getMessage);

console.log(queryMessage.textContent);
// console.log(getMessage.textContent);

// (query/get)Message is an element,
// while .textContent is a property of that element.

// 71.

// Let's make JS interact with a webpage,
// technical term: doing DOM manipulation.

// What is DOM?
// - Document Object Model:
// -- Structured representation of HTML Document.
// -- Allows JS to access HTML elements and styles, in order to manipulate them.
// Ex. Changing text, changing attributes and also to change CSS styles from JS.

// So, the DOM is a connection point between HTML document and JS code.

// DOM is automatically created by the browser as soon as the HTML page loads.
// It's stored in tree structure.
// In this tree, each HTML element is one object.

// document is an object, that we have access to in JS.
// this object servers as an entry point into the DOM.
// We need it to start selecting elements.
// querySelector is a method of that object.

// First child element of document is usually the HTML element (root element).
// HTML element usually has 2 child elements - head and body.
// In HTML they are adjacent elements, so we call them siblings in DOM as well.

// DOM tree has more than just elements nodes,
// it also has nodes for all the text itself, comments and other stuff.

// The rule is that whatever is in the HTML document also has to be in the DOM.
// The DOM really is a compete representation of the HTML document,
// so we can manipulate it in complex ways.

// !!!!!!!!!!!!!!!!
// DOM methods and properties for DOM manipulation (ex. document.querySelector),
// are NOT part of JS.
// Remember that JS is actually just a dialect of the ECMAScript specification,
// And all this DOM related stuff is simply not in there.
// So up until this point, we have only used the JS language itself.
// But starting in this section we will also use JS in a browser.
// What I mean is to manipulate webpages that are actually, displayed
// and rendered in the browser, just like any normal website that u know.

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// If the DOM is NOT part of the JS language, then how does this all work?
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

// 72.

// Let's select and manipulate some elements.

queryMessage.textContent = 'Correct Number!'; // DOM manipulation.
// We manipulated the text content of a DOM node. /the paragraph element/

const numberMark = document.querySelector('.number');
const currentScore = document.querySelector('.score');

numberMark.textContent = 13;
currentScore.textContent = 18;

console.log(numberMark, currentScore);

// For input fields, to get the actual value, we use the value property (.value)
// We can also use it to set a value.
const numberGuess = document.querySelector('.guess');
// https://stackoverflow.com/questions/53305284/how-can-i-console-the-list-of-dom-object-with-javascript !!
console.log(numberGuess);
console.dir(numberGuess);
console.log(numberGuess.value);
numberGuess.value = 2;
console.log(numberGuess.value);

*/

// 73.
// Let's make JS code reactive when something in DOM happens.

// For that we need Event Listener.
// Event is something that happens on the page. ex. a mouse click/moving,
// key press or many other events.
// Then with an event listener, we can wait for a certain event to happen,
// and then REACT to it.

// Let's give it a try.

// In order to listen for events, we first need to select the element,
// the place where the event should happen...

// In this case, we want to listen to the event on the button element('Check').
// Bcs, this is where the click that we're interested in will happen.

const checkBtn = document.querySelector('.btn.check');
console.log(checkBtn);
// On that element we can call the addEventListener method.
// args:
//  type/name of event (ex. 'click') : string,
//  tell the event listener what to do /specify the reaction to the click Event.
//  We do that by defining a function(listener), that function will contain
//  exactly the code that should be executed whenever this click event happens,
//  On this CHECK BUTTON.
//  That function is called the EVENT HANDLER.
// This addEventListener method is a special kind of function,
// that because as a second argument, it expects 'event handler' function
// As a second argument we need to pass in a function value.
// A function is also JUST A VALUE, if a function is JUST A VALUE,
// Then we can also pass it into another function as an arg.
// just like any other value, like a string or a number.

const minNumber = 1;
const maxNumber = 20;

const secretNumber = ((min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
})(minNumber, maxNumber); // Immediately-Invoked Function Expressions (IIFE)

// ************** function expression ****************************
// without 'const test = ' is just a function value.
// const test = function () {
//   console.log(2);
// };
// test();
// ***************       anonymous function/function expression/(ev.handler)
checkBtn.addEventListener('click', function (ev) {
  // we select this el,because we want the value of the num input element,
  // when 'check' button is clicked, to do the check.
  const numberInputEl = document.querySelector('.guess');
  // Whenever we get a value from the user interface(UI), it's a STRING.
  const userGuess = Number(numberInputEl.value);
  console.log(userGuess);

  const messageEl = document.querySelector('.message');

  // First scenario : always assume that there is actually no input.
  // Case: No guess (0 is a falsy value).
  if (!userGuess) {
    messageEl.textContent = 'No number! Try again!';
  } else if (userGuess === secretNumber) {
    messageEl.textContent = 'Correct number!';
  } else if (userGuess > secretNumber) {
    messageEl.textContent = 'Too High!';
  } else if (userGuess < secretNumber) {
    messageEl.textContent = 'Too Low!';
  }
});

// There are multiple ways to listen for events in JS,
// but using this addEventListener method is the best one and the most used one.

// !!!!!!!!!!!!!!!!
// The event handler contains the code we want to be executed when event happens
// Note that, we do NOT call the function(event handler) anywhere.
// We just define and pass the function in the addEventListener method.
// But it's the JS engine who'll call this function as soon as the event happens

// 74.
