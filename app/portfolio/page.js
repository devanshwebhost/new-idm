'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import Menu from '@/component/Menu';
import ScrollVelocity from '@/component/Scrollvelocity';
import RotatingText from '@/component/Rotating';
import PortfolioCard from '@/component/PortfolioCard';
import LightRays from '@/component/Lightrays';
import LiveWorkArchive from '@/component/LiveWorkArchive';

// Portfolio Data categorized by sections
const portfolioData = {
  ads: [
    { id: 1, title: 'Tat-d', type: 'Marketing Ad - Shoot', video: 'https://res.cloudinary.com/dh90u2k3l/video/upload/v1769687484/C2684_web_ov7gka.mp4' },
  ],
  social_media: [
    { id: 4, title: 'Story Telling', type: 'Insta Series', video: 'https://res.cloudinary.com/dh90u2k3l/video/upload/v1769686307/Second_Chance_y7yhxe.mp4' },
  ],
  // New Category: BTS / On Set
  bts: [
    { id: 3, title: 'Making of Challenge', type: 'BTS • Raw Footage', video: 'https://res.cloudinary.com/dh90u2k3l/video/upload/v1769686258/behind_the_s_web_duih6v.mp4' },
    // Add more raw clips here to show "We are working"
    { id: 5, title: 'On Set: Lighting Setup', type: 'BTS • Production', video: 'https://res.cloudinary.com/dh90u2k3l/video/upload/v1769688557/IMG_0233_web_z8nsss.mp4' }, 
  ]
};

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('all');

  // Helper to get tab names including 'BTS'
  const tabs = ['all', 'ads', 'social_media', 'bts'];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#902ba9]">
      <Menu />

      {/* ===== Hero Section ===== */}
      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-9xl font-black tracking-tighter mb-6"
        >
          OUR <span className="text-[#902ba9]">WORK</span>
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-xl font-light leading-relaxed">
          From polished final cuts to the chaos behind the camera. <br/>
          See how we craft SnapShort storytelling and cinematic visuals.
        </p>
      </section>

      <LiveWorkArchive />

      {/* ===== Scroll Velocity Branding ===== */}
      {/* <div className="py-12 border-y border-white/5 bg-white/5 backdrop-blur-sm">
        <ScrollVelocity
          texts={['Camera Rolling Action • Cinematic Excellence • From Script To Screen', 'Indocs Media Production • Bold Visuals • Creative Storytelling']} 
          velocity={100} 
          className="text-[#902ba9] font-black uppercase text-xl md:text-4xl"
        />
      </div> */}

      {/* ===== Portfolio Section with Filters ===== */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight flex items-center gap-4">
            FEATURED 
            <RotatingText
              texts={['ADS', 'SHOOTS', 'BTS', 'PROCESS']}
              mainClassName="bg-[#902ba9] text-white px-4 py-1 rounded-2xl"
              rotationInterval={2000}
            />
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 bg-white/5 p-2 rounded-full border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeTab === tab ? 'bg-[#902ba9] text-white shadow-lg shadow-purple-900/50' : 'hover:bg-white/10 text-gray-400'
                }`}
              >
                {tab === 'bts' ? 'Life On Set' : tab.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grids */}
        <div className="min-h-[50vh]">
          {Object.entries(portfolioData).map(([category, items]) => (
            // Only show category if 'all' is selected or this specific category is active
            (activeTab === 'all' || activeTab === category) && (
              <div key={category} className="mb-20 last:mb-0">
                {/* Section Title (Only visible in 'All' view) */}
                {activeTab === 'all' && (
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-[#902ba9] font-bold text-sm uppercase tracking-[0.4em]">
                      {category === 'bts' ? 'Behind The Scenes' : category.replace('_', ' ')}
                    </span>
                    <div className="h-[1px] flex-grow bg-white/10" />
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((proj) => (
                    <motion.div 
                      key={proj.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <PortfolioCard
                        title={proj.title}
                        type={proj.type}
                        video={proj.video}
                      />
                      {/* Special Label for BTS items */}
                      {category === 'bts' && (
                        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500 font-mono uppercase tracking-widest">
                           <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                           Raw Footage
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      

      {/* ===== "What We Are Working On" (The Active Status Section) ===== */}
      <div className="relative w-full bg-neutral-900 overflow-hidden min-h-[500px] flex items-center justify-center border-t border-white/10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#902ba9" 
          raysSpeed={1}
          lightSpread={0.8}
          rayLength={1.5}
          className="opacity-40"
        />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-red-500/20 border border-red-500/50 px-6 py-2 rounded-full mb-8 backdrop-blur-md">
             <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]" />
             <span className="text-xs font-bold tracking-[0.2em] text-red-200 uppercase">Current Production Status</span>
          </div>

          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
             WE ARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#902ba9] to-white">COOKING</span>
          </h2>
          
          <p className="text-gray-400 text-lg font-light mb-10">
            Currently shooting a major <strong>Fashion Campaign</strong> and two <strong>Podcast Series</strong>. 
            <br className="hidden md:block" /> Follow our journey from raw files to final exports.
          </p>

          {/* Call to Action for Clients to join the schedule */}
          <a href={"/contact"}><button className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
            Book Your Slot
          </button></a>
        </div>
      </div>

      <footer className="py-12 text-center text-[10px] text-gray-600 tracking-[0.5em] uppercase border-t border-white/5 bg-black">
        Indocs Media Production © {new Date().getFullYear()}
      </footer>
    </div>
  );
}