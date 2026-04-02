import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { useJavaPoints } from '../Java/JavaPointsContext';
import { LESSON_DB, defaultContent } from './lessonData';

const AptitudeLesson = () => {
  const { course, module } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { markVisited, visited } = useProgress();
  const { addPoints } = useJavaPoints();

  const currentPath = `/learn/${course}/${module}`;
  const lessonData = LESSON_DB[currentPath] || defaultContent;
  const isCompleted = visited[currentPath];

  // Quiz & Video state
  const [solvedQuestions, setSolvedQuestions] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [attempts, setAttempts] = useState({});
  const [isVideoWatched, setIsVideoWatched] = useState(false);
  const [aiQuestions, setAiQuestions] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(lessonData.videoDuration || 60);
  const [generationFailed, setGenerationFailed] = useState(false);

  const hasVideo = lessonData.content?.some(b => b.type === 'video');

  // Reset quiz state when switching modules
  useEffect(() => {
    setSolvedQuestions({});
    setSelectedAnswers({});
    setAttempts({});
    setIsVideoWatched(isCompleted || !hasVideo); // Auto-unlock if completed or no video
    setAiQuestions([]);
    setIsGenerating(false);
    setGenerationFailed(false);
    setTimeRemaining(lessonData.videoDuration || 60);
    window.scrollTo(0, 0);
  }, [currentPath, isCompleted, hasVideo, lessonData.videoDuration]);

  // Video Unlock Timer
  useEffect(() => {
    if (isVideoWatched) return;
    
    if (timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsVideoWatched(true);
    }
  }, [timeRemaining, isVideoWatched]);

  // AI Question Generation
  const generateLessonQuestions = async () => {
    setIsGenerating(true);
    try {
      const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyA9Y-Jc9kXA_FqiR6S_-qYMJuXT8PkiqEM";
      const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
      
      const lessonText = lessonData.content.filter(c => c.type !== 'video').map(c => c.value).join('\n');
      const prompt = `You are an Aptitude Tutor evaluating a student.
Generate EXACTLY 5 multiple-choice practice questions based strictly on the following lesson material. Do not use outside concepts.
Return ONLY a valid JSON array of objects. Each object must have:
- "id": string (e.g. "q1")
- "text": string (the question itself)
- "options": array of exactly 4 strings
- "answer": string (must exactly match one option)
- "explanation": string (short explanation of why it's correct based on the lesson)

Lesson Title: ${lessonData.title}
Lesson Content:
${lessonText}`;

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: "You are a JSON-only aptitude API." }] },
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: "application/json", temperature: 0.7 }
        })
      });
      
      if (!response.ok) throw new Error("API Error");
      
      const data = await response.json();
      let rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || "[]";
      const questions = JSON.parse(rawText);
      
      if (Array.isArray(questions) && questions.length === 5) {
        setAiQuestions(questions);
      } else {
        throw new Error("Invalid questions array");
      }
    } catch (error) {
      console.error("AI Generation failed:", error);
      setGenerationFailed(true);
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    if (isVideoWatched && aiQuestions.length === 0 && !isGenerating && !generationFailed) {
      // Small delay for UI smoothness
      const t = setTimeout(() => generateLessonQuestions(), 500);
      return () => clearTimeout(t);
    }
  }, [isVideoWatched, aiQuestions.length, isGenerating, generationFailed]);

  const handleComplete = () => {
    // If it's a new completion, calculate & grant XP based on accuracy
    if (!isCompleted) {
      markVisited(currentPath);
      
      let totalPoints = 0;
      if (lessonData.questions && lessonData.questions.length > 0) {
        lessonData.questions.forEach(q => {
          const tries = attempts[q.id] || 1;
          // Max 10 points per question, subtract 2 points per mistake. Minimum 2 points.
          const pts = Math.max(10 - ((tries - 1) * 2), 2);
          totalPoints += pts;
        });
        
        // Add completion bonus
        totalPoints += 20; 
      } else {
        // Flat rate if no questions exist
        totalPoints = 50; 
      }
      
      addPoints(totalPoints);
    }
    navigate(`/learn/${course}`);
  };

  const handleAnswerSelect = (questionId, option, correctAnswer) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: option }));
    
    // Increment total attempts for this string question
    setAttempts(prev => ({ ...prev, [questionId]: (prev[questionId] || 0) + 1 }));

    if (option === correctAnswer) {
      setSolvedQuestions(prev => ({ ...prev, [questionId]: true }));
    } else {
      setSolvedQuestions(prev => ({ ...prev, [questionId]: false }));
    }
  };

  const questionsToRender = aiQuestions.length > 0 ? aiQuestions : (lessonData.questions || []);
  const totalQuestions = questionsToRender.length;
  const correctlyAnswered = Object.values(solvedQuestions).filter(Boolean).length;
  const canComplete = isCompleted || (totalQuestions > 0 && totalQuestions === correctlyAnswered);

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white pt-24 px-4 sm:px-6 lg:px-8 pb-32">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate(`/learn/${course}`)}
          className="text-gray-400 hover:text-white mb-8 flex items-center gap-2 transition-colors"
        >
          <span>←</span> Back to Course
        </button>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          {lessonData.title}
        </h1>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl space-y-8 mb-12">
          {lessonData.content.map((block, idx) => {
            if (block.type === 'text') {
              return <p key={idx} className="text-lg text-gray-300 leading-relaxed">{block.value}</p>;
            }
            if (block.type === 'subtitle') {
              return <h3 key={idx} className="text-2xl font-semibold text-blue-200 mt-6">{block.value}</h3>;
            }
            if (block.type === 'highlight') {
              return (
                <div key={idx} className="border-l-4 border-yellow-500 bg-yellow-500/10 p-4 rounded-r-lg">
                  <p className="text-yellow-100 italic">{block.value}</p>
                </div>
              );
            }
            if (block.type === 'visual') {
              return (
                <div key={idx} className="bg-black/50 p-6 rounded-xl border border-white/5 max-w-2xl mx-auto shadow-inner mb-6">
                  <pre className="text-center font-mono text-xl text-green-400 whitespace-pre-wrap">{block.value}</pre>
                </div>
              );
            }
            if (block.type === 'video') {
              return (
                <div key={idx} className="mb-8 overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-purple-500/20 aspect-video w-full bg-black/50 flex items-center justify-center relative group">
                  <iframe 
                    src={block.value} 
                    allow="autoplay; encrypted-media; fullscreen" 
                    allowFullScreen 
                    title="Lesson Video"
                    className="w-full h-full border-0 absolute inset-0 z-10"
                  ></iframe>
                  {/* Anti-skip overlay to block timeline clicks */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-[15%] z-20 cursor-not-allowed" 
                    title="Skipping is disabled for this lesson"
                  ></div>
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Video Locked Status */}
        {!isVideoWatched && hasVideo && (
          <div className="mt-12 text-center p-8 bg-black/40 rounded-2xl border border-white/10 shadow-lg">
            <div className="text-4xl mb-4 opacity-70">⏳</div>
            <h3 className="text-xl font-bold text-gray-300">Practice Locked</h3>
            <p className="text-gray-400 mt-2">
              The practice section will unlock in <span className="text-yellow-400 font-mono font-bold text-lg">{timeRemaining}</span> seconds. Please review the video lesson fully.
            </p>
          </div>
        )}

        {/* Loading AI Questions */}
        {isGenerating && isVideoWatched && (
          <div className="mt-12 text-center p-8 bg-white/5 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <div className="w-16 h-16 border-4 border-t-purple-500 border-r-blue-500 border-b-pink-500 border-l-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">AI is crafting your practice questions...</h3>
            <p className="text-gray-400 mt-2">Analyzing the lesson material to build customized problems just for you.</p>
          </div>
        )}

        {/* Practice Questions Section */}
        {totalQuestions > 0 && (!hasVideo || isVideoWatched) && !isGenerating && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-indigo-300 flex items-center gap-3">
              <span>✍️</span> In-Lesson Practice
            </h2>
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-400">Solve all questions correctly to unlock the finish button.</p>
              <span className="text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full">Accuracy determines Points!</span>
            </div>
            
            <div className="space-y-6">
              {questionsToRender.map((q, idx) => {
                const isSelected = selectedAnswers[q.id] !== undefined;
                const isCorrect = solvedQuestions[q.id];
                const tries = attempts[q.id] || 0;
                
                return (
                  <div key={q.id} className={`p-6 rounded-2xl border transition-colors ${isSelected ? (isCorrect ? 'bg-green-900/10 border-green-500/30' : 'bg-red-900/10 border-red-500/30') : 'bg-white/5 border-white/10'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-white">
                        <span className="text-blue-400 mr-2">Q{idx + 1}.</span> {q.text}
                      </h3>
                      {tries > 0 && (
                        <span className="text-xs font-mono text-gray-500 whitespace-nowrap pt-1">Attempts: {tries}</span>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      {q.options.map((option, oIdx) => {
                        const isOptionSelected = selectedAnswers[q.id] === option;
                        const isOptionCorrect = option === q.answer;
                        
                        let buttonColors = "bg-white/5 hover:bg-white/10 border-white/5 text-gray-300";
                        if (isSelected) {
                          if (isOptionCorrect) {
                            buttonColors = "bg-green-500/20 border-green-500 text-green-300";
                          } else if (isOptionSelected) {
                            buttonColors = "bg-red-500/20 border-red-500 text-red-300";
                          } else {
                            buttonColors = "bg-black/20 border-white/5 text-gray-600 cursor-not-allowed";
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            onClick={() => {
                              if (!isCorrect) handleAnswerSelect(q.id, option, q.answer);
                            }}
                            disabled={isCorrect}
                            className={`p-4 rounded-xl border text-left font-medium transition-all ${buttonColors}`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>

                    {/* Feedback / Explanation Box */}
                    {isSelected && (
                      <div className={`mt-4 p-4 rounded-lg flex gap-3 ${isCorrect ? 'bg-green-500/10 text-green-200' : 'bg-red-500/10 text-red-200'}`}>
                        <span className="text-xl">{isCorrect ? '✅' : '❌'}</span>
                        <div className="flex-1">
                          <p className="font-bold flex justify-between">
                            <span>{isCorrect ? 'Correct!' : 'Incorrect. Try again!'}</span>
                            {isCorrect && (
                              <span className="text-yellow-400 text-sm font-mono">+ {Math.max(10 - ((tries - 1) * 2), 2)} Points</span>
                            )}
                          </p>
                          {isCorrect && <p className="mt-2 text-sm text-green-200/80">{q.explanation}</p>}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-between items-center bg-black/40 p-6 rounded-2xl border border-white/5">
          <div className="text-gray-400 flex items-center gap-2">
            {!isCompleted && totalQuestions > 0 && correctlyAnswered < totalQuestions && (
              <><span className="text-yellow-500">🔒</span> Complete {totalQuestions - correctlyAnswered} more practice question(s) to check completion.</>
            )}
            {!isCompleted && totalQuestions > 0 && correctlyAnswered === totalQuestions && (
               <><span className="text-green-500">🔓</span> All correct! Claim your Points and complete the module.</>
            )}
            {!isCompleted && totalQuestions === 0 && (
              <><span className="text-blue-500">ℹ️</span> Finish reading the material above to unlock the next module.</>
            )}
            {isCompleted && (
              <><span className="text-green-500">✓</span> You have already mastered this module.</>
            )}
          </div>
          <button 
            onClick={handleComplete}
            disabled={!canComplete}
            className={`px-8 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center gap-3 transition-all ${
              isCompleted 
                ? 'bg-green-600/20 text-green-400 border border-green-500/30' 
                : canComplete
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-purple-500/30 cursor-pointer animate-pulse-slow'
                  : 'bg-black/30 text-gray-600 border border-white/5 cursor-not-allowed'
            }`}
          >
            {isCompleted ? (
              <><span>✓</span> Return to Course</>
            ) : canComplete ? (
              <><span>🎉</span> Complete & Claim Points</>
            ) : (
              <><span>🔒</span> Locked</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AptitudeLesson;
