'use client';
import React from 'react';
import ServiceCard from '/component/ServiceCard';

const services = [
  {
    title: 'High-Impact Ad Campaigns',
    description: 'Design visually striking, ROI-driven ad campaigns tailored for every digital platform.',
    videoSrc: '/assets/ad-video.mp4',
    poster: '/assets/business.webp',
  },
  {
    title: 'AI-Powered Social Media Management',
    description: 'Automate content creation, smart scheduling, and performance tracking — all driven by AI.',
    videoSrc: '/assets/ai-video.mp4',
    poster: '/assets/aio.webp',
  },
  {
    title: 'Cinematic Video Production',
    description: 'Transform your ideas into compelling stories with pro-grade editing, motion graphics, and animation.',
    videoSrc: '/assets/header-2.mp4',
    poster: '/assets/camera.webp',
  },
  {
    title: 'Strategic Content Planning',
    description: 'Craft custom content strategies that engage audiences and convert clicks into results.',
    videoSrc: '/assets/lightbg-compressed.mp4',
    poster: '/assets/cubes.webp',
  },
];



export default function CoreOfferingsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Core Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, idx) => (
        <ServiceCard
          key={idx}
          title={service.title}
          description={service.description}
          videoSrc={service.videoSrc}
        />
      ))}
    </div>
  </div>
</section>

  );
}
