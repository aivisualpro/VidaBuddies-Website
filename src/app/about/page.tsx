"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  useEffect(() => {
    const sections = gsap.utils.toArray(".about-section");
    sections.forEach((section: any) => {
      gsap.fromTo(
        section.querySelector(".content-box"),
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <main ref={containerRef} className="relative bg-black min-h-screen overflow-hidden">
      {/* Three.js Background Layer */}
      <div className="fixed inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Environment preset="studio" />
          <ambientLight intensity={0.5} />
          <Sparkles count={200} scale={10} size={1} speed={0.5} color="#fb923c" />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
             <mesh position={[2, 1, -2]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="#fb923c" roughness={0.1} metalness={0.8} />
             </mesh>
          </Float>
          <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
             <mesh position={[-3, -2, -1]}>
                <torusGeometry args={[0.8, 0.2, 16, 100]} />
                <meshStandardMaterial color="#ef4444" roughness={0} metalness={0.5} />
             </mesh>
          </Float>
        </Canvas>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/hero_slide_farm.png" 
            alt="Estate" 
            fill 
            className="object-cover opacity-60 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        </motion.div>

        <motion.div 
          style={{ y: textY }}
          className="container relative z-10 text-center space-y-6"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary font-bold uppercase tracking-[0.3em] inline-block"
          >
            Since 2001
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-9xl font-black font-display tracking-tight text-white"
          >
            Our <span className="text-primary">Heritage.</span>
          </motion.h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-400 font-light">
             A quarter-century legacy of flavor, quality, and uncompromising family values.
          </p>
        </motion.div>

        {/* Floating Mouse Icon */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
           <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-primary rounded-full" />
           </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative z-10 space-y-0">
        
        {/* Tradition Section */}
        <section className="about-section min-h-screen flex items-center py-24 relative overflow-hidden">
           <div className="container grid md:grid-cols-2 gap-16 items-center">
              <div className="content-box space-y-8">
                 <h2 className="text-5xl md:text-7xl font-black font-display leading-[0.9]">
                    A Tradition <br />
                    <span className="text-primary">of Taste.</span>
                 </h2>
                 <p className="text-xl text-gray-300 leading-relaxed font-light">
                    At Vida Buddies Inc., we believe that great food and drink are the heartbeat of every great gathering. For over 25 years, our family has been at the center of the food and beverage industry, driven by a simple mission: to bring exceptional flavor and uncompromising quality to every table we serve. 
                 </p>
                 <p className="text-xl text-gray-300 leading-relaxed font-light">
                    What started as a small passion project has grown into a legacy of excellence, and while our reach has expanded, our hands-on, family-first approach hasn’t changed a bit.
                 </p>
              </div>
              <div className="relative aspect-square">
                 <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
                 <motion.div 
                   whileHover={{ scale: 1.05 }}
                   transition={{ type: "spring", stiffness: 300 }}
                   className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10"
                 >
                    <Image 
                      src="/images/peach_splash_mockup.png" 
                      alt="Tradition" 
                      fill 
                      className="object-contain p-8 scale-150 drop-shadow-2xl"
                    />
                 </motion.div>
              </div>
           </div>
        </section>

        {/* Partnership Section */}
        <section className="about-section min-h-screen flex items-center py-24 bg-gradient-to-r from-zinc-950/0 to-zinc-900/40">
           <div className="container grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative aspect-square">
                 <div className="absolute inset-0 bg-red-500/10 blur-[100px] rounded-full" />
                 <Image 
                    src="/images/strawberry_splash_final.png" 
                    alt="Partnership" 
                    fill 
                    className="object-contain p-8 scale-150 drop-shadow-2xl"
                 />
              </div>
              <div className="content-box order-1 md:order-2 space-y-8">
                 <h2 className="text-5xl md:text-7xl font-black font-display leading-[0.9]">
                    Partnering <br />
                    <span className="text-red-500">in Success.</span>
                 </h2>
                 <p className="text-xl text-gray-300 leading-relaxed font-light">
                    We don't just see ourselves as a supplier; we see ourselves as your partner in growth. Whether you are running a cozy neighborhood cafe or managing a large-scale commercial operation, we understand the unique challenges you face.
                 </p>
                 <p className="text-xl text-gray-300 leading-relaxed font-light">
                    Our quarter-century of experience allows us to provide more than just products. We offer reliability and insight that helps businesses of all sizes thrive, ensuring you have the consistent quality you need to keep your own customers coming back for more.
                 </p>
              </div>
           </div>
        </section>

        {/* Quality Section */}
        <section className="about-section min-h-screen flex items-center py-24 relative overflow-hidden">
           <div className="container">
              <div className="content-box max-w-4xl mx-auto text-center space-y-12">
                 <div className="inline-block p-4 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
                    </svg>
                 </div>
                 <h2 className="text-5xl md:text-8xl font-black font-display leading-[0.9]">
                    Quality You <br />
                    <span className="text-primary">Can Trust.</span>
                 </h2>
                 <p className="text-2xl text-gray-300 leading-relaxed font-light italic">
                    "The secret to a memorable culinary experience always starts with the ingredients."
                 </p>
                 <p className="text-xl text-gray-400 leading-relaxed font-light">
                    That is why we are relentless when it comes to sourcing. We go the extra mile to find the finest components for our food and beverage solutions, ensuring that every item carrying the Vida Buddies name meets the highest standards. We treat every product as if it were being served at our own family dinner table, because to us, quality is a matter of integrity.
                 </p>
                 
                 <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                      { label: "Experience", value: "25+ Yrs" },
                      { label: "Ingredients", value: "100% Pure" },
                      { label: "Approach", value: "Family First" },
                      { label: "Commitment", value: "Integrity" }
                    ].map((stat, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                         <div className="text-primary font-black text-2xl mb-1">{stat.value}</div>
                         <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Future Section */}
        <section className="about-section min-h-screen flex items-center py-24 relative bg-black/50">
           <div className="container relative z-10">
              <div className="content-box bg-gradient-to-br from-zinc-900 to-black p-12 md:p-24 rounded-[4rem] border border-white/5 shadow-3xl text-center space-y-12 overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] -translate-y-1/2 translate-x-1/2" />
                 <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-[120px] translate-y-1/2 -translate-x-1/2" />
                 
                 <h2 className="text-5xl md:text-8xl font-black font-display leading-[0.9]">
                    Looking Toward <br />
                    <span className="text-primary">the Future.</span>
                 </h2>
                 <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                    As we look ahead, our goal is to continue innovating while staying true to the values that got us here. We are constantly exploring new flavors and unique solutions to meet the evolving needs of our partners.
                 </p>
                 <div className="space-y-4">
                    <p className="text-lg text-gray-500 font-medium italic">
                       Thank you for trusting Vida Buddies Inc. to be a part of your story.
                    </p>
                    <h3 className="text-3xl font-display font-medium text-white italic">
                       The Vida Buddies Family
                    </h3>
                 </div>
                 
                 <div className="pt-8 flex justify-center">
                    <button className="px-12 py-6 bg-primary hover:bg-primary/90 text-black font-black text-xl rounded-full transition-transform hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(251,146,60,0.4)]">
                       Join Our Journey
                    </button>
                 </div>
              </div>
           </div>
        </section>

      </div>

      {/* Footer Mirror */}
      <footer className="py-24 bg-black border-t border-white/5 text-center relative z-20">
         <div className="container">
            <div className="relative h-20 w-64 mx-auto mb-12">
               <Image src="/logo_hd.png" alt="Logo" fill className="object-contain" />
            </div>
            <p className="text-gray-500 max-w-lg mx-auto mb-12">
               Dedicated to delivering flavor, quality, and service to businesses across the industry.
            </p>
            <div className="flex justify-center gap-12 font-bold text-sm tracking-widest text-gray-400">
               <a href="/" className="hover:text-primary transition-colors">HOME</a>
               <a href="/#products" className="hover:text-primary transition-colors">PRODUCTS</a>
               <a href="/#contact" className="hover:text-primary transition-colors">CONTACT</a>
            </div>
            <p className="mt-16 text-zinc-800 text-xs">© 2026 Vida Buddies Inc. All rights reserved.</p>
         </div>
      </footer>
    </main>
  );
}
