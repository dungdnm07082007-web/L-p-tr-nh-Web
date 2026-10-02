import { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import "./Calculator.css";

export default function Calculator() {
  // State lưu biểu thức hiện tại
  const [expression, setExpression] = useState("");

  const handleButtonClick = (val) => {
    if (val === "Clear") {
      setExpression("");
    } else if (val === "Delete") {
      setExpression((prev) => prev.slice(0, -1));
    } else if (val === "=") {
      try {
        const formattedExp = expression.replace(/×/g, "*").replace(/÷/g, "/");
        const result = new Function(`return ${formattedExp}`)();
        setExpression(String(result));
      } catch (error) {
        setExpression("Lỗi");
      }
    } else {
      setExpression((prev) => prev + val);
    }
  };

  const buttons = [
    { label: "Clear", color: "#f44336" },
    { label: "Delete", color: "#ff9800" },
    { label: ".", color: "#4CAF50" },
    { label: "÷", color: "#2196F3" },
    { label: "7", color: "#4CAF50" },
    { label: "8", color: "#4CAF50" },
    { label: "9", color: "#4CAF50" },
    { label: "×", color: "#2196F3" },
    { label: "4", color: "#4CAF50" },
    { label: "5", color: "#4CAF50" },
    { label: "6", color: "#4CAF50" },
    { label: "-", color: "#2196F3" },
    { label: "1", color: "#4CAF50" },
    { label: "2", color: "#4CAF50" },
    { label: "3", color: "#4CAF50" },
    { label: "+", color: "#2196F3" },
    { label: "0", color: "#4CAF50" },
    { label: "=", color: "#9c27b0" },
  ];

  return (
    <div className="calculator-box">
      <h2>Bài 1: Virtual Calculator</h2>
      <div className="calculator-container">
        <Display value={expression} />
        <div className="button-grid">
          {buttons.map((btn, index) => (
            <Button
              key={index}
              label={btn.label}
              color={btn.color}
              onClick={handleButtonClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}