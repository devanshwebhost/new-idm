'use client';

import React from 'react';
import { useState } from "react";
// import InfiniteMenu from '@/component/InfynityMenu';
import TextType from '@/component/TextType';
import ScrollVelocity from '@/component/Scrollvelocity';
import CircularGallery from '@/component/CircularGallary';
import TiltedCard from '@/component/TitledCard';
import PortfolioCard from '@/component/PortfolioCard';
import RollingGallery from '@/component/Rolling';
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import LightRays from '@/component/Lightrays';
import RotatingText from '@/component/Rotating';
import { Folder } from 'lucide-react';
import GridMotion from '@/component/GridMotion';
import QuickGallery from '@/component/Q';



const velocity = 100;

export default function PortfolioPage() {

  const items = [
  <div key='jsx-item-1'></div>,
  'https://indocsmedia.vercel.app/assets/logo.webp',
  
  <div key='jsx-item-2'></div>,
  'https://indocsmedia.vercel.app/assets/logo.webp',
  
  <div key='jsx-item-2'></div>,
  'https://indocsmedia.vercel.app/assets/logo.webp',
  
  <div key='jsx-item-2'></div>,
  'https://indocsmedia.vercel.app/assets/logo.webp',
  
  <div key='jsx-item-2'></div>,
  'https://indocsmedia.vercel.app/assets/logo.webp',
  
  <div key='jsx-item-2'></div>,
  'https://indocsmedia.vercel.app/assets/logo.webp',
  
  <div key='jsx-item-3'></div>,
  'https://indocsmedia.vercel.app/assets/logo.webp',
  
  <div key='jsx-item-2'></div>,
  'https://indocsmedia.vercel.app/assets/logo.webp',

  <div key='jsx-item-1'></div>,
  'https://indocsmedia.vercel.app/assets/logo.webp',
  
  <div key='jsx-item-2'></div>,
  'https://indocsmedia.vercel.app/assets/logo.webp',
  
  <div key='jsx-item-2'></div>,
  'https://indocsmedia.vercel.app/assets/logo.webp',
  
  <div key='jsx-item-2'></div>,
  'https://indocsmedia.vercel.app/assets/logo.webp',
  
  <div key='jsx-item-2'></div>,
  'https://indocsmedia.vercel.app/assets/logo.webp',
  
  <div key='jsx-item-2'></div>,
  'https://indocsmedia.vercel.app/assets/logo.webp',
  
  <div key='jsx-item-3'></div>,
  'https://indocsmedia.vercel.app/assets/logo.webp',
  
  <div key='jsx-item-2'></div>,
  'https://indocsmedia.vercel.app/assets/logo.webp',
  
  <div key='jsx-item-4'></div>,
  'https://indocsmedia.vercel.app/assets/logo.webp',

  <div key='jsx-item-4'></div>,
  'https://indocsmedia.vercel.app/assets/logo.webp',

  <div key='jsx-item-4'></div>,
  'https://indocsmedia.vercel.app/assets/logo.webp',

  <div key='jsx-item-4'></div>,
  'https://indocsmedia.vercel.app/assets/logo.webp',
  
  // Add more items as needed
];

const itemz = [
  { type: 'text', content: 'Item 1' },
  { type: 'image', content: 'https://indocsmedia.vercel.app/assets/logo.webp' },
  { type: 'text', content: 'Item 2' },
  { type: 'image', content: 'https://indocsmedia.vercel.app/assets/logo.webp' },
  { type: 'text', content: 'Item 3' },
  { type: 'image', content: 'https://indocsmedia.vercel.app/assets/logo.webp' },
  { type: 'text', content: 'Item 4' },
  { type: 'image', content: 'https://indocsmedia.vercel.app/assets/logo.webp' },
  { type: 'text', content: 'Item 5' },
  { type: 'image', content: 'https://indocsmedia.vercel.app/assets/logo.webp' },
  { type: 'text', content: 'Item 6' },
  { type: 'image', content: 'https://indocsmedia.vercel.app/assets/logo.webp' },
  { type: 'text', content: 'Item 7' },
  { type: 'image', content: 'https://indocsmedia.vercel.app/assets/logo.webp' },
  { type: 'text', content: 'Item 8' },
  { type: 'image', content: 'https://indocsmedia.vercel.app/assets/logo.webp' },
  { type: 'text', content: 'Item 9' },
  { type: 'image', content: 'https://indocsmedia.vercel.app/assets/logo.webp' },
  { type: 'text', content: 'Item 10' },
  { type: 'image', content: 'https://indocsmedia.vercel.app/assets/logo.webp' },
];


const projects = [
  {
    id: 1,
    title: 'AI Animated Ad 1',
    video: '/assets/future.mp4',
    type: 'AI Ad'
  },
  {
    id: 2,
    title: 'Motion Graphics',
    video: '/assets/portfolio-ad.mp4',
    type: 'Graphic'
  },
  {
    id: 3,
    title: 'Color Grading',
    video: '/assets/colorGrading.mp4',
    type: 'Production Content'
  }
];


    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="animated-bg min-h-screen bg-black text-[#0c52a2]">
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
        

      <div className="text-center md:mt-0 mt-10">
        <h1 className="text-xl text-gray-100 bg-gray-800 p-4 rounded text-center">
  🚧 We're working on this page. It'll be Completed soon!
</h1>

<h1 className="text-4xl font-bold text-white md:text-6xl pt-10">Welcome to our Portfolio</h1>
<p
  className="text-center text-white max-w-3xl mx-auto text-[10px] mt-[15px] md:text-[15px]"
  style={{
    textShadow: "0 1px 3px rgba(0,0,0,0.7)",
  }}
>
  Discover a curated showcase of our work — blending SnapShort storytelling, visionary design, smart development, and the limitless possibilities of Artificial Intelligence.
</p>

{/* Desktop: CircularGallery */}
<div style={{ height: '600px', position: 'relative' }} className="hidden md:flex">
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
</div>

{/* Mobile: Vertical Marquee text */}
{/* <div className="md:hidden my-10">
  <Marquee direction="up" gradient={false} speed={30} className="h-[200px] flex flex-col gap-8">
    <p className="text-white text-lg font-semibold text-center">Explore Designs</p>
    <p className="text-white text-lg font-semibold text-center">Camera Rolling Action</p>
    <p className="text-white text-lg font-semibold text-center">Stay Tuned</p>
  </Marquee>
</div> */}

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
  texts={['Explore Designs Make Collabration Together We Can Create Much Better ', 'Camera Rolling Action Not For Just Snapshorts For Blend You With Creativity']} 
  velocity={velocity} 
  className="custom-scroll-text"
/>
</div>

<section id="portfolio" className="md:py-24 md:mt-10 py-10 px-6 max-w-7xl mx-auto">
  <h2 className="md:text-5xl text-white font-bold text-3xl mb-10 bg-black p-5 text-center flex justify-center">Our
  <RotatingText
  texts={['AI Content', 'Motion Ads', 'Video Editing']}
  mainClassName="px-2 sm:px-2 md:px-3  text-white overflow-hidden justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>
</h2>

  {/* Grid for full rows */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {projects.slice(0, Math.floor(projects.length / 3) * 3).map((proj) => (
      <PortfolioCard
  title={proj.title}
  type={proj.type}
  video={proj.video}
/>

    ))}
  </div>

  {/* Wrap remaining items (1 or 2) in a centered flex row */}
  <div className="flex justify-center gap-10 mt-10 flex-wrap">
    {projects.slice(Math.floor(projects.length / 3) * 3).map((proj) => (
      <PortfolioCard
        key={proj.id}
        title={proj.title}
        image={proj.image}
        type={proj.type}
      />
    ))}
  </div>
</section>

  
{/* // note: you'll need to make sure the parent container of this component is sized properly */}

<div className="bg-black pt-10">
  <h2 className="md:text-5xl text-white font-bold text-3xl text-center mb-8">
    Quick Gallery
  </h2>
  <GridMotion items={items} />
  <QuickGallery items={itemz} />
</div>


<div className="relative w-full bg-black overflow-hidden min-h-[350px]">
  <LightRays
    raysOrigin="top-center"
    raysColor="#00ffff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={false}
    mouseInfluence={0}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />

  {/* Text content inside the same container */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
    <h2 className="md:text-5xl text-3xl text-white font-bold mb-5">
      What’s Coming
    </h2>
    <p className="text-gray-300 max-w-2xl">
      We're working on live client projects and video shoots. This space will soon be filled with premium visuals, edited films, and interactive websites.
    </p>
  </div>
</div>


        
      </div>
    </div>
  );
}
