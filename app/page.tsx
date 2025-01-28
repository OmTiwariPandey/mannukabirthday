"use client";

import { useState, useEffect } from "react";
import { CountdownOverlay } from "@/components/countdown/countdown-overlay";
import { TARGET_DATE } from "@/lib/constants";
import { calculateTimeRemaining } from "@/lib/time-utils";
import { MusicPlayer } from "@/components/music-player";
import { Header } from "@/components/header";
import { Letter } from "@/components/letter";
import { LoveCollage } from "@/components/love-collage";
import { Storybook } from "@/components/storybook";
import { Quizzes } from "@/components/quizzes";
import { Memories } from "@/components/memories";
import { EndingAnimation } from "@/components/ending-animation";
import { Confetti } from "@/components/confetti";
import { CelebrateButton } from "@/components/celebrate-button";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timeRemaining = calculateTimeRemaining(TARGET_DATE);
    if (timeRemaining.total <= 0) {
      setShowContent(true);
    }
  }, []);

  if (!isClient) {
    return null;
  }

  if (!showContent) {
    return <CountdownOverlay onComplete={() => setShowContent(true)} />;
  }

  return (
    <main className="min-h-screen pb-20">
      <Confetti />
      <MusicPlayer />
      <CelebrateButton />
      <Header />
      <div className="max-w-4xl mx-auto px-4 space-y-32">
        <Letter />
        <LoveCollage />
        <Storybook />
        {/* <Quizzes /> */}
        <Memories />
        <EndingAnimation />
      </div>
    </main>
  );
}
