'use client';

import React from 'react';
import { useState } from "react";
// import InfiniteMenu from '@/component/InfynityMenu';
import TextType from '@/component/TextType';
import ScrollVelocity from '@/component/Scrollvelocity';
import CircularGallery from '@/component/CircularGallary';
import TiltedCard from '@/component/TitledCard';
import RollingGallery from '@/component/Rolling';
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
// import GlassSurface from '@/component/GlassSurface';


const velocity = 100;

export default function PortfolioPage() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen px-4 py-12 bg-black text-[#0c52a2]">
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
              className="absolute mt-3 bg-black rounded-xl p-4 shadow-xl space-y-2 w-[160px] border"
            >
              <Link href="/" className="block text-sm text-white hover:text-[#6b22a4] transition">
                Home
              </Link>
              <Link href="/services" className="block text-sm text-white hover:text-[#6b22a4] font-semibold">
                Our Services
              </Link>
              <Link href="/about" className="block text-sm text-white hover:text-[#6b22a4] transition">
                About Us
              </Link>
              <Link href="/contact" className="block text-sm text-white hover:text-[#6b22a4] transition">
                Contact
              </Link>
              <Link href="/portfolio" className="block text-sm text-[#6b22a4] transition">
                Portfolio
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
        

      <div className="text-center">
<TextType 
  text={["Welcome To Our Portfolio"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>
<p className="text-center text-gray-600  max-w-3xl mx-auto">
          Explore some of the best work we’ve done across branding, design, development,
          and digital marketing. Each project reflects our creativity and dedication.
        </p>
    <div style={{ height: '600px', position: 'relative' }} className='hidden md:flex'>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>
<div className='flex justify-center mt-10'>
<TiltedCard
  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
  altText=""
  captionText=""
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">
      
    </p>
  }
/>
</div>

<div className=' mt-10 md:mt-0  z-50'>
<ScrollVelocity
  texts={['Explore Designs', 'Camera Rolling Action']} 
  velocity={velocity} 
  className="custom-scroll-text"
/>
</div>

{/* <RollingGallery autoplay={true} pauseOnHover={true} /> */}
        

        
      </div>
    </div>
  );
}
