"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Yahan apna PROPER data daalein (Insta Series & YT Videos)
const projects = [
  {
    id: 1,
    title: "The Second Chance - Love Story",
    category: "Instagram Series",
    platform: "instagram", // 'instagram' or 'youtube'
    image: "https://res.cloudinary.com/dsi8rmtfp/image/upload/v1770791659/second-chance-poster_xhiafi.webp", // Thumbnail image path
    link: "https://www.instagram.com/reel/DUlaFC3j-3z/?igsh=MTRubDF1ZGpoajZreg==", // Aapka actual Insta link
    views: "" // Optional: Flex karne ke liye
  },
//   {
//     id: 2,
//     title: "Podcast with Top Creator",
//     category: "YouTube Production",
//     platform: "youtube",
//     image: "/assets/yt-thumb-1.jpg", 
//     link: "https://youtu.be/xyz...", 
//     views: "500K Views"
//   },
//   {
//     id: 3,
//     title: "Fashion Brand Ad Campaign",
//     category: "Commercial Ad",
//     platform: "instagram",
//     image: "/assets/fashion-thumb.jpg", 
//     link: "https://www.instagram.com/p/xyz...", 
//     views: "Brand Collab"
//   },
  // Add more as needed...
];

export default function FeaturedWork() {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-[#902ba9] font-bold tracking-widest uppercase mb-2 block">
              Recent Drops
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              FEATURED <span className="text-gray-500">WORK</span>
            </h2>
          </div>
          
          <Link href="/portfolio" className="group flex items-center gap-2 border-b border-white/30 pb-1 hover:text-[#902ba9] hover:border-[#902ba9] transition-all">
             View All Projects <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
          </Link>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <motion.a 
              key={item.id}
              href={item.link}
              target="_blank" // New tab mein khulega
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative block cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative h-[450px] overflow-hidden rounded-[2rem] border border-white/10 bg-gray-900">
                
                {/* Background Image */}
                {/* Note: Use 'img' tag if not using Next.js Image optimization setup yet, otherwise use <Image /> */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60"
                />

                {/* Platform Badge (Top Right) */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full text-white z-10">
                   {item.platform === 'instagram' ? <Instagram size={20} /> : <Youtube size={20} />}
                </div>

                {/* Hover Play Icon (Center) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                   <div className="w-16 h-16 bg-[#902ba9] rounded-full flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-300">
                      <Play fill="white" className="ml-1" />
                   </div>
                </div>

                {/* Content Overlay (Bottom) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
                  <span className="text-[#902ba9] text-xs font-bold tracking-widest uppercase mb-2">
                    {item.category}
                  </span>
                  <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-bold leading-tight max-w-[80%]">
                      {item.title}
                    </h3>
                    <span className="text-gray-400 text-xs font-mono border border-white/20 px-2 py-1 rounded">
                      {item.views}
                    </span>
                  </div>
                </div>

              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}