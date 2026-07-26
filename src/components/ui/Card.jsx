import React from "react";

export default function Card({
  children,
  title,
  className = "",
  variant = "default",
  ...rest
}) {
  const baseClasses = "bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6";
  const variantClasses = variant === "light" ? "bg-lightBlue" : "";
  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`} {...rest}>
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-darkNavy">{title}</h3>
      )}
      {children}
    </div>
  );
}
