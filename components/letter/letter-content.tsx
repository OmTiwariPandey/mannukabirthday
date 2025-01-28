"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "./animated-text";

interface LetterContentProps {
  onClose: () => void;
}

export function LetterContent({ onClose }: LetterContentProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.7,
            ease: [0.4, 0, 0.2, 1],
          },
        },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-lg"
    >
      <div className="handwritten space-y-6 text-lg">
        <AnimatedText text="Dearest Mannu," delay={0.5} />

        <AnimatedText
          text="Sabse pehle toh Happy Birthday, Mannu! I hope you achieve everything you dream of in life. Aap apne goals ko pura karo aur apne potential ko poori tarah se utilize karo. Always keep growing and shining!"
          delay={1.2}
        />

        <AnimatedText
          text="Mere paas zyada time nahi tha, but I thought it would be a great idea to do something unique... Isliye maine yeh chhota sa website banaya, dedicated to celebrating your birthday and making it special for you."
          delay={7.4}
        />

        <AnimatedText
          text="Mere paas zyada kuch bolne ke liye nahi hai, par itna bolna chahunga ki you are amazing just the way you are. Tumhare andar potential hai, aur mujhe pura bharosa hai ki tum kuch extraordinary kar sakti ho. If you ever need anything, bhai hai idhar"
          delay={14.6}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 23.8, duration: 0.7 }}
          className="text-right"
        >
          <AnimatedText text="With lots of love," delay={4.8} />
          <AnimatedText text="Tumhara bhai," delay={4.8} />
          <AnimatedText text="Om," delay={4.8} />
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 5.2, duration: 0.7 }}
            className="text-pink-600 inline-block"
          >
            ❤️
          </motion.span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5, duration: 0.7 }}
        className="mt-8 text-center"
      >
        <button
          onClick={onClose}
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-700"
        >
          Close letter
        </button>
      </motion.div>
    </motion.div>
  );
}
