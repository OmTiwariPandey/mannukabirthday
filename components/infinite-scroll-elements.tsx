'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Heart, Star, Sparkles, Moon, Sun, Music, Coffee } from 'lucide-react';
import { useEffect, useState } from 'react';

const elements = [
  { Icon: Heart, color: 'text-pink-300/70' },
  { Icon: Star, color: 'text-purple-300/70' },
  { Icon: Moon, color: 'text-pink-400/70' },
  { Icon: Music, color: 'text-pink-300/70' },
  { Icon: Sparkles, color: 'text-purple-300/70' },
  { Icon: Sun, color: 'text-pink-400/70' },
  { Icon: Coffee, color: 'text-purple-300/70' },
];

function generateElement() {
  const element = elements[Math.floor(Math.random() * elements.length)];
  return {
    ...element,
    size: `w-${Math.floor(Math.random() * 3) + 4} h-${Math.floor(Math.random() * 3) + 4}`,
    left: `${Math.random() * 90 + 5}%`,
    speed: Math.random() * 0.8 + 0.2,
    direction: Math.random() > 0.5 ? 1 : -1,
    duration: 10 + Math.floor(Math.random() * 5),
  };
}

function ScrollingElement({ element }: { element: ReturnType<typeof generateElement> }) {
  const { scrollY } = useScroll();
  
  const y = useSpring(
    useTransform(
      scrollY,
      [0, 1000],
      [0, 1000 * element.speed * element.direction],
      { clamp: false }
    ),
    { stiffness: 50, damping: 15 }
  );

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: element.left,
        y,
      }}
      className="relative"
    >
      {[0, 1, 2].map((repeat) => (
        <motion.div
          key={repeat}
          className="absolute transform-gpu"
          style={{
            top: `${repeat * 1000}px`,
            opacity: 0.7,
          }}
          animate={{
            rotate: [0, element.direction * 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <element.Icon className={`${element.size} ${element.color}`} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export function InfiniteScrollElements() {
  const [mounted, setMounted] = useState(false);
  const [elements] = useState(() => Array.from({ length: 30 }, generateElement));

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element, index) => (
        <ScrollingElement key={index} element={element} />
      ))}
    </div>
  );
}