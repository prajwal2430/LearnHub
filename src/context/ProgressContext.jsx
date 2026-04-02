import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

/* ── Course definitions ──────────────────────────────── */
export const COURSE_LESSONS = {
  verbal: {
    name: 'Verbal Ability',
    color: 'from-green-400 to-green-600',
    lessons: [
      '/learn/verbal/reading',
      '/learn/verbal/grammar',
      '/learn/verbal/vocab',
      '/learn/verbal/para-jumbles',
    ],
    quizzes: [],
  },
  quant: {
    name: 'Quantitative Aptitude',
    color: 'from-blue-500 to-indigo-500',
    lessons: [
      '/learn/quant/numbers', 
      '/learn/quant/algebra',
      '/learn/quant/percentages',
      '/learn/quant/tsd'
    ],
    quizzes: [],
  },
  reasoning: {
    name: 'Logical Reasoning',
    color: 'from-purple-500 to-purple-800',
    lessons: [
      '/learn/reasoning/series',
      '/learn/reasoning/blood-relations',
      '/learn/reasoning/syllogisms',
      '/learn/reasoning/data'
    ],
    quizzes: [],
  },
};


/* Build a lookup: path → courseId */
const PATH_TO_COURSE = {};
Object.entries(COURSE_LESSONS).forEach(([courseId, course]) => {
  [...course.lessons, ...course.quizzes].forEach(path => {
    PATH_TO_COURSE[path.toLowerCase()] = courseId;
  });
});

const STORAGE_KEY = 'edurena_progress';

/* ── Context ─────────────────────────────────────────── */
const ProgressContext = createContext(null);

export const ProgressProvider = ({ children }) => {
  const [visited, setVisited] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  });

  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      console.log("ProgressContext - Resetting visited state on logout");
      setVisited({});
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(visited));
  }, [visited]);

  const markVisited = useCallback((path) => {
    setVisited(prev => {
      if (prev[path]) return prev; // already tracked
      return { ...prev, [path]: true };
    });
  }, []);

  const getProgress = useCallback((courseId) => {
    const course = COURSE_LESSONS[courseId];
    if (!course) return { completed: 0, total: 0, pct: 0, quizCompleted: 0, quizTotal: 0 };
    const completed = course.lessons.filter(p => visited[p]).length;
    const quizCompleted = course.quizzes.filter(p => visited[p]).length;
    const total = course.lessons.length;
    const quizTotal = course.quizzes.length;
    const all = total + quizTotal;
    const allDone = completed + quizCompleted;
    const pct = all > 0 ? Math.round((allDone / all) * 100) : 0;
    return { completed, total, pct, quizCompleted, quizTotal };
  }, [visited]);

  const resetProgress = useCallback((courseId) => {
    if (courseId) {
      const course = COURSE_LESSONS[courseId];
      if (!course) return;
      setVisited(prev => {
        const next = { ...prev };
        [...course.lessons, ...course.quizzes].forEach(p => delete next[p]);
        return next;
      });
    } else {
      setVisited({});
    }
  }, []);

  return (
    <ProgressContext.Provider value={{ markVisited, getProgress, resetProgress, visited, PATH_TO_COURSE }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);

/* ── RouteTracker — placed inside the router ─────────── */
export const RouteTracker = () => {
  const location = useLocation();
  const { markVisited, PATH_TO_COURSE } = useProgress();

  useEffect(() => {
    const p = location.pathname.toLowerCase();
    
    // We only want to auto-track old Web Dev courses since Aptitude modules 
    // now require manual completion via the "Mark as Completed" button.
    if (PATH_TO_COURSE[p] === 'webdev') {
      markVisited(location.pathname.toLowerCase());
    }
  }, [location.pathname, markVisited, PATH_TO_COURSE]);

  return null;
};
