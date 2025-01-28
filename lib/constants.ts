export const TARGET_DATE = new Date("2025-01-29T00:00:00");

export const TIMER_STATES = {
  COUNTING: "counting",
  COMPLETED: "completed",
} as const;

export type TimerState = (typeof TIMER_STATES)[keyof typeof TIMER_STATES];
