import React from 'react';
import { HelpCircle } from 'lucide-react';

/**
 * Small tooltip component with a question‑mark icon.
 * Usage: <Tooltip content="Explanation">Some element</Tooltip>
 */
const Tooltip = ({ content, children }) => (
  <div className="inline-flex items-center relative group">
    {children}
    <HelpCircle
      size={16}
      className="ml-1 text-gray-500 cursor-pointer"
    />
    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block whitespace-nowrap z-10 bg-gray-800 text-white text-xs rounded py-1 px-2 shadow-lg">
      {content}
    </div>
  </div>
);

export default Tooltip;
