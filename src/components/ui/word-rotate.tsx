"use client";

import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  duration?: number;
  motionProps?: MotionProps;
  className?: string;
}

export function WordRotate({
  words,
  duration = 5000,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="relative inline-block" style={{ minHeight: '1em' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          className={cn("absolute whitespace-nowrap", className)}
          {...motionProps}
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
      <div className="invisible">
        {words[0]}
      </div>
    </div>
  );
}
