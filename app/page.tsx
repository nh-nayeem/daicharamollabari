import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ImageGallery from '@/components/ImageGallery';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <StatsSection />
          <ImageGallery />
        </div>
      </main>
    </>
  );
}