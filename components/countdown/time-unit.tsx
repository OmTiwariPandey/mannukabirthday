'use client';

import { motion } from 'framer-motion';

interface TimeUnitProps {
  value: number;
  label: string;
}

export function TimeUnit({ value, label }: TimeUnitProps) {
  return (
    <div className="flex flex-col items-center mx-4">
      <motion.div
        key={value}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold gradient-text mb-2"
      >
        {value.toString().padStart(2, '0')}
      </motion.div>
      <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}