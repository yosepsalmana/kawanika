import { Button } from "@/components/ui/button";
import { Eye, MessageCircle, Tag } from "lucide-react";
import template1 from "@/assets/template-preview-1.jpg";
import template2 from "@/assets/template-preview-2.jpg";
import template3 from "@/assets/template-preview-3.jpg";
import template4 from "@/assets/template-preview-4.jpg";

const templates = [
  {
    code: "KN-01",
    name: "Rose Elegance",
    image: template1,
    originalPrice: 150000,
    discountedPrice: 99000,
    discount: 35,
    popular: true,
  },
  {
    code: "KN-02",
    name: "Garden Minimalis",
    image: template2,
    originalPrice: 150000,
    discountedPrice: 105000,
    discount: 30,
    popular: false,
  },
  {
    code: "KN-03",
    name: "Royal Burgundy",
    image: template3,
    originalPrice: 200000,
    discountedPrice: 149000,
    discount: 25,
    popular: true,
  },
  {
    code: "KN-04",
    name: "Rustic Charm",
    image: template4,
    originalPrice: 150000,
    discountedPrice: 99000,
    discount: 35,
    popular: false,
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const TemplateShowcase = () => {
  const handleWhatsApp = (templateCode: string, templateName: string) => {
    const message = `Halo Kawanika, saya tertarik dengan template ${templateCode} - ${templateName}. Bisa info lebih lanjut?`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="templates" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold font-body text-sm tracking-widest uppercase mb-4">
            Koleksi Template
          </span>
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            Template{" "}
            <span className="italic text-gold">Premium</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Pilih dari berbagai desain eksklusif yang dirancang khusus untuk hari bahagia Anda.
          </p>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full bg-gold text-primary-foreground text-xs font-body font-semibold">
                  <Tag className="w-3 h-3" />
                  Diskon {template.discount}%
                </div>

                {/* Popular Badge */}
                {template.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-rose text-foreground text-xs font-body font-semibold">
                    Popular
                  </div>
                )}

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="gold" size="lg" className="rounded-full">
                    <Eye className="w-4 h-4" />
                    Preview
                  </Button>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="text-xs text-muted-foreground font-body mb-1">{template.code}</div>
                <h3 className="font-display text-lg mb-3">{template.name}</h3>
                
                {/* Pricing */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm text-muted-foreground line-through font-body">
                    {formatPrice(template.originalPrice)}
                  </span>
                  <span className="text-xl font-display text-gold font-semibold">
                    {formatPrice(template.discountedPrice)}
                  </span>
                </div>

                {/* CTA Button */}
                <Button
                  variant="whatsapp"
                  className="w-full rounded-full"
                  onClick={() => handleWhatsApp(template.code, template.name)}
                >
                  <MessageCircle className="w-4 h-4" />
                  Pesan via WhatsApp
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Templates */}
        <div className="text-center mt-12">
          <Button variant="gold-outline" size="xl">
            Lihat Semua Template
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcase;
