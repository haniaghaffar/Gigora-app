import React from "react";

function Skeleton({
  className = "",
  height = "h-4",
  width = "w-full",
}) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-gray-200 ${height} ${width} ${className}`}
    />
  );
}

export default Skeleton;