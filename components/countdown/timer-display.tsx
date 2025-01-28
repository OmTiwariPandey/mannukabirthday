'use client';

import { motion } from 'framer-motion';
import { TimeUnit } from './time-unit';
import type { TimeRemaining } from '@/lib/time-utils';

interface TimerDisplayProps {
  timeRemaining: TimeRemaining;
}

export function TimerDisplay({ timeRemaining }: TimerDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-center items-center space-x-2 md:space-x-4"
    >
      <TimeUnit value={timeRemaining.days} label="Days" />
      <TimeUnit value={timeRemaining.hours} label="Hours" />
      <TimeUnit value={timeRemaining.minutes} label="Minutes" />
      <TimeUnit value={timeRemaining.seconds} label="Seconds" />
    </motion.div>
  );
}