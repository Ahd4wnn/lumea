import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  const location = useLocation();
  const isShop = location.pathname === '/shop';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex flex-col hover:opacity-80 transition-opacity w-max">
            <div className="flex items-center">
              <div
                className="px-3 py-1 mr-2"
                style={{
                  borderImage: 'linear-gradient(to bottom right, #2dd4bf, #6366f1) 1',
                  borderWidth: '1.5px 1.5px 1.5px 1.5px',
                  borderStyle: 'solid'
                }}
              >
                <span className="text-[#38bdf8] text-2xl font-sans font-light leading-none">L</span>
              </div>
              <span className="text-accent-gold text-2xl font-sans font-light tracking-[0.2em] leading-none pt-0.5">UMEA</span>
            </div>
            <div className="flex pl-[3.25rem]">
              <span className="text-accent-gold text-[8px] font-sans tracking-[0.5em] uppercase mt-1">WELLNESS</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-medium text-muted">
            <Link
              to="/"
              className={`hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary' : ''}`}
            >
              Sanctuary
            </Link>
            <Link
              to="/shop"
              className={`hover:text-primary transition-colors ${location.pathname.startsWith('/shop') || location.pathname.startsWith('/product') ? 'text-primary border-b border-white/40 pb-1' : ''}`}
            >
              Hardware
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-muted hover:text-primary transition-colors">
            <User size={18} strokeWidth={1.5} />
          </button>
          <button className="text-muted hover:text-primary transition-colors relative">
            <ShoppingBag size={18} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-white text-black text-[8px] flex items-center justify-center rounded-full font-bold">
              0
            </span>
          </button>
          <button className="md:hidden text-primary">
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </nav>
    </header>
  );
}
