"use client";

import { motion } from "framer-motion";

export default function Section2() {
  return (
    <section id="section2" className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Background Video Wrapper */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://i.vimeocdn.com/video/1949307068-9c09de7312ff5745e290c2700ff162ca994a85dc54753caaca2f1199a9c4c1da-d')" }} />
        <iframe
          src="https://player.vimeo.com/video/1029048955?h=579e404a9e&badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="absolute top-1/2 left-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Background Video"
        />
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8 p-12 rounded-3xl backdrop-blur-sm bg-black/30 border border-white/5 shadow-2xl"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-black font-display tracking-tight text-white drop-shadow-xl"
          >
            Exceptional Food <span className="text-primary italic font-serif">&</span> Beverage Solutions
          </motion.h2>

          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-200 leading-relaxed font-light"
          >
            <strong className="text-white font-bold">Vida Buddies Inc.</strong> is a family-operated business with over <span className="text-primary font-bold">25 years</span> of experience in the food and beverage industry. We are dedicated to delivering exceptional products and services, sourcing the finest ingredients to create memorable experiences for our customers. Whether you're looking for unique food products or beverages for your gatherings, <span className="text-white font-medium">Vida Buddies Inc. is your trusted partner.</span>
          </motion.p>
        </motion.div>
      </div>

      <button 
        onClick={() => document.getElementById("section3")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-[calc(var(--container-padding,2rem)+110px)] animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-10"
      >
         <div className="h-14 w-8 rounded-full border-2 border-white/20 flex justify-center pt-2 backdrop-blur-sm bg-black/20">
            <div className="w-1.5 h-3 bg-primary rounded-full shadow-[0_0_10px_orange]" />
         </div>
      </button>
    </section>
  );
}
