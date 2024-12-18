'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="relative">
      <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-green-800">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="container mx-auto px-4 z-20 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-6"
          >
            মোল্লা বাড়ী
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            ঐতিহ্য, সংস্কৃতি এবং সম্প্রদায়ের মিলনভূমি
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="/about"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition-colors duration-300"
            >
              আরও জানুন
            </a>
          </motion.div>
        </div>
        
        {/* Animated decorative elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-20 h-20 border-2 border-white/20 rounded-full z-0"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-32 h-32 border-2 border-white/20 rounded-full z-0"
        />
      </div>
    </div>
  );
}
