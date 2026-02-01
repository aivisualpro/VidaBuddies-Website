"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";



export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "left-0 right-0 z-40 transition-all duration-300 font-sans",
        // Background applies to the whole header stack
        scrolled
          ? "fixed top-0 bg-black/50 backdrop-blur-md border-b border-white/10"
          : "absolute top-10 bg-transparent"
      )}
    >
      <div 
        className={cn(
            "container flex items-center justify-between transition-all duration-300",
            scrolled ? "py-2" : "py-4"
        )}
      >
        <Link href="/" className="relative h-12 w-48 transition-transform hover:scale-105 active:scale-95">
          <Image
            src="/logo_hd.png"
            alt="Vida Buddies Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "About", href: "/about" },
            { name: "Products", href: "/#products" },
            { name: "Sizes", href: "/#sizes" },
            { name: "Process", href: "/#process" },
            { name: "Contact", href: "/#contact" }
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
           <Button className="rounded-full font-bold bg-primary text-black hover:bg-primary/90 shadow-[0_0_20px_rgba(251,146,60,0.4)]">
              Get A Quote
           </Button>
        </div>
      </div>
    </header>
  );
}
