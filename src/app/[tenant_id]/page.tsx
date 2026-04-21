import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ThemeSection from '@/components/ThemeSection';
import PropertySection from '@/components/PropertySection';
import PartnerBanner from '@/components/PartnerBanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ThemeSection />
        <PropertySection />
        <PartnerBanner />
      </main>
      <Footer />
    </>
  );
}
