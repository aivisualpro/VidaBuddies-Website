import Image from "next/image";
import { Button } from "@/components/ui/button";
import ScrollDownButton from "@/components/ui/ScrollDownButton";

interface Category {
  name: string;
  image: string;
  color: string;
  description: string;
  badge?: string;
}

const categories: Category[] = [
  { 
    name: "Berries & Small Fruits", 
    image: "/images/blackberry-splash.png", 
    color: "bg-purple-900",
    description: "Rich & complex profiles",
    badge: "Seasonal"
  },
  { 
    name: "Tropical & Exotic", 
    image: "/images/passion-fruit-splash.png", 
    color: "bg-pink-500",
    description: "Vibrant island flavors",
    badge: "Best Seller"
  },
  { 
    name: "Citrus & Orchard", 
    image: "/images/lime-splash.png", 
    color: "bg-lime-500",
    description: "Zesty & crisp notes" 
  },
  { 
    name: "Harvest & Unique", 
    image: "/images/banana-splash.png", 
    color: "bg-yellow-500",
    description: "Earthy & distinctive" 
  },
];

export default function Section4HomeCategories() {
  return (
    <section id="products" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="mb-16 text-center space-y-4">
           <h2 className="text-5xl md:text-8xl font-black font-display tracking-tighter text-white leading-[0.9]">
             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-red-500 italic">Selection</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Explor our diverse range of premium fruit categories.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {categories.map((c, i) => (
             <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 transition-all duration-500 hover:border-primary/50 hover:scale-[1.02] cursor-pointer">
                {/* Background Glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 ${c.color} blur-3xl transition-opacity duration-500`} />
                
                {/* Product Image */}
                <div className="absolute inset-0">
                  <Image 
                    src={c.image} 
                    alt={c.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                   <div className="transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                      {c.badge && (
                          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-primary text-black mb-3">
                              {c.badge}
                          </span>
                      )}
                      {!c.badge && (
                          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white/80 mb-3 backdrop-blur-md">
                              Category
                          </span>
                      )}
                      <h3 className="text-2xl font-black text-white mb-1 uppercase tracking-tight leading-none text-wrap">{c.name}</h3>
                      <p className="text-zinc-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">{c.description}</p>
                   </div>
                </div>
             </div>
           ))}
        </div>
        

      </div>

      <ScrollDownButton targetId="contact" />
    </section>
  )
}
