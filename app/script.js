'use strict';

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

