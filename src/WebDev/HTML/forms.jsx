import React from 'react';
import WebDevLesson from '../WebDevLesson';

const sections = [
  {
    heading: 'Form Basics',
    content: (
      <>
        <p>An HTML form collects user input and submits it to a server. The <code className="bg-white/10 px-1 rounded">&lt;form&gt;</code> tag wraps all inputs. The <code className="bg-white/10 px-1 rounded">action</code> attribute specifies where to send the data, and <code className="bg-white/10 px-1 rounded">method</code> specifies GET or POST.</p>
        <br />
        <p>Every input should be paired with a <code className="bg-white/10 px-1 rounded">&lt;label&gt;</code> using the <code className="bg-white/10 px-1 rounded">for</code> attribute matching the input's <code className="bg-white/10 px-1 rounded">id</code> — this is critical for accessibility.</p>
      </>
    ),
    code: `<form action="/submit" method="POST">
  <!-- Text input with label -->
  <label for="name">Full Name</label>
  <input type="text" id="name" name="name" placeholder="John Doe" required />

  <!-- Email input -->
  <label for="email">Email Address</label>
  <input type="email" id="email" name="email" required />

  <!-- Password -->
  <label for="password">Password</label>
  <input type="password" id="password" name="password" minlength="8" required />

  <!-- Submit button -->
  <button type="submit">Sign Up</button>
</form>`,
    lang: 'html',
  },
  {
    heading: 'Input Types',
    content: (
      <>
        <p>HTML5 introduced many specialized input types. Using the correct type gives users a better experience (especially on mobile) and enables built-in browser validation.</p>
      </>
    ),
    code: `<!-- Number input with min/max -->
<input type="number" name="age" min="1" max="120" />

<!-- Date picker -->
<input type="date" name="birthday" />

<!-- Color picker -->
<input type="color" name="theme" value="#6366f1" />

<!-- Range slider -->
<input type="range" name="volume" min="0" max="100" step="5" />

<!-- File upload -->
<input type="file" name="avatar" accept="image/*" />

<!-- Checkbox -->
<input type="checkbox" id="agree" name="agree" />
<label for="agree">I agree to the terms</label>

<!-- Radio buttons -->
<input type="radio" id="dev" name="role" value="developer" />
<label for="dev">Developer</label>
<input type="radio" id="des" name="role" value="designer" />
<label for="des">Designer</label>`,
    lang: 'html',
  },
  {
    heading: 'Select, Textarea & Fieldset',
    content: (
      <>
        <p>Use <code className="bg-white/10 px-1 rounded">&lt;select&gt;</code> for dropdowns, <code className="bg-white/10 px-1 rounded">&lt;textarea&gt;</code> for multi-line text, and <code className="bg-white/10 px-1 rounded">&lt;fieldset&gt;</code> to group related inputs visually.</p>
      </>
    ),
    code: `<!-- Dropdown -->
<label for="country">Country</label>
<select id="country" name="country">
  <option value="">Select a country</option>
  <option value="in">India</option>
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
</select>

<!-- Multi-line text -->
<label for="bio">Your Bio</label>
<textarea id="bio" name="bio" rows="4" cols="50"
  placeholder="Tell us about yourself..."></textarea>

<!-- Grouping related fields -->
<fieldset>
  <legend>Shipping Address</legend>
  <input type="text" name="street" placeholder="Street" />
  <input type="text" name="city" placeholder="City" />
  <input type="text" name="zip" placeholder="ZIP Code" />
</fieldset>`,
    lang: 'html',
  },
];

export default function HTMLForms() {
  return (
    <WebDevLesson
      title="HTML Forms"
      subtitle="HTML Fundamentals · Lesson 3"
      videoId="fNcJuPIZ2BE"
      color="orange"
      keyPoints={[
        'Forms use <form action="..." method="POST/GET">',
        'Always pair inputs with <label for="id">',
        'Use type="email", "number", "date" for built-in validation',
        'required attribute prevents empty submission',
        '<select> for dropdowns, <textarea> for multi-line text',
        '<fieldset> groups related form controls visually',
      ]}
      sections={sections}
      prevPath="/webdev/html/elements"
      nextPath="/webdev/css/selectors"
      quizPath="/webdev/quiz/html"
    />
  );
}
