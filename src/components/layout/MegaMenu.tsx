"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";

const products = [
  { 
    group: "Berries & Small Fruits", 
    items: [
      { name: "Blackberry", icon: "🍇" },
      { name: "Blueberry", icon: "🫐" },
      { name: "Raspberry", icon: "/images/icon_raspberry_3d.png" },
      { name: "Strawberry", icon: "/images/icon_strawberry_shiny.png" },
      { name: "Black Currant", icon: "🍇" }
    ] 
  },
  { 
    group: "Tropical & Exotic", 
    items: [
      { name: "Mango", icon: "/images/icon_mango_3d.png" },
      { name: "Passion Fruit", icon: "✨" },
      { name: "Pineapple", icon: "🍍" },
      { name: "Pink Guava", icon: "🌸" },
      { name: "Soursop", icon: "🍃" },
      { name: "Banana", icon: "🍌" },
      { name: "Dragon Fruit", icon: "🐉" },
      { name: "Papaya", icon: "🧡" }
    ] 
  },
  { 
    group: "Citrus & Orchard", 
    items: [
      { name: "Lemon", icon: "🍋" },
      { name: "Orange", icon: "🍊" },
      { name: "Blood orange", icon: "🔴" },
      { name: "Lime", icon: "🟢" },
      { name: "Tangerine", icon: "🍊" },
      { name: "Apple", icon: "🍎" },
      { name: "Peach", icon: "/images/peach_splash_mockup.png" },
      { name: "Pear", icon: "🍐" },
      { name: "Plum", icon: "🟣" }
    ] 
  },
  { 
    group: "Harvest & Unique", 
    items: [
      { name: "Carrot", icon: "🥕" },
      { name: "Ginger", icon: "🫚" },
      { name: "Goldenberry", icon: "🟡" },
      { name: "Red Prickly", icon: "🌵" },
      { name: "Pumpkin", icon: "🎃" },
      { name: "Grapefruit", icon: "🍊" },
      { name: "Watermelon", icon: "🍉" },
      { name: "Dark Sweet Cherry", icon: "🍒" }
    ] 
  },
];

const featuredProducts = [
  { name: "Global Sourcing", image: "/images/hero_slide_farm.png", desc: "Farm to table excellence." },
  { name: "Puree Artistry", image: "/images/hero_slide_splash.png", desc: "Crafting nature's finest." },
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[55]"
          />

          {/* Mega Menu Panel */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="fixed top-28 left-1/2 -translate-x-1/2 w-[98vw] max-w-7xl bg-[#050505]/95 border border-white/10 rounded-[3rem] shadow-4xl z-[70] overflow-hidden backdrop-blur-3xl"
            onMouseLeave={onClose}
          >
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
              <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full" />
              <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-red-500/5 blur-[150px] rounded-full" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12">
              {/* Left Side: Product Grid */}
              <div className="lg:col-span-9 p-8 lg:p-14">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                  {products.map((cat) => (
                    <div key={cat.group} className="space-y-10">
                      <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[9px] flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(251,146,60,0.8)]" />
                        {cat.group}
                      </h4>
                      <ul className="space-y-3">
                        {cat.items.map((item) => (
                          <li key={item.name}>
                            <Link 
                                href={`/products`} 
                                className="group flex items-center gap-4 text-gray-500 hover:text-white transition-all duration-300"
                                onClick={onClose}
                            >
                                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 overflow-hidden relative">
                                  {item.icon.startsWith("/") ? (
                                    <Image src={item.icon} alt="" fill className="object-contain p-1" />
                                  ) : (
                                    <span className="text-sm">{item.icon}</span>
                                  )}
                                </div>
                                <span className="text-xs font-bold tracking-wider group-hover:translate-x-1 transition-transform">{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Featured & Promo */}
              <div className="lg:col-span-3 bg-white/[0.02] border-l border-white/5 p-8 space-y-8">
                <div className="space-y-8">
                  <h4 className="text-white font-bold uppercase tracking-widest text-[9px] flex items-center gap-2 opacity-50">
                    <Sparkles size={10} className="text-primary" />
                    Spotlight
                  </h4>
                  
                  <div className="space-y-6">
                    {featuredProducts.map((p) => (
                      <div key={p.name} className="group relative rounded-2xl overflow-hidden aspect-video bg-zinc-900 border border-white/5 cursor-pointer">
                        <Image 
                          src={p.image} 
                          alt={p.name} 
                          fill 
                          className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-6">
                          <h5 className="text-white font-bold text-xs mb-1 group-hover:text-primary transition-colors">{p.name}</h5>
                          <p className="text-gray-500 text-[9px] font-medium">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-[2rem] bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 space-y-3 group cursor-pointer hover:from-primary/30 transition-all relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
                   <p className="text-primary font-black text-[9px] uppercase tracking-[0.3em] leading-none">Catalog 2026</p>
                   <h5 className="text-white font-bold text-lg leading-tight">Explore Full <br />Product Specifications.</h5>
                   <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest pt-2">
                      View All <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                   </div>
                </div>
              </div>
            </div>

            {/* Bottom Splash Accent */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
