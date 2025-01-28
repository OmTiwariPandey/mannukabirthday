"use client";

import { motion } from "framer-motion";
import { useCalligraphyAnimation } from "@/hooks/use-calligraphy-animation";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.div className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block origin-top"
              initial={{ opacity: 0, y: 20, scaleY: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                scaleY: 1,
              }}
              transition={{
                duration: 0.2,
                delay: delay + wordIndex * 0.2 + charIndex * 0.05,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}
