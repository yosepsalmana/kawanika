import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-charcoal text-ivory">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <img 
              src="/logo.png" 
              alt="Kawanika" 
              className="h-12 w-auto object-contain mx-auto md:mx-0 mb-2"
            />
            <p className="font-body text-ivory/70 text-sm">
              Kawan Nikah — Digital Wedding Invitation
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com/kawanika"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://tiktok.com/@kawanika"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <p className="font-body text-sm text-ivory/70 mb-1">Ada pertanyaan?</p>
            <a
              href="https://wa.me/6281234567890"
              className="font-display text-lg text-gold hover:text-gold-light transition-colors"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-ivory/10 mt-10 pt-8 text-center">
          <p className="font-body text-xs text-ivory/50">
            © 2025 Kawanika. All rights reserved. Made with ❤️ in Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
