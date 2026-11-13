"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Particle {
  baseX: number;
  baseY: number;
  seed: number;
}

/**
 * Fundo vetorial reativo inspirado na tela inicial do Google Antigravity:
 * micro-traços organizados em malha que rotacionam e pulsam em ondas cromáticas
 * respondendo ao cursor (ou a um fluxo orbital suave em repouso / touch).
 */
export default function AntigravityBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let animationFrameId = 0;

    // Cursor target and smoothed attractor coordinates
    const pointer = { x: -9999, y: -9999, active: false };
    const smooth = { x: 0, y: 0 };

    const buildParticles = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Spacing adapts to mobile vs desktop to keep 60fps
      const spacing = width < 640 ? 34 : 38;
      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;

      const nextParticles: Particle[] = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const offsetX = r % 2 === 0 ? 0 : spacing * 0.5;
          nextParticles.push({
            baseX: c * spacing + offsetX - spacing * 0.5,
            baseY: r * spacing - spacing * 0.5,
            seed: Math.sin(c * 12.9898 + r * 78.233) * 43758.5453,
          });
        }
      }
      particles = nextParticles;

      if (!pointer.active) {
        smooth.x = width * 0.36;
        smooth.y = height * 0.42;
      }
    };

    const lerpColor = (t: number, isDark: boolean, alpha: number) => {
      // Spectral palette matching Google Antigravity: Blue -> Violet -> Coral/Amber
      const stops = [
        [37, 99, 235],   // Royal Blue
        [99, 102, 241],  // Indigo
        [168, 85, 247],  // Violet
        [239, 68, 68],   // Coral Red
        [245, 158, 11],  // Amber Orange
      ];
      const clamped = Math.max(0, Math.min(0.9999, t)) * (stops.length - 1);
      const idx = Math.floor(clamped);
      const frac = clamped - idx;
      const c1 = stops[idx];
      const c2 = stops[idx + 1];

      let r = Math.round(c1[0] + (c2[0] - c1[0]) * frac);
      let g = Math.round(c1[1] + (c2[1] - c1[1]) * frac);
      let b = Math.round(c1[2] + (c2[2] - c1[2]) * frac);

      if (isDark) {
        // Slightly brighten hues on dark slate backgrounds
        r = Math.min(255, Math.round(r + (255 - r) * 0.18));
        g = Math.min(255, Math.round(g + (255 - g) * 0.18));
        b = Math.min(255, Math.round(b + (255 - b) * 0.18));
      }

      return `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
    };

    const drawFrame = (timeMs: number) => {
      const isDark = themeRef.current === "dark";
      const t = timeMs * 0.001;

      ctx.clearRect(0, 0, width, height);

      // Gentle autonomous figure-8 drift when mouse is not hovering
      const targetX = pointer.active
        ? pointer.x
        : width * (width < 768 ? 0.5 : 0.32) + Math.cos(t * 0.45) * Math.min(180, width * 0.18);
      const targetY = pointer.active
        ? pointer.y
        : height * 0.44 + Math.sin(t * 0.6) * Math.min(110, height * 0.15);

      smooth.x += (targetX - smooth.x) * 0.08;
      smooth.y += (targetY - smooth.y) * 0.08;

      const maxRadius = Math.max(width, height) * 0.52;
      ctx.lineCap = "round";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = smooth.x - p.baseX;
        const dy = smooth.y - p.baseY;
        const dist = Math.hypot(dx, dy);

        // Normalized radial falloff + gentle traveling wave
        const proximity = Math.max(0, 1 - dist / maxRadius);
        const wave = 0.5 + 0.5 * Math.sin(dist * 0.018 - t * 2.1 + (p.seed % 1.5));

        // Subtle organic jitter around the grid
        const driftX = Math.cos(t * 0.8 + p.seed) * 3.5;
        const driftY = Math.sin(t * 0.7 + p.seed) * 3.5;
        const x = p.baseX + driftX - dx * proximity * 0.045;
        const y = p.baseY + driftY - dy * proximity * 0.045;

        // Angle points along radial field away/toward cursor with slight swirl
        const angle = Math.atan2(dy, dx) + proximity * 0.35;

        // Dash length grows smoothly in the active ring band
        const ringBand = Math.exp(-Math.pow((dist - maxRadius * 0.36) / (maxRadius * 0.28), 2));
        const len = 2.2 + proximity * 6.5 + ringBand * wave * 4.2;
        const lineWidth = 1.6 + proximity * 1.4;

        // Keep readability ultra-clean near text while glowing in the radial field
        const alpha = (isDark ? 0.14 : 0.12) + proximity * (isDark ? 0.62 : 0.68) * (0.55 + 0.45 * wave);

        // Color sweeps cleanly across angle + radial band
        const colorProgress =
          (Math.atan2(dy, dx) / (Math.PI * 2) + 0.5 + t * 0.04 + proximity * 0.25) % 1;

        ctx.strokeStyle = lerpColor(Math.abs(colorProgress), isDark, Math.min(0.88, alpha));
        ctx.lineWidth = lineWidth;

        const half = len * 0.5;
        const cx = Math.cos(angle) * half;
        const cy = Math.sin(angle) * half;

        ctx.beginPath();
        ctx.moveTo(x - cx, y - cy);
        ctx.lineTo(x + cx, y + cy);
        ctx.stroke();
      }

      if (!prefersReducedMotion) {
        animationFrameId = window.requestAnimationFrame(drawFrame);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        pointer.x = e.clientX - rect.left;
        pointer.y = e.clientY - rect.top;
        pointer.active = true;
      } else {
        pointer.active = false;
      }
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    buildParticles();
    animationFrameId = window.requestAnimationFrame(drawFrame);

    window.addEventListener("resize", buildParticles);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", buildParticles);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
    />
  );
}
