'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Menu from '@/component/Menu'; // Naya component import karein
import CoreOfferingsSection from '@/component/ServicesSection';
import FeaturedWork from '@/component/FeaturedWork';

const videoList = [
  // '/assets/light-compressed.mp4',
  // '/assets/ai.mp4',
  '/assets/header-2.mp4',
  // '/assets/lightbg-compressed.mp4'
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videoList.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen w-full bg-white text-gray-900 selection:bg-[#902ba9] selection:text-white">
      
      {/* Global Menu Component */}
      <Menu />

      {/* ===== Hero Section ===== */}
      <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.video
              key={videoList[current]}
              src={videoList[current]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              autoPlay muted loop playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10" />
        </div>

        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9]">
              FROM <span className="text-[#902ba9]">SCRIPT</span> <br className="md:hidden" />
              TO <span className="text-[#902ba9]">SCREEN</span>
            </h1>
            <p className="text-lg md:text-2xl font-light mb-10 text-gray-200 max-w-2xl mx-auto">
              Crafting high-impact stories through professional production and visual excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link href="/services" className="px-8 py-4 bg-[#902ba9] rounded-full font-bold text-lg hover:scale-105 transition-transform">
                Explore Services
              </Link>
              <Link href="/portfolio" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                View Showreel
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* <ServicesSection /> */}
      <CoreOfferingsSection/>
      <FeaturedWork />

      {/* ===== About CTA Section (Indocs Media Branding) ===== */}
      <section id="about" className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#902ba9] font-bold tracking-widest text-sm uppercase mb-4 block"
          >
            Est. 2023
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">We Are Indocs Media</h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Your Vision, Our Lens. Professional Production & Cinematic Post-Production tailored for the digital age.
          </p>
          <Link href="/about" className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all hover:gap-4">
            More About Us <span>→</span>
          </Link>
        </div>
        
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-gray-50 -z-0 select-none pointer-events-none">
          INDOCS
        </div>
      </section>
    
    </main>
  );
}