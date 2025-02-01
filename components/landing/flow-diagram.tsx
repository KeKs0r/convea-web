"use client";

import { useEffect, useRef } from "react";

const inputEvents = [
  "Purchased Product",
  "Abandoned Cart",
  "Viewed Product",
  "Email Opened",
  "Link Clicked",
  "Added to Cart",
];

const outputEvents = [
  "Smart Replenishment",
  "Welcome Series",
  "Personalized Discount",
  "Product Recommendations",
  "Win-back Campaign",
  "Cross-sell Offer",
];

export function FlowDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    // Animation variables
    const particles: Particle[] = [];
    const particleCount = 50;
    const baseHue = 250; // Purple
    let frame = 0;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas, ctx, baseHue));
    }

    // Draw function
    function draw() {
      if (!ctx || !canvas) {
        return;
      }
      // Clear canvas with slight fade effect
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw central AI node
      const centerX = canvas.offsetWidth * 0.5;
      const centerY = canvas.offsetHeight * 0.5;
      const radius = 30;

      // Glow effect
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius * 2
      );
      gradient.addColorStop(0, "rgba(139, 92, 246, 0.2)"); // Purple
      gradient.addColorStop(1, "rgba(139, 92, 246, 0)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgb(139, 92, 246)";
      ctx.fill();

      // Pulse effect
      const pulseRadius = radius + Math.sin(frame * 0.05) * 5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(139, 92, 246, 0.2)";
      ctx.lineWidth = 2;
      ctx.stroke();

      frame++;
      requestAnimationFrame(draw);
    }

    // Start animation
    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative h-full w-full">
      {/* Input Events - Top */}
      <div className="absolute left-0 right-0 top-[10%] flex justify-center">
        <div className="flex flex-wrap justify-center gap-3">
          {inputEvents.map((event, i) => (
            <div
              key={event}
              className="animate-fade-in rounded-full bg-transparent px-3 py-1 text-xs text-gray-600 shadow-sm backdrop-blur-sm"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {event}
            </div>
          ))}
        </div>
      </div>

      {/* Central AI Label */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="animate-fade-in rounded-lg bg-purple-500/90 px-4 py-2 text-sm text-white shadow-lg">
          Convea AI
        </div>
      </div>

      {/* Output Events - Bottom */}
      <div className="absolute bottom-[10%] left-0 right-0 flex justify-center">
        <div className="flex flex-wrap justify-center gap-3">
          {outputEvents.map((event, i) => (
            <div
              key={event}
              className="animate-fade-in rounded-full bg-white/60 px-3 py-1 text-xs text-gray-600 shadow-sm backdrop-blur-sm"
              style={{ animationDelay: `${(i + inputEvents.length) * 0.2}s` }}
            >
              {event}
            </div>
          ))}
        </div>
      </div>

      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export class Particle {
  x?: number;
  y?: number;
  size?: number;
  speedX?: number;
  speedY?: number;
  hue?: number;
  alpha?: number;
  path: number;
  isOutput: boolean;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  baseHue: number;

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    baseHue: number
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.baseHue = baseHue;
    this.isOutput = Math.random() > 0.5;
    this.path = (Math.random() * 3) | 0; // 0, 1, or 2 for different paths
    this.reset();
  }

  reset() {
    if (!this.isOutput) {
      // Input particles start from top
      this.x = this.canvas.offsetWidth * (0.2 + Math.random() * 0.6);
      this.y = this.canvas.offsetHeight * 0.2;
      this.speedY = Math.random() * 2 + 1;
    } else {
      // Output particles start from center
      this.x = this.canvas.offsetWidth * 0.5;
      this.y = this.canvas.offsetHeight * 0.5;
      this.speedY = Math.random() * 2 + 1;
    }

    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 2;
    this.hue = this.baseHue + Math.random() * 30;
    this.alpha = Math.random() * 0.3 + 0.2;
  }

  update() {
    // Early return if any required properties are undefined
    if (
      this.x === undefined ||
      this.y === undefined ||
      this.speedX === undefined ||
      this.speedY === undefined
    ) {
      return;
    }

    if (!this.isOutput) {
      // Input particles move down towards center
      this.y += this.speedY;
      this.x += this.speedX;
      if (this.y > this.canvas.offsetHeight * 0.5) {
        this.reset();
      }
    } else {
      // Output particles move down from center
      this.y += this.speedY;
      this.x += this.speedX;
      if (this.y > this.canvas.offsetHeight * 0.8) {
        this.reset();
      }
    }
  }

  draw() {
    // Early return if x, y coordinates or size are undefined
    if (
      this.x === undefined ||
      this.y === undefined ||
      this.size === undefined
    ) {
      return;
    }
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fillStyle = `hsla(${this.hue}, 70%, 50%, ${this.alpha})`;
    this.ctx.fill();
  }
}
