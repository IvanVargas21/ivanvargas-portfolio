import React, { useEffect, useRef } from "react";
import "../index.css";

const CircularRotatingText = () => {
  const str = "Computer Engineer • Web Developer ";
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Clear any previous content to avoid duplication
    container.innerHTML = "";

    // Generate the circular text
    for (let i = 0; i < str.length; i++) {
      const span = document.createElement("span");
      span.innerHTML = str[i];
      span.className = "absolute text-center text-green-500 dark:text-white text-sm"; // Smaller text size
      const radius = 90; // Reduced radius for a smaller circle
      const angle = (360 / str.length) * i; // Calculate angle for each letter
      span.style.transform = `rotate(${angle}deg) translate(0, -${radius}px)`; // Position letters closer to the center
      span.style.transformOrigin = "center"; // Rotate each letter around the center
      container.appendChild(span);
    }
  }, [str]);

  return (
    <div className="relative flex justify-center items-center">
      <div
        ref={containerRef}
        className="relative w-[240px] h-[240px] rounded-full rotating-container"
      ></div>
    </div>
  );
};

export default CircularRotatingText;
