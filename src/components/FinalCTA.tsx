import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";
import floralDecoration from "@/assets/floral-decoration.png";

const FinalCTA = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/6281234567890?text=Halo%20Kawanika,%20saya%20ingin%20pesan%20undangan%20digital", "_blank");
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 opacity-20 animate-float">
        <img src={floralDecoration} alt="" className="w-full rotate-[-20deg]" />
      </div>
      <div className="absolute bottom-0 right-0 w-72 opacity-15 animate-float-slow">
        <img src={floralDecoration} alt="" className="w-full rotate-[160deg]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold font-body text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            Mulai Pernikahan Impian Anda
          </div>

          {/* Main Heading */}
          <h2 className="font-display text-4xl md:text-6xl mb-6 leading-tight">
            Undangan Elegan{" "}
            <span className="italic text-gold">Tanpa Ribet</span>
          </h2>

          {/* Description */}
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Wujudkan undangan digital impian Anda bersama Kawanika. Desain premium, fitur lengkap, proses cepat.
          </p>

          {/* CTA Button */}
          <Button variant="hero" onClick={handleWhatsApp} className="text-lg px-12 py-7">
            <MessageCircle className="w-6 h-6" />
            Pesan Undangan Sekarang
          </Button>

          {/* Guarantee */}
          <p className="mt-8 text-sm text-muted-foreground font-body">
            ✓ Revisi Gratis &nbsp;&nbsp; ✓ Proses 24 Jam &nbsp;&nbsp; ✓ Garansi Kepuasan
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
