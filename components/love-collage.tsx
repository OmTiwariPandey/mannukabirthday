"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Heart,
  Star,
  Coffee,
  Music,
  Book,
  Camera,
  Smile,
  Sun,
} from "lucide-react";

const loveItems = [
  {
    icon: Heart,
    title: "Tumhari Kindness",
    description:
      "The way you always put others first and spread love wherever you go.",
  },
  {
    icon: Star,
    title: "Tumhara Ambition",
    description: "I love your ambition to achieve something big in life.",
  },
  {
    icon: Coffee,
    title: "Bitaya hua time",
    description:
      "Those perfect late night chats during my worst days were an emotional blessing. Thank you for that.",
  },
  // {
  //   icon: Music,
  //   title: "Your Taste in Music",
  //   description: "The way you find songs that perfectly match every moment.",
  // },
  // {
  //   icon: Book,
  //   title: "Your",
  //   description:
  //     "Those daydreams I once had, which I thought could become real someday, but will sadly never come true.",
  // },
  {
    icon: Camera,
    title: "Tumhari Creativity",
    description:
      "The unique way you see and capture the beauty in everything. Aur bhi bohot kuch hai likhne ko. Love you anyway",
  },
  // {
  //   icon: Smile,
  //   title: "Tumhari Smile",
  //   description: "That infectious smile that brightens everyone's day",
  // },
  // {
  //   icon: Sun,
  //   title: "Tumhari Energy",
  //   description: "The positive vibes you bring to every situation.",
  // },
];

export function LoveCollage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      y: 50,
      rotateZ: index % 2 === 0 ? -10 : 10,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateZ: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="py-16" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-4xl handwritten text-center mb-12 gradient-text"
      >
        Things I Like About You
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
      >
        {loveItems.map((item, index) => (
          <motion.div
            key={item.title}
            custom={index}
            variants={itemVariants}
            className="hover-card bg-white/80 p-6 rounded-3xl shadow-lg backdrop-blur-sm border border-white/20 transform-gpu"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="love-icon transform-gpu">
                <item.icon className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
