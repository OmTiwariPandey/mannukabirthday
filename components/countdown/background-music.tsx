'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/audio/waiting.mp3');
    audioRef.current.loop = true;
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (!isMuted) {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
          setIsMuted(true);
        });
      } else {
        audioRef.current.pause();
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [isMuted]);

  return (
    <button
      onClick={() => setIsMuted(!isMuted)}
      className="fixed bottom-4 right-4 z-50 p-4 bg-white/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {isMuted ? (
        <VolumeX className="w-6 h-6 text-gray-500" />
      ) : (
        <Volume2 className="w-6 h-6 text-pink-500" />
      )}
    </button>
  );
}