"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import MegaMenu from "./MegaMenu";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  };

  return (
    <>
      <header
        className={cn(
          "left-0 right-0 z-[60] transition-all duration-300 font-sans px-4 md:px-0",
          scrolled
            ? "fixed top-0 bg-black/50 backdrop-blur-xl border-b border-white/10"
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
              { name: "Products", href: "/products", hasMega: true },
              { name: "Sizes", href: "/#sizes" },
              { name: "Process", href: "/#process" },
              { name: "Contact", href: "/#contact" }
            ].map((item) => (
              <div
                key={item.name}
                onMouseEnter={item.hasMega ? handleMouseEnter : undefined}
                onMouseLeave={item.hasMega ? handleMouseLeave : undefined}
                className="relative py-4"
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-bold text-gray-300 hover:text-white transition-all uppercase tracking-[0.2em] flex items-center gap-1.5",
                    isMegaMenuOpen && item.hasMega && "text-primary"
                  )}
                >
                  {item.name}
                  {item.hasMega && (
                    <ChevronDown 
                      size={18} 
                      strokeWidth={3}
                      className={cn(
                        "transition-all duration-300",
                        isMegaMenuOpen ? "rotate-180 text-primary" : "text-white/60 group-hover:text-white"
                      )} 
                    />
                  )}
                </Link>
                {item.hasMega && (
                  <div className={cn(
                    "absolute bottom-2 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 origin-left",
                    isMegaMenuOpen && "scale-x-100"
                  )} />
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button className="rounded-full font-black bg-primary text-black hover:bg-primary/90 shadow-[0_0_30px_rgba(251,146,60,0.4)] tracking-wider">
                GET A QUOTE
            </Button>
          </div>
        </div>
      </header>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <MegaMenu 
          isOpen={isMegaMenuOpen} 
          onClose={() => setIsMegaMenuOpen(false)} 
        />
      </div>
    </>
  );
}
