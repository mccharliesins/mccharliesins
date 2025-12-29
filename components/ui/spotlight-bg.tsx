"use client";
import React, { useRef, useEffect } from "react";

export function SpotlightBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let mouse = { x: -1000, y: -1000 };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;
            baseX: number;
            baseY: number;
            density: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.baseX = this.x;
                this.baseY = this.y;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2;
                this.density = Math.random() * 30 + 1;
                // Purple shades
                const colors = ["rgba(147, 51, 234, 0.5)", "rgba(168, 85, 247, 0.5)", "rgba(192, 132, 252, 0.5)"];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                // Mouse interaction
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = 150;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;

                if (distance < maxDistance) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    // Return to original position (optional) or just float
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx / 10;
                    }
                    if (this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy / 10;
                    }
                }

                // Floating movement
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;

                this.draw();
            }
        }

        const initParticles = () => {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 15000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw grid manually for better performance combined with particles
            ctx.fillStyle = "rgba(79, 79, 79, 0.1)";
            // (Optional: Draw grid here if needed, but keeping it simple for performance)

            particles.forEach((particle) => particle.update());
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", () => { });
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-10 h-full w-full bg-black">
            {/* Static Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

            {/* Particles Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />

            {/* Ambient Light */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#a855f715,#000)] opacity-40 blur-[80px] pointer-events-none" />
        </div>
    );
}
