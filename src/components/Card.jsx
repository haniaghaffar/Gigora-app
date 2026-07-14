import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 shadow ${className} text-white`}>
      {children}
    </div>
  );
}
