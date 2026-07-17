import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  fadeSpeed: number;
}

export default function ParticlesBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const maxParticles = 65;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(true));
    }

    function createParticle(randomY = false): Particle {
      const size = Math.random() * 2.2 + 0.6;
      return {
        x: Math.random() * (canvas?.width || window.innerWidth),
        y: randomY 
          ? Math.random() * (canvas?.height || window.innerHeight) 
          : (canvas?.height || window.innerHeight) + Math.random() * 20,
        size: size,
        speedY: -(Math.random() * 0.4 + 0.2), // Upward speed
        speedX: (Math.random() - 0.5) * 0.25, // Slight horizontal drift
        opacity: Math.random() * 0.6 + 0.1,
        fadeSpeed: Math.random() * 0.003 + 0.001
      };
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, idx) => {
        // Draw particle
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        gradient.addColorStop(0, `rgba(255, 185, 35, ${p.opacity})`);
        gradient.addColorStop(0.4, `rgba(212, 175, 55, ${p.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
        
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        p.y += p.speedY;
        p.x += p.speedX;

        // Oscillate horizontal drift slightly
        p.speedX += (Math.random() - 0.5) * 0.02;
        if (p.speedX > 0.4) p.speedX = 0.4;
        if (p.speedX < -0.4) p.speedX = -0.4;

        // Reset particle if it goes off screen or fades out
        if (p.y < -10 || p.x < -10 || p.x > canvas.width + 10) {
          particles[idx] = createParticle(false);
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}
