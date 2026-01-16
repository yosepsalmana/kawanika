import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/6281234567890?text=Halo%20Kawanika,%20saya%20ingin%20pesan%20undangan%20digital", "_blank");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Kawanika" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("templates")}
              className="font-body text-sm text-foreground/80 hover:text-gold transition-colors"
            >
              Template
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="font-body text-sm text-foreground/80 hover:text-gold transition-colors"
            >
              Fitur
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="font-body text-sm text-foreground/80 hover:text-gold transition-colors"
            >
              Cara Pesan
            </button>
            <Button variant="gold" onClick={handleWhatsApp}>
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("templates")}
                className="font-body text-left py-2 text-foreground/80 hover:text-gold transition-colors"
              >
                Template
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="font-body text-left py-2 text-foreground/80 hover:text-gold transition-colors"
              >
                Fitur
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="font-body text-left py-2 text-foreground/80 hover:text-gold transition-colors"
              >
                Cara Pesan
              </button>
              <Button variant="whatsapp" onClick={handleWhatsApp} className="mt-2">
                <MessageCircle className="w-4 h-4" />
                Chat WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
