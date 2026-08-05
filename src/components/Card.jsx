import React from 'react';

/**
 * Card component with optional elevated style.
 * Props:
 *   children – content inside the card
 *   className – additional Tailwind classes
 *   elevated – boolean to add larger shadow and rounded corners
 */
export default function Card({ children, className = '', elevated = false }) {
  const baseClasses = `relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 ease-in-out`;
  const elevation = elevated
    ? 'shadow-xl hover:shadow-2xl hover:-translate-y-1'
    : 'shadow-sm hover:shadow-md';
  return (
    <div className={`${baseClasses} ${elevation} ${className}`}>
      {/* Background Glow (optional) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 pointer-events-none" />
      <div className="relative z-10 text-gray-900">{children}</div>
    </div>
  );
}