'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import Menu from '@/component/Menu';
import CircularGallery from '@/component/CircularGallary';
import TiltedCard from '@/component/TitledCard';
import ScrollVelocity from '@/component/Scrollvelocity';
import RotatingText from '@/component/Rotating';
import PortfolioCard from '@/component/PortfolioCard';
import InsightsSection from '@/component/InsightsSection';
import LightRays from '@/component/Lightrays';

// Portfolio Data categorized by sections
const portfolioData = {
  ads: [
    { id: 1, title: 'Tat-d', type: 'Marketing Ad - shoot', video: 'https://res.cloudinary.com/dh90u2k3l/video/upload/v1769687484/C2684_web_ov7gka.mp4' },
    // { id: 2, title: 'Brand Story', type: 'Production', video: '' },
  ],
  social_media: [
    { id: 3, title: 'Challenge Video', type: 'Youtube - BTS', video: 'https://res.cloudinary.com/dh90u2k3l/video/upload/v1769686258/behind_the_s_web_duih6v.mp4' },
    { id: 4, title: 'Story Telling', type: 'Insta Series', video: 'https://res.cloudinary.com/dh90u2k3l/video/upload/v1769686307/Second_Chance_y7yhxe.mp4' },
  ],
  // editing: [
  //   { id: 5, title: 'Colour Grading', type: 'Normal', video: '/assets/ai.mp4' },
  //   { id: 6, title: 'VFX & Color Grading', type: 'Editing', video: '/assets/portfolio-ad.mp4' },
  // ]
};

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#902ba9]">
      {/* Global Menu */}
      <Menu />

      {/* ===== Hero Section ===== */}
      <section className="relative pt-20 pb-10 px-4 text-center overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black tracking-tighter mb-4"
        >
          OUR <span className="text-[#902ba9]">WORK</span>
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg font-light">
          A showcase of SnapShort storytelling, visionary direction, and cinematic post-production.
        </p>

        {/* Circular Gallery for Visual Impact */}
        {/* <div style={{ height: '500px', position: 'relative' }} className="hidden md:flex">
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
        </div> */}
      </section>

      {/* ===== Scroll Velocity Branding ===== */}
      <div className="py-10 border-y border-white/5 bg-white/5 backdrop-blur-sm">
        <ScrollVelocity
          texts={['Camera Rolling Action • Cinematic Excellence • From Script To Screen', 'Indocs Media Production • Bold Visuals • Creative Storytelling']} 
          velocity={100} 
          className="text-[#902ba9] font-black uppercase"
        />
      </div>

      {/* ===== Portfolio Section with Filters ===== */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight flex items-center gap-4">
            FEATURED 
            <RotatingText
              texts={['ADS', 'Shoots', 'EDITS', 'Directions']}
              mainClassName="bg-[#902ba9] text-white px-4 py-1 rounded-2xl"
              rotationInterval={2000}
            />
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 bg-white/5 p-2 rounded-full border border-white/10">
            {['all', 'ads', 'social_media'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeTab === tab ? 'bg-[#902ba9] text-white' : 'hover:bg-white/10 text-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grids by Section */}
        <div className="space-y-24">
          {Object.entries(portfolioData).map(([category, items]) => (
            // Only show category if 'all' is selected or this specific category is active
            (activeTab === 'all' || activeTab === category) && (
              <div key={category} className="space-y-10">
                <div className="flex items-center gap-4">
                  <span className="text-[#902ba9] font-bold text-sm uppercase tracking-[0.4em]">{category}</span>
                  <div className="h-[1px] flex-grow bg-white/10" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((proj) => (
                    <motion.div 
                      key={proj.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                    >
                      <PortfolioCard
                        title={proj.title}
                        type={proj.type}
                        video={proj.video}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* ===== Featured Tilted Reel ===== */}
      <div className="flex justify-center  bg-gradient-to-b from-transparent via-[#902ba9]/10 to-transparent">
        {/* <TiltedCard
          imageSrc="/assets/ad-video.mp4" // Showreel path
          imageWidth="80vw"
          imageHeight="450px"
        /> */}
      </div>

      {/* <InsightsSection /> */}

      {/* ===== What’s Coming Soon ===== */}
      <div className="relative w-full bg-black overflow-hidden min-h-[450px] flex items-center justify-center">
        <LightRays
          raysOrigin="top-center"
          raysColor="#902ba9" // Brand Purple Rays
          raysSpeed={1}
          lightSpread={0.8}
          rayLength={1.5}
          className="opacity-50"
        />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            WHAT’S <span className="text-[#902ba9]">NEXT?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
            We're currently on set for major client projects. This space will soon be filled with premium visuals, ad films, and viral YouTube shoots.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-white uppercase">Live on Set</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-10 text-center text-[10px] text-gray-600 tracking-[0.5em] uppercase border-t border-white/5">
        {/* Powered by Teenera Pvt. Ltd */}
      </footer>
    </div>
  );
}