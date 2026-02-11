"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Menu from '@/component/Menu';

const services = [
  {
    id: "ads-shoots",
    title: "Ads Shoots & Production",
    desc: "Scroll-stopping ads that don't feel like boring commercials. We craft high-energy visuals designed to grab attention instantly and actually drive results.",
    video: "https://res.cloudinary.com/dh90u2k3l/video/upload/v1769688557/IMG_0233_web_z8nsss.mp4",
    poster: "/assets/logo.webp",
    link: "/services/ads-production", // Linked to dedicated page
  },
  {
    id: "editing",
    title: "Video Direction & Editing",
    desc: "Sharp direction on set meets crisp, rhythmic editing. We turn raw footage into cinematic stories that keep eyes glued to the screen till the very last second.",
    video: "",
    poster: "https://res.cloudinary.com/dsi8rmtfp/image/upload/v1770794891/favicon_vckvco.svg",
    link: "/services/video-editing", // Linked to dedicated page
  },
  {
    id: "production",
    title: "Pre & Post Production",
    desc: "From the first brainstorm to the final export. We handle the heavy lifting—planning, logistics, and the final polish—so you just focus on the big picture.",
    video: "/assets/header-2.mp4",
    poster: "https://res.cloudinary.com/dsi8rmtfp/image/upload/v1770794907/production_qiriqm.jpg",
    link: "/services/pre-post-production", // Linked to dedicated page
  },
  {
    id: "yt-shoots",
    title: "Yt video Shoots",
    desc: "Top-tier shoots for creators & podcasts designed for high retention. No stress, just good vibes—so you can focus on creating your best content.",
    video: "https://res.cloudinary.com/dh90u2k3l/video/upload/v1769689870/IMG_0183_web_rtsrrj.mp4",
    poster: "/assets/logo.webp",
    link: "/services/youtube-shoots", // Linked to dedicated page
  },
];

export default function ServicesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scroll transitions for the "Blend" effect
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div ref={containerRef} className="bg-white text-black relative min-h-screen selection:bg-[#902ba9] selection:text-white">
      
      <Menu />

      {/* ===== Cinematic Hero Section with Blend Effect ===== */}
      <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center bg-black">
        <motion.video
          style={{ scale: videoScale, opacity: videoOpacity }}
          src="https://res.cloudinary.com/dsi8rmtfp/video/upload/v1770794912/service-better_temx4e.mp4"
          autoPlay muted loop playsInline
          poster="https://res.cloudinary.com/dsi8rmtfp/image/upload/v1770794909/service-poster_vsufyo.webp"
          className="absolute w-full h-full object-cover"
        />
        
        {/* Complex Gradient Overlay for the Blend */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-transparent to-white" />
        
        {/* Bottom Feathered Edge (Specifically for the Blend) */}
        <div className="absolute bottom-0 left-0 w-full h-64 z-15 bg-gradient-to-t from-white via-white/50 to-transparent" />
        
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-20 text-center relative px-4 max-w-4xl"
        >
          <span className="text-[#902ba9] font-bold tracking-[0.3em] text-sm uppercase mb-4 block drop-shadow-lg">
            Our Expertise
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-6 text-white tracking-tighter leading-tight drop-shadow-2xl">
            CREATIVE <span className="text-[#902ba9]">SERVICES</span>
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto text-gray-100 font-light drop-shadow-md">
            Video-led storytelling and full-scale production power—crafting visuals that command attention.
          </p>
        </motion.div>
      </section>

      {/* ===== Detailed Services Grid (Pulled up slightly for overlapping blend) ===== */}
      <section className="relative z-30 -mt-20 py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((s, i) => (
            <motion.div
              key={i}
              id={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="scroll-mt-32 group"
            >
              {/* VIDEO CARD LINKED TO SERVICE DETAIL PAGE */}
              <Link href={s.link} className="block cursor-pointer">
                <div className="relative w-full h-[400px] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-gray-200">
                  <video
                    src={s.video}
                    autoPlay muted loop playsInline
                    poster={s.poster}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-white text-xs font-bold tracking-widest uppercase">
                    Production
                  </div>
                </div>
              </Link>

              <div className="mt-8 px-4">
                {/* TITLE LINKED TO SERVICE DETAIL PAGE */}
                <Link href={s.link} className="block w-fit">
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight hover:text-[#902ba9] transition-colors">
                    {s.title}
                    </h3>
                </Link>

                <p className="text-gray-600 text-lg leading-relaxed font-light mb-6">
                  {s.desc}
                </p>
                
                {/* PORTFOLIO LINK (UNCHANGED) */}
                <Link 
                  href="/portfolio" 
                  className="inline-flex items-center gap-2 text-[#902ba9] font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all"
                >
                  Look at the work <span className="text-xl">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Call to Action Section ===== */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-[#902ba9] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-purple-200">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter">
              READY TO <br className="md:hidden" /> START A PROJECT?
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-80 font-light">
              Let's turn your vision into a cinematic reality.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white text-[#902ba9] rounded-full font-black text-xl shadow-xl hover:shadow-2xl transition-all"
              >
                Let's Connect
              </motion.button>
            </Link>
          </motion.div>
          
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-black/10 rounded-full blur-3xl" />
        </div>
      </section>

      <div className="py-12 border-t border-gray-100 text-center">
        <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">
          {/* Powered by Teenera Pvt. Ltd */}
          The era of cinematic storytelling for brands has arrived. Let's create something unforgettable together.
        </p>
      </div>
    </div>
  );
}