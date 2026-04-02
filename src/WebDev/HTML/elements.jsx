import React from 'react';
import WebDevLesson from '../WebDevLesson';

const sections = [
  {
    heading: 'Headings & Paragraphs',
    content: (
      <>
        <p>HTML provides six levels of headings (<code className="bg-white/10 px-1 rounded">h1</code>–<code className="bg-white/10 px-1 rounded">h6</code>). Use one <code className="bg-white/10 px-1 rounded">h1</code> per page for SEO. Paragraphs use the <code className="bg-white/10 px-1 rounded">&lt;p&gt;</code> tag.</p>
        <br />
        <p>Text formatting tags: <code className="bg-white/10 px-1 rounded">&lt;strong&gt;</code> (bold), <code className="bg-white/10 px-1 rounded">&lt;em&gt;</code> (italic), <code className="bg-white/10 px-1 rounded">&lt;mark&gt;</code> (highlight), <code className="bg-white/10 px-1 rounded">&lt;code&gt;</code> (inline code).</p>
      </>
    ),
    code: `<h1>Main Page Title (one per page)</h1>
<h2>Section Heading</h2>
<h3>Subsection</h3>

<p>This is a paragraph. It flows across the full width.</p>
<p>
  You can make text <strong>bold</strong>, <em>italic</em>,
  <mark>highlighted</mark>, or <code>monospace</code>.
</p>

<!-- Line break (avoid overusing) -->
<p>Line one<br />Line two</p>

<!-- Horizontal rule -->
<hr />`,
    lang: 'html',
  },
  {
    heading: 'Links & Images',
    content: (
      <>
        <p>Links use the <code className="bg-white/10 px-1 rounded">&lt;a&gt;</code> tag with an <code className="bg-white/10 px-1 rounded">href</code> attribute. Images use <code className="bg-white/10 px-1 rounded">&lt;img&gt;</code> with <code className="bg-white/10 px-1 rounded">src</code> and <code className="bg-white/10 px-1 rounded">alt</code>.</p>
        <br />
        <p>Always include <code className="bg-white/10 px-1 rounded">alt</code> text on images — it's required for accessibility and SEO.</p>
      </>
    ),
    code: `<!-- Internal link -->
<a href="/about">About Page</a>

<!-- External link (opens in new tab) -->
<a href="https://google.com" target="_blank" rel="noopener noreferrer">
  Google
</a>

<!-- Image from URL -->
<img src="https://via.placeholder.com/400x200" alt="Placeholder image" />

<!-- Local image -->
<img src="./images/logo.png" alt="Company logo" width="200" />

<!-- Image as a link -->
<a href="/home">
  <img src="logo.png" alt="Go home" />
</a>`,
    lang: 'html',
  },
  {
    heading: 'Lists',
    content: (
      <>
        <p>HTML has three types of lists:</p>
        <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-300">
          <li><code className="bg-white/10 px-1 rounded">&lt;ul&gt;</code> — Unordered (bullet) list</li>
          <li><code className="bg-white/10 px-1 rounded">&lt;ol&gt;</code> — Ordered (numbered) list</li>
          <li><code className="bg-white/10 px-1 rounded">&lt;dl&gt;</code> — Definition list (term + description)</li>
        </ul>
      </>
    ),
    code: `<!-- Unordered list -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Ordered list -->
<ol>
  <li>Learn HTML</li>
  <li>Learn CSS</li>
  <li>Learn JavaScript</li>
</ol>

<!-- Nested list -->
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>Backend</li>
</ul>`,
    lang: 'html',
  },
  {
    heading: 'Semantic Elements',
    content: (
      <>
        <p>Semantic elements describe their meaning to both the browser and the developer. They improve <strong>accessibility</strong> and <strong>SEO</strong>.</p>
        <br />
        <p>Use semantic elements instead of generic <code className="bg-white/10 px-1 rounded">&lt;div&gt;</code> and <code className="bg-white/10 px-1 rounded">&lt;span&gt;</code> wherever possible.</p>
      </>
    ),
    code: `<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>

<main>
  <article>
    <h1>Blog Post Title</h1>
    <section>
      <h2>Introduction</h2>
      <p>Article content here...</p>
    </section>
    <aside>
      <p>Related links...</p>
    </aside>
  </article>
</main>

<footer>
  <p>&copy; 2025 My Website</p>
</footer>`,
    lang: 'html',
  },
];

export default function HTMLElements() {
  return (
    <WebDevLesson
      title="HTML Elements & Tags"
      subtitle="HTML Fundamentals · Lesson 2"
      videoId="PlxWf493en4"
      color="orange"
      keyPoints={[
        'Use h1–h6 for headings (only one h1 per page)',
        'Links use <a href="..."> and images use <img src="..." alt="...">',
        'Always add alt text to images for accessibility',
        'ul = unordered list, ol = ordered list',
        'Semantic tags (header, main, footer, article) improve SEO',
        'Use <strong> for bold, <em> for italic',
      ]}
      sections={sections}
      prevPath="/webdev/html/intro"
      nextPath="/webdev/html/forms"
    />
  );
}
