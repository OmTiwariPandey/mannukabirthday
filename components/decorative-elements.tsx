'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const elements = [
  { Icon: Heart, color: 'text-pink-300', size: 'w-4 h-4', left: '10%', offset: 0 },
  { Icon: Star, color: 'text-purple-300', size: 'w-6 h-6', left: '85%', offset: 100 },
  { Icon: Heart, color: 'text-pink-400', size: 'w-5 h-5', left: '75%', offset: 200 },
  { Icon: Star, color: 'text-pink-300', size: 'w-4 h-4', left: '15%', offset: 300 },
  { Icon: Heart, color: 'text-purple-300', size: 'w-6 h-6', left: '90%', offset: 400 },
  { Icon: Star, color: 'text-pink-400', size: 'w-5 h-5', left: '5%', offset: 500 },
  { Icon: Heart, color: 'text-pink-300', size: 'w-4 h-4', left: '80%', offset: 600 },
  { Icon: Star, color: 'text-purple-300', size: 'w-6 h-6', left: '20%', offset: 700 },
  { Icon: Heart, color: 'text-pink-400', size: 'w-5 h-5', left: '70%', offset: 800 },
  { Icon: Star, color: 'text-pink-300', size: 'w-4 h-4', left: '25%', offset: 900 },
  { Icon: Heart, color: 'text-purple-300', size: 'w-6 h-6', left: '60%', offset: 1000 },
  { Icon: Star, color: 'text-pink-400', size: 'w-5 h-5', left: '30%', offset: 1100 },
  { Icon: Heart, color: 'text-pink-300', size: 'w-4 h-4', left: '50%', offset: 1200 },
  { Icon: Star, color: 'text-purple-300', size: 'w-6 h-6', left: '40%', offset: 1300 },
];

function ScrollElement({ element }: { element: typeof elements[0] }) {
  const { scrollY } = useScroll();
  
  const y = useTransform(
    scrollY,
    [element.offset - 500, element.offset + 500],
    [element.offset, element.offset + 200],
    { clamp: false }
  );

  const opacity = useTransform(
    scrollY,
    [element.offset - 800, element.offset - 400, element.offset + 400, element.offset + 800],
    [0, 1, 1, 0]
  );

  const rotate = useTransform(
    scrollY,
    [element.offset - 500, element.offset + 500],
    [0, 360]
  );

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: element.left,
        y,
        rotate,
        opacity,
      }}
      className="transform-gpu"
    >
      <element.Icon className={`${element.size} ${element.color}`} />
    </motion.div>
  );
}

export function DecorativeElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element, index) => (
        <ScrollElement key={index} element={element} />
      ))}
    </div>
  );
}