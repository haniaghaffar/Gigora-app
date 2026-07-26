import React from "react";

export default function Input({
  label,
  type = "text",
  className = "",
  ...rest
}) {
  const baseClasses = "block w-full rounded-lg border border-graySub focus:border-primaryBlue focus:ring-2 focus:ring-primaryBlue/20 p-3 text-darkText placeholder-graySub disabled:opacity-50 disabled:cursor-not-allowed";
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium mb-1 text-graySub">{label}</label>
      )}
      <input type={type} className={baseClasses} {...rest} />
    </div>
  );
}
