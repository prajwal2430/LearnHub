import React from 'react';
import WebDevQuiz from '../WebDevQuiz';

const questions = [
  {
    q: 'What does HTML stand for?',
    options: ['Hyper Text Markup Language', 'High Transfer Markup Language', 'HyperLink and Text Markup Language', 'Home Tool Markup Language'],
    answer: 0,
    explanation: 'HTML stands for HyperText Markup Language — it is the standard language for creating web pages.',
  },
  {
    q: 'Which tag is used to define the document type in HTML5?',
    options: ['<html>', '<doctype>', '<!DOCTYPE html>', '<head>'],
    answer: 2,
    explanation: '<!DOCTYPE html> at the top of an HTML file tells the browser this is an HTML5 document.',
  },
  {
    q: 'Where is metadata like the page title and CSS links placed?',
    options: ['<body>', '<header>', '<head>', '<meta>'],
    answer: 2,
    explanation: 'The <head> section holds metadata — the title, charset, viewport, and links to CSS files.',
  },
  {
    q: 'How many heading levels does HTML provide?',
    options: ['3', '4', '5', '6'],
    answer: 3,
    explanation: 'HTML has 6 heading levels: <h1> through <h6>. h1 is the most important and should be used once per page.',
  },
  {
    q: 'Which attribute MUST every <img> tag include for accessibility?',
    options: ['src', 'width', 'alt', 'title'],
    answer: 2,
    explanation: 'The alt attribute provides alternative text for screen readers and is required for accessibility and SEO.',
  },
  {
    q: 'Which HTML tag is used to create a hyperlink?',
    options: ['<link>', '<a>', '<href>', '<nav>'],
    answer: 1,
    explanation: 'The <a> (anchor) tag creates hyperlinks. The destination URL goes in the href attribute.',
  },
  {
    q: 'What attribute opens a link in a new browser tab?',
    options: ['rel="noopener"', 'href="_blank"', 'target="_blank"', 'open="new"'],
    answer: 2,
    explanation: 'target="_blank" opens the link in a new tab. Always pair it with rel="noopener noreferrer" for security.',
  },
  {
    q: 'Which tag creates an ORDERED (numbered) list?',
    options: ['<ul>', '<list>', '<ol>', '<dl>'],
    answer: 2,
    explanation: '<ol> creates an ordered (numbered) list. <ul> creates an unordered (bulleted) list.',
  },
  {
    q: 'Which is the correct semantic tag for the main navigation of a site?',
    options: ['<div class="nav">', '<navigation>', '<nav>', '<menu>'],
    answer: 2,
    explanation: '<nav> is the semantic tag for navigation links. Semantic tags improve accessibility and SEO.',
  },
  {
    q: 'What does the <form> tag\'s method="POST" attribute do?',
    options: [
      'Sends data in the URL (query string)',
      'Sends data in the HTTP request body',
      'Encrypts form data automatically',
      'Refreshes the page without sending data',
    ],
    answer: 1,
    explanation: 'POST sends form data in the HTTP request body — not visible in the URL, better for sensitive data.',
  },
];

export default function HTMLQuiz() {
  return (
    <WebDevQuiz
      title="HTML Fundamentals Quiz"
      questions={questions}
      color="orange"
      nextPath="/webdev/css/selectors"
      coursePath="/webdev"
    />
  );
}
