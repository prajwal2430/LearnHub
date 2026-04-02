import React from 'react';
import WebDevQuiz from '../WebDevQuiz';

const questions = [
  {
    q: 'Which CSS property changes the text color of an element?',
    options: ['font-color', 'text-color', 'color', 'foreground'],
    answer: 2,
    explanation: 'The color property sets the text color. background-color sets the background.',
  },
  {
    q: 'What does the CSS box model consist of (from inside out)?',
    options: [
      'Margin → Border → Padding → Content',
      'Content → Padding → Border → Margin',
      'Padding → Content → Border → Margin',
      'Content → Border → Padding → Margin',
    ],
    answer: 1,
    explanation: 'The box model from inside out: Content → Padding → Border → Margin.',
  },
  {
    q: 'Which declaration includes padding and border INSIDE the width?',
    options: ['box-sizing: include-all', 'box-sizing: border-box', 'box-sizing: content-box', 'box-sizing: padding-box'],
    answer: 1,
    explanation: 'box-sizing: border-box makes width include padding and border. This is the recommended modern approach.',
  },
  {
    q: 'Which selector targets an element with class "card"?',
    options: ['#card', '.card', 'card', '*card'],
    answer: 1,
    explanation: 'Class selectors use a dot (.) prefix. ID selectors use a hash (#) prefix.',
  },
  {
    q: 'Which pseudo-class applies styles when hovering over an element?',
    options: [':active', ':focus', ':visited', ':hover'],
    answer: 3,
    explanation: ':hover applies styles when the user\'s mouse is over the element.',
  },
  {
    q: 'To center a block element horizontally, which margin works?',
    options: ['margin: center', 'margin: 0 center', 'margin: 0 auto', 'align: center'],
    answer: 2,
    explanation: 'margin: 0 auto centers a block element with a defined width. It sets top/bottom to 0 and left/right to auto.',
  },
  {
    q: 'Which CSS property makes a flex container?',
    options: ['layout: flex', 'display: flex', 'position: flex', 'flex: true'],
    answer: 1,
    explanation: 'display: flex on a container enables Flexbox, making all direct children flex items.',
  },
  {
    q: 'In Flexbox, which property aligns items along the MAIN axis?',
    options: ['align-items', 'align-content', 'justify-content', 'flex-align'],
    answer: 2,
    explanation: 'justify-content aligns flex items along the main axis (horizontal for row, vertical for column).',
  },
  {
    q: 'Which CSS Grid property defines column sizes?',
    options: ['grid-columns', 'grid-template-columns', 'column-template', 'grid-areas'],
    answer: 1,
    explanation: 'grid-template-columns defines the number and size of columns. E.g. repeat(3, 1fr) makes 3 equal columns.',
  },
  {
    q: 'What does the "fr" unit mean in CSS Grid?',
    options: ['Fixed ratio', 'Frame', 'Fractional unit of available space', 'Free region'],
    answer: 2,
    explanation: 'fr represents a fraction of the available space. 1fr 2fr gives the second column twice the space of the first.',
  },
];

export default function CSSQuiz() {
  return (
    <WebDevQuiz
      title="CSS Styling Quiz"
      questions={questions}
      color="blue"
      nextPath="/webdev/js/variables"
      coursePath="/webdev"
    />
  );
}
