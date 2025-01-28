'use client';

import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound('/audio/background-music.mp3', {
    volume: 0.3,
    loop: true,
    interrupt: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPlaying(true);
      play();
    }, 1000);

    return () => {
      clearTimeout(timer);
      stop();
    };
  }, [play, stop]);

  const toggleMusic = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      onClick={toggleMusic}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="fixed bottom-4 right-4 z-50 p-4 bg-white/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {isPlaying ? (
        <Volume2 className="w-6 h-6 text-pink-500" />
      ) : (
        <VolumeX className="w-6 h-6 text-gray-500" />
      )}
    </motion.button>
  );
}