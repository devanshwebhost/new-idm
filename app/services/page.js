"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    title: "Advertisement Creation",
    desc: "From concept to screen, we craft ads that grab attention and convert.",
    video: "/assets/business.mp4",
    poster: "/assets/advertisment.webp",
  },
  {
    title: "AIO for Social Media",
    desc: "Design, schedule, optimize — all your social content managed in one place.",
    video: "/assets/ai.mp4",
    poster: "/assets/aio.webp",
  },
  {
    title: "Video Editing",
    desc: "Creative cuts, smooth transitions, story-driven edits tailored for your brand.",
    video: "/assets/editing-compressed.mp4",
    poster: "/assets/editing-poster.webp",
  },
  {
    title: "Production Services",
    desc: "From shoot to screen — we bring your ideas to life with top-tier production.",
    video: "/assets/header-2.mp4",
    poster: "/assets/production.jpg",
  },
];

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white text-black relative min-h-screen">
      {/* Logo & Menu */}
      <div className="fixed top-6 left-4 z-30">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl shadow-lg hover:scale-105 transition bg-black"
        >
          <img
            src="/assets/logo.jpg"
            alt="Logo"
            className="w-[50px] h-[50px] rounded-md"
          />
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="absolute mt-3 bg-black rounded-xl p-4 shadow-xl space-y-2 w-[160px] border"
            >
              <Link href="/" className="block text-sm text-white hover:text-[#6b22a4] transition">
                Home
              </Link>
              <Link href="/services" className="block text-sm text-[#6b22a4] font-semibold">
                Our Services
              </Link>
              <Link href="/about" className="block text-sm text-white hover:text-[#6b22a4] transition">
                About Us
              </Link>
              <Link href="/contact" className="block text-sm text-white hover:text-[#6b22a4] transition">
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <video
          src="/assets/service-better.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/service-poster.webp"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80 z-10" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-20 text-center relative px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Creative Services That Speak Volumes
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Video-led storytelling, bold marketing, and full-stack digital power — all under one roof.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white border rounded-xl overflow-hidden shadow-md group"
          >
            <div className="relative w-full h-60 overflow-hidden">
              <video
                src={s.video}
                autoPlay
                muted
                loop
                playsInline
                poster={s.poster}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black mb-2">{s.title}</h3>
              <p className="text-gray-700">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-[#6b22a4] py-16 px-6 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Let’s Elevate Your Business
        </motion.h2>
        <Link href="/contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-white text-[#6b22a4] rounded-full font-semibold text-lg"
        >
          Contact Us
        </motion.button>
        </Link>
      </section>
    </div>
  );
}
