import React, { useEffect } from "react";

export default function Toast({ message, type = "info", onClose }) {
  // type could be 'info', 'success', 'error'
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose && onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  const bgColor = {
    info: "bg-blue-500",
    success: "bg-green-500",
    error: "bg-red-500",
  }[type];

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`${bgColor} text-white px-4 py-2 rounded shadow-md transition-opacity duration-300`}
      >
        {message}
      </div>
    </div>
  );
}
