import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyKawanika from "@/components/WhyKawanika";
import TemplateShowcase from "@/components/TemplateShowcase";
import KeyFeatures from "@/components/KeyFeatures";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyKawanika />
      <TemplateShowcase />
      <section id="features">
        <KeyFeatures />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      {/* Testimonials - Hidden for now, can be re-enabled by uncommenting
      <Testimonials />
      */}
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
