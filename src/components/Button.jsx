import React from "react";

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  variant = "primary",
  ...rest
}) {
  const baseClasses =
    "inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primaryBlue text-white hover:bg-blue-700 shadow-md",

    secondary:
      "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-primaryBlue",

    success:
      "bg-green-600 text-white hover:bg-green-700 shadow-md",

    danger:
      "bg-red-500 text-white hover:bg-red-600 shadow-md",

    outline:
      "border-2 border-primaryBlue text-primaryBlue bg-transparent hover:bg-primaryBlue hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}