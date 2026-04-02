import React from 'react';
import WebDevLesson from '../WebDevLesson';

const sections = [
  {
    heading: 'Variables: var, let, const',
    content: (
      <>
        <p>JavaScript has three ways to declare variables. Modern JS uses <code className="bg-white/10 px-1 rounded">let</code> and <code className="bg-white/10 px-1 rounded">const</code> — never use <code className="bg-white/10 px-1 rounded">var</code> in new code.</p>
        <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-300">
          <li><code className="bg-white/10 px-1 rounded">const</code> — value can't be reassigned (use by default)</li>
          <li><code className="bg-white/10 px-1 rounded">let</code> — value can be reassigned (use when you need to change it)</li>
          <li><code className="bg-white/10 px-1 rounded">var</code> — old style, function-scoped, avoid it</li>
        </ul>
      </>
    ),
    code: `// const - cannot reassign (preferred)
const name = "Alice";
const age = 25;
const PI = 3.14159;

// let - can reassign
let score = 0;
score = 100; // OK

// var - AVOID (has weird scoping)
var oldStyle = "don't use this";

// const with objects/arrays - the reference is const, not the content
const user = { name: "Alice", age: 25 };
user.age = 26;        // ✅ allowed - modifying property
user = { name: "Bob" }; // ❌ error - can't reassign const

const nums = [1, 2, 3];
nums.push(4);  // ✅ allowed`,
    lang: 'javascript',
  },
  {
    heading: 'Data Types',
    content: (
      <>
        <p>JavaScript has 7 primitive types plus Objects. Unlike Java, JS is <strong>dynamically typed</strong> — variables can hold any type and change types.</p>
      </>
    ),
    code: `// Primitive types
const str    = "Hello";          // String
const num    = 42;                // Number (int and float are same type)
const float  = 3.14;             // Number
const bool   = true;             // Boolean
const empty  = null;             // Null (intentional absence)
const undef  = undefined;        // Undefined (unset variable)
const sym    = Symbol("id");     // Symbol (unique identifier)
const big    = 9007199254740991n; // BigInt

// Object types
const obj    = { key: "value" };
const arr    = [1, "two", true]; // Arrays can hold mixed types
const fn     = function() {};

// Type checking
console.log(typeof "hello");  // "string"
console.log(typeof 42);       // "number"
console.log(typeof null);     // "object" ← famous JS quirk!
console.log(Array.isArray(arr)); // true

// Type conversion
Number("42")    // 42
String(42)      // "42"
Boolean(0)      // false
Boolean("hi")   // true`,
    lang: 'javascript',
  },
  {
    heading: 'Operators & Conditionals',
    content: (
      <>
        <p>Use <code className="bg-white/10 px-1 rounded">===</code> (strict equality) instead of <code className="bg-white/10 px-1 rounded">==</code> always — this avoids JavaScript's type coercion surprises.</p>
      </>
    ),
    code: `// Arithmetic
const sum = 5 + 3;   // 8
const mod = 10 % 3;  // 1 (remainder)
const pow = 2 ** 10; // 1024

// Comparison (ALWAYS use === not ==)
console.log(5 === "5");  // false ✅ (strict)
console.log(5 == "5");   // true  ❌ (loose - converts types)
console.log(null == undefined); // true (one exception)

// Logical
const a = true && false; // false (AND)
const b = true || false; // true  (OR)
const c = !true;         // false (NOT)

// Nullish coalescing: use fallback if null/undefined
const username = null ?? "Guest"; // "Guest"

// Optional chaining: safe navigation
const city = user?.address?.city; // undefined (doesn't crash)

// Ternary operator
const label = score > 50 ? "Pass" : "Fail";

// Short circuit
const name = user && user.name; // name only if user exists`,
    lang: 'javascript',
  },
];

export default function JSVariables() {
  return (
    <WebDevLesson
      title="Variables & Data Types"
      subtitle="JavaScript · Lesson 1"
      videoId="hdI2bqOjy3c"
      color="yellow"
      keyPoints={[
        'Use const by default, let only when you need to reassign',
        'Never use var in modern JavaScript',
        'JS has 7 primitives: string, number, boolean, null, undefined, symbol, bigint',
        'Always use === (strict equality), never ==',
        'typeof checks the type, Array.isArray() for arrays',
        'Nullish coalescing (??) provides fallback for null/undefined',
      ]}
      sections={sections}
      prevPath="/webdev/css/flexbox"
      nextPath="/webdev/js/functions"
    />
  );
}
