"use client";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const benefits = [
    {
        title: "Cold Chain Free",
        desc: "Eliminate expensive refrigerated logistics. Store ambiently, ship globally.",
        icon: (
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        ),
        colSpan: "md:col-span-1"
    },
    {
        title: "24 Month Freshness",
        desc: "Our aseptic technology locks in nature's profile for up to two years without preservatives.",
        icon: (
             <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        ),
        colSpan: "md:col-span-1"
    }
];

export default function Section3HomeScale() {
  const [selectedMap, setSelectedMap] = useState<string | null>(null);

  const maps = {
    brampton: "https://maps.google.com/maps?q=4%20Wilkinson%20Rd%20Unit%204%2C%20Brampton%2C%20Ontario%20L6T4M3&t=&z=13&ie=UTF8&iwloc=&output=embed",
    newark: "https://maps.google.com/maps?q=104%20Avenue%20C%2C%20Newark%2C%20New%20Jersey%2007114&t=&z=13&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <section id="section3" className="py-32 bg-zinc-950 relative overflow-hidden">
      
      {/* Map Popup Modal */}
      <AnimatePresence>
        {selectedMap && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMap(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl aspect-video bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedMap(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white backdrop-blur-md transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                src={selectedMap}
                className="w-full h-full grayscale invert-[0.85] contrast-125 brightness-90"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">

            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold font-display text-white mt-4 leading-[0.9]"
            >
                The Smartest Way to <span className="text-zinc-500">Scale.</span>
            </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[300px]">
            
            {/* Card 1: Main Image Feature */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 row-span-2 relative group overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-zinc-800"
            >
                <Image 
                    src="/images/warehouse-team.png" 
                    alt="Warehouse Scale" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 md:p-12">
                     <h3 className="text-3xl md:text-5xl font-black font-display tracking-tight text-white mb-4">Strategic Warehousing</h3>
                     <p className="text-zinc-300 text-lg max-w-md">Our strategically located fulfillment centers ensure your aseptic purees arrive fresh, fast, and ready for production.</p>
                </div>
            </motion.div>

            {/* Card 2: Lab Tech / Scientific (Vertical) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-1 row-span-2 relative overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-zinc-800 group flex flex-col"
            >
                 <div className="relative h-1/2 min-h-[50%] overflow-hidden">
                     <Image 
                        src="/images/nano-banana-worker.png" 
                        alt="Lab Tech" 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
                 </div>
                 
                 <div className="relative h-1/2 p-8 md:p-10 flex flex-col justify-center bg-zinc-900 z-10">
                     <h3 className="text-2xl md:text-3xl font-black font-display tracking-tight text-white mb-6">Lab-Verified Purity</h3>
                     <div className="space-y-4">
                         <div className="flex items-center gap-4">
                             <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                             <p className="text-zinc-300 font-medium text-sm">Microbiologically Safe</p>
                         </div>
                         <div className="flex items-center gap-4">
                             <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                             <p className="text-zinc-300 font-medium text-sm">Standardized Brix & Acidity</p>
                         </div>
                         <div className="flex items-center gap-4">
                             <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                             <p className="text-zinc-300 font-medium text-sm">No Preservatives</p>
                         </div>
                     </div>
                 </div>
            </motion.div>

        </div>

        {/* --- Locations Section (Strategic Warehousing Header Removed) --- */}
        <div className="mt-20">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Location 1: Brampton */}
                <div 
                    onClick={() => setSelectedMap(maps.brampton)}
                    className="group relative p-1 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 hover:from-primary hover:to-secondary transition-all duration-500 cursor-pointer"
                >
                   <div className="relative h-full bg-zinc-900/90 backdrop-blur-xl rounded-[1.3rem] p-8 md:p-10 overflow-hidden">
                      <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500 mix-blend-luminosity">
                          <iframe 
                            width="100%" 
                            height="100%" 
                            frameBorder="0" 
                            scrolling="no" 
                            marginHeight={0} 
                            marginWidth={0} 
                            src={maps.brampton}
                            className="w-full h-full grayscale invert scale-110 pointer-events-none"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/20" />
                      </div>
                      
                      <div className="relative z-10 space-y-6">
                         <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/20 text-primary">
                            <span className="font-bold text-xl">CND</span>
                         </div>
                         
                         <div>
                            <h3 className="text-3xl font-black font-display tracking-tight text-white mb-2">Brampton, Ontario</h3>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                               4 Wilkinson Rd Unit 4<br />
                               Brampton, Ontario L6T4M3
                            </p>
                         </div>

                         <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                            <span className="text-sm font-medium text-primary">Key Distribution Hub</span>
                            <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" />
                         </div>
                      </div>
                   </div>
                </div>

                {/* Location 2: Newark */}
                <div 
                    onClick={() => setSelectedMap(maps.newark)}
                    className="group relative p-1 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 hover:from-secondary hover:to-accent transition-all duration-500 cursor-pointer"
                >
                   <div className="relative h-full bg-zinc-900/90 backdrop-blur-xl rounded-[1.3rem] p-8 md:p-10 overflow-hidden">
                       <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500 mix-blend-luminosity">
                          <iframe 
                            width="100%" 
                            height="100%" 
                            frameBorder="0" 
                            scrolling="no" 
                            marginHeight={0} 
                            marginWidth={0} 
                            src={maps.newark}
                            className="w-full h-full grayscale invert scale-110 pointer-events-none"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/20" />
                      </div>

                      <div className="relative z-10 space-y-6">
                         <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center border border-secondary/20 text-secondary">
                            <span className="font-bold text-xl">USA</span>
                         </div>
                         
                         <div>
                            <h3 className="text-3xl font-black font-display tracking-tight text-white mb-2">Newark, New Jersey</h3>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                               104 Avenue C,<br />
                               Newark, New Jersey 07114
                            </p>
                         </div>

                         <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                            <span className="text-sm font-medium text-secondary">East Coast Hub</span>
                            <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" />
                         </div>
                      </div>
                   </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
