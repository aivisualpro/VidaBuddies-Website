"use client";
import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import PureeBubble from "@/components/canvas/PureeBubble";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      // Using slice to convert HTMLCollection to array for GSAP
      const children = Array.from(textRef.current.children);
      gsap.fromTo(
        children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.5 }
      );
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 opacity-80">
         <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
            <Environment preset="studio" />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={2} color="#ffaa00" />
            <pointLight position={[-10, -5, -10]} intensity={2} color="#4b0082" />
            <PureeBubble />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
         </Canvas>
      </div>

      <div className="container relative z-10 flex h-full flex-col justify-center pointer-events-none">
        <div ref={textRef} className="max-w-4xl space-y-8 pointer-events-auto pl-4 md:pl-0">
          <h1 className="text-6xl font-black tracking-tight text-white sm:text-7xl md:text-9xl font-display leading-[0.9]">
            <span className="block text-primary drop-shadow-2xl">Puree</span>
            <span className="block drop-shadow-2xl">Perfection.</span>
          </h1>
          <p className="max-w-xl text-xl text-gray-300 md:text-2xl font-light">
            Crafted for the bold. Premium aseptic fruit purees for brewers, bakers, and visionaries who demand the absolute best.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
             <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-black font-bold shadow-[0_0_30px_rgba(251,146,60,0.6)] transition-transform hover:scale-105 active:scale-95">
                Explore Blends
             </Button>
             <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-white/10 hover:bg-white/5 text-white backdrop-blur-md transition-transform hover:scale-105 active:scale-95">
                Request Sample
             </Button>
          </div>
        </div>
      </div>
       
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
         <div className="h-14 w-8 rounded-full border-2 border-white/20 flex justify-center pt-2 backdrop-blur-sm bg-black/20">
            <div className="w-1.5 h-3 bg-primary rounded-full shadow-[0_0_10px_orange]" />
         </div>
      </div>
    </section>
  );
}
