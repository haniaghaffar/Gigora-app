import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        relative overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        shadow-xl
        transition-all duration-300
        hover:-translate-y-1
        hover:border-blue-400/40
        hover:shadow-blue-500/20
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