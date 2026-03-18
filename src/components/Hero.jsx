import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = ({ userName }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const particlesArray = [];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth || window.innerWidth;
        canvas.height = parent.clientHeight || window.innerHeight;
        init();
      }
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1; 
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = '#FFD700';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      const numberOfParticles = 100;
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    // Inicializar
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const animate = () => {
      // Usar clearRect para un look más limpio y nítido
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        
        // Conexiones
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) { // Aumentamos distancia de conexión
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 215, 0, ${(1 - distance / 120) * 0.8})`; // Líneas más brillantes
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="hero-container" style={{ position: 'relative', width: '100%', height: '85vh', backgroundColor: '#000', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <canvas ref={canvasRef} className="hero-canvas" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
      <div className="hero-content" style={{ position: 'relative', zIndex: 20, textAlign: 'center', color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
        <h1 className="welcome-title" style={{ fontSize: '3.5rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '1rem', margin: 0 }}>Bienvenido, <span className="highlight" style={{ color: '#FFD700' }}>{userName}</span></h1>
        <p className="welcome-subtitle" style={{ fontSize: '1.5rem', color: '#e0e0e0', marginTop: '10px' }}>Explora tu panel de control Amandarina.cl</p>
      </div>
    </div>
  );
};

export default Hero;