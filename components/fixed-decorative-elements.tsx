'use client';

import { motion } from 'framer-motion';
import { Heart, Star, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const elements = [
  { Icon: Heart, color: 'text-pink-300/50', size: 'w-4 h-4', left: '5%', top: '15%' },
  { Icon: Star, color: 'text-purple-300/50', size: 'w-6 h-6', left: '15%', top: '8%' },
  { Icon: Sparkles, color: 'text-pink-400/50', size: 'w-5 h-5', left: '25%', top: '20%' },
  { Icon: Heart, color: 'text-pink-300/50', size: 'w-4 h-4', left: '35%', top: '5%' },
  { Icon: Star, color: 'text-purple-300/50', size: 'w-6 h-6', left: '45%', top: '18%' },
  { Icon: Heart, color: 'text-pink-400/50', size: 'w-5 h-5', left: '55%', top: '12%' },
  { Icon: Sparkles, color: 'text-pink-300/50', size: 'w-4 h-4', left: '65%', top: '22%' },
  { Icon: Star, color: 'text-purple-300/50', size: 'w-6 h-6', left: '75%', top: '7%' },
  { Icon: Heart, color: 'text-pink-400/50', size: 'w-5 h-5', left: '85%', top: '15%' },
  { Icon: Sparkles, color: 'text-pink-300/50', size: 'w-4 h-4', left: '95%', top: '10%' },
];

export function FixedDecorativeElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 h-[25vh] pointer-events-none overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              delay: index * 0.1,
              duration: 0.7,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: Math.random() * 2,
            }
          }}
          style={{
            position: 'absolute',
            left: element.left,
            top: element.top,
          }}
          className="transform-gpu"
        >
          <element.Icon className={`${element.size} ${element.color}`} />
        </motion.div>
      ))}
    </div>
  );
}