import React, { useEffect, useRef } from "react";
import ".././index.css";  // Import your App.css here

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
      span.className = "absolute text-center text-gray-800 dark:text-white text-lg"; // Add Tailwind styling
      span.style.position = "absolute";
      span.style.transform = `rotate(${360 / str.length * i}deg) translate(0, -150px)`; // Position each letter around the circle
      span.style.transformOrigin = "center"; // Ensure letters rotate around their center
      container.appendChild(span);
    }
  }, [str]);

  return (
    <div className="relative flex justify-center items-center">
      <div
        ref={containerRef}
        className="relative w-[300px] h-[300px] rounded-full rotate-animation"  // Apply animation here
      >
      </div>
    </div>
  );
};

export default CircularRotatingText;
