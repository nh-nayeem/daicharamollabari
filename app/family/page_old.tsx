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
         <motion.h1
          initial = {{opacity: 0, y: 20 }}
          animate = {{opacity: 1, y: 0 }}
          transition = {{duration: 0.5, ease: 'easeOut' }}
          className="text-4xl font-bold text-green-800 mb-8"
        >
          মোল্লা পরিবার
        </motion.h1>
        
        <motion.div
          initial = {{opacity: 0, y: 20 }}
          animate = {{opacity: 1, y: 0 }}
          transition = {{duration: 0.5, ease: 'easeOut' }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <p className="text-gray-700 leading-relaxed mb-4">
            মোল্লা পরিবার এই অঞ্চলের একটি সম্মানিত ও ঐতিহ্যবাহী পরিবার।
            বহু প্রজন্ম ধরে এই পরিবারের সদস্যরা শিক্ষা, সমাজসেবা এবং ধর্মীয় কার্যক্রমে গুরুত্বপূর্ণ অবদান রেখে আসছেন।
          </p>
          <p className="text-gray-700 leading-relaxed">
            বর্তমানে মোল্লা পরিবারের সদস্যরা বিভিন্ন পেশায় নিয়োজিত রয়েছেন এবং
            দেশের বিভিন্ন প্রান্তে ছড়িয়ে থাকলেও নিজেদের মূল শিকড়ের সাথে সম্পর্ক বজায় রেখে চলছেন।
          </p>
        </motion.div>

        <motion.div
          initial = {{opacity: 0, y: 20 }}
          animate = {{opacity: 1, y: 0 }}
          transition = {{duration: 0.5, ease: 'easeOut' }}
          className="mt-8 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">পারিবারিক ঐতিহ্য</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>শিক্ষা ও জ্ঞানার্জনের প্রতি গুরুত্ব</li>
              <li>সামাজিক দায়বদ্ধতা</li>
              <li>ধর্মীয় মূল্যবোধ</li>
              <li>পারিবারিক ঐক্য</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">বর্তমান অবস্থান</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>শিক্ষকতা</li>
              <li>ব্যবসা-বাণিজ্য</li>
              <li>চিকিৎসা সেবা</li>
              <li>প্রকৌশল</li>
            </ul>
          </div>
        </motion.div>
        
      </main>
    </>
  );
}
