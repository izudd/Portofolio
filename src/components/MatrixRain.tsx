import { useEffect, useRef, useState } from 'react';

interface MatrixRainProps {
  isActive: boolean;
  speed?: number;
  density?: number;
  color?: string;
}

export const MatrixRain = ({ 
  isActive, 
  speed = 1, 
  density = 0.8,
  color = '#0f0'
}: MatrixRainProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isActive || !isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters (katakana + latin + numbers)
    const chars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Initialize drops
    const drops: number[] = [];
    for (let i = 0; i < columns * density; i++) {
      drops[i] = Math.random() * -100;
    }

    let animationId: number;

    const draw = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Gradient effect - brighter at the head
        const progress = (drops[i] % 30) / 30;
        const opacity = Math.max(0.3, 1 - progress);
        
        ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`;
        ctx.fillText(text, x, y);

        // Highlight the head character
        if (drops[i] % 1 === 0) {
          ctx.fillStyle = 'rgba(200, 255, 200, 0.9)';
          ctx.fillText(text, x, y);
        }

        // Reset drop to top randomly after it crosses screen
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i] += speed * 0.5;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isActive, speed, density, color, isVisible]);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s' }}
    />
  );
};
