import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        relative overflow-hidden
        rounded-lg
        border border-graySub/20
        bg-white/5
        backdrop-blur-lg
        p-6
        shadow-sm
        transition-all duration-300 ease-in-out
        hover:-translate-y-1 hover:scale-105
        hover:border-primaryBlue/40
        hover:shadow-primaryBlue/20
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryBlue/60
        ${className}
      `}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-white">
        {children}
      </div>
    </div>
  );
}