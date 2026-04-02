import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import CourseProgressBar from '../components/CourseProgressBar';

const reasoningConcepts = [
  {
    id: 1,
    title: 'Series and Sequences',
    description: 'Find the missing number or letter in complex patterns.',
    icon: '🧩',
    path: '/learn/reasoning/series',
    trick: {
      title: 'Trick: Layered Differences',
      content: 'If a number series does not make sense, find the difference between consecutive numbers. If that still doesn\'t make sense, find the difference of those differences!',
      example: 'Example: 2, 9, 28, 65... (Diffs: 7, 19, 37... Next Diffs: 12, 18...) Oh, they are cubes + 1! (1³+1, 2³+1, 3³+1...).',
      visual: (
        <div className="flex flex-col gap-2 font-mono text-sm bg-black/40 p-4 rounded-lg items-center">
          <div className="flex gap-4 text-purple-300"><span>2</span><span>9</span><span>28</span><span>65</span></div>
          <div className="flex gap-4 text-fuchsia-400 pl-4 border-l border-white/20"><span>(+7)</span><span>(+19)</span><span>(+37)</span></div>
          <div className="flex gap-4 text-yellow-400 pl-8 border-l border-white/20"><span>(+12)</span><span>(+18)</span></div>
        </div>
      )
    }
  },
  {
    id: 2,
    title: 'Blood Relations',
    description: 'Master family trees and tricky relationship scenarios.',
    icon: '👨‍👩‍👧',
    path: '/learn/reasoning/blood-relations',
    trick: {
      title: 'Visualization: Family Tree Notation',
      content: 'Always draw out the family tree. Use Squares for Males [M], Circles for Females (F). Horizontal lines for siblings, double lines for spouses, and vertical lines for generations.',
      example: 'A is the brother of B\'s father → draw it out to easily see A is an uncle.',
      visual: (
        <div className="flex justify-center text-lg bg-black/40 p-4 rounded-lg">
          <div className="flex flex-col items-center">
            <div className="border-2 border-blue-400 p-2 text-blue-400 font-bold">[Grandpa]</div>
            <div className="h-4 border-l-2 border-white/30"></div>
            <div className="flex gap-8">
              <div className="border-2 border-pink-400 p-2 rounded-full text-pink-400 font-bold">(Mom)</div>
              <div className="mt-4 border-t-4 border-double border-white/30 w-8"></div>
              <div className="border-2 border-blue-400 p-2 text-blue-400 font-bold">[Dad]</div>
            </div>
          </div>
        </div>
      )
    }
  },
  {
    id: 3,
    title: 'Syllogisms',
    description: 'Venn diagrams, and logical deductions based on premises.',
    icon: '🎭',
    path: '/learn/reasoning/syllogisms',
    trick: {
      title: 'Tool: The Venn Overlap Matrix',
      content: 'Words like "Some" mean intersecting circles. Words like "All" mean concentric circles. Words like "No" mean separate circles.',
      example: '"All A are B" means A is fully inside B.',
      visual: (
        <div className="flex justify-center gap-8 bg-black/40 p-4 rounded-lg relative overflow-hidden h-24 items-center">
          <div className="relative w-16 h-16">
            <div className="absolute w-12 h-12 bg-blue-500/50 rounded-full inset-2 z-10 flex items-center justify-center text-xs font-bold shadow-[0_0_10px_blue]">All A</div>
            <div className="absolute w-16 h-16 border-2 border-purple-500 rounded-full flex items-start justify-center text-xs font-bold pt-1 text-purple-300">In B</div>
          </div>
        </div>
      )
    }
  },
  {
    id: 4,
    title: 'Data Interpretation',
    description: 'Analyze charts, graphs, and tables to draw conclusions.',
    icon: '📉',
    path: '/learn/reasoning/data',
    trick: {
      title: 'Mental Model: Ratio Approximations',
      content: 'Do not calculate exactly unless multiple options are very close. Approximate numbers to the nearest zero (eg: 489/1012 ≈ 500/1000 = 50%).',
      example: 'Approximation speeds up Pie Chart problems drastically.',
      visual: (
        <div className="text-center font-mono text-xl bg-black/40 p-4 rounded-lg">
          <span className="text-gray-400 line-through mr-2">489 / 1012</span> 👉 <span className="text-green-400 font-bold font-sans"> ~ 50%</span>
        </div>
      )
    }
  }
];

const ReasoningCourse = () => {
  const [selectedTopic, setSelectedTopic] = useState(1);
  const navigate = useNavigate();
  const { getProgress, visited } = useProgress();
  const progress = getProgress('reasoning');

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-900 to-fuchsia-900 rounded-2xl p-8 mb-8 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center shadow-[0_0_40px_rgba(168,85,247,0.2)]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          
          <div className="w-full md:w-2/3 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🧠</span>
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-300">
                Logical Reasoning
              </h1>
            </div>
            <p className="text-fuchsia-200 text-lg mb-6 leading-relaxed">
              Boost your intellectual agility and critical thinking. Mastering logical reasoning puts you ahead in psychometric tests and analytical problem-solving rounds.
            </p>
            <div className="flex gap-4 mb-4">
              <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium border border-white/10 text-purple-200">
                🎯 {reasoningConcepts.length} Modules
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium border border-white/10 text-fuchsia-200">
                🕒 35+ Hours Content
              </span>
            </div>
            
            <div className="mt-6 bg-black/30 p-4 rounded-xl border border-white/10">
               <CourseProgressBar 
                 completed={progress.completed} 
                 total={progress.total} 
                 pct={progress.pct} 
                 color="from-purple-500 to-fuchsia-500"
                 showLabel={true}
               />
            </div>
          </div>
          
          <div className="w-full md:w-1/3 flex justify-center items-center relative z-10">
            <div className="relative w-48 h-48 animate-pulse-slow">
              <div className="absolute inset-0 bg-purple-500 rounded-full filter blur-[60px] opacity-40"></div>
              <img src="https://img.icons8.com/color/192/000000/brain.png" alt="Brain" className="w-full h-full object-contain drop-shadow-2xl relative z-10 transition-transform duration-500 hover:scale-110" />
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Lessons Listing */}
          <div className="w-full lg:w-2/3 space-y-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-purple-400">📚</span> Course Modules & Visual Tricks
            </h2>
            
            <div className="grid gap-4">
              {reasoningConcepts.map((concept, idx) => {
                const isSelected = selectedTopic === concept.id;
                const isCompleted = visited[concept.path];
                const isLocked = idx > 0 && !visited[reasoningConcepts[idx - 1].path];
                
                return (
                  <div 
                    key={concept.id}
                    onClick={() => {
                      if (!isLocked) setSelectedTopic(concept.id);
                    }}
                    className={`bg-white/5 border ${isSelected ? 'border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.2)]' : isLocked ? 'border-gray-800 opacity-60' : 'border-white/10'} rounded-xl p-6 ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-white/10'} transition-all duration-300`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`text-3xl bg-black/30 p-3 rounded-lg border ${isCompleted ? 'border-green-500/50' : 'border-white/5'}`}>
                        {isLocked ? '🔒' : concept.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className={`text-xl font-bold ${isLocked ? 'text-gray-500' : 'text-purple-100'}`}>
                            Module {idx + 1}: {concept.title}
                          </h3>
                          {isCompleted && <span className="text-green-400 text-sm font-bold flex items-center gap-1">✓ Completed</span>}
                        </div>
                        <p className="text-gray-400">
                          {isLocked ? 'Complete the previous module to unlock this content.' : concept.description}
                        </p>
                        
                        {/* Expanded Area showing Tricks */}
                        {isSelected && !isLocked && (
                          <div className="mt-6 p-4 bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 border border-purple-500/30 rounded-xl animate-fade-in">
                            <h4 className="text-fuchsia-300 font-bold mb-2 flex items-center gap-2">
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
                                className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-purple-500/30"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {isCompleted ? 'Review Full Module' : 'Start Full Module'} <span>→</span>
                              </Link>
                            </div>
                          </div>
                        )}
                        {!isSelected && !isLocked && (
                          <div className="mt-2 text-sm text-purple-400/60 font-medium">
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
              <h3 className="text-xl font-bold mb-4 text-fuchsia-300">Quick Tips</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3 bg-black/20 p-3 rounded-lg">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Always draw diagrams for Syllogisms and Blood Relations. It reduces errors.</span>
                </li>
                <li className="flex items-start gap-3 bg-black/20 p-3 rounded-lg">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Don't overthink sequences; look for alternating patterns or prime numbers first.</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/battle" className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl shadow-lg shadow-pink-500/30 transition-all flex items-center justify-center gap-2">
                  <span>⚔️</span> Take a Logic Battle
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReasoningCourse;
