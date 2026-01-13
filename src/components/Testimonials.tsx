import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anisa & Rizky",
    date: "Menikah 12 Januari 2025",
    content: "Undangan dari Kawanika benar-benar mewah! Tamu-tamu kami terkesan dengan desainnya. Proses pembuatannya juga sangat cepat dan tim-nya sangat responsif.",
    rating: 5,
  },
  {
    name: "Dewi & Arief",
    date: "Menikah 5 Desember 2024",
    content: "Fitur nama tamu otomatisnya sangat membantu! Tidak perlu repot edit satu per satu. Sangat recommended untuk calon pengantin yang sibuk.",
    rating: 5,
  },
  {
    name: "Sinta & Bagus",
    date: "Menikah 20 November 2024",
    content: "Awalnya ragu dengan undangan digital, tapi setelah lihat hasilnya, wow! Lebih praktis dan modern. Terima kasih Kawanika!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-champagne">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold font-body text-sm tracking-widest uppercase mb-4">
            Testimoni
          </span>
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            Kata{" "}
            <span className="italic text-gold">Mereka</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Cerita bahagia dari pasangan yang telah mempercayakan undangan digital mereka kepada kami.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-card relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="font-body text-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <h4 className="font-display text-lg">{testimonial.name}</h4>
                <p className="font-body text-sm text-muted-foreground">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
