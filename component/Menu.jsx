'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuLinks = [
  { name: 'Home', href: '/' },
  { name: 'Our Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' }
];

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logic: Agar scroll ho chuka hai aur menu band hai + mouse upar nahi hai, toh hide karo
  const isHidden = isScrolled && !menuOpen && !isHovered;

  return (
    <div className="fixed top-8 left-0 z-50">
      {/* Floating Peeking Button */}
      <motion.button
        layout
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          setMenuOpen(!menuOpen);
          if (menuOpen) setIsHovered(false); // Close karte hi hover state reset kar do
        }}
        animate={{
          x: isHidden ? -50 : 24, // -50px bahar, 24px normal position
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={`flex items-center gap-3 shadow-2xl transition-all duration-300 pointer-events-auto ${
          isScrolled 
            ? 'bg-[#902ba9] p-3 rounded-r-2xl rounded-l-none' // Tab style
            : 'bg-black/20 backdrop-blur-md p-2 pr-5 rounded-full border border-white/10'
        }`}
      >
        <AnimatePresence mode="wait">
          {isScrolled && !menuOpen ? (
            <motion.div
              key="arrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-white"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" 
                viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" strokeWidth="3" 
                strokeLinecap="round" strokeLinejoin="round"
                className={`transition-transform duration-500 ${isHovered ? 'rotate-180' : 'rotate-0'}`}
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3"
            >
              <img 
                src="/assets/logo.webp" 
                alt="Logo" 
                className="w-10 h-10 rounded-full border border-white/20 object-cover" 
              />
              <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
                {menuOpen ? 'CLOSE' : 'MENU'}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Dropdown Menu - Position Fix */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 24 }} // Jab khule toh hamesha visible rahe
            exit={{ opacity: 0, x: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute mt-4 left-0 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl w-[240px]"
          >
            <nav className="flex flex-col gap-5">
              {menuLinks
                .filter((item) => item.href !== pathname)
                .map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href} 
                    onClick={() => {
                      setMenuOpen(false);
                      setIsHovered(false);
                    }}
                    className="text-gray-400 hover:text-white transition-all text-lg font-light tracking-wide hover:translate-x-2"
                  >
                    {item.name}
                  </Link>
                ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}