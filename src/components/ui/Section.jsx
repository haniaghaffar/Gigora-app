import React from "react";

/**
 * Section component provides a consistent page width and vertical spacing.
 * It wraps its children in a max‑width container with horizontal padding
 * and optional top/bottom margin.
 */
export default function Section({
  children,
  className = "",
  top = "mt-12",
  bottom = "mb-12",
  ...rest
}) {
  return (
    <section className={`max-w-5xl mx-auto px-4 ${top} ${bottom} ${className}`} {...rest}>
      {children}
    </section>
  );
}
