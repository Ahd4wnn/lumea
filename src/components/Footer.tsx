import { Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <img src="/logo.png" alt="Lumea Wellness" className="h-20 object-contain mb-6" />
            <p className="text-muted text-sm leading-relaxed max-w-xs mb-6">
              Architectural luxury defined through clinical precision and silent performance. 
              Built for the discerning human.
            </p>
            <div className="text-muted text-sm leading-relaxed space-y-1">
              <p>Phone: 9539000041, 79070 47468</p>
              <p>Email: lumeawellness80@gmail.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">Collections</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">Ice Recovery</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Thermal Therapy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Photobiomodulation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Custom Installations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">Knowledge</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">Clinical Data</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Maintenance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trade Portal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Showrooms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">Newsletter</h4>
            <p className="text-sm text-muted mb-4">Stay updated with our latest design launches.</p>
            <div className="flex border-b border-white/20 pb-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none outline-none text-xs tracking-widest w-full focus:ring-0"
              />
              <button className="text-primary hover:opacity-70 transition-opacity">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-[0.2em] text-muted">
            © 2024 LUMEA WELLNESS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-muted hover:text-primary transition-colors"><Instagram size={16} /></a>
            <a href="#" className="text-muted hover:text-primary transition-colors"><Twitter size={16} /></a>
            <a href="#" className="text-muted hover:text-primary transition-colors"><Mail size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
