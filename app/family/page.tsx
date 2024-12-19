'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const FlowWithNoSSR = dynamic(() => import('./mollafamilytree'), {
  ssr: false,
});

export default function Family() {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen ">
      <FlowWithNoSSR />
    </main>
    </>
  );
}
