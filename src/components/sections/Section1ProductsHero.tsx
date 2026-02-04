"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import ProductsHero3D from "@/components/sections/ProductsHero3D";

export default function Section1ProductsHero() {
  useEffect(() => {
    // Hero Animation
    gsap.from(".hero-content > *", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out"
    });
  }, []);

  return (
    <section className="container min-h-[85vh] flex flex-col items-center justify-center relative overflow-hidden">
      <ProductsHero3D />
      
      <div className="hero-content max-w-7xl mx-auto text-center space-y-12 relative z-10 px-4">
        
        <div className="space-y-4">
             <h1 className="text-7xl md:text-[10rem] font-black font-display leading-[0.85] tracking-tighter text-white drop-shadow-2xl">
              NATURE'S
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-red-500 italic">
                PALETTE
              </span>
            </h1>
            <p className="text-2xl md:text-4xl font-light tracking-widest uppercase text-white/60">
                Perfectly Preserved
            </p>
        </div>

        <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
          Explore our world-class selection of fruit purees. 
          <span className="text-white font-bold ml-2">100% natural, zero preservatives</span>, 
          and shelf-stable for 24 months.
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-8">
          <button className="group relative px-12 py-6 bg-primary text-black font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(251,146,60,0.4)] flex items-center gap-3 overflow-hidden">
             <span className="relative z-10">DOWNLOAD CATALOG</span>
             <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
             <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          
          <button className="px-12 py-6 bg-transparent border-2 border-white/10 text-white font-black rounded-full hover:bg-white/5 hover:border-white/30 active:scale-95 transition-all backdrop-blur-sm">
            REQUEST SAMPLES
          </button>
        </div>
      </div>
    </section>
  );
}
