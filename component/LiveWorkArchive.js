"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Instagram, Youtube, ArrowDown, Sparkles, Flame } from "lucide-react";

// DATA: "tags" array ka use karein logic control karne ke liye
// tags: ['new'] -> New Filter mein aayega & Top 1 slot lega
// tags: ['hit'] -> Hit Filter mein aayega & Top 2/3 slots lega
const allProjects = [
  {
    id: 1,
    title: "The Second Chance - Mini Series",
    category: "Instagram Series",
    platform: "instagram",
    thumbnail: "https://res.cloudinary.com/dsi8rmtfp/image/upload/v1770791659/second-chance-poster_xhiafi.webp",
    link: "https://www.instagram.com/reel/DUlaFC3j-3z/?igsh=MTRubDF1ZGpoajZreg==",
    year: "2026",
    tags: ["new","hit"] // Ye sabse pehle dikhega "All" tab mein
  },
//   {
//     id: 2,
//     title: "Tech Podcast Viral Clip",
//     category: "YouTube Shorts",
//     platform: "youtube",
//     thumbnail: "/assets/yt-thumb-1.jpg", // Replace with real image
//     link: "#",
//     year: "2025",
//     tags: ["hit"] // Ye 2nd number par aayega
//   },
//   {
//     id: 3,
//     title: "Fashion Brand Campaign",
//     category: "Commercial Ad",
//     platform: "instagram",
//     thumbnail: "/assets/fashion-thumb.jpg", // Replace with real image
//     link: "#",
//     year: "2024",
//     tags: ["hit"] // Ye 3rd number par aayega
//   },
//   {
//     id: 4,
//     title: "Travel Vlog Edit",
//     category: "YouTube Vlog",
//     platform: "youtube",
//     thumbnail: "/assets/vlog-thumb.jpg", // Replace with real image
//     link: "#",
//     year: "2024",
//     tags: ["hit"]
//   },
//   {
//     id: 5,
//     title: "Fitness Promo",
//     category: "DVC Ad",
//     platform: "instagram",
//     thumbnail: "/assets/gym-thumb.jpg", // Replace with real image
//     link: "#",
//     year: "2023",
//     tags: ["normal"]
//   },
];

export default function LiveWorkArchive() {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'new', 'hit'
  const [visibleCount, setVisibleCount] = useState(3); // Start with 3 items

  // === SMART SORTING LOGIC ===
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'new') {
      return allProjects.filter(p => p.tags.includes('new'));
    }
    if (activeFilter === 'hit') {
      return allProjects.filter(p => p.tags.includes('hit'));
    }

    // Default 'ALL' Logic: 1 New + 2 Hits first, then rest
    const newItems = allProjects.filter(p => p.tags.includes('new'));
    const hitItems = allProjects.filter(p => p.tags.includes('hit'));
    const otherItems = allProjects.filter(p => !p.tags.includes('new') && !p.tags.includes('hit'));

    // Combine: Top 1 New + Top 2 Hits + Rest of New + Rest of Hits + Others
    // Set ka use kiya taaki duplicate na ho agar koi item 'new' aur 'hit' dono ho
    const combined = new Set([
        ...newItems.slice(0, 1), // Top 1 New
        ...hitItems.slice(0, 2), // Top 2 Hits
        ...newItems.slice(1),    // Rest New
        ...hitItems.slice(2),    // Rest Hits
        ...otherItems
    ]);

    return Array.from(combined);
  }, [activeFilter]);

  const showMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  // Reset count when filter changes
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setVisibleCount(3);
  };

  return (
    <section className="py-24 px-6 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              Live <span className="text-[#902ba9]">Archive</span>
            </h2>
            <p className="text-gray-400 max-w-xl font-light text-sm md:text-base">
              Work that is currently live. <br className="hidden md:block"/>
              Click to watch directly on platforms.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 bg-white/5 p-1 rounded-full border border-white/10">
             {/* ALL TAB */}
            <button 
              onClick={() => handleFilterChange('all')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeFilter === 'all' ? 'bg-[#902ba9] text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              All Drops
            </button>
            
            {/* NEW TAB */}
            <button 
              onClick={() => handleFilterChange('new')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeFilter === 'new' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
            >
              <Sparkles size={14} className={activeFilter === 'new' ? "text-[#902ba9]" : ""} /> New
            </button>

            {/* HITS TAB */}
            <button 
              onClick={() => handleFilterChange('hit')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeFilter === 'hit' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Flame size={14} /> Trending
            </button>
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.slice(0, visibleCount).map((project, index) => (
              <motion.a
                layout
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative block cursor-pointer"
              >
                {/* Banner Card */}
                <div className="relative h-[350px] w-full overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-2xl">
                  
                  {/* Thumbnail */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                  {/* Badges (New / Hit) */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {project.tags.includes('new') && (
                        <span className="bg-[#902ba9] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                            New Drop
                        </span>
                    )}
                    {project.tags.includes('hit') && (
                        <span className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1">
                            <Flame size={10} fill="currentColor" /> Top Rated
                        </span>
                    )}
                  </div>

                  {/* Platform Icon */}
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full text-white">
                    {project.platform === 'instagram' ? <Instagram size={18} /> : <Youtube size={18} />}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <span className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-black leading-tight text-white group-hover:text-[#902ba9] transition-colors mb-4">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                        Watch Now <ExternalLink size={14} />
                    </div>
                  </div>

                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button (Only if more items exist) */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={showMore}
              className="flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-[#902ba9] hover:border-[#902ba9] transition-all duration-300 group"
            >
              <span className="text-sm font-bold uppercase tracking-widest">Load More Work</span>
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}