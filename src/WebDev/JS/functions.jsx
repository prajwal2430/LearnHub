import React from 'react';
import WebDevLesson from '../WebDevLesson';

const sections = [
  {
    heading: 'Functions',
    content: (
      <>
        <p>Functions are reusable blocks of code. JavaScript has multiple ways to define them — each has different behaviour around <strong>this</strong> and hoisting.</p>
      </>
    ),
    code: `// Function declaration (hoisted - can call before definition)
function greet(name) {
  return "Hello, " + name + "!";
}

// Function expression (not hoisted)
const greet = function(name) {
  return \`Hello, \${name}!\`;
};

// Arrow function (modern, concise - no own 'this')
const greet = (name) => \`Hello, \${name}!\`;
const double = n => n * 2;           // single param, implicit return
const add = (a, b) => a + b;        // two params
const getObj = (x) => ({ val: x }); // return object (wrap in parens)

// Default parameters
function greet(name = "World") {
  return \`Hello, \${name}!\`;
}

// Rest parameters
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
sum(1, 2, 3, 4); // 10`,
    lang: 'javascript',
  },
  {
    heading: 'Events',
    content: (
      <>
        <p>Events let you respond to user actions like clicks, keypresses, form submissions, and mouse movements. Use <code className="bg-white/10 px-1 rounded">addEventListener</code> — never inline <code className="bg-white/10 px-1 rounded">onclick</code> in HTML.</p>
      </>
    ),
    code: `const btn = document.getElementById('myButton');

// Click event
btn.addEventListener('click', function(event) {
  console.log('Button clicked!');
  console.log(event.target); // the element that was clicked
});

// Arrow function style
btn.addEventListener('click', (e) => {
  e.preventDefault(); // stop default behavior (e.g. form submit)
  e.stopPropagation(); // stop event bubbling up to parents
});

// Common events
element.addEventListener('mouseover', handler);
element.addEventListener('mouseout', handler);
element.addEventListener('keydown', (e) => console.log(e.key));
element.addEventListener('keyup', handler);
element.addEventListener('input', (e) => console.log(e.target.value));
element.addEventListener('change', handler);

// Form submit
form.addEventListener('submit', (e) => {
  e.preventDefault(); // stop page reload
  const data = new FormData(e.target);
  console.log(data.get('email'));
});`,
    lang: 'javascript',
  },
  {
    heading: 'Array & String Methods',
    content: (
      <>
        <p>JavaScript arrays have powerful built-in methods. These are essential for working with data in any web app.</p>
      </>
    ),
    code: `const nums = [3, 1, 4, 1, 5, 9, 2, 6];

// Transformation
nums.map(n => n * 2);           // [6, 2, 8, 2, 10, 18, 4, 12]
nums.filter(n => n > 3);        // [4, 5, 9, 6]
nums.reduce((acc, n) => acc + n, 0); // 31 (sum)
nums.sort((a, b) => a - b);     // [1, 1, 2, 3, 4, 5, 6, 9]
nums.find(n => n > 4);          // 5 (first match)
nums.every(n => n > 0);         // true (all positive)
nums.some(n => n > 8);          // true (at least one > 8)

// Mutation
nums.push(7);      // add to end
nums.pop();        // remove from end
nums.unshift(0);   // add to start
nums.shift();      // remove from start
nums.splice(1, 2); // remove 2 items at index 1

// String methods
const str = "  Hello World  ";
str.trim();                     // "Hello World"
str.toLowerCase();              // "  hello world  "
str.split(" ");                 // ["", "", "Hello", "World", "", ""]
"hello".includes("ell");        // true
"hello".replace("hello","hi");  // "hi"
\`Name: \${"Alice"}\`;            // Template literal`,
    lang: 'javascript',
  },
];

export default function JSFunctions() {
  return (
    <WebDevLesson
      title="Functions & Events"
      subtitle="JavaScript · Lesson 2"
      videoId="xUI5Tsl2JpY"
      color="yellow"
      keyPoints={[
        'Arrow functions => are concise and don\'t have their own "this"',
        'Use addEventListener, never inline onclick in HTML',
        'e.preventDefault() stops default browser behavior',
        'map/filter/reduce are the most important array methods',
        'Template literals `${var}` replace string concatenation',
        'Default parameters provide fallbacks: function(x = "default")',
      ]}
      sections={sections}
      prevPath="/webdev/js/variables"
      nextPath="/webdev/js/dom"
    />
  );
}
