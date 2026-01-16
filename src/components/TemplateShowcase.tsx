import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, MessageCircle, Tag, X, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import template1 from "@/assets/template-preview-1.jpg";
import template2 from "@/assets/template-preview-2.jpg";
import template3 from "@/assets/template-preview-3.jpg";
import template4 from "@/assets/template-preview-4.jpg";

type Category = "all" | "simple-elegant" | "modern-trendy";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "simple-elegant", label: "Simple Elegant" },
  { id: "modern-trendy", label: "Modern / Trendy" },
];

const templates = [
  {
    code: "KN-01",
    name: "Rose Elegance",
    image: template1,
    originalPrice: 150000,
    discountedPrice: 99000,
    discount: 35,
    popular: true,
    previewUrl: "https://demo.kawanika.com/rose-elegance",
    category: "simple-elegant" as Category,
  },
  {
    code: "KN-02",
    name: "Garden Minimalis",
    image: template2,
    originalPrice: 150000,
    discountedPrice: 105000,
    discount: 30,
    popular: false,
    previewUrl: "https://demo.kawanika.com/garden-minimalis",
    category: "simple-elegant" as Category,
  },
  {
    code: "KN-03",
    name: "Royal Burgundy",
    image: template3,
    originalPrice: 200000,
    discountedPrice: 149000,
    discount: 25,
    popular: true,
    previewUrl: "https://demo.kawanika.com/royal-burgundy",
    category: "modern-trendy" as Category,
  },
  {
    code: "KN-04",
    name: "Rustic Charm",
    image: template4,
    originalPrice: 150000,
    discountedPrice: 99000,
    discount: 35,
    popular: false,
    previewUrl: "https://demo.kawanika.com/rustic-charm",
    category: "modern-trendy" as Category,
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
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<typeof templates[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredTemplates = activeCategory === "all" 
    ? templates 
    : templates.filter(t => t.category === activeCategory);

  const handleWhatsApp = (templateCode: string, templateName: string) => {
    const message = `Halo Kawanika, saya tertarik dengan template ${templateCode} - ${templateName}. Bisa info lebih lanjut?`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handlePreview = (template: typeof templates[0]) => {
    setSelectedTemplate(template);
    setPreviewOpen(true);
  };

  const handleOpenInNewTab = () => {
    if (selectedTemplate?.previewUrl) {
      window.open(selectedTemplate.previewUrl, "_blank");
    }
  };

  return (
    <>
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

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full font-body text-sm transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? "bg-gold text-primary-foreground border-gold shadow-soft"
                    : "bg-transparent text-foreground/70 border-border hover:border-gold/50 hover:text-gold"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Template Grid - Centered with flex */}
          <div className="flex flex-wrap justify-center gap-8">
            {filteredTemplates.map((template, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-[320px]"
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
                    <Button 
                      variant="gold" 
                      size="lg" 
                      className="rounded-full"
                      onClick={() => handlePreview(template)}
                    >
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

      {/* Preview Modal */}
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 bg-background border-gold/20 overflow-hidden">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-card">
            <div className="flex items-center gap-4">
              <div>
                <span className="text-xs text-muted-foreground font-body">
                  {selectedTemplate?.code}
                </span>
                <h3 className="font-display text-lg">
                  {selectedTemplate?.name}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-body">
                Preview Mode
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="gold-outline"
                size="sm"
                onClick={handleOpenInNewTab}
                className="rounded-full"
              >
                <ExternalLink className="w-4 h-4" />
                Buka di Tab Baru
              </Button>
              <DialogClose asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <X className="w-5 h-5" />
                </Button>
              </DialogClose>
            </div>
          </div>
          
          {/* Preview Frame */}
          <div className="flex-1 h-[calc(90vh-80px)] bg-muted/30">
            {selectedTemplate && (
              <iframe
                src={selectedTemplate.previewUrl}
                className="w-full h-full border-0"
                title={`Preview ${selectedTemplate.name}`}
                sandbox="allow-scripts allow-same-origin"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TemplateShowcase;
