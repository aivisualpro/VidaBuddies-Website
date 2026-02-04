"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "About Heritage", href: "/about" },
    { name: "Product Range", href: "/#products" },
    { name: "Bulk Sizes", href: "/#sizes" },
    { name: "Our Process", href: "/#process" },
    { name: "Contact Us", href: "/#contact" },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Dynamic Puree Splash Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Mango Splash - Left */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] opacity-[0.07] blur-[60px] transform -rotate-12">
          <Image src="/images/mango_splash_mockup.png" alt="" fill className="object-contain" />
        </div>
        
        {/* Strawberry Splash - Right */}
        <div className="absolute bottom-[-20%] right-[-5%] w-[600px] h-[600px] opacity-[0.08] blur-[80px] transform rotate-45">
          <Image src="/images/strawberry_splash_final.png" alt="" fill className="object-contain" />
        </div>

        {/* Peach/Cherry Accent - Center Bottom */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] opacity-[0.05] blur-[100px]">
          <Image src="/images/icon_cherry_splash.png" alt="" fill className="object-contain" />
        </div>

        {/* Global atmospheric hero splash overlap */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] grayscale">
          <Image src="/images/hero_slide_splash.png" alt="" fill className="object-cover" />
        </div>
      </div>

      {/* Abstract Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-500/5 blur-[100px] rounded-full translate-y-1/2" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Column 1: Brand Identity */}
          <div className="space-y-8 flex flex-col items-center text-center md:items-start md:text-left">
            <Link href="/" className="block relative w-64 h-24 group">
              <Image
                src="/logo_original.png"
                alt="Vida Buddies Logo"
                fill
                className="object-contain object-center md:object-left transition-all duration-500 group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
              Crafting premium fruit experiences for over 25 years. We bridge the gap between nature&apos;s finest harvests and your culinary creations.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-8 flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-4 w-full">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-primary transition-colors text-sm font-medium flex items-center justify-center md:justify-start group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-8 flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Get in Touch</h4>
            <ul className="space-y-6 w-full">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-tighter mb-1">Email Us</p>
                  <a href="mailto:info@vidabuddies.com" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                    info@vidabuddies.com
                  </a>
                </div>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-tighter mb-1">Call Us</p>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-8 flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Updates</h4>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Join our botanical community for the latest product releases and industry insights.
              </p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-all duration-300"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-primary/90 text-black px-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 group-hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs font-medium tracking-wide">
            © {currentYear} VIDA BUDDIES INC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-600">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookies Settings</Link>
          </div>
        </div>
      </div>

      {/* Extreme Bottom Decoration Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </footer>
  );
};

export default Footer;
