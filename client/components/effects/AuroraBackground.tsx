import React, { useEffect, useRef } from 'react';

export const AuroraBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '0';
    canvas.style.opacity = '0.3';
    container.insertBefore(canvas, container.firstChild);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    let time = 0;

    const animate = () => {
      time += 0.002;

      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 2; i++) {
        const hue = (200 + i * 60 + time * 30) % 360;

        const gradient = ctx.createLinearGradient(
          0,
          canvas.height * (i * 0.4),
          canvas.width,
          canvas.height * ((i + 1) * 0.4)
        );

        gradient.addColorStop(
          0,
          `hsla(${hue}, 0%, 50%, 0)`
        );
        gradient.addColorStop(
          0.5,
          `hsla(${hue}, 0%, 50%, 0.03)`
        );
        gradient.addColorStop(
          1,
          `hsla(${hue}, 0%, 50%, 0)`
        );

        ctx.fillStyle = gradient;
        ctx.fillRect(0, canvas.height * (i * 0.4), canvas.width, canvas.height * 0.4);
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-white"
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
