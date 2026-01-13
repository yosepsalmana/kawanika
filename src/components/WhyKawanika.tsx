import { Sparkles, Palette, Share2, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Praktis & Modern",
    description: "Undangan digital yang mudah dibagikan melalui WhatsApp, Instagram, dan platform lainnya.",
  },
  {
    icon: Palette,
    title: "Desain Eksklusif",
    description: "Koleksi template premium dengan sentuhan elegan dan mewah untuk hari spesial Anda.",
  },
  {
    icon: Share2,
    title: "Siap Dibagikan",
    description: "Kirim undangan ke semua tamu tanpa perlu ganti nama satu per satu secara manual.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support Personal",
    description: "Tim kami siap membantu 24/7 untuk memastikan undangan Anda sempurna.",
  },
];

const WhyKawanika = () => {
  return (
    <section className="py-24 bg-champagne">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold font-body text-sm tracking-widest uppercase mb-4">
            Mengapa Kawanika
          </span>
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            Undangan Elegan,{" "}
            <span className="italic text-gold">Mudah & Praktis</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Kami menghadirkan solusi undangan digital premium dengan fitur lengkap untuk pernikahan impian Anda.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl mb-3">{feature.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKawanika;
