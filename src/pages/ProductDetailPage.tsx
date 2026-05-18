import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState } from 'react';
import { PRODUCTS } from '../constants/products';
import { ArrowRight, Check } from 'lucide-react';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-4xl font-display italic mb-8">Product not found</h1>
        <Link to="/shop" className="text-white underline tracking-widest text-[10px] uppercase">
          Back to repository
        </Link>
      </div>
    );
  }

  const images = product.images.length > 0 ? product.images : [product.image];

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Product Images */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-[4/5] bg-[#0a0a0a] overflow-hidden flex items-center justify-center"
            >
              <img 
                src={images[activeImage]} 
                alt={product.name}
                className="w-full h-full object-cover opacity-90 transition-all duration-500 hover:scale-105"
              />
            </motion.div>

            {/* Thumbnail strip — only shows when there are multiple images */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto no-scrollbar">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`shrink-0 w-20 h-20 overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === i 
                        ? 'border-white opacity-100' 
                        : 'border-white/10 opacity-50 hover:opacity-80'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col justify-center max-w-xl"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted mb-6 block font-bold">
              {product.category.toUpperCase()} SERIES
            </span>
            <h1 className="text-6xl md:text-7xl font-display leading-tight mb-8 font-medium text-accent-gold">
              {product.name}
            </h1>
            
            <p className="text-muted text-base mb-12 leading-relaxed opacity-80">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-12">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted mb-8">SELECT CONFIGURATION</h4>
              <div className="grid grid-cols-1 gap-4">
                {product.variants.map((v) => (
                  <button
                    key={v.code}
                    onClick={() => setSelectedVariant(v)}
                    className={`group relative overflow-hidden p-6 text-left border transition-all duration-500 rounded-sm ${
                      selectedVariant?.code === v.code 
                        ? 'border-white bg-white/5' 
                        : 'border-white/10 hover:border-white/40'
                    }`}
                  >
                    <div className="flex justify-between items-center relative z-10">
                      <div>
                        <p className={`text-[10px] uppercase tracking-widest font-bold mb-1 transition-colors ${
                          selectedVariant?.code === v.code ? 'text-white' : 'text-muted group-hover:text-white'
                        }`}>
                          {v.type} {v.power ? `// ${v.power}` : ''}
                        </p>
                        <p className="text-[9px] text-muted tracking-wide opacity-60">
                          {v.code}
                        </p>
                      </div>
                      <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                        selectedVariant?.code === v.code ? 'bg-white scale-125' : 'bg-white/10 group-hover:bg-white/30'
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => {
                const message = `Hello LUMEA, I am interested in inquiring about the ${product.name}: ${selectedVariant?.type} (${selectedVariant?.code}).`;
                window.open(`https://wa.me/916238193133?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="group w-full bg-[#1b4342] hover:bg-[#255756] text-white py-6 text-[10px] uppercase tracking-[0.4em] font-bold transition-all flex items-center justify-center gap-4 rounded-sm mb-12"
            >
              ENQUIRE TO SANCTUARY <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10">
              <div className="space-y-2">
                <h5 className="text-[9px] uppercase tracking-widest font-bold text-muted">SHIPS GLOBALLY IN</h5>
                <p className="text-[11px] tracking-widest font-medium">4 - 6 WEEKS</p>
              </div>
              <div className="space-y-2">
                <h5 className="text-[9px] uppercase tracking-widest font-bold text-muted">COMPLIMENTARY</h5>
                <p className="text-[11px] tracking-widest font-medium">INDUSTRIAL INSTALL KIT</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

