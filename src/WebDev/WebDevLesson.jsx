import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Shared lesson template for all Web Dev topic pages.
 * Props:
 *   title        - lesson title
 *   subtitle     - short descriptor
 *   videoId      - YouTube video ID
 *   sections     - array of { heading, content (string | JSX), code? }
 *   nextPath     - route to next lesson
 *   prevPath     - route to previous lesson
 *   color        - accent color class e.g. 'orange' | 'blue' | 'yellow' | 'cyan'
 */

const colorMap = {
  orange: {
    gradient: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    text: 'text-orange-300',
    badge: 'bg-orange-500/20 text-orange-200',
    glow: 'hover:shadow-orange-500/30',
    tag: 'bg-orange-900/40 text-orange-200',
  },
  blue: {
    gradient: 'from-blue-500 to-cyan-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-300',
    badge: 'bg-blue-500/20 text-blue-200',
    glow: 'hover:shadow-blue-500/30',
    tag: 'bg-blue-900/40 text-blue-200',
  },
  yellow: {
    gradient: 'from-yellow-400 to-orange-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    text: 'text-yellow-300',
    badge: 'bg-yellow-500/20 text-yellow-200',
    glow: 'hover:shadow-yellow-500/30',
    tag: 'bg-yellow-900/40 text-yellow-200',
  },
  cyan: {
    gradient: 'from-cyan-400 to-teal-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    text: 'text-cyan-300',
    badge: 'bg-cyan-500/20 text-cyan-200',
    glow: 'hover:shadow-cyan-500/30',
    tag: 'bg-cyan-900/40 text-cyan-200',
  },
};

const WebDevLesson = ({ title, subtitle, videoId, sections = [], nextPath, prevPath, color = 'orange', keyPoints = [], quizPath }) => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const [copied, setCopied] = useState(null);
  const c = colorMap[color] || colorMap.orange;

  const copyCode = (code, idx) => {
    navigator.clipboard.writeText(code);
    setCopied(idx);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 text-white">
      {/* Animated background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute top-20 right-20 w-72 h-72 rounded-full bg-gradient-to-br ${c.gradient} opacity-10 blur-3xl animate-pulse`} />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-purple-600 opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-60 h-60 rounded-full bg-indigo-600 opacity-5 blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-16">

        {/* Header */}
        <div className="mb-10">
          <button
            onClick={() => navigate('/webdev')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition mb-6 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Web Dev Course
          </button>

          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${c.badge} mb-4`}>
            {subtitle}
          </div>
          <h1 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${c.gradient} bg-clip-text text-transparent mb-4`}>
            {title}
          </h1>
        </div>

        {/* Video Player */}
        <div className={`rounded-2xl overflow-hidden border ${c.border} mb-12 shadow-2xl ${c.glow} transition-shadow duration-300`}>
          <div className={`px-4 py-3 ${c.bg} flex items-center gap-2`}>
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className={`ml-3 text-sm font-medium ${c.text}`}>▶ Video Lesson</span>
          </div>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Key Points */}
        {keyPoints.length > 0 && (
          <div className={`rounded-2xl ${c.bg} border ${c.border} p-6 mb-10`}>
            <h3 className={`text-lg font-bold ${c.text} mb-4 flex items-center gap-2`}>
              <span>⚡</span> Key Points
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {keyPoints.map((pt, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className={`mt-1 text-xs ${c.text}`}>✦</span>
                  <span className="text-gray-300 text-sm">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {sections.map((sec, i) => (
            <button
              key={i}
              onClick={() => setActiveSection(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === i
                  ? `bg-gradient-to-r ${c.gradient} text-white shadow-lg`
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {sec.heading}
            </button>
          ))}
        </div>

        {/* Active Section Content */}
        {sections[activeSection] && (
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 mb-10 transition-all duration-300">
            <h2 className={`text-2xl font-bold ${c.text} mb-4`}>{sections[activeSection].heading}</h2>
            <div className="text-gray-300 leading-relaxed mb-6 text-base">
              {sections[activeSection].content}
            </div>
            {sections[activeSection].code && (
              <div className="relative">
                <div className="flex items-center justify-between bg-gray-900 px-4 py-2 rounded-t-lg border-b border-white/10">
                  <span className="text-xs text-gray-400 font-mono">{sections[activeSection].lang || 'html'}</span>
                  <button
                    onClick={() => copyCode(sections[activeSection].code, activeSection)}
                    className="text-xs text-gray-400 hover:text-white transition flex items-center gap-1"
                  >
                    {copied === activeSection ? '✅ Copied!' : '📋 Copy'}
                  </button>
                </div>
                <pre className="bg-gray-900/90 rounded-b-lg p-6 overflow-x-auto text-sm font-mono text-gray-200 border border-white/5">
                  <code>{sections[activeSection].code}</code>
                </pre>
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4 border-t border-white/10">
          {prevPath ? (
            <button
              onClick={() => navigate(prevPath)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition text-gray-300 hover:text-white"
            >
              ← Previous
            </button>
          ) : <div />}
          {nextPath && (
            <button
              onClick={() => navigate(nextPath)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${c.gradient} text-white font-semibold hover:opacity-90 transition shadow-lg`}
            >
              Next Lesson →
            </button>
          )}
        </div>

        {/* Quiz CTA */}
        {quizPath && (
          <div className={`mt-10 rounded-2xl border ${c.border} ${c.bg} p-8 text-center`}>
            <div className="text-5xl mb-3">🧠</div>
            <h3 className={`text-2xl font-bold bg-gradient-to-r ${c.gradient} bg-clip-text text-transparent mb-2`}>
              Ready to test your knowledge?
            </h3>
            <p className="text-gray-400 mb-6">Take the section quiz to reinforce what you've learnt.</p>
            <button
              onClick={() => navigate(quizPath)}
              className={`px-10 py-4 rounded-xl bg-gradient-to-r ${c.gradient} text-white font-bold text-lg hover:opacity-90 transition shadow-2xl hover:scale-105 active:scale-100 duration-200`}
            >
              Take Quiz →
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default WebDevLesson;

