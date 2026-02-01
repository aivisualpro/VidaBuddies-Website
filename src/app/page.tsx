import HeroSlider from "@/components/sections/HeroSlider";
import Section2 from "@/components/sections/Section2";
import Products from "@/components/sections/Products";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <HeroSlider />
      <Section2 />
      
      {/* Competitor beating value prop section */}
      <section id="section3" className="py-24 bg-white text-black relative z-10">
        <div className="container md:flex items-center gap-12">
           <div className="flex-1 space-y-6">
              <h2 className="text-5xl md:text-7xl font-black font-display leading-[0.9]">
                 Forget <span className="text-zinc-400 line-through decoration-primary decoration-4">Frozen.</span><br />
                 Go <span className="text-primary">Aseptic.</span>
              </h2>
              <p className="text-xl md:text-2xl font-medium text-zinc-600 max-w-lg">
                 Shelf-stable. Consistent. No cold chain headaches. The smartest way to brew, bake, and create.
              </p>
           </div>
           <div className="flex-1 mt-12 md:mt-0 grid grid-cols-2 gap-4">
              <div className="p-8 bg-zinc-100 rounded-2xl">
                 <h3 className="text-4xl font-bold mb-2 text-primary">100%</h3>
                 <p className="font-bold text-lg">Natural Fruit</p>
              </div>
              <div className="p-8 bg-zinc-900 text-white rounded-2xl translate-y-8">
                 <h3 className="text-4xl font-bold mb-2 text-accent">0%</h3>
                 <p className="font-bold text-lg">Preservatives</p>
              </div>
              <div className="p-8 bg-zinc-900 text-white rounded-2xl">
                 <h3 className="text-4xl font-bold mb-2">24mo</h3>
                 <p className="font-bold text-lg">Shelf Life</p>
              </div>
              <div className="p-8 bg-zinc-100 rounded-2xl translate-y-8">
                 <h3 className="text-4xl font-bold mb-2 text-secondary">Global</h3>
                 <p className="font-bold text-lg">Sourcing</p>
              </div>
           </div>
        </div>
      </section>

      <Products />
      
      <footer className="py-12 border-t border-white/10 bg-zinc-950 text-center relative z-10">
         <div className="container flex flex-col items-center">
            <div className="relative h-16 w-64 mb-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               <Image 
                 src="/logo_hd.png" 
                 alt="Vida Buddies Logo" 
                 fill 
                 className="object-contain" 
               />
            </div>
            <div className="flex justify-center gap-8 mb-8 text-sm text-muted-foreground uppercase tracking-widest font-bold">
               <a href="#" className="hover:text-primary transition-colors">Products</a>
               <a href="#" className="hover:text-primary transition-colors">About</a>
               <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <p className="text-zinc-600 text-sm">© 2026 Vida Buddies Inc. All rights reserved.</p>
         </div>
      </footer>
    </main>
  );
}
