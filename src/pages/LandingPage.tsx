import { motion } from 'motion/react';
import { ArrowRight, Snowflake, Wind, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const products = [
    {
      id: 'ice',
      title: 'Lumea Ice Bath',
      subtitle: 'Ice Bath System',
      description: 'Industrial-grade performance recovery using reciprocating compressors and plate heat exchangers for precise ±1°C control.',
      icon: <Snowflake className="text-accent-ice" size={24} />,
      color: 'bg-accent-ice/5',
      borderColor: 'border-accent-ice/20',
      image: '/ice.jpeg'
    },
    {
      id: 'steam',
      title: 'Lumea Steam Bath',
      subtitle: 'Thermal Therapy',
      description: 'Automated 304-grade stainless steel generators with advanced safety cut-offs for pure therapeutic detoxification.',
      icon: <Wind className="text-accent-gold" size={24} />,
      color: 'bg-accent-gold/5',
      borderColor: 'border-accent-gold/20',
      image: '/steam.jpeg'
    },
    {
      id: 'red',
      title: 'Lumea RLT Panel',
      subtitle: 'Photobiomodulation',
      description: 'Clinical 660nm/850nm dual-chip arrays designed to stimulate mitochondrial ATP production and cellular repair.',
      icon: <Zap className="text-accent-red" size={24} />,
      color: 'bg-accent-red/5',
      borderColor: 'border-accent-red/20',
      image: '/redlight.jpg'
    }
  ];

  const features = [
    { title: 'Clinical Precision', detail: 'Industrial reliability engineered for consistent high-performance.' },
    { title: 'Minimal Design', detail: 'Architectural aesthetics that disappear into your sanctuary.' },
    { title: 'Pure Performance', detail: 'Wavelengths and temperatures verified by clinical data.' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          {/* Desktop Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hidden md:block w-full h-full object-cover opacity-50"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Mobile Image */}
          <img
            src="/hero-image.jpeg"
            alt="Luxury sanctuary mobile"
            className="md:hidden w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-muted mb-6 block font-bold">
              The Art of Precision
            </span>
            <h1 className="text-5xl md:text-7xl font-display leading-[1.1] mb-8 text-accent-gold">
              Elevate Your Living <br />
              <span className="italic">Architecture</span>
            </h1>
            <p className="text-muted text-lg mb-12 max-w-lg leading-relaxed">
              Industrial-grade wellness hardware designed for high-performance recovery and aesthetic silence.
            </p>
            <div className="flex gap-4">
              <Link to="/shop" className="bg-white text-black px-10 py-5 text-[10px] uppercase tracking-widest font-bold hover:bg-muted transition-colors rounded-xs">
                Explore Hardware
              </Link>
              <a 
                href="https://wa.me/916238193133?text=Hi%2C%20I%20am%20interested%20in%20the%20Lumea%20Wellness%20hardware%20catalog."
                className="relative z-50 cursor-pointer border border-white/20 px-10 py-5 text-[10px] uppercase tracking-widest font-bold hover:bg-white/5 transition-colors rounded-xs text-accent-gold inline-flex items-center justify-center"
              >
                Request Catalog
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="space-y-4"
              >
                <h3 className="text-sm font-display italic text-primary">{feature.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{feature.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-32 bg-background border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted mb-6 block font-bold">Clinical Efficacy</span>
              <h2 className="text-4xl md:text-5xl font-display italic mb-8 leading-tight text-accent-gold">
                The Biological Impact of <br /> Precision Environments.
              </h2>
              <div className="space-y-12">
                <div className="flex gap-8">
                  <div className="w-12 h-12 rounded-full border border-accent-ice/30 flex items-center justify-center shrink-0">
                    <Snowflake size={20} className="text-accent-ice" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest mb-2 font-bold">Vascular Response</h4>
                    <p className="text-muted text-sm leading-relaxed">
                      Lumea chillers induce rapid vasoconstriction, significantly accelerating the removal of metabolic waste and reducing cellular inflammation post-exertion.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="w-12 h-12 rounded-full border border-accent-gold/30 flex items-center justify-center shrink-0">
                    <Wind size={20} className="text-accent-gold" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest mb-2 font-bold">Cellular Detoxification</h4>
                    <p className="text-muted text-sm leading-relaxed">
                      Our 304-grade stainless steel generators create hypoallergenic steam environments that stimulate deep hyperthermic sweat, flush toxins, and rejuvenate skin elasticity.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="w-12 h-12 rounded-full border border-accent-red/30 flex items-center justify-center shrink-0">
                    <Zap size={20} className="text-accent-red" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest mb-2 font-bold">Mitochondrial ATP Synthesis</h4>
                    <p className="text-muted text-sm leading-relaxed">
                      RLT panels utilize specific 660nm and 850nm wavelengths to penetrate dermal layers, fueling the mitochondria to produce ATP and accelerate tissue repair.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-xs overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&q=80&w=1200"
                  alt="Biological recovery"
                  className="w-full h-full object-cover opacity-40"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-surface-bright p-8 border border-white/5 hidden md:block max-w-xs">
                <p className="text-[10px] tracking-[0.2em] leading-relaxed text-muted">
                  "Architecture is not just what you see, but how it makes the human biological system respond."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlight Grid */}
      <section className="py-32 bg-surface-dim">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl font-display italic mb-4 text-accent-gold">Core Modalities</h2>
            <p className="text-muted text-sm uppercase tracking-widest">Scalable Commercial Solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -10 }}
                className={`shimmer-border group bg-surface-bright/30 rounded-lg overflow-hidden border border-white/5`}
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-black">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-all duration-500 opacity-40 group-hover:opacity-80 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.2em] text-muted mb-1 block">{product.subtitle}</span>
                      <h3 className="text-2xl font-display">{product.title}</h3>
                    </div>
                    {product.icon}
                  </div>
                  <p className="text-muted text-sm leading-relaxed min-h-[48px]">
                    {product.description}
                  </p>
                  <Link
                    to="/shop"
                    className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] font-bold text-primary hover:gap-4 transition-all"
                  >
                    Specifications <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-48 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-display italic mb-12 text-accent-gold">Transform Your Recovery Journey Today</h2>
          <Link to="/shop" className="inline-block bg-white text-black px-12 py-6 text-[10px] uppercase tracking-[0.4em] font-bold hover:scale-105 transition-transform">
            Build Your Sanctuary
          </Link>
        </div>
      </section>
    </div>
  );
}
