import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import Ai from './Ai';
import chatbotImage from '../assets/images/chatbot.jpeg';
import { useProgress } from '../context/ProgressContext';
import CourseProgressBar from './CourseProgressBar';


const Learn = () => {
  const [isAiVisible, setAiVisible] = useState(false); // State to manage Ai visibility
  const aiRef = useRef(null); // Ref for the Ai component
  const toggleAi = () => {
    setAiVisible(!isAiVisible); // Toggle visibility on click
  };

  // Close the Ai component when clicking outside of it
  const handleClickOutside = (event) => {
    if (aiRef.current && !aiRef.current.contains(event.target)) {
      setAiVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const { getProgress } = useProgress();

  const courses = [
    {
      id: 1,
      courseId: 'quant',
      title: "Quantitative Aptitude",
      description: "Master mathematics, formulas, and speed math for placement cutoffs",
      image: "https://img.icons8.com/color/96/000000/math.png",
      path: "/learn/quant",
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 2,
      courseId: 'reasoning',
      title: "Logical Reasoning",
      description: "Boost critical thinking with puzzles, syllogisms, and sequence completions",
      image: "https://img.icons8.com/color/96/000000/brain.png",
      path: "/learn/reasoning",
      color: 'from-purple-500 to-purple-800',
    },
    {
      id: 3,
      courseId: 'verbal',
      title: "Verbal Ability",
      description: "Enhance reading comprehension, grammar, and communication skills",
      image: "https://img.icons8.com/color/96/000000/reading.png",
      path: "/learn/verbal",
      color: 'from-green-400 to-green-600',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 text-white overflow-hidden relative">
      {/* Animated code particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 animate-float-slow">
          <div className="text-3xl font-mono opacity-50">{"<div>"}</div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float">
          <div className="text-2xl font-mono opacity-50">{"function() {"}</div>
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float-slow">
          <div className="text-xl font-mono opacity-50">{"const code = 'fun';"}</div>
        </div>
        <div className="absolute top-2/3 right-1/3 animate-float">
          <div className="text-2xl font-mono opacity-50">{"}"}</div>
        </div>
        <div className="absolute bottom-1/3 left-1/5 animate-float">
          <div className="text-xl font-mono opacity-50">{"return <Magic />;"}</div>
        </div>
      </div>

      {/* Glowing orb effects */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const progress = getProgress(course.courseId);
            return (
              <Link
                key={course.id}
                to={course.path}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] flex flex-col"
              >
                <div className="flex items-center justify-center mb-6">
                  <img src={course.image} alt={course.title} className="w-20 h-20 object-contain" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{course.title}</h3>
                <p className="text-purple-100 mb-4">{course.description}</p>
                <div className="mt-auto">
                  <CourseProgressBar
                    pct={progress.pct}
                    completed={progress.completed}
                    total={progress.total}
                    color={course.color}
                    showLabel={true}
                  />
                </div>
              </Link>
            );
          })}
        </div>
        
        {/* Circular icon for chatbot */}
        <div 
          className="chatbot-icon" 
          onClick={toggleAi} 
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundImage: `url(${chatbotImage})`, // Use the imported image
            backgroundSize: 'cover',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
          }}
        />

        {/* Sticky AI component without animation */}
        {isAiVisible && (
          <div className="sticky-ai" ref={aiRef}>
            <Ai />
          </div>
        )}
      </div>
    </div>
  );
};

export default Learn; 