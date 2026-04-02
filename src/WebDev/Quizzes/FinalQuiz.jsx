import React from 'react';
import WebDevQuiz from '../WebDevQuiz';

const questions = [
  // HTML
  { q: 'Which tag defines the main content area visible in the browser?', options: ['<head>', '<body>', '<html>', '<main>'], answer: 1, explanation: '<body> contains all the visible content of the page. <head> holds metadata not shown to users.' },
  { q: 'What is the correct HTML tag for the LARGEST heading?', options: ['<h6>', '<heading>', '<h1>', '<big>'], answer: 2, explanation: '<h1> is the largest and most important heading. Use only one per page for SEO.' },
  { q: 'Which HTML attribute makes a form input mandatory?', options: ['validate', 'mandatory', 'required', 'must'], answer: 2, explanation: 'The required attribute prevents form submission if the field is empty.' },
  { q: 'Which HTML element is used for a clickable button?', options: ['<click>', '<input type="submit"> only', '<button>', '<a>'], answer: 2, explanation: '<button> is a versatile clickable element. <input type="submit"> only works inside forms.' },
  { q: 'What does "semantic HTML" mean?', options: ['HTML with inline styles', 'Using tags that describe their meaning and purpose', 'Compressed/minified HTML', 'HTML validated by W3C'], answer: 1, explanation: 'Semantic HTML uses meaningful tags like <article>, <nav>, <header> that describe content structure, improving accessibility and SEO.' },
  // CSS
  { q: 'Which CSS property controls space INSIDE an element (between content and border)?', options: ['margin', 'spacing', 'padding', 'inset'], answer: 2, explanation: 'Padding is space inside the element. Margin is space outside (between elements).' },
  { q: 'Which value makes an element invisible but still takes up space?', options: ['display: none', 'visibility: hidden', 'opacity: 0', 'Both B and C'], answer: 3, explanation: 'visibility: hidden and opacity: 0 both hide the element but keep its space. display: none removes it from layout entirely.' },
  { q: 'What CSS property is used for responsive breakpoints?', options: ['@keyframes', '@media', '@import', '@responsive'], answer: 1, explanation: '@media queries apply different CSS at different screen sizes, enabling responsive design.' },
  { q: 'In Flexbox, which property allows items to wrap onto multiple lines?', options: ['flex-flow: wrap', 'flex-wrap: wrap', 'flex: multi', 'overflow: wrap'], answer: 1, explanation: 'flex-wrap: wrap allows flex items to move to a new line when they run out of space.' },
  { q: 'Which CSS value centers content in both directions in a flex container?', options: ['align-items: middle; justify: center', 'align-items: center; justify-content: center', 'text-align: center; vertical-align: middle', 'flex: center'], answer: 1, explanation: 'align-items: center handles cross-axis, justify-content: center handles main-axis — together they center content perfectly.' },
  // JavaScript
  { q: 'Which keyword is used to define a function in JavaScript?', options: ['def', 'func', 'function', 'define'], answer: 2, explanation: 'The function keyword declares a function. Arrow functions use the => syntax instead.' },
  { q: 'What does NaN stand for?', options: ['Not a Node', 'Null and Nothing', 'Not a Number', 'New Array Node'], answer: 2, explanation: 'NaN (Not a Number) is returned when a mathematical operation fails, e.g. parseInt("hello").' },
  { q: 'Which method converts a JSON string to a JavaScript object?', options: ['JSON.stringify()', 'JSON.parse()', 'JSON.convert()', 'Object.fromJSON()'], answer: 1, explanation: 'JSON.parse() converts a JSON string to a JS object. JSON.stringify() does the reverse.' },
  { q: 'What does the spread operator (...) do with arrays?', options: ['Creates a new empty array', 'Spreads the elements of an array into another', 'Deletes elements', 'Sorts the array'], answer: 1, explanation: 'The spread operator (...) expands array elements. [...arr1, ...arr2] merges two arrays.' },
  { q: 'Which array method returns the FIRST element matching a condition?', options: ['filter()', 'find()', 'some()', 'includes()'], answer: 1, explanation: 'find() returns the first matching element (or undefined). filter() returns ALL matching elements.' },
  // React
  { q: 'What is JSX?', options: ['A JavaScript framework', 'A database query language', 'JavaScript XML — HTML-like syntax in JavaScript', 'A CSS preprocessor'], answer: 2, explanation: 'JSX is a syntax extension that lets you write HTML-like code inside JavaScript. Babel compiles it to React.createElement() calls.' },
  { q: 'When should you use the useEffect hook?', options: ['To add state', 'For side effects like fetching data or updating the DOM', 'To create context', 'To memoize expensive calculations'], answer: 1, explanation: 'useEffect runs side effects after render — perfect for API calls, subscriptions, and DOM manipulation.' },
  { q: 'What is the Virtual DOM?', options: ['A real browser DOM element', 'A lightweight in-memory copy of the real DOM React uses for efficient updates', 'A database for storing component state', 'An alternative to HTML'], answer: 1, explanation: 'React\'s Virtual DOM is an in-memory representation. React diffs it with the real DOM and only updates what changed — making updates fast.' },
  { q: 'Which is the correct way to render a list in React?', options: ['Using a for loop inside JSX', 'Array.map() returning JSX elements with a key prop', 'Using innerHTML', 'document.createElement inside render'], answer: 1, explanation: 'Use array.map() to return JSX for each item. Always provide a unique key prop to help React track list changes.' },
  { q: 'What does "lifting state up" mean in React?', options: ['Using localStorage', 'Moving state to a parent component so multiple children can share it', 'Making a component a class component', 'Using Redux'], answer: 1, explanation: '"Lifting state up" moves shared state to the nearest common ancestor so multiple children can access and update it via props.' },
];

export default function FinalQuiz() {
  return (
    <WebDevQuiz
      title="🏆 Final Web Dev Quiz"
      questions={questions}
      color="purple"
      nextPath="/webdev"
      coursePath="/webdev"
    />
  );
}
