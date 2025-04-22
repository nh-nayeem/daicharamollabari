'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { number: 400, suffix: '+', label: 'বছরের ঐতিহ্য' },
  { number: 200, suffix: '+', label: 'পরিবারের বসবাস' },
  { number: 1, suffix: 'k+', label: 'বাড়ীবাসী' },
  { number: 2, suffix: '+', label: 'শিক্ষা প্রতিষ্ঠান' },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="py-16 bg-green-800 text-white relative overflow-hidden">
      {/* Animated background circles */}
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
        className="absolute top-0 right-0 w-72 h-72 bg-green-700 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"
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
        className="absolute bottom-0 left-0 w-96 h-96 bg-green-700 rounded-full opacity-20 translate-y-1/2 -translate-x-1/2"
      />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.1
                }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                {stat.number}{stat.suffix}
              </motion.div>
              <div className="text-sm md:text-base text-green-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
