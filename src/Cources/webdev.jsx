import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import CourseProgressBar from '../components/CourseProgressBar';

const quizLinks = [
  { label: '🌐 HTML Quiz',  path: '/webdev/quiz/html',  color: 'text-orange-300' },
  { label: '🎨 CSS Quiz',   path: '/webdev/quiz/css',   color: 'text-blue-300'   },
  { label: '⚙️ JS Quiz',    path: '/webdev/quiz/js',    color: 'text-yellow-300' },
  { label: '⚛️ React Quiz', path: '/webdev/quiz/react', color: 'text-cyan-300'   },
  { label: '🏆 Final Quiz', path: '/webdev/quiz/final', color: 'text-purple-300' },
];

const webDevConcepts = [
  {
    id: 1, title: '🌐 HTML Fundamentals', mission: 'Build the Structure',
    script: 'Every website starts with HTML. Learn the building blocks of the web — tags, elements, and forms.',
    color: 'from-orange-500 to-amber-500', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30',
    quizPath: '/webdev/quiz/html',
    subtopics: [
      { id: 1.1, title: 'Intro to HTML',       path: '/webdev/html/intro',    mission: 'Your First Webpage', script: 'Write your first HTML page and understand how browsers parse markup.', icon: '📄' },
      { id: 1.2, title: 'HTML Elements & Tags', path: '/webdev/html/elements', mission: 'Master the Tags',    script: 'Learn headings, paragraphs, images, links, lists, and semantic elements.', icon: '🏷️' },
      { id: 1.3, title: 'HTML Forms',           path: '/webdev/html/forms',    mission: 'Capture User Input', script: 'Build interactive forms with inputs, buttons, dropdowns and validations.', icon: '📝' },
    ],
  },
  {
    id: 2, title: '🎨 CSS Styling', mission: 'Make It Beautiful',
    script: 'CSS gives your HTML life and color. Master selectors, the box model, Flexbox, and Grid.',
    color: 'from-blue-500 to-cyan-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30',
    quizPath: '/webdev/quiz/css',
    subtopics: [
      { id: 2.1, title: 'Selectors & Properties', path: '/webdev/css/selectors', mission: 'Target Everything', script: 'Learn how to select HTML elements and apply styles with precision.',   icon: '🎯' },
      { id: 2.2, title: 'Box Model & Layout',      path: '/webdev/css/boxmodel',  mission: 'The Box Universe',  script: 'Understand padding, margin, border, and how elements take up space.', icon: '📦' },
      { id: 2.3, title: 'Flexbox & Grid',          path: '/webdev/css/flexbox',   mission: 'Layout Master',     script: 'Build modern, responsive layouts with CSS Flexbox and Grid.',         icon: '⚡' },
    ],
  },
  {
    id: 3, title: '⚙️ JavaScript Basics', mission: 'Add Interactivity',
    script: 'JavaScript makes your pages dynamic. Learn variables, functions, and DOM manipulation.',
    color: 'from-yellow-400 to-orange-400', bgColor: 'bg-yellow-500/10', borderColor: 'border-yellow-500/30',
    quizPath: '/webdev/quiz/js',
    subtopics: [
      { id: 3.1, title: 'Variables & Data Types', path: '/webdev/js/variables', mission: 'Store the Data',     script: 'Learn var, let, const and the fundamental JS data types.',             icon: '📦' },
      { id: 3.2, title: 'Functions & Events',     path: '/webdev/js/functions', mission: 'Make Things Happen', script: 'Write reusable functions and respond to user events.',                  icon: '⚡' },
      { id: 3.3, title: 'DOM Manipulation',        path: '/webdev/js/dom',       mission: 'Control the Page',  script: 'Select, modify, and create HTML elements with JavaScript.',            icon: '🌳' },
    ],
  },
  {
    id: 4, title: '⚛️ React Fundamentals', mission: 'Build Modern Apps',
    script: 'React powers millions of modern web apps. Learn components, props, and state.',
    color: 'from-cyan-400 to-teal-400', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30',
    quizPath: '/webdev/quiz/react',
    subtopics: [
      { id: 4.1, title: 'Components & Props', path: '/webdev/react/components', mission: 'Build with Blocks', script: 'Learn to create reusable React components and pass data with props.', icon: '🧩' },
    ],
  },
];

/* ── Sidebar ─────────────────────────── */
const Sidebar = ({ concepts, isVisible, onToggle, selectedId, onSelect }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(1);
  return (
    <div className={`bg-gray-950/90 backdrop-blur-md text-white w-64 fixed left-0 top-[4rem] h-[calc(100vh-4rem)] p-4 transition-transform duration-300 ${isVisible ? 'translate-x-0' : '-translate-x-full'} z-50 overflow-y-auto border-r border-white/10`}>
      <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">Course Topics</h2>
      <ul className="space-y-2">
        {concepts.map((concept) => (
          <li key={concept.id}>
            <button
              onClick={() => { setExpanded(expanded === concept.id ? null : concept.id); onSelect(concept.id); }}
              className={`w-full text-left px-3 py-2 rounded-lg flex justify-between items-center transition-all text-sm font-semibold ${selectedId === concept.id ? `bg-gradient-to-r ${concept.color} text-white` : 'text-gray-300 hover:bg-white/10'}`}
            >
              <span>{concept.title}</span>
              <span className="text-xs">{expanded === concept.id ? '▲' : '▼'}</span>
            </button>
            {expanded === concept.id && (
              <ul className="mt-1 ml-3 space-y-1">
                {concept.subtopics.map((sub) => (
                  <li key={sub.id}>
                    <Link to={sub.path} onClick={onToggle} className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-white/10 transition">
                      <span>{sub.icon}</span> {sub.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to={concept.quizPath} onClick={onToggle} className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold text-purple-400 hover:text-white hover:bg-purple-500/20 transition">
                    🧠 Take Quiz
                  </Link>
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-6 border-t border-white/10 pt-4">
        <p className="text-xs text-gray-500 uppercase tracking-widest px-2 mb-2">Quizzes</p>
        {quizLinks.map((q) => (
          <button key={q.path} onClick={() => { navigate(q.path); onToggle(); }}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold ${q.color} hover:bg-white/10 transition`}>
            {q.label}
          </button>
        ))}
      </div>
      <button onClick={onToggle} className="mt-4 w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 text-sm transition">
        ✕ Close Sidebar
      </button>
    </div>
  );
};

/* ── Main Course Page ────────────────── */
const WebDevCourse = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(1);
  const navigate = useNavigate();
  const { getProgress, resetProgress } = useProgress();
  const progress = getProgress('webdev');
  const current = webDevConcepts.find((c) => c.id === selectedTopic);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 text-white overflow-hidden relative pt-16">
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 opacity-5 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-500 opacity-5 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-yellow-400 opacity-5 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Floating code particles */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        {['<div>', 'const x = 1;', 'flex;', '.class {}', '</>','grid', 'useState()', 'margin:0'].map((txt, i) => (
          <div key={i} className="absolute text-sm font-mono text-gray-400 animate-float-slow"
            style={{ top: `${10 + i * 12}%`, left: `${5 + (i % 4) * 25}%`, animationDelay: `${i * 0.7}s` }}>
            {txt}
          </div>
        ))}
      </div>

      <Sidebar concepts={webDevConcepts} isVisible={isSidebarVisible} onToggle={() => setSidebarVisible(false)} selectedId={selectedTopic} onSelect={setSelectedTopic} />

      <button onClick={() => setSidebarVisible(!isSidebarVisible)}
        className="fixed top-20 left-4 z-[9999] bg-gray-900/90 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/10 hover:border-white/30 transition-all text-white shadow-lg">
        ☰
      </button>

      <div className={`transition-all duration-300 ${isSidebarVisible ? 'md:ml-64' : 'ml-0'} relative z-10`}>
        <div className="container mx-auto px-4 py-10">

          {/* Hero */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6">
              🌐 <span>Web Development Course</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-cyan-400 bg-clip-text text-transparent">Build the Web</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Learn HTML, CSS, JavaScript & React through structured lessons with videos, examples, and quizzes.
            </p>
            <div className="flex justify-center gap-8 mt-8">
              {[{ label: 'Topics', value: '4' }, { label: 'Lessons', value: '10' }, { label: 'Quizzes', value: '5' }, { label: 'Questions', value: '55+' }].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Topic Selector */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {webDevConcepts.map((c) => (
              <button key={c.id} onClick={() => setSelectedTopic(c.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${selectedTopic === c.id ? `bg-gradient-to-r ${c.color} text-white border-transparent shadow-lg` : `bg-white/5 text-gray-400 ${c.borderColor} hover:text-white`}`}>
                {c.title}
              </button>
            ))}
          </div>

          {/* Subtopic + Quiz Cards */}
          {current && (
            <>
              <div className="text-center mb-8">
                <h2 className={`text-3xl font-bold bg-gradient-to-r ${current.color} bg-clip-text text-transparent`}>{current.title}</h2>
                <p className="text-gray-400 mt-2">{current.script}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {current.subtopics.map((sub) => (
                  <Link key={sub.id} to={sub.path}
                    className={`group relative rounded-2xl p-7 border ${current.borderColor} ${current.bgColor} hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 backdrop-blur-sm overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${current.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                    <div className="text-4xl mb-4">{sub.icon}</div>
                    <div className={`text-xs font-bold uppercase tracking-widest mb-2 bg-gradient-to-r ${current.color} bg-clip-text text-transparent`}>{sub.mission}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{sub.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{sub.script}</p>
                    <div className={`mt-5 inline-flex items-center gap-1 text-sm font-semibold bg-gradient-to-r ${current.color} bg-clip-text text-transparent`}>Start Lesson <span>→</span></div>
                  </Link>
                ))}
                {/* Section Quiz Card */}
                <Link to={current.quizPath}
                  className="group relative rounded-2xl p-7 border border-purple-500/30 bg-purple-500/10 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/50 backdrop-blur-sm overflow-hidden">
                  <div className="text-4xl mb-4">🧠</div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-2 text-purple-400">Test Yourself</div>
                  <h3 className="text-xl font-bold text-white mb-2">Section Quiz</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Test your {current.title.replace(/[^\w\s]/gi, '').trim()} knowledge with {current.id === 4 ? 5 : 10} questions.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-purple-400">Take Quiz <span>→</span></div>
                </Link>
              </div>
            </>
          )}

          {/* Complete Curriculum */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-center text-gray-300 mb-8">📚 Complete Curriculum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {webDevConcepts.map((concept) => (
                <div key={concept.id} className={`rounded-2xl border ${concept.borderColor} ${concept.bgColor} p-5`}>
                  <h3 className={`font-bold text-lg bg-gradient-to-r ${concept.color} bg-clip-text text-transparent mb-3`}>{concept.title}</h3>
                  <ul className="space-y-2">
                    {concept.subtopics.map((sub) => (
                      <li key={sub.id}>
                        <Link to={sub.path} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition">
                          <span>{sub.icon}</span> {sub.title} <span className="ml-auto text-xs">▶</span>
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link to={concept.quizPath} className="flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-white transition">
                        🧠 Section Quiz <span className="ml-auto text-xs">▶</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Final Quiz Hero */}
          <div className="mt-16 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 opacity-10 blur-3xl rounded-full" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 opacity-10 blur-3xl rounded-full" />
            </div>
            <div className="relative z-10">
              <div className="text-6xl mb-4">🏆</div>
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-3">
                Final Comprehensive Quiz
              </h2>
              <p className="text-gray-400 text-lg mb-2 max-w-xl mx-auto">
                Completed all lessons? Challenge yourself with 20 questions covering HTML, CSS, JavaScript & React.
              </p>
              <p className="text-gray-500 text-sm mb-8">Pass with 60% or more to prove your Web Dev skills!</p>
              <button onClick={() => navigate('/webdev/quiz/final')}
                className="px-12 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-lg hover:opacity-90 transition shadow-2xl hover:scale-105 active:scale-100 duration-200">
                Start Final Quiz 🚀
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WebDevCourse;
