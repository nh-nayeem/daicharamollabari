'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const images = [
  { src: '/mollabaridighi.jpg', title: 'দীঘি' },
  { src: '/mollabarikachari.png', title: 'কাচারি ঘর' },
  { src: '/mollabarieid.jpg', title: 'ঈদ' },
  { src: '/mollabarikhela.jpg', title: 'খেলা' },
];

/**
 * ImageGallery component
 * 
 * Displays a grid of images with hover effects and a modal for viewing selected images
 */
export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
        আমাদের বাড়ীর ছবি
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              layoutId={`image-${index}`}
              onClick={() => setSelectedImage(index)}
              className="cursor-pointer relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div 
                  className="w-full h-full bg-green-100"
                  style={{
                    backgroundImage: `url(${image.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              layoutId={`image-${selectedImage}`}
              className="relative max-w-4xl w-full aspect-video bg-white rounded-lg overflow-hidden"
            >
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${images[selectedImage].src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
              >
                <h3 className="text-white text-xl font-medium">
                  {images[selectedImage].title}
                </h3>
              </motion.div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
