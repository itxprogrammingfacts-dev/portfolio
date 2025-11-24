import {useRef, useEffect} from 'react'
export default function ParticlesBackground() {
const canvasRef = useRef(null);

useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');

  let particles = [];
  const particlesCount = 100;
  const colors = ['rgb(255,0,2550)'];
  
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.speedX = (Math.random() - 0.5) * -0.5;
      this.speedY = (Math.random()  -0.5) * -0.5;
    }
     draw() {
  ctx.beginPath();

  // Diamond shape (4 points)
  ctx.moveTo(this.x, this.y - this.size);      // Top
  ctx.lineTo(this.x + this.size, this.y);      // Right
  ctx.lineTo(this.x, this.y + this.size);      // Bottom
  ctx.lineTo(this.x - this.size, this.y);      // Left

  ctx.closePath();

  ctx.shadowBlur = 10;
  ctx.shadowColor = this.color;
  ctx.fillStyle = this.color;
  ctx.fill();
}
 update()  {  
  this.x += this.speedX;
  this.y += this.speedY;


  if (this.x < 0 ) this.x > canvas.width
  if (this.x > canvas.width ) this.x = 0
  if (this.y < 0 ) this.y = canvas.height
  if (this.y > canvas.height ) this.y = 0
   this.draw();
  }
  }
    function createParticles() {
      particles = [];
      for (let i = 0; i < particlesCount; i++) {  
        particles.push(new Particle());
    }}

    function hundaleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    }

    hundaleResize();
    window.addEventListener('resize', hundaleResize);

    let animationFrameId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', hundaleResize);
    }
}, []);

  return(

    <canvas  
      ref={canvasRef}
      className="fixed top-0 w-full h-full pointer-events-none z-0"
    ></canvas>
    )
      
    
}
