import React from "react";

export default function Button({ label, color = "#4CAF50", onClick }) {
  return (
    <button
      className="calc-btn"
      style={{ backgroundColor: color }}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}