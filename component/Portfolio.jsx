// app/portfolio/page.jsx

'use client';

import React from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'AI Animated Ad 1',
    image: '/assets/portfolio/ai-ad-1.gif',
    type: 'AI Ad'
  },
  {
    id: 2,
    title: 'Graphic Design Poster',
    image: '/assets/portfolio/graphic-1.png',
    type: 'Graphic'
  },
  {
    id: 3,
    title: 'Future Webpage Showcase',
    image: '/assets/portfolio/webpage-1.png',
    type: 'Website (Coming Soon)'
  },
  {
    id: 4,
    title: 'Upcoming Shoot Placeholder',
    image: '/assets/portfolio/shoot-placeholder.jpg',
    type: 'Shoot (Upcoming)'
  }
];

export default function PortfolioPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold animate-fade-in-down">
          We Create. You Shine.
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          AI graphic ads • Video shoots • Webpage previews
        </p>
        <a
          href="#portfolio"
          className="mt-8 px-6 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition"
        >
          See Our Best Work
        </a>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Showcase</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj) => (
            <div key={proj.id} className="group bg-[#111] rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-full h-60">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{proj.title}</h3>
                <p className="text-sm text-gray-400">{proj.type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Future Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">What’s Coming</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We're working on live client projects and video shoots. This space will soon be filled with premium visuals, edited films, and interactive websites.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 text-center bg-[#0e0e0e]">
        <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>
        <p className="text-gray-300 mb-8">Reach out to us to start your next big thing.</p>
        <a
          href="mailto:fusionmediaelite@gmail.com"
          className="inline-block px-8 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}