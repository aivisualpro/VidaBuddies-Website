import HeroSlider from "@/components/sections/HeroSlider";
import Section2 from "@/components/sections/Section2";
import Products from "@/components/sections/Products";
import Image from "next/image";
import Link from "next/link";

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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
         <div className="container relative z-10">
            <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[3rem] bg-zinc-900/50 border border-white/5 backdrop-blur-xl shadow-2xl">
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
                        <div className="flex items-center gap-4 text-white">
                           <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                           </div>
                           <span className="text-lg font-medium">sales@vidabuddies.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-white">
                           <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                           </div>
                           <span className="text-lg font-medium">Global Headquarters, USA</span>
                        </div>
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

      <footer className="py-24 border-t border-white/5 bg-zinc-950 text-center relative z-10">
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
                <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                <Link href="/#products" className="hover:text-primary transition-colors">Products</Link>
                <Link href="/#sizes" className="hover:text-primary transition-colors">Sizes</Link>
                <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
            <p className="text-zinc-600 text-sm">© 2026 Vida Buddies Inc. All rights reserved.</p>
         </div>
      </footer>
    </main>
  );
}
