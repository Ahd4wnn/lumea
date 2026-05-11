import { motion } from 'motion/react';
import { Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants/products';

export default function ShopPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-5xl font-display italic mb-6 text-accent-gold">Hardware Repository</h1>
          <p className="text-muted max-w-xl text-lg">
            Professional-grade technologies engineered for high-performance recovery centers and private sanctuaries.
          </p>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PRODUCTS.map((p) => (
            <Link 
              to={`/product/${p.id}`}
              key={p.id}
              className="block group"
            >
              <motion.div 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="shimmer-border bg-surface-bright/20 border border-white/5 h-full transition-all duration-500 hover:-translate-y-2 hover:bg-surface-bright/30"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={p.image} 
                    alt={p.name}
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`text-[8px] uppercase tracking-widest font-bold px-2 py-1 bg-background/80 backdrop-blur rounded-full border border-white/10 text-white`}>
                      {p.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 space-y-6">
                  <h3 className="text-2xl font-display text-primary transition-colors group-hover:text-accent-gold">{p.name}</h3>
                  
                  <p className="text-muted text-sm leading-relaxed">
                    {p.description}
                  </p>

                  <div className="space-y-3">
                    {p.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted">
                        <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                        {spec}
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <div className="w-full border border-white/20 text-white py-4 text-[9px] uppercase tracking-[0.2em] font-bold group-hover:bg-white group-hover:text-black transition-all flex items-center justify-center gap-2">
                      <Info size={14} /> Request More Info
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
