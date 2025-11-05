import React, { useState, useRef } from 'react';

interface CardSpotlightProps {
  children: React.ReactNode;
  className?: string;
}

export const CardSpotlight: React.FC<CardSpotlightProps> = ({ children, className = '' }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || !isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleFocus}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-lg overflow-hidden ${className}`}
      style={{
        background: `
          radial-gradient(
            circle 400px at ${position.x}px ${position.y}px,
            rgba(0, 0, 0, ${opacity * 0.08}),
            transparent 100%
          ),
          linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(250, 250, 250, 1))
        `,
        border: `2px solid rgba(0, 0, 0, ${0.2 + opacity * 0.15})`,
        transition: 'border-color 0.3s ease',
      }}
    >
      {children}
    </div>
  );
};
