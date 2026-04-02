import React from 'react';
import WebDevLesson from '../WebDevLesson';

const sections = [
  {
    heading: 'Flexbox Basics',
    content: (
      <>
        <p><strong>Flexbox</strong> is a one-dimensional layout system (row OR column). Setting <code className="bg-white/10 px-1 rounded">display: flex</code> on a container makes its children <em>flex items</em> that you can align and space easily.</p>
        <br />
        <p>The two main axes: <strong>main axis</strong> (direction of flex-direction) and <strong>cross axis</strong> (perpendicular). <code className="bg-white/10 px-1 rounded">justify-content</code> aligns along the main axis, <code className="bg-white/10 px-1 rounded">align-items</code> along the cross axis.</p>
      </>
    ),
    code: `.container {
  display: flex;
  flex-direction: row;           /* row (default) | column | row-reverse */
  justify-content: space-between; /* main axis: start|end|center|space-between|space-around */
  align-items: center;            /* cross axis: stretch|start|end|center */
  flex-wrap: wrap;               /* allow items to wrap to next line */
  gap: 16px;                     /* space between flex items */
}

.item {
  flex: 1;           /* grow and shrink equally */
  flex: 0 0 200px;   /* don't grow, don't shrink, base 200px */
  flex-grow: 2;      /* take 2x more space than siblings */
  align-self: flex-end; /* override container alignment for this item */
}`,
    lang: 'css',
  },
  {
    heading: 'CSS Grid',
    content: (
      <>
        <p><strong>CSS Grid</strong> is a two-dimensional layout system (rows AND columns). It's perfect for overall page layouts where Flexbox excels at single-axis alignment.</p>
      </>
    ),
    code: `.grid-container {
  display: grid;

  /* Define columns */
  grid-template-columns: 1fr 2fr 1fr;  /* 3 cols, middle is 2x */
  grid-template-columns: repeat(3, 1fr); /* 3 equal cols */
  grid-template-columns: 200px auto;   /* fixed + flexible */

  /* Define rows */
  grid-template-rows: auto 1fr auto;  /* header, content, footer */

  gap: 20px;          /* space between all cells */
  row-gap: 10px;      /* between rows only */
  column-gap: 20px;   /* between columns only */
}

/* Place a specific item */
.hero {
  grid-column: 1 / -1;  /* span full width (all columns) */
  grid-row: 1;
}

.sidebar {
  grid-column: 1;
  grid-row: 2 / 4;   /* span rows 2–3 */
}`,
    lang: 'css',
  },
  {
    heading: 'Responsive Design',
    content: (
      <>
        <p><strong>Media queries</strong> let you apply different styles at different screen widths. Always design <em>mobile-first</em> — start with small screens and add complexity for larger ones.</p>
      </>
    ),
    code: `/* Mobile-first: base styles for small screens */
.grid {
  display: grid;
  grid-template-columns: 1fr;  /* single column on mobile */
  gap: 16px;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Common breakpoints */
/* xs: 480px, sm: 640px, md: 768px, lg: 1024px, xl: 1280px */

/* Dark mode */
@media (prefers-color-scheme: dark) {
  body { background: #0f172a; color: #f1f5f9; }
}`,
    lang: 'css',
  },
];

export default function CSSFlexbox() {
  return (
    <WebDevLesson
      title="Flexbox & Grid"
      subtitle="CSS Styling · Lesson 3"
      videoId="JJSoEo8JSnc"
      color="blue"
      keyPoints={[
        'Flexbox is 1D (row or column), Grid is 2D (rows and columns)',
        'justify-content aligns on main axis, align-items on cross axis',
        'gap property replaces margin hacks between grid/flex items',
        'grid-template-columns: repeat(3, 1fr) makes 3 equal columns',
        'grid-column: 1 / -1 spans the full row width',
        'Use mobile-first media queries for responsive design',
      ]}
      sections={sections}
      prevPath="/webdev/css/boxmodel"
      nextPath="/webdev/js/variables"
      quizPath="/webdev/quiz/css"
    />
  );
}
