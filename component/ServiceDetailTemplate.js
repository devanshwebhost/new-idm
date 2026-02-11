"use client";

import { motion } from "framer-motion";
import Menu from '@/component/Menu'; // Adjust path as per your folder
import Link from "next/link";
import { CheckCircle2, ArrowRight, Play } from "lucide-react";

export default function ServiceDetailTemplate({ 
  title, 
  subtitle, 
  heroVideo, 
  whatWeDo, 
  processSteps, 
  benefits 
}) {
  return (
    <div className="bg-white text-black min-h-screen selection:bg-[#902ba9] selection:text-white">
      <Menu />

      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-end pb-20 px-6 bg-black">
        <div className="absolute inset-0 opacity-60">
           <video src={heroVideo} autoPlay muted loop playsInline className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-5xl mx-auto w-full"
        >
          <span className="text-[#902ba9] font-bold tracking-widest uppercase mb-2 block">Service Focus</span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">{title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light">{subtitle}</p>
        </motion.div>
      </section>

      {/* 2. WHAT WE DO (Text Heavy - Good for SEO & Low Content) */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            We don't just shoot. <br/><span className="text-[#902ba9]">We Engineer Attention.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {whatWeDo}
          </p>
          
          <div className="space-y-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-[#902ba9]" size={20} />
                <span className="font-medium text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Placeholder for Showreel if available, else a stylized card */}
        <div className="relative h-[400px] bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl group">
             {/* Agar video hai to video dikhao, nahi to static image */}
             <video src={heroVideo} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" muted loop autoPlay playsInline />
             <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-all">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <Play fill="white" className="text-white ml-1" />
                </div>
             </div>
        </div>
      </section>

      {/* 3. OUR PROCESS (Fills space nicely) */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-3xl bg-white/5 hover:bg-white/10 transition-colors relative overflow-hidden">
                <span className="text-6xl font-black text-[#902ba9] opacity-20 absolute -top-2 -right-2">{`0${i+1}`}</span>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 px-6 text-center">
         <h2 className="text-4xl font-black mb-6">Building quietly since 2023. <br/>Now ready for you.</h2>
         <Link href="/contact" className="inline-flex items-center gap-3 bg-[#902ba9] text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all hover:scale-105">
            Start Your Project <ArrowRight size={20} />
         </Link>
      </section>
    </div>
  );
}