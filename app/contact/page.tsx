import Navbar from '@/components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-green-800 mb-8">যোগাযোগ</h1>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-green-700 mb-4">ঠিকানা</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  গ্রাম: দায়চারা <br />
                  ডাকঘর: দায়চারা<br />
                  উপজেলা: ফরিদ্গঞ্জ<br />
                  জেলা: চাঁদপুর
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-green-700 mb-4">যোগাযোগের মাধ্যম</h2>
                <p className="text-gray-700 leading-relaxed">
                  ডেভেলোপারঃ নাজমুল হাসান নাঈম <br />
                  ফোন: ০১৬৪০৯২৭৫৫২ <br />
                  ইমেইল: nh.nayeem06@gmail.com<br />
                  সামাজিক মাধ্যম: fb.com/nh.nayeem06
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
