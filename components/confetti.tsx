'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export function Confetti() {
  useEffect(() => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const frame = () => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff69b4', '#4b0082', '#ffc0cb'],
      });

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff69b4', '#4b0082', '#ffc0cb'],
      });

      requestAnimationFrame(frame);
    };

    frame();

    const bigBurst = () => {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#4b0082', '#ffc0cb'],
      });
    };

    setTimeout(bigBurst, 500);
    setTimeout(bigBurst, 1000);
    setTimeout(bigBurst, 1500);
  }, []);

  return null;
}