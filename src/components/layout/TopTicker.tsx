"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const items = [
  { text: "Your Trusted Partner from Small Businesses to Large Operations", icon: "/images/icon_cherry_splash.png" },
  { text: "Unleash Flavor and Quality with Vida Buddies Inc", icon: "/images/icon_grape_3d.png" },
  { text: "Serving businesses of all sizes for over 25 years", icon: "/images/icon_strawberry_shiny.png" },
];

export default function TopTicker() {
  // Create a seamless loop by repeating the items multiple times
  const loopItems = [...items, ...items, ...items, ...items];

  return (
    <div className="absolute top-0 left-0 right-0 w-full h-10 overflow-hidden bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 z-50">
      {/* Dim/Fade Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />

      {/* Scrolling Content */}
      <div className="flex items-center h-full">
        <motion.div
          className="whitespace-nowrap flex items-center will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 120, // Much slower
          }}
        >
          {/* First set */}
          {loopItems.map((item, i) => (
             <div key={i} className="flex items-center mx-6">
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-white drop-shadow-sm mr-6">
                    {item.text}
                </span>
                <div className="relative h-10 w-10">
                    <Image src={item.icon} alt="icon" fill className="object-contain drop-shadow-md" priority unoptimized />
                </div>
             </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
           {loopItems.map((item, i) => (
             <div key={`dup-${i}`} className="flex items-center mx-6">
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-white drop-shadow-sm mr-6">
                    {item.text}
                </span>
                <div className="relative h-10 w-10">
                    <Image src={item.icon} alt="icon" fill className="object-contain drop-shadow-md" priority unoptimized />
                </div>
             </div>
          ))}
        </motion.div>
      </div>

      {/* Shine/Gloss Effect overlay */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none" />
    </div>
  );
}
