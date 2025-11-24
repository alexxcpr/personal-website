import React, { useEffect, useRef } from 'react';

export const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
    const fontSize = 14;
    const columns = width / fontSize;

    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      // Use a very light opacity to create the fade effect
      // Since our background is light (#F3F4F6), we need to clear it or fade it to that color
      // But clearing it to transparent might be better if we want the CSS background to show
      // However, for the trail effect, we need to draw a semi-transparent rectangle
      
      // Let's assume we want a subtle effect. 
      // If we use clearRect, we lose the trail.
      // If we fillRect with low opacity, we get trails.
      
      // We'll use the theme background color for the fade
      ctx.fillStyle = 'rgba(243, 244, 246, 0.1)'; // #F3F4F6 with opacity
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#00FF41'; // Matrix Green
      // For light mode visibility, maybe we need a darker green?
      // ctx.fillStyle = '#0f3d0f'; 
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-20 pointer-events-none"
    />
  );
};

