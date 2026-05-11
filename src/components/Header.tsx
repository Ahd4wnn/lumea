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
          <Link to="/" className="text-2xl font-display tracking-[0.2em] font-bold text-white">
            <span className="text-[#8b5cf6]">L</span>UMEA
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
