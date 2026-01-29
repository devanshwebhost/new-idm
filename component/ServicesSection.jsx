'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import Link from 'next/link';

const services = [
  {
    id: 'ads-shoots', // Unique ID
    title: 'Ads Shoots & Production',
    description: 'Creating high-impact commercial advertisements with professional production quality.',
    videoSrc: 'https://res.cloudinary.com/dh90u2k3l/video/upload/v1769687484/C2684_web_ov7gka.mp4',
  },
  {
    id: 'editing', // Unique ID
    title: 'Video Direction & Editing',
    description: 'Expert on-set direction combined with seamless editing to ensure your creative vision.',
    videoSrc: 'https://res.cloudinary.com/dh90u2k3l/video/upload/v1769687605/IMG_0231_web_khmxs9.mp4',
  },
  {
    id: 'production', // Unique ID
    title: 'Pre & Post Production',
    description: 'Handling the entire lifecycle of your project, from initial scripting to seamless post-production.',
    videoSrc: 'https://res.cloudinary.com/dh90u2k3l/video/upload/v1769686307/Second_Chance_y7yhxe.mp4',
  },
  {
    id: 'yt-shoots', // Unique ID
    title: 'Yt video Shoots',
    description: 'YouTube creators and podcasts, optimized for maximum audience engagement.',
    videoSrc: 'https://res.cloudinary.com/dh90u2k3l/video/upload/v1769687996/IMG_0187_web_ypmawl.mp4',
  },
];

export default function CoreOfferingsSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase">
            OUR CORE <span className="text-[#902ba9]">SERVICES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
  {services.map((service, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: idx * 0.1 }}
      viewport={{ once: true }}
      className="h-full" // Added: Wrapper takes full height of grid row
    >
      <Link href={`/services#${service.id}`} className="block h-full">
        <ServiceCard
          title={service.title}
          description={service.description}
          videoSrc={service.videoSrc}
        />
      </Link>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}