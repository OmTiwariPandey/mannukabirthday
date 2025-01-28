"use client";

import { useCallback } from "react";

export function useCalligraphyAnimation() {
  const getCharacterVariants = useCallback(
    (index: number) => ({
      hidden: {
        opacity: 0,
        y: 20,
        scaleY: 0,
        rotateZ: Math.random() * 10 - 5,
      },
      visible: {
        opacity: 1,
        y: 0,
        scaleY: 1,
        rotateZ: 0,
        transition: {
          duration: 0.7,
          delay: index * 0.05,
          ease: [0.215, 0.61, 0.355, 1],
        },
      },
    }),
    []
  );

  return { getCharacterVariants };
}
