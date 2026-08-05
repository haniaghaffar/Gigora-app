import React from 'react';

/**
 * Horizontal progress bar component.
 * Props:
 *   percentage (0-100)
 *   color (Tailwind class, e.g., 'bg-indigo-600')
 *   label optional label displayed left of the bar
 */
export default function ProgressBar({ percentage = 0, color = 'bg-indigo-600', label = '' }) {
  const safePercent = Math.min(Math.max(percentage, 0), 100);
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm font-medium text-gray-700">{safePercent}%</span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`${color} h-3 rounded-full transition-all duration-300`}
          style={{ width: `${safePercent}%` }}
        />
      </div>
    </div>
  );
}
