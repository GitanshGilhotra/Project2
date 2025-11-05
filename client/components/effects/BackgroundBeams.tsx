import React, { useEffect, useRef } from 'react';

interface Beam {
  x: number;
  y: number;
  dx: number;
  dy: number;
  life: number;
}

export const BackgroundBeams: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const createBeam = () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 2;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        life: 1,
      };
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.5)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (beamsRef.current.length < 8 && Math.random() > 0.97) {
        beamsRef.current.push(createBeam());
      }

      beamsRef.current = beamsRef.current.filter((beam) => {
        beam.x += beam.dx;
        beam.y += beam.dy;
        beam.life -= 0.002;

        const gradient = ctx.createLinearGradient(
          beam.x - 30,
          beam.y - 30,
          beam.x + 30,
          beam.y + 30
        );
        gradient.addColorStop(0, `rgba(6, 182, 212, 0)`);
        gradient.addColorStop(0.5, `rgba(6, 182, 212, ${beam.life * 0.1})`);
        gradient.addColorStop(1, `rgba(6, 182, 212, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(beam.x - 30, beam.y - 30, 60, 60);

        if (beam.x > canvas.width || beam.x < 0 || beam.y > canvas.height || beam.y < 0) {
          return beam.life > 0;
        }
        return true;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
