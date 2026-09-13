import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  theme?: 'dark' | 'light';
}

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  baseAlpha: number;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ theme = 'dark' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for subtle parallax interaction
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle field creation
    const particleCount = Math.min(Math.floor((width * height) / 9000), 140);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 1000 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.8 + 0.8,
        baseAlpha: Math.random() * 0.5 + 0.3,
      });
    }

    // 3D Globe Ring geometry points
    const globeRadius = Math.min(width, height) * 0.28;
    const globePoints: { x: number; y: number; z: number }[] = [];
    const numRings = 10;
    const pointsPerRing = 24;

    for (let r = 0; r < numRings; r++) {
      const phi = (Math.PI / numRings) * (r + 1);
      for (let p = 0; p < pointsPerRing; p++) {
        const theta = ((Math.PI * 2) / pointsPerRing) * p;
        globePoints.push({
          x: globeRadius * Math.sin(phi) * Math.cos(theta),
          y: globeRadius * Math.cos(phi),
          z: globeRadius * Math.sin(phi) * Math.sin(theta),
        });
      }
    }

    let globeRotation = 0;

    // Main render animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const isDark = theme === 'dark';
      const goldRgb = '197, 160, 89'; // #C5A059
      const fov = 400;
      const centerX = width / 2 + (mouse.x - width / 2) * 0.05;
      const centerY = height / 2 + (mouse.y - height / 2) * 0.05;

      // 1. Draw 3D Globe Lattice Grid in Hero Center
      globeRotation += 0.003;
      const cosR = Math.cos(globeRotation);
      const sinR = Math.sin(globeRotation);

      const projectedGlobe: { x: number; y: number; scale: number; alpha: number }[] = [];

      for (let i = 0; i < globePoints.length; i++) {
        const pt = globePoints[i];
        // Rotate around Y axis
        const rx = pt.x * cosR - pt.z * sinR;
        const rz = pt.x * sinR + pt.z * cosR;
        const ry = pt.y;

        // Perspective projection
        const scale = fov / (fov + rz + 400);
        const px = rx * scale + width * 0.5 + (mouse.x - width / 2) * 0.03;
        const py = ry * scale + height * 0.45 + (mouse.y - height / 2) * 0.03;

        const alpha = Math.max(0, Math.min(1, (rz + globeRadius) / (globeRadius * 2))) * (isDark ? 0.25 : 0.15);
        projectedGlobe.push({ x: px, y: py, scale, alpha });

        if (alpha > 0.02) {
          ctx.beginPath();
          ctx.arc(px, py, 1.2 * scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${goldRgb}, ${alpha})`;
          ctx.fill();
        }
      }

      // Connect adjacent globe points with latitude lines
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projectedGlobe.length; i++) {
        if (i % pointsPerRing !== pointsPerRing - 1) {
          const p1 = projectedGlobe[i];
          const p2 = projectedGlobe[i + 1];
          const avgAlpha = (p1.alpha + p2.alpha) * 0.5;
          if (avgAlpha > 0.03) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${goldRgb}, ${avgAlpha * 0.6})`;
            ctx.stroke();
          }
        }
      }

      // 2. Render Particle Constellation Field
      const projectedParticles: { x: number; y: number; scale: number; alpha: number }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wrap around bounds
        if (p.x < -width) p.x = width;
        if (p.x > width) p.x = -width;
        if (p.y < -height) p.y = height;
        if (p.y > height) p.y = -height;
        if (p.z <= 0) p.z = 1000;
        if (p.z > 1000) p.z = 1;

        const scale = fov / (fov + p.z);
        const px = p.x * scale + centerX;
        const py = p.y * scale + centerY;

        const alpha = p.baseAlpha * Math.min(1, scale * 1.5) * (isDark ? 1 : 0.7);
        projectedParticles.push({ x: px, y: py, scale, alpha });

        // Draw individual particle node
        ctx.beginPath();
        ctx.arc(px, py, p.radius * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${goldRgb}, ${alpha})`;
        ctx.fill();

        // Subtle glow effect for larger particles
        if (p.radius > 1.4) {
          ctx.beginPath();
          ctx.arc(px, py, p.radius * scale * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${goldRgb}, ${alpha * 0.15})`;
          ctx.fill();
        }
      }

      // 3. Draw Constellation Network Connections
      const maxConnectDist = 130;
      for (let i = 0; i < projectedParticles.length; i++) {
        for (let j = i + 1; j < projectedParticles.length; j++) {
          const p1 = projectedParticles[i];
          const p2 = projectedParticles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const lineAlpha = (1 - dist / maxConnectDist) * Math.min(p1.alpha, p2.alpha) * (isDark ? 0.35 : 0.2);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${goldRgb}, ${lineAlpha})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      style={{ opacity: theme === 'dark' ? 0.85 : 0.55 }}
    />
  );
};
