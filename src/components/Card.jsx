import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        relative overflow-hidden
        rounded-lg
        border border-graySub/20
        bg-white/10
        backdrop-blur-lg
        p-6
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:border-primaryBlue/40
        hover:shadow-primaryBlue/20
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