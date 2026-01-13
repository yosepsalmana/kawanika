import { Users, Send, Music, Image, MapPin, Clock, MessageSquare, Calendar } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Nama Tamu Otomatis",
    description: "Setiap tamu menerima undangan dengan nama mereka sendiri",
  },
  {
    icon: Send,
    title: "Kirim Tanpa Ribet",
    description: "Bagikan link undangan tanpa perlu edit manual",
  },
  {
    icon: Music,
    title: "Request Musik",
    description: "Pilih lagu romantis untuk menemani undangan",
  },
  {
    icon: Image,
    title: "Galeri Foto & Video",
    description: "Tampilkan momen indah prewedding Anda",
  },
  {
    icon: MapPin,
    title: "Lokasi Google Maps",
    description: "Tamu mudah menemukan lokasi acara",
  },
  {
    icon: Clock,
    title: "Countdown",
    description: "Hitung mundur menuju hari bahagia",
  },
  {
    icon: MessageSquare,
    title: "RSVP Digital",
    description: "Konfirmasi kehadiran tamu secara online",
  },
  {
    icon: Calendar,
    title: "Buku Tamu",
    description: "Kumpulkan ucapan & doa dari tamu",
  },
];

const KeyFeatures = () => {
  return (
    <section className="py-24 bg-champagne">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold font-body text-sm tracking-widest uppercase mb-4">
            Fitur Lengkap
          </span>
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            Semua yang{" "}
            <span className="italic text-gold">Anda Butuhkan</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Undangan digital lengkap dengan fitur premium untuk pengalaman terbaik tamu Anda.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-base md:text-lg mb-2">{feature.title}</h3>
              <p className="font-body text-muted-foreground text-xs md:text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
