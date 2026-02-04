import HeroSlider from "@/components/sections/HeroSlider";
import Section2HomeIntro from "@/components/sections/Section2HomeIntro";
import Section3HomeScale from "@/components/sections/Section3HomeScale";
import Section4HomeCategories from "@/components/sections/Section4HomeCategories";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <HeroSlider />
      <Section2HomeIntro />
      
      <Section3HomeScale />

      <Section4HomeCategories />

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

      <Footer />
    </main>
  );
}
