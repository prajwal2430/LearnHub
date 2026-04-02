import React from 'react';
import WebDevLesson from '../WebDevLesson';

const sections = [
  {
    heading: 'The Box Model',
    content: (
      <>
        <p>Every HTML element is a rectangular <strong>box</strong>. The box model describes how space is calculated around that box:</p>
        <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-300">
          <li><strong>Content</strong> — the actual text/image inside</li>
          <li><strong>Padding</strong> — space between content and border (inside)</li>
          <li><strong>Border</strong> — the visible edge around padding</li>
          <li><strong>Margin</strong> — space outside the border (between elements)</li>
        </ul>
        <br />
        <p>By default, <code className="bg-white/10 px-1 rounded">width</code> only includes the content. Set <code className="bg-white/10 px-1 rounded">box-sizing: border-box</code> so padding and border are <em>included</em> in the width — much easier to work with!</p>
      </>
    ),
    code: `/* Always add this at the top of your CSS */
*, *::before, *::after {
  box-sizing: border-box;
}

.card {
  width: 300px;          /* Total width including padding & border */
  padding: 20px;         /* All sides */
  padding: 10px 20px;   /* Top/bottom | Left/right */
  padding: 5px 10px 15px 20px; /* Top Right Bottom Left */

  border: 2px solid #6366f1;
  border-radius: 12px;   /* Rounded corners */

  margin: 16px;          /* Space outside the card */
  margin: 0 auto;        /* Center horizontally */
}`,
    lang: 'css',
  },
  {
    heading: 'Display & Positioning',
    content: (
      <>
        <p>The <code className="bg-white/10 px-1 rounded">display</code> property controls how an element participates in the layout. The <code className="bg-white/10 px-1 rounded">position</code> property controls where it sits on the page.</p>
      </>
    ),
    code: `/* Display values */
div    { display: block; }   /* Full width, stacks vertically */
span   { display: inline; }  /* Only as wide as content, no margin/padding top/bottom */
img    { display: inline-block; } /* Inline but respects width/height */
.hide  { display: none; }    /* Removed from layout */

/* Positioning */
.relative { 
  position: relative; /* moves relative to its normal position */
  top: 10px;
  left: 20px;
}

.absolute-child {
  position: absolute; /* removed from flow, relative to nearest positioned parent */
  top: 0;
  right: 0;
}

.navbar {
  position: fixed; /* always visible, removed from flow */
  top: 0;
  width: 100%;
  z-index: 1000;   /* layer order */
}`,
    lang: 'css',
  },
  {
    heading: 'Overflow & Sizing Units',
    content: (
      <>
        <p>CSS has many units for sizing. Understanding them lets you build responsive layouts without magic numbers.</p>
      </>
    ),
    code: `/* Fixed units */
.fixed { width: 300px; }

/* Relative to parent */
.relative-width { width: 50%; }

/* Relative to viewport */
.full-screen { width: 100vw; height: 100vh; }

/* Relative to font size */
h1 { font-size: 2rem; }    /* 2x root font size (16px = 32px) */
p  { font-size: 1.1em; }   /* 1.1x parent font size */

/* Modern: clamp() - fluid sizing */
h1 { font-size: clamp(1.5rem, 4vw, 3rem); }

/* Overflow control */
.text-box {
  width: 200px;
  overflow: hidden;       /* hide overflow */
  overflow: scroll;       /* always show scrollbar */
  overflow: auto;         /* show scrollbar only when needed */
  white-space: nowrap;
  text-overflow: ellipsis; /* "..." on truncated text */
}`,
    lang: 'css',
  },
];

export default function CSSBoxModel() {
  return (
    <WebDevLesson
      title="Box Model & Layout"
      subtitle="CSS Styling · Lesson 2"
      videoId="rIO5326FgPE"
      color="blue"
      keyPoints={[
        'Every element is a box: content + padding + border + margin',
        'Always use box-sizing: border-box for predictable sizing',
        'margin: 0 auto centers a block element horizontally',
        'display: block stacks, display: inline flows with text',
        'position: fixed stays on screen, position: absolute lifts element out of flow',
        'Use rem units for fonts, % or vw for widths',
      ]}
      sections={sections}
      prevPath="/webdev/css/selectors"
      nextPath="/webdev/css/flexbox"
    />
  );
}
