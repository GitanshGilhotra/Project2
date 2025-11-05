import React, { useEffect, useRef, useState } from 'react';

interface CanvasRevealEffectProps {
  children: React.ReactNode;
  containerClassName?: string;
}

export const CanvasRevealEffect: React.FC<CanvasRevealEffectProps> = ({
  children,
  containerClassName = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    container.insertBefore(canvas, container.firstChild);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spacing = 25;
      const radius = 1.5;
      const revealRadius = 120;

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const distance = Math.sqrt(
            Math.pow(x - mousePos.x, 2) + Math.pow(y - mousePos.y, 2)
          );
          const opacity = Math.max(0, 1 - distance / revealRadius);

          ctx.fillStyle = `rgba(0, 0, 0, ${0.15 + opacity * 0.2})`;
          ctx.beginPath();
          ctx.arc(x, y, radius + opacity * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(drawDots);
    };

    window.addEventListener('mousemove', handleMouseMove);
    drawDots();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      canvas.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full bg-white ${containerClassName}`}
    >
      {children}
    </div>
  );
};
