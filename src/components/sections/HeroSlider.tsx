"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import PureeBubble from "@/components/canvas/PureeBubble";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";

const slides = [
  {
    id: 1,
    type: "3d",
    color: "#f97316", // Orange
    title: { line1: "Puree", line2: "Perfection." },
    subtitle: "Crafted for the bold. Premium aseptic fruit purees for brewers, bakers, and visionaries.",
    cta: { primary: "Explore Blends", secondary: "Request Sample" },
  },
  {
    id: 2,
    type: "image",
    src: "/images/hero_slide_farm.png",
    title: { line1: "Global", line2: "Sourcing." },
    subtitle: "From the finest orchards to your facility. We source the highest quality fruits worldwide.",
    cta: { primary: "Our Process", secondary: "Learn More" },
  },
  {
    id: 3,
    type: "image",
    src: "/images/hero_slide_splash.png",
    title: { line1: "Taste", line2: "Innovation." },
    subtitle: "Experience the vibrant, natural flavor of 100% real fruit. No additives, just pure taste.",
    cta: { primary: "View Products", secondary: "Contact Us" },
  },
  {
    id: 4,
    type: "image",
    color: "#eab308", // Yellow for Banana
    src: "/images/banana-splash.png",
    title: { line1: "Lovely", line2: "Banana." },
    subtitle: "Revolutionary nano-technology for perfect stability. Smooth, creamy, and consistent.",
    cta: { primary: "See Tech", secondary: "Learn More" },
  },
  {
    id: 5,
    type: "image",
    color: "#a855f7", // Purple for Passion Fruit
    src: "/images/passion-fruit-splash.png",
    title: { line1: "Exotic", line2: "Passion." },
    subtitle: "Intense tartness, straight from the tropics. Elevate your brews with pure passion.",
    cta: { primary: "Try Passion", secondary: "Download Specs" },
  },
  {
    id: 6,
    type: "image",
    color: "#f43f5e", // Rose for Pink Guava
    src: "/images/pink-guava-splash.png",
    title: { line1: "Tropical", line2: "Guava." },
    subtitle: "Sweet, aromatic, and perfectly pink. A sensory delight for premium beverages.",
    cta: { primary: "Get Sample", secondary: "View Profile" },
  },
  {
    id: 7,
    type: "image",
    color: "#84cc16", // Lime
    src: "/images/lime-splash.png",
    title: { line1: "Zesty", line2: "Lime." },
    subtitle: "Sharp, refreshing, and critical for balance. The perfect citrus kick.",
    cta: { primary: "Add Zest", secondary: "Contact Us" },
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      // Auto-advance is optional, maybe too distracting with 3D? 
      // Let's keep it slow.
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 h-full w-full"
            >
              {/* Background Layer */}
              <div className="absolute inset-0 z-0">
                {/* 1. Background Image (Always render if present) */}
                {slide.src && (
                  <div className="absolute inset-0 h-full w-full">
                     <Image 
                        src={slide.src} 
                        alt="Hero background" 
                        fill 
                        className="object-cover"
                        priority
                     />
                     <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay for text readability */}
                  </div>
                )}

                {/* 2. 3D Blob Layer (Only for type='3d') */}
                {slide.type === "3d" && (
                  <div className={`absolute inset-0 h-full w-full ${slide.src ? 'mix-blend-screen opacity-90' : 'opacity-80'}`}>
                     <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                        <Environment preset="studio" />
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={2} color="#ffaa00" />
                        <pointLight position={[-10, -5, -10]} intensity={2} color="#4b0082" />
                        <PureeBubble color={(slide as any).color} />
                        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
                     </Canvas>
                  </div>
                )}
              </div>

              {/* Content Layer */}
              <div className="container relative z-10 flex h-full flex-col justify-center pointer-events-none">
                <div className="max-w-4xl space-y-8 pointer-events-auto pl-4 md:pl-0">
                  <motion.h1 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-6xl font-black tracking-tight text-white sm:text-7xl md:text-9xl font-display leading-[0.9]"
                  >
                    <span className="block text-primary drop-shadow-2xl">{slide.title.line1}</span>
                    <span className="block drop-shadow-2xl">{slide.title.line2}</span>
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="max-w-xl text-xl text-gray-300 md:text-2xl font-light"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex flex-wrap gap-6 pt-4"
                  >
                     <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-black font-bold shadow-[0_0_30px_rgba(251,146,60,0.6)] transition-transform hover:scale-105 active:scale-95">
                        {slide.cta.primary}
                     </Button>
                     <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-white/10 hover:bg-white/5 text-white backdrop-blur-md transition-transform hover:scale-105 active:scale-95">
                        {slide.cta.secondary}
                     </Button>
                  </motion.div>
                </div>
              </div>

              {/* Mockup for Slide 1 - Refined with Design Principles */}
              {slide.id === 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 100, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    x: 0, 
                    y: [0, -15, 0] // Subtle floating animation
                  }}
                  transition={{ 
                    opacity: { delay: 1.2, duration: 1 },
                    scale: { delay: 1.2, duration: 1, type: "spring" },
                    x: { delay: 1.2, duration: 1 },
                    y: { repeat: Infinity, duration: 6, ease: "easeInOut" } // Infinite float
                  }}
                  whileHover={{ scale: 1.05, filter: "brightness(1.1) blur(0px)" }}
                  className="absolute bottom-[10%] right-[5%] z-20 pointer-events-auto hidden md:block max-w-[350px] lg:max-w-[550px]"
                >
                  <div className="relative group">
                    {/* Light Bleed / Atmosphere Glow - Gold/Peach for Peach */}
                    <div className="absolute inset-0 bg-orange-400/20 blur-[80px] rounded-full scale-75 group-hover:bg-orange-400/30 transition-colors duration-700" />
                    
                    <Image 
                      src="/images/peach_splash_mockup.png"
                      alt="Peach Splash Mockup"
                      width={550}
                      height={550}
                      className="relative z-10 select-none pointer-events-none transition-all duration-700
                                 filter blur-[0.4px] brightness(1.05)
                                 drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)] 
                                 drop-shadow-[0_0_50px_rgba(251,146,60,0.2)]"
                      style={{
                        maskImage: "radial-gradient(circle at center, black 40%, transparent 85%)",
                        WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 85%)",
                      }}
                    />
                  </div>
                </motion.div>
              )}

              {/* Mockup for Slide 2 - Refined with Design Principles */}
              {slide.id === 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 100, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    x: 0, 
                    y: [0, -15, 0] // Subtle floating animation
                  }}
                  transition={{ 
                    opacity: { delay: 1.2, duration: 1 },
                    scale: { delay: 1.2, duration: 1, type: "spring" },
                    x: { delay: 1.2, duration: 1 },
                    y: { repeat: Infinity, duration: 6, ease: "easeInOut" } // Infinite float
                  }}
                  whileHover={{ scale: 1.05, filter: "brightness(1.1) blur(0px)" }}
                  className="absolute bottom-[10%] right-[5%] z-20 pointer-events-auto hidden md:block max-w-[350px] lg:max-w-[550px]"
                >
                  <div className="relative group">
                    {/* Light Bleed / Atmosphere Glow */}
                    <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-75 group-hover:bg-primary/30 transition-colors duration-700" />
                    
                    <Image 
                      src="/images/mango_splash_mockup.png"
                      alt="Mango Splash Mockup"
                      width={550}
                      height={550}
                      className="relative z-10 select-none pointer-events-none transition-all duration-700
                                 filter blur-[0.4px] brightness(1.05)
                                 drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)] 
                                 drop-shadow-[0_0_50px_rgba(251,146,60,0.3)]"
                      style={{
                        maskImage: "radial-gradient(circle, black 50%, transparent 95%)",
                        WebkitMaskImage: "radial-gradient(circle, black 50%, transparent 95%)",
                      }}
                    />
                  </div>
                </motion.div>
              )}

              {/* Mockup for Slide 3 - Refined with Design Principles */}
              {slide.id === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 100, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    x: 0, 
                    y: [0, -15, 0] // Subtle floating animation
                  }}
                  transition={{ 
                    opacity: { delay: 1.2, duration: 1 },
                    scale: { delay: 1.2, duration: 1, type: "spring" },
                    x: { delay: 1.2, duration: 1 },
                    y: { repeat: Infinity, duration: 6, ease: "easeInOut" } // Infinite float
                  }}
                  whileHover={{ scale: 1.05, filter: "brightness(1.1) blur(0px)" }}
                  className="absolute bottom-[10%] right-[5%] z-20 pointer-events-auto hidden md:block max-w-[350px] lg:max-w-[550px]"
                >
                  <div className="relative group">
                    {/* Light Bleed / Atmosphere Glow - Red/Crimson for Strawberry */}
                    <div className="absolute inset-0 bg-red-500/20 blur-[80px] rounded-full scale-75 group-hover:bg-red-500/30 transition-colors duration-700" />
                    
                    <Image 
                      src="/images/strawberry_splash_final.png"
                      alt="Strawberry Splash Mockup"
                      width={550}
                      height={550}
                      className="relative z-10 select-none pointer-events-none transition-all duration-700
                                 filter blur-[0.4px] brightness(1.05)
                                 drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)] 
                                 drop-shadow-[0_0_50px_rgba(239,68,68,0.3)]"
                      style={{
                        maskImage: "radial-gradient(circle at center, black 40%, transparent 85%)",
                        WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 85%)",
                      }}
                    />
                  </div>
                </motion.div>
              )}

            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Slider Controls */}
      <div className="absolute bottom-12 right-12 z-20 flex gap-4">
        <Button 
            variant="ghost" 
            size="icon" 
            onClick={prevSlide}
            className="rounded-full bg-black/20 hover:bg-white/10 text-white backdrop-blur-md border border-white/10 h-14 w-14"
        >
            <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button 
            variant="ghost" 
            size="icon" 
            onClick={nextSlide}
            className="rounded-full bg-black/20 hover:bg-white/10 text-white backdrop-blur-md border border-white/10 h-14 w-14"
        >
            <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

       {/* Slide Indicators */}
       <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? "w-8 bg-primary shadow-[0_0_10px_orange]" : "w-2 bg-white/30 hover:bg-white/50"}`}
              />
          ))}
       </div>

      <button 
        onClick={() => document.getElementById("section2")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-[calc(var(--container-padding,2rem)+110px)] -translate-x-1/2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-10 hidden md:block"
      >
         <div className="h-14 w-8 rounded-full border-2 border-white/20 flex justify-center pt-2 backdrop-blur-sm bg-black/20">
            <div className="w-1.5 h-3 bg-primary rounded-full shadow-[0_0_10px_orange]" />
         </div>
      </button>

      {/* Mobile center version */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-10 md:hidden pointer-events-none">
         <div className="h-14 w-8 rounded-full border-2 border-white/20 flex justify-center pt-2 backdrop-blur-sm bg-black/20">
            <div className="w-1.5 h-3 bg-primary rounded-full shadow-[0_0_10px_orange]" />
         </div>
      </div>
    </section>
  );
}
