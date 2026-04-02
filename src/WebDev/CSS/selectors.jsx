import React from 'react';
import WebDevLesson from '../WebDevLesson';

const sections = [
  {
    heading: 'What is CSS?',
    content: (
      <>
        <p>CSS (Cascading Style Sheets) controls the <strong>visual presentation</strong> of HTML elements. You link a CSS file using <code className="bg-white/10 px-1 rounded">&lt;link rel="stylesheet" href="styles.css"&gt;</code> in the HTML head.</p>
        <br />
        <p>A CSS rule has a <strong>selector</strong> (what to style), a <strong>property</strong> (what aspect), and a <strong>value</strong>:</p>
        <pre className="mt-2 bg-white/5 rounded p-3 text-sm font-mono">selector {'{'} property: value; {'}'}</pre>
      </>
    ),
    code: `/* Target all paragraphs */
p {
  color: #6366f1;
  font-size: 16px;
  line-height: 1.6;
}

/* Target by class */
.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
}

/* Target by ID */
#hero {
  text-align: center;
  padding: 60px 20px;
}`,
    lang: 'css',
  },
  {
    heading: 'Selector Types',
    content: (
      <>
        <p>CSS has many types of selectors — from simple element selectors to complex combinators. Knowing them gives you precise control over which elements to style.</p>
      </>
    ),
    code: `/* Element selector */
h1 { color: navy; }

/* Class selector */
.highlight { background: yellow; }

/* ID selector (use sparingly) */
#header { position: fixed; }

/* Descendant: p inside .card */
.card p { font-size: 14px; }

/* Child: direct li inside ul */
ul > li { list-style: disc; }

/* Pseudo-class */
a:hover { color: purple; text-decoration: underline; }
button:focus { outline: 2px solid blue; }
li:first-child { font-weight: bold; }
li:nth-child(2n) { background: #f0f0f0; } /* even rows */

/* Pseudo-element */
p::first-letter { font-size: 2em; font-weight: bold; }
h2::before { content: "→ "; }

/* Attribute selector */
input[type="email"] { border-color: blue; }
a[target="_blank"]::after { content: " ↗"; }`,
    lang: 'css',
  },
  {
    heading: 'Colors & Typography',
    content: (
      <>
        <p>CSS supports many color formats: named colors, HEX, RGB, RGBA (with opacity), HSL. Typography controls fonts, sizes, weights, and spacing.</p>
      </>
    ),
    code: `/* Color formats */
.example {
  color: tomato;               /* Named */
  color: #6366f1;              /* HEX */
  color: rgb(99, 102, 241);   /* RGB */
  color: rgba(99, 102, 241, 0.5); /* RGBA - semi-transparent */
  color: hsl(239, 84%, 67%);  /* HSL */
}

/* Typography */
body {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 16px;        /* Base size */
  font-weight: 400;       /* Normal */
  line-height: 1.6;       /* Comfortable reading */
  letter-spacing: 0.01em;
}

h1 {
  font-size: clamp(2rem, 5vw, 4rem); /* Fluid type */
  font-weight: 700;
  text-transform: uppercase;
}

/* Google Fonts (add link in <head> first) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');`,
    lang: 'css',
  },
];

export default function CSSSelectors() {
  return (
    <WebDevLesson
      title="CSS Selectors & Properties"
      subtitle="CSS Styling · Lesson 1"
      videoId="yfoY53QXEnI"
      color="blue"
      keyPoints={[
        'CSS = selector { property: value; }',
        'Classes (.name) and IDs (#name) target specific elements',
        'Pseudo-classes (:hover, :focus, :nth-child) add interactivity',
        'Pseudo-elements (::before, ::after) insert virtual content',
        'Use RGB/HSL colors for more control than HEX',
        'font-family, font-size, font-weight control typography',
      ]}
      sections={sections}
      prevPath="/webdev/html/forms"
      nextPath="/webdev/css/boxmodel"
    />
  );
}
