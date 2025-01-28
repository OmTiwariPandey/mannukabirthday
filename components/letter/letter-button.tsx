"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

interface LetterButtonProps {
  onClick: () => void;
}

export function LetterButton({ onClick }: LetterButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="inline-block"
    >
      <div className="letter-pointer">
        <button
          onClick={onClick}
          className="inline-flex items-center gap-2 px-6 py-3 bg-pink-100 text-pink-700 rounded-2xl shadow-md hover:bg-pink-200 transition-colors duration-700"
        >
          <Mail className="w-5 h-5" />
          <span>Open My Letter</span>
        </button>
      </div>
    </motion.div>
  );
}
