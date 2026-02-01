"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ChevronRight, Apple, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Footer from "@/components/layout/Footer";
import ProductsHero3D from "@/components/sections/ProductsHero3D";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const productCategories = [
  "All Products",
  "Berries & Small Fruits",
  "Tropical & Exotic",
  "Citrus & Orchard",
  "Harvest & Unique"
];

const products = [
  // Berries & Small Fruits
  { name: "Blackberry", category: "Berries & Small Fruits", icon: "🍇", image: "/images/hero_slide_splash.png", description: "Deep, intense flavor with high antioxidant content.", specs: ["Aseptic", "100% Natural", "Shelf-stable"] },
  { name: "Blueberry", category: "Berries & Small Fruits", icon: "🫐", image: "/images/hero_slide_splash.png", description: "Sweet and tangy, perfect for premium beverages.", specs: ["Aseptic", "Non-GMO", "No Added Sugar"] },
  { name: "Raspberry", category: "Berries & Small Fruits", icon: "/images/icon_raspberry_3d.png", image: "/images/strawberry_splash_final.png", description: "Intense red color and sharp, refreshing taste.", specs: ["Vivid Color", "Natural Aroma", "Aseptic"] },
  { name: "Strawberry", category: "Berries & Small Fruits", icon: "/images/icon_strawberry_shiny.png", image: "/images/strawberry_splash_mockup.png", description: "The classic choice for consistent sweetness and aroma.", specs: ["Premium Source", "Triple Filtered", "Aseptic"] },
  { name: "Black Currant", category: "Berries & Small Fruits", icon: "🍇", image: "/images/hero_slide_splash.png", description: "Strong, tart flavor for sophisticated formulations.", specs: ["Intense Flavor", "Rich Color", "Aseptic"] },

  // Tropical & Exotic
  { name: "Mango", category: "Tropical & Exotic", icon: "/images/icon_mango_3d.png", image: "/images/mango_splash_mockup.png", description: "Royal Alphonso mangoes, rich and velvety texture.", specs: ["High Brix", "Pure Fruit", "Global Standard"] },
  { name: "Passion Fruit", category: "Tropical & Exotic", icon: "✨", image: "/images/hero_slide_splash.png", description: "Exotic, aromatic, and perfectly balanced acidity.", specs: ["Aromatic", "Seeds Removed", "Aseptic"] },
  { name: "Pineapple", category: "Tropical & Exotic", icon: "🍍", image: "/images/hero_slide_splash.png", description: "Tropical sunshine captured in a shelf-stable format.", specs: ["Sweet & Tangy", "Versatile", "Global Sourcing"] },
  { name: "Pink Guava", category: "Tropical & Exotic", icon: "🌸", image: "/images/hero_slide_splash.png", description: "Soft, floral notes with a beautiful pink hue.", specs: ["Exotic", "Fragrant", "Aseptic"] },
  { name: "Soursop", category: "Tropical & Exotic", icon: "🍃", image: "/images/hero_slide_splash.png", description: "Unique creamy texture with a citrusy strawberry-like scent.", specs: ["Artisanal", "Unique", "Aseptic"] },
  { name: "Banana", category: "Tropical & Exotic", icon: "🍌", image: "/images/hero_slide_splash.png", description: "Creamy and consistent, perfect for smoothies.", specs: ["Creamy", "Sweet", "Aseptic"] },
  { name: "Dragon Fruit", category: "Tropical & Exotic", icon: "🐉", image: "/images/hero_slide_splash.png", description: "Stunning magenta color with subtle sweetness.", specs: ["Vibrant", "Exotic", "Aseptic"] },
  { name: "Papaya", category: "Tropical & Exotic", icon: "🧡", image: "/images/hero_slide_splash.png", description: "Sun-ripened tropical sweetness with delicate aroma.", specs: ["High Brix", "Natural", "Aseptic"] },

  // Citrus & Orchard
  { name: "Peach", category: "Citrus & Orchard", icon: "/images/peach_splash_mockup.png", image: "/images/peach_splash_mockup.png", description: "Sun-ripened peaches, smooth and naturally sweet.", specs: ["Stone Fruit", "Velvety", "100% Pure"] },
  { name: "Lemon", category: "Citrus & Orchard", icon: "🍋", image: "/images/hero_slide_splash.png", description: "Zesty and bright, the ultimate flavor enhancer.", specs: ["High Acid", "Citrus Burst", "Aseptic"] },
  { name: "Orange", category: "Citrus & Orchard", icon: "🍊", image: "/images/hero_slide_splash.png", description: "Universal appeal with consistent citrus brightness.", specs: ["Classic", "Vitamin C", "Aseptic"] },
  { name: "Blood orange", category: "Citrus & Orchard", icon: "🔴", image: "/images/hero_slide_splash.png", description: "Dramatic crimson color with a raspberry-like citrus note.", specs: ["Exotic Citrus", "Vivid", "Aseptic"] },
  { name: "Lime", category: "Citrus & Orchard", icon: "🟢", image: "/images/hero_slide_splash.png", description: "Sharp and refreshing, essential for culinary balance.", specs: ["Zesty", "Tart", "Aseptic"] },
  { name: "Tangerine", category: "Citrus & Orchard", icon: "🍊", image: "/images/hero_slide_splash.png", description: "Sweet, citrusy, and lighter than traditional orange.", specs: ["Fragrant", "Sweet Citrus", "Aseptic"] },
  { name: "Apple", category: "Citrus & Orchard", icon: "🍎", image: "/images/hero_slide_splash.png", description: "Crisp and clean, the perfect base for any blend.", specs: ["Versatile", "Clear", "Aseptic"] },
  { name: "Pear", category: "Citrus & Orchard", icon: "🍐", image: "/images/hero_slide_splash.png", description: "Subtle grainy texture with delicate sweetness.", specs: ["Mild", "Texture", "Aseptic"] },
  { name: "Plum", category: "Citrus & Orchard", icon: "🟣", image: "/images/hero_slide_splash.png", description: "Rich, deep flavor with balanced acidity.", specs: ["Dark Fruit", "Aromatic", "Aseptic"] },

  // Harvest & Unique
  { name: "Carrot", category: "Harvest & Unique", icon: "🥕", image: "/images/hero_slide_splash.png", description: "Earthly sweetness for health-focused formulations.", specs: ["Beta-Carotene", "Rich Color", "Aseptic"] },
  { name: "Ginger", category: "Harvest & Unique", icon: "🫚", image: "/images/hero_slide_splash.png", description: "Spicy and bold, perfect for craft beverages.", specs: ["Spicy", "Potent", "Aseptic"] },
  { name: "Goldenberry", category: "Harvest & Unique", icon: "🟡", image: "/images/hero_slide_splash.png", description: "Tangy and tart with a unique tropical twist.", specs: ["Superfruit", "Tart", "Aseptic"] },
  { name: "Red Prickly Pear", category: "Harvest & Unique", icon: "🌵", image: "/images/hero_slide_splash.png", description: "Vibrant desert fruit with a melon-like flavor.", specs: ["Neon Color", "Unique", "Aseptic"] },
  { name: "Pumpkin", category: "Harvest & Unique", icon: "🎃", image: "/images/hero_slide_splash.png", description: "Seasonal favorite with smooth, rich texture.", specs: ["Autumn Harvest", "Smooth", "Aseptic"] },
  { name: "Grapefruit", category: "Harvest & Unique", icon: "🍊", image: "/images/hero_slide_splash.png", description: "Sophisticated bitterness with bright citrus notes.", specs: ["Zesty", "Tart", "Aseptic"] },
  { name: "Watermelon", category: "Harvest & Unique", icon: "🍉", image: "/images/hero_slide_splash.png", description: "Refreshing and light, captures the essence of summer.", specs: ["Hydrating", "Sweet", "Aseptic"] },
  { name: "Dark Sweet Cherry", category: "Harvest & Unique", icon: "🍒", image: "/images/hero_slide_splash.png", description: "Plump, juicy cherries with intense color and flavor.", specs: ["Luxury", "Rich", "Aseptic"] },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === "All Products" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    // Hero Animation
    gsap.from(".hero-content > *", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out"
    });

    // Background floating elements
    gsap.to(".bg-orb", {
      x: "random(-100, 100)",
      y: "random(-100, 100)",
      duration: "random(10, 20)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 2,
        from: "random"
      }
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[150px] rounded-full bg-orb" />
        <div className="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] bg-red-500/5 blur-[120px] rounded-full bg-orb" />
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-orange-600/5 blur-[100px] rounded-full bg-orb" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-150" />
      </div>

      <div className="relative z-10">
        {/* Header Spacer */}
        <div className="h-40" />

        {/* Hero Section */}
        <section className="container min-h-[80vh] flex flex-col items-center justify-center relative">
          <ProductsHero3D />
          
          <div className="hero-content max-w-5xl mx-auto text-center space-y-10 relative z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(251,146,60,1)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Aseptic Innovation</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-9xl font-black font-display leading-[0.85] tracking-tight">
              Nature’s Palette <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-red-500 italic pb-2">Perfectly Preserved.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed">
              Explore our world-class selection of fruit purees. 100% natural, 
              zero preservatives, and shelf-stable for 24 months.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-10">
              <button className="px-10 py-5 bg-primary text-black font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 flex items-center gap-3">
                DOWNLOAD CATALOG <ArrowRight size={20} />
              </button>
              <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 active:scale-95 transition-all backdrop-blur-md">
                REQUEST SAMPLES
              </button>
            </div>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <section className="sticky top-24 z-50 py-6">
          <div className="container">
            <div className="p-4 md:p-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6">
              {/* Search */}
              <div className="flex-1 w-full relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input 
                  type="text" 
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/5 rounded-full py-4 pl-16 pr-8 text-white focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              {/* Categories */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
                {productCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                      activeCategory === cat 
                        ? "bg-primary text-black" 
                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="container py-20 min-h-[600px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" ref={cardsRef}>
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  onMouseEnter={() => setHoveredProduct(product.name)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  className="group relative h-[500px] rounded-[3rem] bg-zinc-900 border border-white/5 overflow-hidden cursor-pointer"
                >
                  {/* Image Background */}
                  <div className="absolute inset-0 p-4">
                    <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    </div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-12 flex flex-col justify-end">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center text-2xl group-hover:bg-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 overflow-hidden relative">
                            {product.icon.startsWith("/") ? (
                              <Image src={product.icon} alt="" fill className="object-contain p-2" />
                            ) : (
                              <span>{product.icon}</span>
                            )}
                         </div>
                         <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">{product.category.replace("Products", "")}</p>
                            <h3 className="text-3xl font-black">{product.name}</h3>
                         </div>
                      </div>

                      <p className="text-gray-400 text-sm font-medium line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        {product.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {product.specs.map(spec => (
                           <span key={spec} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-bold uppercase tracking-widest text-gray-500">
                             {spec}
                           </span>
                        ))}
                      </div>

                      <div className="pt-6">
                         <button className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[0.2em] group/btn">
                           View Details 
                           <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:border-primary transition-all">
                              <ArrowRight size={14} className="group-hover/btn:text-black" />
                           </div>
                         </button>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute top-8 right-8 w-16 h-16 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-40 text-center space-y-6">
              <div className="text-6xl text-gray-700">🔍</div>
              <h3 className="text-2xl font-bold text-gray-500">No products found matching &quot;{searchQuery}&quot;</h3>
              <button 
                onClick={() => {setSearchQuery(""); setActiveCategory("All Products")}}
                className="text-primary font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>

        {/* Industrial Section */}
        <section className="py-32 relative overflow-hidden bg-white text-black">
           <div className="container">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <div className="space-y-10">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-black/5 border border-black/10">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Packaging & Logistics</span>
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl font-black font-display leading-[0.9]">
                      Industrial Solutions <br />
                      <span className="text-primary italic">At Scale.</span>
                    </h2>

                    <p className="text-xl text-zinc-600 font-medium leading-relaxed">
                      From 20L BIBs to 200L Steel Drums, we provide the logistic consistency your 
                      production line demands. Global delivery, aseptic integrity, every time.
                    </p>

                    <div className="grid grid-cols-2 gap-6 pt-6">
                       <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 space-y-4">
                          <h4 className="text-3xl font-black">20L</h4>
                          <p className="font-bold text-zinc-500 uppercase tracking-widest text-xs">Bag-in-Box</p>
                       </div>
                       <div className="p-8 rounded-3xl bg-zinc-900 text-white space-y-4">
                          <h4 className="text-3xl font-black text-primary">200L</h4>
                          <p className="font-bold text-zinc-400 uppercase tracking-widest text-xs">Steel Drums</p>
                       </div>
                    </div>

                    <button className="px-10 py-5 bg-black text-white font-black rounded-full hover:scale-105 transition-all text-lg">
                       Full Specification PDF
                    </button>
                 </div>

                 <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
                    <Image 
                      src="/images/branded_products_open_v3.png" 
                      alt="Industrial Packaging" 
                      width={800} 
                      height={800} 
                      className="relative z-10 w-full h-auto drop-shadow-2xl"
                    />
                 </div>
              </div>
           </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 bg-[#050505] relative">
           <div className="container text-center space-y-12">
              <h2 className="text-5xl md:text-8xl font-black font-display tracking-tighter">
                Ready to <span className="text-primary italic">Innovate?</span>
              </h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                Our R&D team is ready to help you find the perfect flavor profile for your next success.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                 <Link href="/#contact" className="px-12 py-6 bg-primary text-black font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/30">
                   GET IN TOUCH
                 </Link>
                 <button className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all">
                   REQUEST SAMPLES
                 </button>
              </div>
           </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
