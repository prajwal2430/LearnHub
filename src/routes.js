import { lazy } from 'react';

// Define your routes as an array of objects
export const appRoutes = [
  // Main Components
  { path: '/', component: lazy(() => import('./components/Home')) },
  { path: '/login', component: lazy(() => import('./components/Login')) },
  { path: '/otp-login', component: lazy(() => import('./components/OTPLogin')) },
  { path: '/signup', component: lazy(() => import('./components/SignUp')) },
  { path: '/profile', component: lazy(() => import('./components/Profile')) },
  { path: '/learn', component: lazy(() => import('./components/Learn')) },
  { path: '/ai', component: lazy(() => import('./components/Ai')) },
  { path: '/CertGen', component: lazy(() => import('./components/CertGen')) },
  
  // Aptitude Courses
  { path: '/learn/quant', component: lazy(() => import('./Cources/quant')) },
  { path: '/learn/reasoning', component: lazy(() => import('./Cources/reasoning')) },
  { path: '/learn/verbal', component: lazy(() => import('./Cources/verbal')) },
  { path: '/learn/:course/:module', component: lazy(() => import('./Cources/AptitudeLesson')) },
  
  // Gamification Features
  { path: '/battle', component: lazy(() => import('./components/Battle')) },
  { path: '/leaderboard', component: lazy(() => import('./components/Leaderboard')) },
  { path: '/redeem', component: lazy(() => import('./components/Redeem')) },
  
  // Python Course
  { path: '/python', component: lazy(() => import('./Cources/python')) },

  // Web Development Course
  { path: '/webdev', component: lazy(() => import('./Cources/webdev')) },
  // HTML Lessons
  { path: '/webdev/html/intro',     component: lazy(() => import('./WebDev/HTML/intro')) },
  { path: '/webdev/html/elements',  component: lazy(() => import('./WebDev/HTML/elements')) },
  { path: '/webdev/html/forms',     component: lazy(() => import('./WebDev/HTML/forms')) },
  // CSS Lessons
  { path: '/webdev/css/selectors',  component: lazy(() => import('./WebDev/CSS/selectors')) },
  { path: '/webdev/css/boxmodel',   component: lazy(() => import('./WebDev/CSS/boxmodel')) },
  { path: '/webdev/css/flexbox',    component: lazy(() => import('./WebDev/CSS/flexbox')) },
  // JavaScript Lessons
  { path: '/webdev/js/variables',   component: lazy(() => import('./WebDev/JS/variables')) },
  { path: '/webdev/js/functions',   component: lazy(() => import('./WebDev/JS/functions')) },
  { path: '/webdev/js/dom',         component: lazy(() => import('./WebDev/JS/dom')) },
  // React Lessons
  { path: '/webdev/react/components', component: lazy(() => import('./WebDev/React/components')) },
  // Web Dev Quizzes
  { path: '/webdev/quiz/html',   component: lazy(() => import('./WebDev/Quizzes/HTMLQuiz')) },
  { path: '/webdev/quiz/css',    component: lazy(() => import('./WebDev/Quizzes/CSSQuiz')) },
  { path: '/webdev/quiz/js',     component: lazy(() => import('./WebDev/Quizzes/JSQuiz')) },
  { path: '/webdev/quiz/react',  component: lazy(() => import('./WebDev/Quizzes/ReactQuiz')) },
  { path: '/webdev/quiz/final',  component: lazy(() => import('./WebDev/Quizzes/FinalQuiz')) },

  // Java Course & Topics
  { path: '/Java', component: lazy(() => import('./Cources/java')) },
  { path: '/Java/Beginner/printing-output', component: lazy(() => import('./Java/Beginner/printing-output')) },
  { path: '/Java/Beginner/basic-syntax', component: lazy(() => import('./Java/Beginner/basic-syntax')) },
  { path: '/Java/Variables/data-types', component: lazy(() => import('./Java/Variables/data-types')) },
  { path: '/Java/Variables/variables', component: lazy(() => import('./Java/Variables/variables')) },
  { path: '/Java/Variables/type-casting', component: lazy(() => import('./Java/Variables/type-casting')) },
  { path: '/Java/Conditionals/if-else', component: lazy(() => import('./Java/Conditionals/if-else')) },
  { path: '/Java/Conditionals/switch', component: lazy(() => import('./Java/Conditionals/switch')) },
  { path: '/Java/Loops/for-loop', component: lazy(() => import('./Java/Loops/for-loop')) },
  { path: '/Java/Loops/while-loop', component: lazy(() => import('./Java/Loops/while-loop')) },
  { path: '/Java/Arrays/array', component: lazy(() => import('./Java/Arrays/array')) },
  { path: '/Java/Collections/ArrayGame', component: lazy(() => import('./Java/Collections/ArrayGame')) },
  { path: '/Java/Collections/HashMapGame', component: lazy(() => import('./Java/Collections/HashMapGame')) },
  { path: '/Java/Exception/exception', component: lazy(() => import('./Java/Exception/exceptions')) },
  { path: '/Java/OOPS/ClassesAndObjects', component: lazy(() => import('./Java/OOPS/ClassesAndObjects')) },
  { path: '/Java/OOPS/Constructors', component: lazy(() => import('./Java/OOPS/Constructors')) },
  { path: '/Java/OOPS/inheritance', component: lazy(() => import('./Java/OOPS/Inheritance')) },
  { path: '/Java/OOPS/encapsulation', component: lazy(() => import('./Java/OOPS/encapsulation')) },
  { path: '/Java/OOPS/MultilevelInheritance', component: lazy(() => import('./Java/OOPS/MultilevelInheritanceGame')) },
  { path: '/Java/OOPS/HybridInheritanceGame', component: lazy(() => import('./Java/OOPS/HybridInheritanceGame')) },
  { path: '/Java/OOPS/HierarchicalInheritanceGame', component: lazy(() => import('./Java/OOPS/HierarchicalInheritanceGame')) },
];