"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PartyPopper } from "lucide-react";
import useSound from "use-sound";
import confetti from "canvas-confetti";

export function CelebrateButton() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [play] = useSound("/audio/celebrate.mp3", {
    volume: 0.5,
    interrupt: true,
  });

  const handleCelebrate = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    play();

    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const frame = () => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        setIsAnimating(false);
        return;
      }

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff69b4", "#4b0082", "#ffc0cb"],
      });

      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff69b4", "#4b0082", "#ffc0cb"],
      });

      requestAnimationFrame(frame);
    };

    frame();

    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#ff69b4", "#4b0082", "#ffc0cb"],
    });

    setTimeout(() => setIsAnimating(false), duration);
  };

  return (
    <motion.button
      onClick={handleCelebrate}
      disabled={isAnimating}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed bottom-11 left-4 z-50 px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 ${
        isAnimating ? "opacity-75 cursor-not-allowed" : ""
      }`}
    >
      <PartyPopper className="w-5 h-5" />
      <span>{isAnimating ? "Celebrating..." : "Celebrate!"}</span>
    </motion.button>
  );
}
