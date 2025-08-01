'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServicesSection from '@/component/ServicesSection';
import Link from 'next/link';

const videoList = [
  '/assets/light-compressed.mp4',
  '/assets/ai.mp4',
  '/assets/header-2.mp4',
  '/assets/lightbg-compressed.mp4'
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videoList.length);
    }, 10000); // Change every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen w-full bg-white text-gray-900">
    
    

      {/* ===== Hero Section ===== */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">

        {/* Background Video Carousel */}
        {videoList.map((src, index) => (
          <video
            key={index}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            poster='/assets/poster1.webp'
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Logo & Animated Menu */}
        <div className="fixed top-6 left-4 z-30">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl shadow-lg hover:scale-105 transition"
          >
            <img src="assets/logo.webp" alt="Logo" loading="lazy" className="w-[50px] h-[50px]  rounded-md" />
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="absolute mt-3 bg-black rounded-xl p-4 shadow-xl space-y-2 w-[150px] z-40"
              > <Link href="/" className="block text-sm hover:text-[#6b22a4] text-[#6b22a4] transition font-semibold">Home</Link>
                <Link href="/services" className="block text-sm hover:text-[#6b22a4] text-white transition">Our Services</Link>
                <Link href="/about" className="block text-sm hover:text-[#6b22a4] text-white transition">About Us</Link>
                <Link href="/contact" className="block text-sm hover:text-[#6b22a4] text-white transition">Contact</Link>
                <Link href="/portfolio" className="block text-sm text-white hover:text-[#6b22a4] transition">
                Portfolio
              </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Empowering Digital Brilliance</h1>
          <p className="text-lg md:text-xl font-light mb-6">
            We craft experiences across Web, Media, and Strategy with innovation at heart.
          </p>
          <Link href="/services" className="px-6 py-3 bg-[#902ba9] hover:bg-[#6b22a4] rounded-full font-semibold">
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <ServicesSection />

      {/* ===== About CTA Section ===== */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We Are Indocs Media</h2>
          <p className="text-lg text-gray-700 mb-6">
            A fusion of creativity, technology, and strategy — ready to elevate your brand experience.
          </p>
          <Link href="/about" className="px-6 py-3 bg-black text-white rounded-full font-medium">
            More About Us
          </Link>
        </div>
      </section>
    </main>
  );
}
