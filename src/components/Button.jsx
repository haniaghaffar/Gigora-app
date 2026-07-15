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
    "px-5 py-2 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primaryBlue hover:bg-primaryBlue/90 text-white",

    secondary:
      "bg-white text-gray-700 border border-gray-200 hover:bg-blue-50 hover:border-primaryBlue hover:shadow-md",
  };

  return (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`${baseClasses} ${className} ${variants[variant]}`}
    {...rest}
  >
    {children}
  </button>
);
}