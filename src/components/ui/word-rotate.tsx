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
  duration = 1000,
  motionProps,
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

  const defaultMotionProps: MotionProps = {
    initial: { 
      opacity: 0, 
      transform: "translateY(8px)",
    },
    animate: { 
      opacity: 1, 
      transform: "translateY(0px)",
    },
    exit: { 
      opacity: 0, 
      transform: "translateY(-8px)",
    },
    transition: {
      duration: 0.75,
      ease: [0.32, 0.72, 0, 1], // Custom easing for smoother motion
    },
  };

  const finalMotionProps = motionProps || defaultMotionProps;

  return (
    <div className="relative inline-flex items-center overflow-hidden" style={{ height: '1em' }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          className={cn("absolute left-0 whitespace-nowrap", className)}
          {...finalMotionProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      <span className="invisible select-none" aria-hidden="true">
        {words[0]}
      </span>
    </div>
  );
}
