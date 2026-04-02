import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import CourseProgressBar from '../components/CourseProgressBar';

const verbalConcepts = [
  {
    id: 1,
    title: 'Reading Comprehension',
    description: 'Train yourself to extract information rapidly from long passages.',
    icon: '📖',
    path: '/learn/verbal/reading',
    trick: {
      title: 'Strategy: Skim, then Scan',
      content: 'Do NOT read the whole passage word-by-word. Skim the first/last sentences of paragraphs to get the main idea, then scan for keywords when answering questions.',
      example: 'Example: Read the questions FIRST, highlight keywords, then hunt for them in the text.',
      visual: (
        <div className="text-center font-semibold text-lg bg-black/40 p-4 rounded-lg flex justify-around">
          <span className="text-yellow-400">1. Skim</span> ➡️ <span className="text-teal-400">2. Read Qs</span> ➡️ <span className="text-green-400">3. Scan Text</span>
        </div>
      )
    }
  },
  {
    id: 2,
    title: 'Sentence Correction & Grammar',
    description: 'Find the errors, correct tenses, and master subject-verb agreement.',
    icon: '✏️',
    path: '/learn/verbal/grammar',
    trick: {
      title: 'Rule: The Prepositional Phrase Trap',
      content: 'The subject is NEVER inside a prepositional phrase. Cross out the phrase to easily identify the true subject and matching verb.',
      example: 'Example: "The cost of the new machines [is/are] high." → Cross out "of the new machines". → "The cost is high".',
      visual: (
        <div className="text-center font-mono text-sm bg-black/40 p-4 rounded-lg">
          The <span className="text-green-400 font-bold border-b-2 border-green-500">cost</span> <span className="text-gray-500 line-through">of the new machines</span> <span className="text-green-400 font-bold border-b-2 border-green-500">is</span> high.
        </div>
      )
    }
  },
  {
    id: 3,
    title: 'Vocabulary & Synonyms',
    description: 'Learn high-frequency placement words, antonyms, and idioms.',
    icon: '🗣️',
    path: '/learn/verbal/vocab',
    trick: {
      title: 'Technique: Root Words & Prefix',
      content: 'Deconstruct unknown words. Knowing that "bene-" means good and "mal-" means bad helps you guess the meaning of words like "maleficent" or "benefactor".',
      example: 'Prefix [Bene] = Good. Root [Fact] = To make. "Benefactor" = Someone who makes good things happen.',
      visual: (
        <div className="bg-black/40 p-4 rounded-lg flex justify-center divide-x divide-white/20">
          <div className="px-4 text-center">
            <span className="text-teal-400 font-bold text-xl block">Bene-</span>
            <span className="text-gray-400 text-sm">Good</span>
          </div>
          <div className="px-4 text-center">
            <span className="text-purple-400 font-bold text-xl block">Mal-</span>
            <span className="text-gray-400 text-sm">Bad</span>
          </div>
          <div className="px-4 text-center">
            <span className="text-blue-400 font-bold text-xl block">-cide</span>
            <span className="text-gray-400 text-sm">To kill</span>
          </div>
        </div>
      )
    }
  },
  {
    id: 4,
    title: 'Para Jumbles',
    description: 'Reconstruct randomized sentences into coherent paragraphs.',
    icon: '🔄',
    path: '/learn/verbal/para-jumbles',
    trick: {
      title: 'Hack: Find the Independent Sentence',
      content: 'The first sentence of a paragraph usually introduces a noun and stands alone. Look for sentences resolving acronyms or full names.',
      example: 'Sentences starting with "However", "Therefore", "He", "She", "It" are almost NEVER the first sentence.',
      visual: (
        <div className="flex flex-col gap-2 font-mono text-sm bg-black/40 p-4 rounded-lg shadow-inner">
          <div className="text-green-400 font-bold">1. "Global warming is rising..." ✓ (Standalone)</div>
          <div className="text-red-400">2. "This is because..." ✗ (Needs context)</div>
          <div className="text-red-400">3. "Therefore, we must act..." ✗ (Conclusion)</div>
        </div>
      )
    }
  }
];

const VerbalCourse = () => {
  const [selectedTopic, setSelectedTopic] = useState(1);
  const navigate = useNavigate();
  const { getProgress, visited } = useProgress();
  const progress = getProgress('verbal');

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-900 to-green-900 rounded-2xl p-8 mb-8 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center shadow-[0_0_40px_rgba(20,184,166,0.2)]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook-dark.png')] opacity-10 mix-blend-overlay"></div>
          
          <div className="w-full md:w-2/3 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">✒️</span>
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-green-300">
                Verbal Ability
              </h1>
            </div>
            <p className="text-green-200 text-lg mb-6 leading-relaxed">
              Enhance your English proficiency, reading speeds, and communication skills to ace verbal aptitude exams and group discussions.
            </p>
            <div className="flex gap-4 mb-4">
              <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium border border-white/10 text-teal-200">
                🎯 {verbalConcepts.length} Modules
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium border border-white/10 text-green-200">
                🕒 25+ Hours Content
              </span>
            </div>
            
            <div className="mt-6 bg-black/30 p-4 rounded-xl border border-white/10">
               <CourseProgressBar 
                 completed={progress.completed} 
                 total={progress.total} 
                 pct={progress.pct} 
                 color="from-teal-500 to-green-500"
                 showLabel={true}
               />
            </div>
          </div>
          
          <div className="w-full md:w-1/3 flex justify-center items-center relative z-10">
            <div className="relative w-48 h-48 animate-pulse-slow">
              <div className="absolute inset-0 bg-teal-500 rounded-full filter blur-[60px] opacity-40"></div>
              <img src="https://img.icons8.com/color/192/000000/reading.png" alt="Verbal" className="w-full h-full object-contain drop-shadow-2xl relative z-10 transition-transform duration-500 hover:scale-110" />
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Lessons Listing */}
          <div className="w-full lg:w-2/3 space-y-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-teal-400">📚</span> Course Modules & Visual Tricks
            </h2>
            
            <div className="grid gap-4">
              {verbalConcepts.map((concept, idx) => {
                const isSelected = selectedTopic === concept.id;
                const isCompleted = visited[concept.path];
                const isLocked = idx > 0 && !visited[verbalConcepts[idx - 1].path];
                
                return (
                  <div 
                    key={concept.id}
                    onClick={() => {
                      if (!isLocked) setSelectedTopic(concept.id);
                    }}
                    className={`bg-white/5 border ${isSelected ? 'border-teal-500 shadow-[0_0_20px_rgba(20,184,166,0.2)]' : isLocked ? 'border-gray-800 opacity-60' : 'border-white/10'} rounded-xl p-6 ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-white/10'} transition-all duration-300`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`text-3xl bg-black/30 p-3 rounded-lg border ${isCompleted ? 'border-green-500/50' : 'border-white/5'}`}>
                        {isLocked ? '🔒' : concept.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className={`text-xl font-bold ${isLocked ? 'text-gray-500' : 'text-teal-100'}`}>
                            Module {idx + 1}: {concept.title}
                          </h3>
                          {isCompleted && <span className="text-green-400 text-sm font-bold flex items-center gap-1">✓ Completed</span>}
                        </div>
                        <p className="text-gray-400">
                          {isLocked ? 'Complete the previous module to unlock this content.' : concept.description}
                        </p>
                        
                        {/* Expanded Area showing Tricks */}
                        {isSelected && !isLocked && (
                          <div className="mt-6 p-4 bg-gradient-to-br from-teal-900/40 to-green-900/40 border border-teal-500/30 rounded-xl animate-fade-in">
                            <h4 className="text-teal-300 font-bold mb-2 flex items-center gap-2">
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
                                className="px-6 py-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-teal-500/30"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {isCompleted ? 'Review Full Module' : 'Start Full Module'} <span>→</span>
                              </Link>
                            </div>
                          </div>
                        )}
                        {!isSelected && !isLocked && (
                          <div className="mt-2 text-sm text-teal-400/60 font-medium">
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
              <h3 className="text-xl font-bold mb-4 text-green-300">Quick Tips</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3 bg-black/20 p-3 rounded-lg">
                  <span className="text-teal-400 mt-1">✓</span>
                  <span>Read business articles daily to improve both vocabulary and reading speed.</span>
                </li>
                <li className="flex items-start gap-3 bg-black/20 p-3 rounded-lg">
                  <span className="text-teal-400 mt-1">✓</span>
                  <span>For sentence correction, always read the full sentence before picking out potential errors.</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/battle" className="w-full py-4 bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-500 hover:to-green-500 text-white font-bold rounded-xl shadow-lg shadow-green-500/30 transition-all flex items-center justify-center gap-2">
                  <span>⚔️</span> Take a Verbal Battle
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VerbalCourse;
