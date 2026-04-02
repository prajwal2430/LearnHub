import React from 'react';
import WebDevQuiz from '../WebDevQuiz';

const questions = [
  {
    q: 'In JSX, which attribute replaces the HTML "class" attribute?',
    options: ['class', 'className', 'classList', 'cssClass'],
    answer: 1,
    explanation: 'JSX uses className instead of class because class is a reserved word in JavaScript.',
  },
  {
    q: 'What is a React component?',
    options: [
      'A CSS class',
      'An HTML template file',
      'A JavaScript function that returns JSX',
      'A JSON configuration object',
    ],
    answer: 2,
    explanation: 'A React component is a JavaScript function that returns JSX (UI description). Components are reusable building blocks.',
  },
  {
    q: 'How do you pass data from a parent component to a child?',
    options: ['State', 'Props', 'Context', 'Refs'],
    answer: 1,
    explanation: 'Props (properties) pass data from parent to child. They are read-only — the child should never modify them.',
  },
  {
    q: 'Which hook adds state to a functional component?',
    options: ['useEffect', 'useRef', 'useMemo', 'useState'],
    answer: 3,
    explanation: 'useState(initialValue) returns [currentValue, setterFunction]. Calling the setter triggers a re-render.',
  },
  {
    q: 'What happens when you call a state setter (e.g. setCount(1))?',
    options: [
      'The variable changes but the UI does not update',
      'React re-renders the component with the new state value',
      'The entire app restarts',
      'Nothing — you must also call render()',
    ],
    answer: 1,
    explanation: 'Calling a state setter schedules a re-render. React efficiently updates only the parts of the UI that changed.',
  },
];

export default function ReactQuiz() {
  return (
    <WebDevQuiz
      title="React Fundamentals Quiz"
      questions={questions}
      color="cyan"
      nextPath="/webdev/quiz/final"
      coursePath="/webdev"
    />
  );
}
