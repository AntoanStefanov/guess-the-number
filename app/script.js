'use strict';

// All of the interface is implemented in HTML. (index.html)
// We will select HTML elements based on classes, id, tag names,
// in order to manipulate them (DOM manipulation).

// It's a little bit like the way, we can select elements in CSS,
// we can do the same in JS.

// querySelector is a method available on the document object.
// arg -> selector, it's exactly the same selector that we would use in CSS.
const queryMessage = document.querySelector('.message');
const getMessage = document.getElementsByClassName('message')[0];
// exactly the same way as selecting it in CSS.

console.log(queryMessage);
console.log(getMessage);

console.log(queryMessage.textContent);
console.log(getMessage.textContent);
