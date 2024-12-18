'use client';

import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

export default function Family() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        
      </main>
    </>
  );
}
