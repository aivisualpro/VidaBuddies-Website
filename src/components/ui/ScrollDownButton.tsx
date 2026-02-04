"use client";

import React from "react";

interface ScrollDownButtonProps {
  targetId: string;
}

export default function ScrollDownButton({ targetId }: ScrollDownButtonProps) {
  const handleScroll = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScroll}
      className="absolute bottom-8 left-8 md:left-12 z-20 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
      aria-label="Scroll to next section"
    >
      <div className="h-14 w-8 rounded-full border-2 border-white/20 flex justify-center pt-2 backdrop-blur-sm bg-black/20">
        <div className="w-1.5 h-3 bg-primary rounded-full shadow-[0_0_10px_orange]" />
      </div>
    </button>
  );
}
