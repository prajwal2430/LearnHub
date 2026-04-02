import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import CourseProgressBar from '../components/CourseProgressBar';

const quantConcepts = [
  {
    id: 1,
    title: 'Speed Math & Simplification',
    description: 'Master fast calculation techniques and shortcuts.',
    icon: '⚡',
    path: '/learn/quant/numbers',
    trick: {
      title: 'Trick: Multiplication by 11',
      content: 'To multiply a 2-digit number by 11, simply split the digits and place their sum in the middle.',
      example: 'Example: 45 × 11 → [4] [4+5] [5] = 495',
      visual: <div className="flex items-center gap-2 text-xl font-mono bg-black/40 p-3 rounded-lg"><span className="text-blue-400">45</span> <span className="text-gray-400">× 11 =</span> <span className="text-green-400">4</span><span className="text-yellow-400">9</span><span className="text-green-400">5</span></div>
    }
  },
  {
    id: 2,
    title: 'Number System',
    description: 'Understand LCM, HCF, divisibility rules, and remainders.',
    icon: '🔢',
    path: '/learn/quant/algebra',
    trick: {
      title: 'Concept: Divisibility by 3 & 9',
      content: 'A number is divisible by 3 (or 9) if the sum of its digits is divisible by 3 (or 9).',
      example: 'Example: Is 5,283 divisible by 9? 5+2+8+3 = 18. Since 18 is divisible by 9, so is 5,283.',
      visual: <div className="flex flex-col gap-1 text-lg font-mono bg-black/40 p-3 rounded-lg"><span className="text-gray-300">5+2+8+3 = <span className="text-yellow-400">18</span></span> <span className="text-green-400">18 ÷ 9 = 2 ✓</span></div>
    }
  },
  {
    id: 3,
    title: 'Percentages & Ratios',
    description: 'Core arithmetic foundations for data interpretation.',
    icon: '📊',
    path: '/learn/quant/percentages',
    trick: {
      title: 'Trick: Percentage Reversal',
      content: 'x% of y is exactly the same as y% of x. Use this to simplify complex percentages.',
      example: 'Example: 16% of 25 = 25% of 16. Since 25% is 1/4th, 16 ÷ 4 = 4.',
      visual: <div className="flex items-center gap-2 text-xl font-mono bg-black/40 p-3 rounded-lg"><span className="text-red-400">16%</span> <span className="text-gray-400">of 25 =</span> <span className="text-yellow-400">25%</span> <span className="text-gray-400">of 16 = 4</span></div>
    }
  },
  {
    id: 4,
    title: 'Time, Speed & Distance',
    description: 'Trains, boats, and relative speed problems.',
    icon: '⏱️',
    path: '/learn/quant/tsd',
    trick: {
      title: 'Formula: Average Speed',
      content: 'If distances are equal but speeds are different (x and y), the average speed is NOT (x+y)/2. It is 2xy/(x+y).',
      example: 'Example: Travel at 40kmph, return at 60kmph. Avg Speed = (2×40×60)/(40+60) = 4800/100 = 48 kmph.',
      visual: <div className="flex items-center justify-center text-xl font-mono bg-black/40 p-3 rounded-lg text-blue-300">Avg = <span className="border-b border-blue-400 mx-1 px-1">2xy</span> / <span className="px-1">(x+y)</span></div>
    }
  }
];

const QuantCourse = () => {
  const [selectedTopic, setSelectedTopic] = useState(1);
  const navigate = useNavigate();
  const { getProgress, visited } = useProgress();
  const progress = getProgress('quant');
  const current = quantConcepts.find((c) => c.id === selectedTopic);

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 mb-8 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center shadow-[0_0_40px_rgba(99,102,241,0.2)]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/mathematics.png')] opacity-10 mix-blend-overlay"></div>
          
          <div className="w-full md:w-2/3 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">📈</span>
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                Quantitative Aptitude
              </h1>
            </div>
            <p className="text-indigo-200 text-lg mb-6 leading-relaxed">
              Build your core mathematical skills. Speed and accuracy in Quant are essential to clear the initial screening rounds for top tech and product companies. 
            </p>
            <div className="flex gap-4 mb-4">
              <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium border border-white/10 text-blue-200">
                🎯 {quantConcepts.length} Modules
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium border border-white/10 text-indigo-200">
                🕒 40+ Hours Content
              </span>
            </div>
            
            <div className="mt-6 bg-black/30 p-4 rounded-xl border border-white/10">
               <CourseProgressBar 
                 completed={progress.completed} 
                 total={progress.total} 
                 pct={progress.pct} 
                 color="from-blue-500 to-indigo-500"
                 showLabel={true}
               />
            </div>
          </div>
          
          <div className="w-full md:w-1/3 flex justify-center items-center relative z-10">
            <div className="relative w-48 h-48 animate-pulse-slow">
              <div className="absolute inset-0 bg-blue-500 rounded-full filter blur-[60px] opacity-40"></div>
              <img src="https://img.icons8.com/color/192/000000/math.png" alt="Math" className="w-full h-full object-contain drop-shadow-2xl relative z-10 transition-transform duration-500 hover:scale-110" />
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Lessons Listing */}
          <div className="w-full lg:w-2/3 space-y-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-blue-400">📚</span> Course Modules & Visual Tricks
            </h2>
            
            <div className="grid gap-4">
              {quantConcepts.map((concept, idx) => {
                const isSelected = selectedTopic === concept.id;
                const isCompleted = visited[concept.path];
                const isLocked = idx > 0 && !visited[quantConcepts[idx - 1].path];
                
                return (
                  <div 
                    key={concept.id}
                    onClick={() => {
                      if (!isLocked) setSelectedTopic(concept.id);
                    }}
                    className={`bg-white/5 border ${isSelected ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]' : isLocked ? 'border-gray-800 opacity-60' : 'border-white/10'} rounded-xl p-6 ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-white/10'} transition-all duration-300`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`text-3xl bg-black/30 p-3 rounded-lg border ${isCompleted ? 'border-green-500/50' : 'border-white/5'}`}>
                        {isLocked ? '🔒' : concept.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className={`text-xl font-bold ${isLocked ? 'text-gray-500' : 'text-blue-100'}`}>
                            Module {idx + 1}: {concept.title}
                          </h3>
                          {isCompleted && <span className="text-green-400 text-sm font-bold flex items-center gap-1">✓ Completed</span>}
                        </div>
                        <p className="text-gray-400">
                          {isLocked ? 'Complete the previous module to unlock this content.' : concept.description}
                        </p>
                        
                        {/* Expanded Area showing Tricks */}
                        {isSelected && !isLocked && (
                          <div className="mt-6 p-4 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-500/30 rounded-xl animate-fade-in">
                            <h4 className="text-blue-300 font-bold mb-2 flex items-center gap-2">
                              <span>💡</span> {concept.trick.title}
                            </h4>
                            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                              {concept.trick.content}
                            </p>
                            <div className="mb-4 text-sm text-yellow-100/80 font-medium">
                              {concept.trick.example}
                            </div>
                            {concept.trick.visual}
                            
                            <div className="mt-6 flex gap-3">
                              <Link 
                                to={concept.path}
                                className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/30"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {isCompleted ? 'Review Full Module' : 'Start Full Module'} <span>→</span>
                              </Link>
                            </div>
                          </div>
                        )}
                        {!isSelected && !isLocked && (
                          <div className="mt-2 text-sm text-blue-400/60 font-medium">
                            Click to reveal visual tricks and begin...
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24 bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-indigo-300">Quick Tips</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3 bg-black/20 p-3 rounded-lg">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Learn tables up to 30, squares up to 50, and cubes up to 20 for faster arithmetic.</span>
                </li>
                <li className="flex items-start gap-3 bg-black/20 p-3 rounded-lg">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Practice mental math daily for 15 minutes before solving complex logical problems.</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/battle" className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg shadow-purple-500/30 transition-all flex items-center justify-center gap-2">
                  <span>⚔️</span> Take a 1v1 Battle
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default QuantCourse;
