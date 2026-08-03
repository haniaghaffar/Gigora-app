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
  // Base button styles: height 9 (2.25rem), horizontal padding 5 (1.25rem), rounded-lg (0.5rem), font-medium, transition
  // Base button styles
  const baseClasses = "inline-flex items-center justify-center h-9 px-5 rounded-lg font-medium text-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primaryBlue";

  // Variant definitions – primary and secondary are used throughout the app
  const variants = {
    primary: "bg-primaryBlue text-white hover:bg-primaryBlue/90 hover:scale-105",
    secondary: "bg-white text-primaryBlue border border-primaryBlue hover:bg-primaryBlue/10 hover:scale-105",
    // Additional variants can be added later if needed
  };

  const variantClasses = variants[variant] || variants["primary"];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}