"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Menu from '@/component/Menu';

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden selection:bg-[#902ba9] selection:text-white">
      
      {/* Global Menu Component */}
      <Menu />

      {/* ===== Hero Section: Cinematic Production Vibe ===== */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <video
          src="/assets/infinity-aura-20mb.mp4"
          autoPlay muted loop playsInline
          poster="/assets/about.webp"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white z-10" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#902ba9] font-bold tracking-[0.3em] text-sm uppercase mb-4 block"
          >
            Since 2023
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter"
          >
            ABOUT <br /> <span className="text-[#902ba9]">INDOCS</span> MEDIA
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl mt-6 max-w-2xl mx-auto text-gray-200 font-light leading-relaxed"
          >
            We are a full-service production house blending cinematic storytelling with strategic direction to build powerful digital experiences.
          </motion.p>
        </div>
      </section>

      {/* ===== Who We Are: The Philosophy ===== */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-8 tracking-tight"
        >
          WHO WE <span className="text-[#902ba9]">ARE?</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto font-light"
        >
          Indocs Media is a dynamic collective of creators, directors, and editors driven to redefine visual communication. From high-impact ads to cinematic YouTube production, we handle the entire journey—<span className="text-black font-semibold italic">From Script to Screen.</span>
        </motion.p>
      </section>

      {/* ===== Our Journey: Timeline ===== */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-16 text-center uppercase tracking-tight">The Production Timeline</h2>
          <div className="relative border-l-2 border-gray-200 ml-4 md:ml-0 md:left-1/2">
            
            {/* 2023 */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12 relative"
            >
              <div className="absolute -left-[9px] md:left-[-9px] w-4 h-4 bg-[#902ba9] rounded-full border-4 border-white" />
              <div className="ml-8 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                <h3 className="text-2xl font-bold text-[#902ba9]">2023: The Foundation</h3>
                <p className="text-gray-600 mt-2 font-medium">Born out of passion for media and tech. Started as a creative hub for local businesses and independent creators.</p>
              </div>
            </motion.div>

            {/* 2024-2025 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12 relative"
            >
              <div className="absolute -left-[9px] md:left-[-9px] w-4 h-4 bg-[#902ba9] rounded-full border-4 border-white" />
              <div className="ml-8 md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-bold text-[#902ba9]">2024-2025: Expansion</h3>
                <p className="text-gray-600 mt-2 font-medium">Scaled into full-scale video production, cinematic editing, and high-end ad shoots, establishing IDM as a premium production partner.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Meet the Team: The Minds ===== */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-4">
              THE MINDS BEHIND <span className="text-[#902ba9]">IDM</span>
            </h2>
            <p className="text-gray-500 font-medium">A dedicated team of experts bringing your vision to life.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { name: "Devansh Rajput", role: "", subrole: "YT Video Direction & Deployment", color: "#f1e8fc" },
              { name: "Mithilesh Shende", role: "", subrole: "Field Production Photographer", color: "#eef2ff" },
              { name: "Anshu Yaduvanshi", role: "", subrole: "Video Editing & Production", color: "#fdf2f8" },
              { name: "Monal Rajput", role: "", subrole: "Designing & Creative Visuals", color: "#fff7ed" },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 rounded-[2.5rem] p-8 text-center hover:-translate-y-2 transition-transform duration-500"
              >
                <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-3xl font-black text-[#902ba9] mb-6 transition-all duration-500 group-hover:scale-110`} style={{ backgroundColor: member.color }}>
                  {member.name.split(" ")[0][0]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#902ba9] font-bold text-sm uppercase tracking-widest mb-3">{member.role}</p>
                <div className="h-[1px] w-12 bg-gray-200 mx-auto mb-4" />
                <p className="text-gray-500 text-sm leading-relaxed">{member.subrole}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Our Aim: The Teenera Connection ===== */}
      <section className=" mb-2 px-6 max-w-6xl mx-auto">
        <div className="bg-[#902ba9] rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8">OUR AIM</h2>
            <p className="text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto font-light opacity-90">
              Our mission is to empower the next generation of creators. We aim to merge youth-led energy with professional production standards, delivering fresh and innovative campaigns that define the new era of media.
            </p>
            <div className="mt-10 h-[2px] w-24 bg-white/30 mx-auto" />
            <p className="mt-8 italic text-xl md:text-2xl font-medium">
              "We believe in creativity — because the world craves the new."
            </p>
          </motion.div>
          
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Footer Branding */}
      {/* <div className="py-12 border-t border-gray-100 text-center">
        <p className="text-gray-400 text-sm tracking-widest uppercase font-bold">
          Powered by Teenera Pvt. Ltd
        </p>
      </div> */}

    </main>
  );
}