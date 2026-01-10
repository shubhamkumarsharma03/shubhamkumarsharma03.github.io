import React, { useEffect, useRef } from 'react';

const icons = [
    '/tech-stack-icons/React.png',
    '/tech-stack-icons/Python.png',
    '/tech-stack-icons/AWS.png',
    '/tech-stack-icons/TypeScript.png',
    '/tech-stack-icons/Docker.png',
    '/tech-stack-icons/JavaScript.png',
    '/tech-stack-icons/Node.js.png',
    '/tech-stack-icons/PostgresSQL.png',
    '/tech-stack-icons/MongoDB.png',
    '/tech-stack-icons/Git.png',
    '/tech-stack-icons/Tailwind-CSS.png',
    '/tech-stack-icons/Figma.png',
    '/tech-stack-icons/Vite.png',
    '/tech-stack-icons/Next.js.png',
    '/tech-stack-icons/Firebase.png',
];

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    img: HTMLImageElement;
    rotation: number;
    rotationSpeed: number;
}

const CanvasBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        const initParticles = () => {
            particles = [];
            const particleCount = Math.min(20, Math.floor((window.innerWidth * window.innerHeight) / 50000));

            for (let i = 0; i < particleCount; i++) {
                const img = loadedImages[Math.floor(Math.random() * loadedImages.length)];
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: 30 + Math.random() * 40,
                    img: img,
                    rotation: Math.random() * Math.PI * 2,
                    rotationSpeed: (Math.random() - 0.5) * 0.01
                });
            }
        };

        const loadImages = () => {
            icons.forEach(src => {
                const img = new Image();
                img.src = src;
                img.onload = () => {
                    loadedImages.push(img);
                    loadedCount++;
                    if (loadedCount === icons.length) {
                        initParticles();
                        animate();
                    }
                };
            });
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                // Movement
                p.x += p.vx;
                p.y += p.vy;
                p.rotation += p.rotationSpeed;

                // Mouse interaction
                const dx = mouseRef.current.x - p.x;
                const dy = mouseRef.current.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const force = 100;

                if (distance < force) {
                    const angle = Math.atan2(dy, dx);
                    p.x -= Math.cos(angle) * 1;
                    p.y -= Math.sin(angle) * 1;
                }

                // Boundary check
                if (p.x < -p.size) p.x = canvas.width + p.size;
                if (p.x > canvas.width + p.size) p.x = -p.size;
                if (p.y < -p.size) p.y = canvas.height + p.size;
                if (p.y > canvas.height + p.size) p.y = -p.size;

                // Draw
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation);
                ctx.globalAlpha = 0.3; // Low opacity for background effect
                ctx.drawImage(p.img, -p.size / 2, -p.size / 2, p.size, p.size);
                ctx.restore();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);

        loadImages();
        resizeCanvas();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none'
            }}
        />
    );
};

export default CanvasBackground;
