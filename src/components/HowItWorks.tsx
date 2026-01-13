import { MousePointer, MessageCircle, FileEdit, Share2 } from "lucide-react";

const steps = [
  {
    icon: MousePointer,
    number: "01",
    title: "Pilih Template",
    description: "Jelajahi koleksi template premium dan pilih desain favorit Anda.",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "Chat via WhatsApp",
    description: "Hubungi tim kami untuk konfirmasi pesanan dan pembayaran.",
  },
  {
    icon: FileEdit,
    number: "03",
    title: "Isi Data & Upload Foto",
    description: "Lengkapi form dengan data acara dan foto prewedding Anda.",
  },
  {
    icon: Share2,
    number: "04",
    title: "Undangan Siap Dibagikan",
    description: "Terima link undangan dan bagikan ke semua tamu undangan.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold font-body text-sm tracking-widest uppercase mb-4">
            Cara Pemesanan
          </span>
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            Mudah &{" "}
            <span className="italic text-gold">Cepat</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Hanya dalam 4 langkah sederhana, undangan digital Anda siap dibagikan.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Step Number Circle */}
              <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-gold flex items-center justify-center shadow-gold">
                <step.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Step Number */}
              <span className="font-display text-4xl text-gold/30 mb-2 block">{step.number}</span>

              {/* Content */}
              <h3 className="font-display text-xl mb-3">{step.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
