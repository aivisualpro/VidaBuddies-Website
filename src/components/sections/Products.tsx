import Image from "next/image";
import { Button } from "@/components/ui/button";

const products = [
  { name: "Alphonso Mango", color: "bg-orange-500" },
  { name: "Passion Fruit", color: "bg-yellow-500" },
  { name: "Pink Guava", color: "bg-pink-500" },
  { name: "Raspberry", color: "bg-red-600" },
  { name: "Blackberry", color: "bg-purple-700" },
  { name: "Lime", color: "bg-lime-500" },
];

export default function Products() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="mb-16 text-center space-y-4">
           <h2 className="text-4xl md:text-5xl font-bold font-display text-white">Our Selection</h2>
           <p className="text-muted-foreground max-w-2xl mx-auto text-lg">From the tropics to your tank. 100% natural, aseptic, and ready to use.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {products.map((p, i) => (
             <div key={i} className="group relative aspect-square overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 transition-all duration-500 hover:border-primary/50 hover:scale-105 active:scale-95 cursor-pointer">
                <div className={`absolute inset-0 opacity-20 ${p.color} blur-3xl transition-opacity duration-500 group-hover:opacity-40`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                   <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">{p.name}</h3>
                   <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/5 text-gray-300 backdrop-blur-md border border-white/5 group-hover:bg-primary group-hover:text-black transition-colors">Aseptic</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
             </div>
           ))}
        </div>
        
        <div className="mt-32 relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative text-center">
                <h3 className="text-2xl font-bold font-display mb-8 text-white">Industrial & Bulk Formats</h3>
                <Image 
                  src="/images/branded_products_open_v3.png" 
                  alt="Industrial Drum Packaging with Fruit Puree" 
                  width={1000} 
                  height={600} 
                  className="rounded-xl mx-auto object-contain"
                />
            </div>
             <div className="mt-12 text-center">
                <Button variant="outline" size="lg" className="rounded-full px-10 py-6 text-lg border-primary/50 text-white hover:bg-primary hover:text-black transition-all">
                    Download Catalog
                </Button>
             </div>
        </div>
      </div>
    </section>
  )
}
