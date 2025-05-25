
import Header from '@/components/Header';
import ProblemSection from '@/components/ProblemSection';
import ProductDetails from '@/components/ProductDetails';
import Testimonials from '@/components/Testimonials';
import UpsellSection from '@/components/UpsellSection';
import UrgencySection from '@/components/UrgencySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ProblemSection />
      <ProductDetails />
      <Testimonials />
      <UpsellSection />
      <UrgencySection />
      <Footer />
    </div>
  );
};

export default Index;
