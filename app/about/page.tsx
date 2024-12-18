import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-green-800 mb-8">পরিচিতি</h1>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              মোল্লা বাড়ি একটি ঐতিহ্যবাহী গ্রাম যেখানে বহু প্রজন্ম ধরে মোল্লা পরিবারের বসবাস।
              এই গ্রামের ইতিহাস অত্যন্ত সমৃদ্ধ এবং এখানকার মানুষজন তাদের ঐতিহ্য ও সংস্কৃতি নিয়ে গর্বিত।
            </p>
            <p className="text-gray-700 leading-relaxed">
              আমাদের গ্রামের চারপাশে সবুজ প্রকৃতি, ফসলের মাঠ এবং প্রাকৃতিক সৌন্দর্য বিরাজমান।
              এখানকার মানুষজন কৃষিকাজ, ব্যবসা-বাণিজ্য এবং শিক্ষা ক্ষেত্রে অগ্রগামী ভূমিকা পালন করে আসছে।
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
