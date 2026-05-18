import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  const phoneNumber = '+919539000041';
  const whatsappMessage = 'Hi, I am interested in Lumea Wellness products.';
  const whatsappLink = `https://wa.me/919539000041?text=${encodeURIComponent(whatsappMessage)}`;
  const callLink = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href={callLink}
        className="w-12 h-12 bg-background/80 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shadow-lg hover:scale-110"
        aria-label="Call Us"
      >
        <Phone size={20} />
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-background/80 backdrop-blur-md border border-[#25D366]/50 rounded-full flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-black transition-all shadow-lg hover:scale-110"
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
