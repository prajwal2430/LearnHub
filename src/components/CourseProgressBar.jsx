import React from 'react';

/**
 * Animated progress bar used on course cards and course index pages.
 * Props:
 *   pct          - 0-100 percentage
 *   completed    - number of completed lessons
 *   total        - total lessons
 *   color        - tailwind gradient string e.g. 'from-orange-400 to-cyan-400'
 *   showLabel    - if true shows "X / Y lessons" text
 *   compact      - smaller pill variant
 */
const CourseProgressBar = ({ pct = 0, completed = 0, total = 0, color = 'from-indigo-500 to-cyan-400', showLabel = true, compact = false }) => {
  const label =
    pct === 100 ? '✅ Completed!' :
    pct === 0   ? 'Not started' :
    `${completed} / ${total} lessons`;

  return (
    <div className={compact ? 'space-y-1' : 'space-y-2'}>
      {showLabel && (
        <div className="flex justify-between items-center text-xs">
          <span className={`font-medium ${pct === 100 ? 'text-green-400' : 'text-gray-400'}`}>{label}</span>
          <span className={`font-bold ${pct === 100 ? 'text-green-400' : 'text-white'}`}>{pct}%</span>
        </div>
      )}
      <div className={`w-full rounded-full bg-white/10 overflow-hidden ${compact ? 'h-1.5' : 'h-2.5'}`}>
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-700 ease-out`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

export default CourseProgressBar;
