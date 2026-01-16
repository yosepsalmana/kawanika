import { Button } from "@/components/ui/button";
import { MessageCircle, Eye } from "lucide-react";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/6281234567890?text=Halo%20Kawanika,%20saya%20ingin%20pesan%20undangan%20digital", "_blank");
  };

  const scrollToTemplates = () => {
    document.getElementById("templates")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background via-champagne/30 to-champagne overflow-hidden">

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col justify-center items-center text-center">
        {/* Brand Badge */}
        <div className="animate-fade-in-up mb-8">
          <span className="inline-block px-6 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold font-body text-sm tracking-widest uppercase">
            Digital Wedding Invitation
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="animate-fade-in-up animation-delay-200 font-display text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl mb-6">
          Undangan Digital Elegan untuk{" "}
          <span className="italic text-gold">Hari Paling Berharga</span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-up animation-delay-400 font-body text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Desain mewah, praktis dibagikan, tanpa ribet ganti nama tamu.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row gap-4">
          <Button variant="hero" onClick={scrollToTemplates}>
            <Eye className="w-5 h-5" />
            Lihat Template
          </Button>
          <Button variant="hero-outline" onClick={handleWhatsApp}>
            <MessageCircle className="w-5 h-5" />
            Chat via WhatsApp
          </Button>
        </div>

        {/* Trust Indicator */}
        <div className="animate-fade-in-up animation-delay-800 mt-16 flex items-center gap-8 text-muted-foreground">
          <div className="flex flex-col items-center">
            <span className="font-display text-3xl text-gold">500+</span>
            <span className="text-sm font-body">Undangan Dibuat</span>
          </div>
          <div className="w-px h-12 bg-border"></div>
          <div className="flex flex-col items-center">
            <span className="font-display text-3xl text-gold">4.9★</span>
            <span className="text-sm font-body">Rating Pelanggan</span>
          </div>
          <div className="w-px h-12 bg-border"></div>
          <div className="flex flex-col items-center">
            <span className="font-display text-3xl text-gold">24h</span>
            <span className="text-sm font-body">Proses Cepat</span>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z" fill="hsl(var(--champagne))" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
