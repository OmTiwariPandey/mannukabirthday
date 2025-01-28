"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundMusic } from "./background-music";
import { TimerDisplay } from "./timer-display";
import { TARGET_DATE, TIMER_STATES, type TimerState } from "@/lib/constants";
import { calculateTimeRemaining, type TimeRemaining } from "@/lib/time-utils";

interface CountdownOverlayProps {
  onComplete: () => void;
}

export function CountdownOverlay({ onComplete }: CountdownOverlayProps) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
    calculateTimeRemaining(TARGET_DATE)
  );
  const [timerState, setTimerState] = useState<TimerState>(
    TIMER_STATES.COUNTING
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining(TARGET_DATE);
      setTimeRemaining(newTimeRemaining);

      if (newTimeRemaining.total <= 0) {
        clearInterval(timer);
        setTimerState(TIMER_STATES.COMPLETED);
        onComplete();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (timerState === TIMER_STATES.COMPLETED) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-purple-50"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="handwritten text-4xl md:text-6xl gradient-text mb-12"
        >
          12 bajne do... Coming Soon
        </motion.h1>

        <TimerDisplay timeRemaining={timeRemaining} />

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mt-12 text-gray-600 text-center max-w-md px-4"
        >
          Wait...
        </motion.p>

        <BackgroundMusic />
      </motion.div>
    </AnimatePresence>
  );
}
