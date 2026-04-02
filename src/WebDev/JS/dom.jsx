import React from 'react';
import WebDevLesson from '../WebDevLesson';

const sections = [
  {
    heading: 'Selecting Elements',
    content: (
      <>
        <p>The <strong>DOM (Document Object Model)</strong> is the browser's live representation of your HTML as a tree of objects that JavaScript can read and modify.</p>
      </>
    ),
    code: `// Modern selectors (preferred)
const el  = document.querySelector('.card');       // first match
const els = document.querySelectorAll('.card');    // all matches (NodeList)

// Old-style selectors
document.getElementById('hero');                   // by id
document.getElementsByClassName('card');           // HTMLCollection
document.getElementsByTagName('div');

// Traversing the tree
const parent  = el.parentElement;
const child   = el.firstElementChild;
const sibling = el.nextElementSibling;
const kids    = el.children;                       // HTMLCollection

// Convert NodeList to array for array methods
const cards = [...document.querySelectorAll('.card')];
cards.map(c => c.textContent);`,
    lang: 'javascript',
  },
  {
    heading: 'Modifying Elements',
    content: (
      <>
        <p>You can read and write element content, attributes, styles, and classes dynamically in response to user actions or data changes.</p>
      </>
    ),
    code: `const el = document.querySelector('.title');

// Read/write content
el.textContent = "New Title";            // plain text (safe)
el.innerHTML = "<strong>Bold</strong>";  // renders HTML (⚠️ XSS risk)

// Attributes
el.getAttribute('href');
el.setAttribute('href', '/new-page');
el.removeAttribute('disabled');
el.dataset.userId = '123';     // <div data-user-id="123">

// CSS Classes (preferred over className)
el.classList.add('active');
el.classList.remove('hidden');
el.classList.toggle('open');       // add if missing, remove if present
el.classList.contains('active');   // true/false

// Inline styles (use classes instead when possible)
el.style.color = 'red';
el.style.display = 'none';
el.style.backgroundColor = '#6366f1';

// Reading computed styles
getComputedStyle(el).fontSize;`,
    lang: 'javascript',
  },
  {
    heading: 'Creating & Removing Elements',
    content: (
      <>
        <p>You can dynamically build and tear down the DOM at runtime — this is how modern web apps render lists, modals, and dynamic content.</p>
      </>
    ),
    code: `// Create an element
const card = document.createElement('div');
card.classList.add('card');
card.textContent = 'New Card';

// Add to the DOM
document.body.appendChild(card);                          // end of body
document.querySelector('.list').prepend(card);            // start of .list
document.querySelector('#after').after(card);             // after #after

// Better: insertAdjacentHTML (fast, one-liner)
document.querySelector('.list').insertAdjacentHTML(
  'beforeend',
  '<li class="item">New Item</li>'
);

// Remove an element
card.remove();

// Practical example: render a list from data
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

const list = document.getElementById('user-list');
list.innerHTML = users
  .map(u => \`<li data-id="\${u.id}">\${u.name}</li>\`)
  .join('');`,
    lang: 'javascript',
  },
];

export default function JSDOM() {
  return (
    <WebDevLesson
      title="DOM Manipulation"
      subtitle="JavaScript · Lesson 3"
      videoId="5fb2aPlgoys"
      color="yellow"
      keyPoints={[
        'querySelector returns first match, querySelectorAll returns all',
        'Use classList.add/remove/toggle instead of className',
        'textContent is safe; innerHTML can allow XSS attacks',
        'createElement + appendChild builds elements dynamically',
        'insertAdjacentHTML is a fast one-liner alternative',
        'el.remove() removes an element from the page',
      ]}
      sections={sections}
      prevPath="/webdev/js/functions"
      nextPath="/webdev/react/components"
      quizPath="/webdev/quiz/js"
    />
  );
}
