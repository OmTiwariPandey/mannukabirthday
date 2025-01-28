"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Star } from "lucide-react";

export function EndingAnimation() {
  const [stars, setStars] = useState<{ left: number; top: number }[]>([]);
  const controls = useAnimation();

  useEffect(() => {
    setStars(
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
      }))
    );
  }, []);

  useEffect(() => {
    controls.start((i) => ({
      opacity: [0, 1, 0.5, 1],
      scale: [0, 1, 0.8, 1],
      transition: {
        delay: i * 0.1,
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    }));
  }, [controls]);

  return (
    <section className="py-16 relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {stars.map((position, i) => (
          <motion.div
            key={i}
            custom={i}
            animate={controls}
            className="absolute"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
          >
            <Star className="w-4 h-4 text-pink-300" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1.5,
            ease: [0.4, 0, 0.2, 1],
          },
        }}
        viewport={{ once: true }}
        className="text-center z-10 px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 1.2,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
          viewport={{ once: true }}
          className="handwritten text-4xl md:text-6xl gradient-text mb-6"
        >
          Hamesha mera sath dene ke liye thank you. ha mereme bohot saari kamiya
          hain but still I try my best khud ko change karne ka
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 1.2,
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className="text-gray-600"
        >
          Thank you for being you. Once again, Happy Birthday, meri behen! ❤️
        </motion.p>
      </motion.div>
    </section>
  );
}
