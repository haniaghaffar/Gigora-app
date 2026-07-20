import React from "react";

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-lg rounded-xl bg-white shadow-xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-semibold text-gray-900">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-red-500"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {children}
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t p-4">
          <button
            onClick={onClose}
            className="h-12 rounded-lg bg-blue-600 px-6 text-white hover:bg-blue-700"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

export default Modal;