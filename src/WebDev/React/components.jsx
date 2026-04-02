import React from 'react';
import WebDevLesson from '../WebDevLesson';

const sections = [
  {
    heading: 'What is React?',
    content: (
      <>
        <p>React is a JavaScript library for building <strong>user interfaces</strong>. Instead of manipulating the DOM directly, you describe <em>what</em> the UI should look like and React handles the updates efficiently using a <strong>Virtual DOM</strong>.</p>
        <br />
        <p>React apps are made of <strong>components</strong> — reusable, self-contained pieces of UI. Components are just JavaScript functions that return <strong>JSX</strong> (HTML-like syntax inside JavaScript).</p>
      </>
    ),
    code: `// A React component is just a function that returns JSX
function Greeting() {
  return (
    <div className="card">
      <h1>Hello, World! 👋</h1>
      <p>Welcome to React.</p>
    </div>
  );
}

// JSX differences from HTML:
// 1. Use className instead of class
// 2. All tags must be closed: <br /> not <br>
// 3. Expressions go in { curly braces }
// 4. Return one root element (or use <> fragment </>)

function App() {
  const name = "Alice";
  return (
    <>
      <Greeting />
      <p>Logged in as: {name}</p>
      <p>2 + 2 = {2 + 2}</p>
    </>
  );
}`,
    lang: 'jsx',
  },
  {
    heading: 'Props',
    content: (
      <>
        <p><strong>Props</strong> (properties) are how you pass data from a parent component to a child. They make components reusable with different data.</p>
        <br />
        <p>Props are <em>read-only</em> — a child component should never modify its props.</p>
      </>
    ),
    code: `// Child component receives props as function argument
function UserCard({ name, role, avatar, isOnline }) {
  return (
    <div className="card">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
      {isOnline && <span className="badge">🟢 Online</span>}
    </div>
  );
}

// Parent passes props like HTML attributes
function App() {
  return (
    <div>
      <UserCard
        name="Alice"
        role="Developer"
        avatar="/alice.jpg"
        isOnline={true}
      />
      <UserCard
        name="Bob"
        role="Designer"
        avatar="/bob.jpg"
        isOnline={false}
      />
    </div>
  );
}

// Default props
function Button({ label = "Click me", color = "blue" }) {
  return <button style={{ background: color }}>{label}</button>;
}`,
    lang: 'jsx',
  },
  {
    heading: 'State with useState',
    content: (
      <>
        <p><strong>State</strong> is data that can change over time and causes React to re-render the component. Use the <code className="bg-white/10 px-1 rounded">useState</code> hook to add state to functional components.</p>
        <br />
        <p>Never mutate state directly — always use the setter function returned by useState.</p>
      </>
    ),
    code: `import React, { useState } from 'react';

function Counter() {
  // [currentValue, setterFunction] = useState(initialValue)
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div>
      <p>Count: {count}</p>

      {/* Update state with setter */}
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(prev => prev - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>

      {/* Controlled input - input value linked to state */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />
      <p>Hello, {name || 'stranger'}!</p>

      {/* Conditional rendering */}
      {count > 10 && <p>🎉 Over 10!</p>}
      {count < 0 ? <p>❌ Negative</p> : <p>✅ Positive</p>}
    </div>
  );
}`,
    lang: 'jsx',
  },
];

export default function ReactComponents() {
  return (
    <WebDevLesson
      title="Components, Props & State"
      subtitle="React Fundamentals · Lesson 1"
      videoId="w7ejDZ8SWv8"
      color="cyan"
      keyPoints={[
        'React components are functions that return JSX',
        'Use className (not class) and close all tags in JSX',
        'Props pass data from parent to child (read-only)',
        'State is data that changes and triggers re-renders',
        'useState(initialValue) returns [value, setter]',
        'Never mutate state directly — use the setter function',
      ]}
      sections={sections}
      prevPath="/webdev/js/dom"
      quizPath="/webdev/quiz/react"
    />
  );
}
