"use client";

import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";

export function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      <div className="text-center z-10 px-4">
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          className="handwritten text-6xl md:text-8xl font-bold gradient-text mb-12 leading-relaxed"
        >
          Happy Birthday Mannu!
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-pink-500 animate-pulse" />
            <p className="text-xl text-gray-700">
              Scroll down for your surprise
            </p>
            <Heart className="w-6 h-6 text-pink-500 animate-pulse" />
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 text-pink-400" />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, #ff69b4 0%, transparent 70%)",
          }}
        />
      </div>
    </motion.div>
  );
}
