// app/about/page.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function AboutPage() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="bg-white text-white overflow-hidden">
      {/* Hero Section */}
      {/* Logo & Menu */}
      <div className="fixed top-6 left-4 z-30">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl shadow-lg hover:scale-105 transition bg-black"
        >
          <img
            src="/assets/logo.webp"
            alt="Logo"
            className="w-[50px] h-[50px] rounded-md"
            loading="lazy"
          />
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="absolute mt-3 bg-black rounded-xl p-4 shadow-xl space-y-2 w-[160px] "
            >
              <Link href="/" className="block text-sm text-white hover:text-[#6b22a4] transition">
                Home
              </Link>
              <Link href="/services" className="block text-sm text-white hover:text-[#6b22a4] ">
                Our Services
              </Link>
              <Link href="/about" className="block text-sm text-[#6b22a4] hover:text-[#6b22a4] transition font-semibold">
                About Us
              </Link>
              <Link href="/contact" className="block text-sm text-white hover:text-[#6b22a4] transition">
                Contact
              </Link>
                <Link href="/portfolio" className="block text-sm text-white hover:text-[#6b22a4] transition">
                Portfolio
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">

        <video
          src="/assets/infinity-aura-20mb.mp4"
          autoPlay
          muted
          loop
          poster="/assets/about.webp"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            About Indocs Media
          </motion.h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-white">
            We blend design, strategy, and innovation to build powerful digital experiences.
          </p>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-black">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Journey
        </motion.h2>
        <div className="space-y-12">
          <motion.div className="flex gap-6" whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-2 h-2 mt-2 bg-[#6b22a4] rounded-full" />
            <div>
              <h3 className="text-xl font-semibold">Founded in 2023</h3>
              <p>Born out of passion for design, tech & media. We started with small clients and big dreams.</p>
            </div>
          </motion.div>
          <motion.div className="flex gap-6" whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="w-2 h-2 mt-2 bg-[#6b22a4] rounded-full" />
            <div>
              <h3 className="text-xl font-semibold">2024-2025</h3>
              <p>Expanded to multiple verticals – social media, 3D, marketing, websites, and video editing.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team */}
<section className="py-24 px-6 bg-white">
  <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-black">
    The Minds Behind <span className="">IDM</span>
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {[
      {
        name: "Devansh Rajput",
        role: "Founder",
        subrole: "Direction & Deployment",
      },
      {
        name: "Mithilesh Shende",
        role: "Co-Founder",
        subrole: "AI Research & Development",
      },
      {
        name: "Anshu Yaduvanshi",
        role: "Co-Founder",
        subrole: "Video Editing & Production",
      },
      {
        name: "Monal",
        role: "CEO",
        subrole: "Designing & Creative Executive",
      },
    ].map((member, i) => (
      <motion.div
        key={i}
        // whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.15, duration: 0.6 }}
        className="bg-white border border-gray-200 shadow-xl rounded-3xl p-6 text-center"
      >
        <div className="w-20 h-20 mx-auto rounded-full bg-[#f1e8fc] flex items-center justify-center text-2xl font-bold text-[#6b22a4] mb-4">
          {member.name.split(" ")[0][0]}
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
        <p className="text-[#6b22a4] font-medium">{member.role}</p>
        <p className="text-gray-500 text-sm mt-1">{member.subrole}</p>
      </motion.div>
    ))}
  </div>
</section>

{/* Who We Are */}
<section className="py-20 px-6 max-w-6xl mx-auto text-center">
  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Who We Are?</h2>
  <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
    We are Indocs Media – a dynamic team of creatives, strategists, and technologists driven to transform how brands communicate. Our focus is on blending imagination with precision to deliver impactful digital solutions across advertisement, social media management, and video production.
  </p>
</section>

{/* Our Aim */}
<section className="py-20 px-6 max-w-6xl mx-auto text-center bg-gray-100 rounded-xl">
  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Our Aim</h2>
  <p className="text-gray-800 text-lg leading-relaxed max-w-3xl mx-auto">
    Our aim is to bring together businesses, creators, and production teams under one vision — empowering teenagers with the support of Teenera Pvt. Ltd. 
    We focus on engaging the youth, inspiring creativity, and enabling businesses to deliver fresh and innovative campaigns shaped by the new era of teenage energy and perspective.
  </p>
  <p className="text-[#6b22a4] font-semibold mt-6 text-xl">
    <span className="italic">We believe in creativity — because the world craves the new.</span>

  </p>
</section>


{/* Powered By */}
<p className="text-center text-sm text-gray-500 mt-10 mb-5">Powered by Teenera Pvt. Ltd</p>


    </main>
  );
}
