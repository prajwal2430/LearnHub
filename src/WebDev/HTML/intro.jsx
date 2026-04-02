import React from 'react';
import WebDevLesson from '../../WebDev/WebDevLesson';

const sections = [
  {
    heading: 'What is HTML?',
    content: (
      <>
        <p>HTML stands for <strong>HyperText Markup Language</strong>. It is the standard language for creating web pages. Every website you visit is built on HTML — it defines the <em>structure and meaning</em> of web content.</p>
        <br />
        <p>HTML uses <strong>elements</strong> represented by <strong>tags</strong> (written inside angle brackets like <code className="bg-white/10 px-1 rounded">&lt;tag&gt;</code>). Most elements have an opening and closing tag.</p>
        <br />
        <p>Browsers read your HTML file and render it as a visual webpage. The browser never shows the tags themselves — only the result.</p>
      </>
    ),
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Hello, World! 🌍</h1>
    <p>Welcome to my first webpage.</p>
  </body>
</html>`,
    lang: 'html',
  },
  {
    heading: 'HTML Document Structure',
    content: (
      <>
        <p>Every HTML page follows a standard structure:</p>
        <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-300">
          <li><code className="bg-white/10 px-1 rounded">&lt;!DOCTYPE html&gt;</code> — tells the browser this is an HTML5 document</li>
          <li><code className="bg-white/10 px-1 rounded">&lt;html&gt;</code> — the root element containing everything</li>
          <li><code className="bg-white/10 px-1 rounded">&lt;head&gt;</code> — metadata (title, charset, links to CSS)</li>
          <li><code className="bg-white/10 px-1 rounded">&lt;body&gt;</code> — the visible content of the page</li>
        </ul>
        <br />
        <p>The <code className="bg-white/10 px-1 rounded">&lt;head&gt;</code> section is never shown directly but controls how the browser and search engines treat your page.</p>
      </>
    ),
    code: `<head>
  <!-- Character encoding — always include this -->
  <meta charset="UTF-8" />

  <!-- Makes the site mobile-friendly -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Page title shown in the browser tab -->
  <title>My Awesome Site</title>

  <!-- Link to external CSS file -->
  <link rel="stylesheet" href="styles.css" />
</head>`,
    lang: 'html',
  },
  {
    heading: 'Comments & Best Practices',
    content: (
      <>
        <p>HTML comments help you document your code. They are not visible to users but are essential for collaboration.</p>
        <br />
        <p><strong>Best Practices:</strong></p>
        <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-300">
          <li>Always include <code className="bg-white/10 px-1 rounded">&lt;!DOCTYPE html&gt;</code></li>
          <li>Use lowercase for tag names</li>
          <li>Always close your tags</li>
          <li>Use meaningful indentation for readability</li>
          <li>Add alt text to all images</li>
        </ul>
      </>
    ),
    code: `<!-- This is an HTML comment — not visible in browser -->

<!-- BAD: uppercase, not closed -->
<P>Hello

<!-- GOOD: lowercase, properly closed -->
<p>Hello</p>

<!-- GOOD: indentation makes nesting clear -->
<div>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>`,
    lang: 'html',
  },
];

export default function HTMLIntro() {
  return (
    <WebDevLesson
      title="Introduction to HTML"
      subtitle="HTML Fundamentals · Lesson 1"
      videoId="UB1O30fR-EE"
      color="orange"
      keyPoints={[
        'HTML stands for HyperText Markup Language',
        'It defines the structure and content of web pages',
        'Tags are written inside < > angle brackets',
        'Most tags have an opening and closing pair',
        'The <head> holds metadata, <body> holds visible content',
        'Always start with <!DOCTYPE html>',
      ]}
      sections={sections}
      nextPath="/webdev/html/elements"
    />
  );
}
