"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { LetterButton } from "./letter/letter-button";
import { LetterContent } from "./letter/letter-content";

export function Letter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <LetterButton onClick={() => setIsOpen(true)} />
          ) : (
            <LetterContent onClose={() => setIsOpen(false)} />
          )}
        </AnimatePresence>
      </motion.div>

      <Heart className="absolute -top-4 left-1/4 text-pink-300 w-8 h-8 floating" />
      <Heart
        className="absolute top-1/3 right-1/4 text-pink-200 w-6 h-6 floating"
        style={{ animationDelay: "1s" }}
      />
      <Heart
        className="absolute bottom-0 left-1/3 text-pink-400 w-5 h-5 floating"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
}
