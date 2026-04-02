import React from 'react';
import WebDevQuiz from '../WebDevQuiz';

const questions = [
  {
    q: 'Which keyword declares a variable that CANNOT be reassigned?',
    options: ['var', 'let', 'const', 'final'],
    answer: 2,
    explanation: 'const declares a variable that cannot be reassigned. Use it by default; use let only when reassignment is needed.',
  },
  {
    q: 'What is the result of: typeof null?',
    options: ['"null"', '"undefined"', '"object"', '"boolean"'],
    answer: 2,
    explanation: 'typeof null returns "object" — this is a famous JavaScript bug that cannot be fixed for backwards compatibility.',
  },
  {
    q: 'Which comparison operator checks BOTH value AND type?',
    options: ['==', '===', '=', '!='],
    answer: 1,
    explanation: '=== is strict equality — it checks both value and type. Always prefer === over == to avoid type coercion surprises.',
  },
  {
    q: 'What does this arrow function return?  const double = n => n * 2;',
    options: ['Nothing — it has no return keyword', 'n * 2', '"n * 2"', 'undefined'],
    answer: 1,
    explanation: 'Arrow functions with a single expression and no curly braces have an implicit return. double(5) returns 10.',
  },
  {
    q: 'Which array method creates a NEW array by transforming each element?',
    options: ['forEach()', 'filter()', 'map()', 'reduce()'],
    answer: 2,
    explanation: 'map() creates a new array by applying a function to every element. forEach() also iterates but returns undefined.',
  },
  {
    q: 'Which array method returns only elements that pass a test?',
    options: ['map()', 'find()', 'filter()', 'some()'],
    answer: 2,
    explanation: 'filter() returns a new array containing only the elements for which the callback returns true.',
  },
  {
    q: 'How do you add an event listener properly in modern JS?',
    options: [
      'element.onclick = handler',
      'element.addEventListener("click", handler)',
      '<button onclick="handler()">',
      'element.on("click", handler)',
    ],
    answer: 1,
    explanation: 'addEventListener is the recommended way. It allows multiple listeners on the same element.',
  },
  {
    q: 'What does e.preventDefault() do inside an event handler?',
    options: [
      'Stops the event from bubbling up',
      'Removes the event listener',
      'Prevents the browser\'s default action (e.g. form submit page reload)',
      'Cancels setTimeout',
    ],
    answer: 2,
    explanation: 'e.preventDefault() stops the browser\'s default action, such as a form reloading the page on submit.',
  },
  {
    q: 'Which DOM method selects THE FIRST matching element?',
    options: ['getElementById()', 'querySelectorAll()', 'getElementsByClassName()', 'querySelector()'],
    answer: 3,
    explanation: 'querySelector() returns the first element matching the CSS selector. querySelectorAll() returns all matches as a NodeList.',
  },
  {
    q: 'Which property sets plain text content of an element (safe from XSS)?',
    options: ['innerHTML', 'outerHTML', 'textContent', 'innerText'],
    answer: 2,
    explanation: 'textContent sets or gets plain text. innerHTML parses HTML and can be vulnerable to XSS if used with user input.',
  },
];

export default function JSQuiz() {
  return (
    <WebDevQuiz
      title="JavaScript Quiz"
      questions={questions}
      color="yellow"
      nextPath="/webdev/react/components"
      coursePath="/webdev"
    />
  );
}
