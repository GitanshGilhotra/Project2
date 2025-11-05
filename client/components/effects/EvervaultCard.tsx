import React, { useState, useRef } from "react";

interface EvervaultCardProps {
  children: React.ReactNode;
  className?: string;
}

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

export const EvervaultCard: React.FC<EvervaultCardProps> = ({
  children,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrambledText, setScrambledText] = useState("");
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (divRef.current?.textContent) {
      const text = divRef.current.textContent;
      let iteration = 0;
      const maxIterations = 10;

      const interval = setInterval(() => {
        setScrambledText(
          text
            .split("")
            .map((char, index) => {
              if (iteration > maxIterations) {
                return char;
              }
              return randomChar();
            })
            .join(""),
        );
        iteration++;

        if (iteration > maxIterations) {
          clearInterval(interval);
          setScrambledText(text);
        }
      }, 30);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setScrambledText("");
  };

  return (
    <div
      ref={divRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-lg p-6 overflow-hidden cursor-pointer transition-all duration-500 ${className}`}
      style={{
        background: isHovered
          ? "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))"
          : "linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.6))",
        border: isHovered
          ? "2px solid rgba(59, 130, 246, 0.5)"
          : "2px solid rgba(100, 116, 139, 0.3)",
        transform: isHovered
          ? "scale(1.02) rotateX(5deg) rotateY(5deg)"
          : "scale(1)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      {isHovered && scrambledText && (
        <div className="absolute inset-0 text-gray-400 text-xs overflow-hidden opacity-30 pointer-events-none whitespace-pre-wrap break-words p-6">
          {scrambledText}
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
