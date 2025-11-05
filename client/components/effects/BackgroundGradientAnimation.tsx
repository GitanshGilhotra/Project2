import React, { useEffect, useRef } from "react";

export const BackgroundGradientAnimation: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const style = document.createElement("style");
    style.textContent = `
      @keyframes gradient-shift {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      .gradient-animation {
        background: linear-gradient(
          -45deg,
          #3b82f6,
          #8b5cf6,
          #ec4899,
          #f59e0b,
          #10b981,
          #3b82f6
        );
        background-size: 400% 400%;
        animation: gradient-shift 15s ease infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden gradient-animation"
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
