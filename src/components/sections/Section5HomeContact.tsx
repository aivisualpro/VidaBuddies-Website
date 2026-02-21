
"use client";

import React from "react";

export default function Section5HomeContact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="container relative z-10 px-4">
        <div className="w-full max-w-7xl mx-auto p-10 md:p-16 lg:p-24 rounded-[3rem] bg-zinc-900/50 border border-white/5 backdrop-blur-xl shadow-2xl">
            <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-8">
                    <h2 className="text-5xl md:text-7xl font-black font-display tracking-tight text-white leading-[0.9]">
                    Let&apos;s Start a <br />
                    <span className="text-primary italic font-serif">Conversation.</span>
                    </h2>
                    <p className="text-xl text-gray-400 font-light leading-relaxed">
                    Ready to elevate your production with the world&apos;s finest fruit purees? Our team is here to support your growth.
                    </p>
                    <div className="space-y-6">
                    <a href="mailto:andres@vidabuddies.com" className="group flex items-center gap-4 text-white hover:text-primary transition-all duration-300 cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <span className="text-lg font-medium group-hover:translate-x-1 transition-transform duration-300">andres@vidabuddies.com</span>
                    </a>
                    <a href="tel:+19059971613" className="group flex items-center gap-4 text-white hover:text-primary transition-all duration-300 cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </div>
                        <span className="text-lg font-medium group-hover:translate-x-1 transition-transform duration-300">905-997-1613</span>
                    </a>
                    <a href="https://www.google.com/maps/search/?api=1&query=501-77+City+Centre+Drive+Mississauga+Ontario+Canada+L5B1M5" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-white hover:text-primary transition-all duration-300 cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        </div>
                        <span className="text-lg font-medium group-hover:translate-x-1 transition-transform duration-300">501-77 CITY CENTRE DRIVE MISSISSAUGA, ONTARIO  CANADA L5B1M5</span>
                    </a>
                    </div>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6">
                    <div className="space-y-4">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Full Name</label>
                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-4">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Email Address</label>
                    <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-4">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">How can we help?</label>
                    <textarea className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors h-32" placeholder="Tell us about your project..." />
                    </div>
                    <button className="w-full py-5 bg-primary hover:bg-primary/90 text-black font-black text-lg rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20">
                    Send Message
                    </button>
                </div>
            </div>
        </div>
        </div>
    </section>
  );
}
