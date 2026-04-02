import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Reusable Quiz Component
 * Props:
 *   title       - quiz title
 *   questions   - array of { q, options: [string], answer: index, explanation }
 *   nextPath    - route after quiz completion
 *   color       - 'orange' | 'blue' | 'yellow' | 'cyan' | 'purple'
 *   coursePath  - route back to course section
 */

const colorMap = {
  orange: { grad: 'from-orange-500 to-amber-500', ring: 'ring-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-400/30', text: 'text-orange-300' },
  blue:   { grad: 'from-blue-500 to-cyan-400',    ring: 'ring-blue-400',   bg: 'bg-blue-500/10',   border: 'border-blue-400/30',   text: 'text-blue-300'   },
  yellow: { grad: 'from-yellow-400 to-orange-400',ring: 'ring-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-400/30', text: 'text-yellow-300' },
  cyan:   { grad: 'from-cyan-400 to-teal-400',    ring: 'ring-cyan-400',   bg: 'bg-cyan-500/10',   border: 'border-cyan-400/30',   text: 'text-cyan-300'   },
  purple: { grad: 'from-purple-500 to-indigo-500',ring: 'ring-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-400/30', text: 'text-purple-300' },
};

const WebDevQuiz = ({ title, questions = [], nextPath, color = 'orange', coursePath = '/webdev' }) => {
  const navigate = useNavigate();
  const c = colorMap[color] || colorMap.orange;

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState([]);
  const [finished, setFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const q = questions[current];
  const total = questions.length;
  const pct = Math.round((score / total) * 100);
  const passed = pct >= 60;

  const handleSelect = (idx) => { if (!confirmed) setSelected(idx); };

  const handleConfirm = () => {
    if (selected === null) return;
    const correct = selected === q.answer;
    if (correct) setScore(s => s + 1);
    else setWrong(w => [...w, current]);
    setConfirmed(true);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (current + 1 >= total) { setFinished(true); return; }
    setCurrent(c => c + 1);
    setSelected(null);
    setConfirmed(false);
    setShowExplanation(false);
  };

  const handleRetry = () => {
    setCurrent(0); setSelected(null); setConfirmed(false);
    setScore(0); setWrong([]); setFinished(false); setShowExplanation(false);
  };

  /* ── RESULTS SCREEN ─────────────────────── */
  if (finished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 text-white flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          <div className="text-8xl mb-6">{pct === 100 ? '🏆' : passed ? '🎉' : '😅'}</div>
          <h1 className={`text-4xl font-extrabold mb-2 bg-gradient-to-r ${c.grad} bg-clip-text text-transparent`}>
            {pct === 100 ? 'Perfect Score!' : passed ? 'Quiz Passed!' : 'Keep Practising!'}
          </h1>
          <p className="text-gray-400 mb-8">{title}</p>

          {/* Score circle */}
          <div className={`mx-auto w-36 h-36 rounded-full border-4 ${c.border} flex flex-col items-center justify-center mb-8 ${c.bg}`}>
            <span className={`text-4xl font-black bg-gradient-to-r ${c.grad} bg-clip-text text-transparent`}>{pct}%</span>
            <span className="text-gray-400 text-sm">{score}/{total}</span>
          </div>

          {/* Breakdown */}
          <div className="grid grid-cols-3 gap-4 mb-8 text-sm">
            <div className="rounded-xl bg-green-500/10 border border-green-500/30 p-4">
              <div className="text-2xl font-bold text-green-400">{score}</div>
              <div className="text-gray-400">Correct</div>
            </div>
            <div className="rounded-xl bg-red-500/10 border border-red-500/30 p-4">
              <div className="text-2xl font-bold text-red-400">{wrong.length}</div>
              <div className="text-gray-400">Wrong</div>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="text-2xl font-bold text-white">{total}</div>
              <div className="text-gray-400">Total</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={handleRetry}
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-gray-300">
              🔄 Retry Quiz
            </button>
            <button onClick={() => navigate(coursePath)}
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-gray-300">
              📚 Back to Course
            </button>
            {passed && nextPath && (
              <button onClick={() => navigate(nextPath)}
                className={`px-6 py-3 rounded-xl bg-gradient-to-r ${c.grad} text-white font-semibold hover:opacity-90 transition shadow-lg`}>
                Next Section →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  /* ── QUESTION SCREEN ────────────────────── */
  const progress = ((current) / total) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 text-white">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-white/10">
        <div className={`h-full bg-gradient-to-r ${c.grad} transition-all duration-500`} style={{ width: `${progress}%` }} />
      </div>

      <div className="max-w-3xl mx-auto px-4 pt-20 pb-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button onClick={() => navigate(coursePath)} className="text-gray-400 hover:text-white transition text-sm flex items-center gap-1">
            ← Back
          </button>
          <div className={`px-3 py-1 rounded-full text-xs font-bold ${c.bg} ${c.text} border ${c.border}`}>
            {current + 1} / {total}
          </div>
          <div className={`text-sm font-semibold ${c.text}`}>Score: {score}</div>
        </div>

        {/* Title */}
        <div className="text-center mb-10">
          <h1 className={`text-2xl font-extrabold bg-gradient-to-r ${c.grad} bg-clip-text text-transparent mb-1`}>{title}</h1>
          <p className="text-gray-500 text-sm">Choose the best answer</p>
        </div>

        {/* Question card */}
        <div className={`rounded-2xl border ${c.border} ${c.bg} p-8 mb-6`}>
          <p className="text-xl font-semibold text-white leading-relaxed mb-8">
            <span className={`text-sm font-bold ${c.text} mr-2`}>Q{current + 1}.</span>
            {q.q}
          </p>

          {/* Options */}
          <div className="space-y-3">
            {q.options.map((opt, idx) => {
              let style = 'border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 cursor-pointer';
              if (confirmed) {
                if (idx === q.answer) style = 'border-2 border-green-400 bg-green-400/10 cursor-default';
                else if (idx === selected) style = 'border-2 border-red-400 bg-red-400/10 cursor-default';
                else style = 'border border-white/5 bg-white/3 opacity-50 cursor-default';
              } else if (selected === idx) {
                style = `border-2 ${c.ring} ring-2 ${c.bg} cursor-pointer`;
              }
              return (
                <button key={idx} onClick={() => handleSelect(idx)}
                  className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-150 flex items-center gap-3 ${style}`}>
                  <span className={`w-7 h-7 flex-shrink-0 rounded-full border flex items-center justify-center text-sm font-bold
                    ${confirmed && idx === q.answer ? 'border-green-400 text-green-400' :
                      confirmed && idx === selected ? 'border-red-400 text-red-400' :
                      selected === idx ? `${c.border} ${c.text}` : 'border-white/20 text-gray-400'}`}>
                    {confirmed
                      ? idx === q.answer ? '✓' : idx === selected ? '✗' : String.fromCharCode(65 + idx)
                      : String.fromCharCode(65 + idx)}
                  </span>
                  <span className={confirmed && idx === q.answer ? 'text-green-300' : 'text-gray-200'}>{opt}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Explanation */}
        {showExplanation && q.explanation && (
          <div className={`rounded-xl border ${confirmed && selected === q.answer ? 'border-green-400/30 bg-green-400/5' : 'border-red-400/30 bg-red-400/5'} p-5 mb-6`}>
            <p className="text-sm font-bold mb-1">{selected === q.answer ? '✅ Correct!' : '❌ Incorrect'}</p>
            <p className="text-gray-300 text-sm leading-relaxed">{q.explanation}</p>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex justify-end gap-3">
          {!confirmed ? (
            <button onClick={handleConfirm} disabled={selected === null}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${selected !== null
                ? `bg-gradient-to-r ${c.grad} text-white hover:opacity-90 shadow-lg`
                : 'bg-white/5 text-gray-500 cursor-not-allowed'}`}>
              Confirm Answer
            </button>
          ) : (
            <button onClick={handleNext}
              className={`px-8 py-3 rounded-xl font-semibold bg-gradient-to-r ${c.grad} text-white hover:opacity-90 shadow-lg transition`}>
              {current + 1 >= total ? 'See Results 🏆' : 'Next Question →'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebDevQuiz;
