
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import PricingOffer from '@/components/PricingOffer';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Benefits />
      <Testimonials />
      <PricingOffer />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
