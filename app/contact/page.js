"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from '@/component/Menu';

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "", category: "Ads Shoot" });
  const [loading, setLoading] = useState(false);

  const categories = ["Ads Shoot", "YouTube Content", "Editing & Post", "Other"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Message sent successfully!");
        setForm({ name: "", email: "", message: "", category: "Ads Shoot" });
      } else {
        toast.error(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-[#902ba9] selection:text-white">
      <Menu />
      <ToastContainer position="bottom-right" theme="dark" />

      {/* ===== Header Section ===== */}
      <section className="pt-32 pb-12 px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#902ba9] font-bold tracking-[0.3em] text-sm uppercase mb-4 block"
        >
          Let's Collaborate
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black tracking-tighter leading-tight"
        >
          GET IN <span className="text-[#902ba9]">TOUCH</span>
        </motion.h1>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24 flex flex-col lg:flex-row gap-16">
        
        {/* ===== LEFT SIDE: Cinematic Info ===== */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-2/5 space-y-12"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Have a vision? <br />We have the lens.</h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              Whether it's a viral YouTube concept or a high-end commercial ad, our production team is ready to bring your story to life.
            </p>
          </div>

          <div className="space-y-8">
            <motion.div whileHover={{ x: 10 }} className="flex items-start gap-6 group">
              <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-[#902ba9] group-hover:text-white transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email us</p>
                <a href="mailto:indocsmedia@gmail.com" className="text-xl font-medium hover:text-[#902ba9] transition-colors">
                  indocsmedia@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div whileHover={{ x: 10 }} className="flex items-start gap-6 group">
              <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-[#902ba9] group-hover:text-white transition-all duration-300">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Call us</p>
                <a href="https://wa.me/+919910892766" className="text-xl font-medium hover:text-[#902ba9] transition-colors">
                  +91 9910892766
                </a>
              </div>
            </motion.div>

            <motion.div whileHover={{ x: 10 }} className="flex items-start gap-6 group">
              <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-[#902ba9] group-hover:text-white transition-all duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Office</p>
                <p className="text-xl font-medium">Delhi, India</p>
              </div>
            </motion.div>
          </div>

          {/* Social Proof / Tagline */}
          <div className="pt-10 border-t border-gray-100">
            {/* <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Powered By</p> */}
            {/* <h3 className="text-2xl font-black opacity-20 select-none">TEENERA PVT. LTD.</h3> */}
          </div>
        </motion.div>

        {/* ===== RIGHT SIDE: Premium Form ===== */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full lg:w-3/5"
        >
          <form 
            onSubmit={handleSubmit}
            className="bg-white border border-gray-100 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 space-y-8"
          >
            {/* Category Selector */}
            <div className="space-y-4">
              <label className="text-sm font-bold uppercase tracking-widest text-gray-400">What are we building?</label>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setForm({ ...form, category: cat })}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                      form.category === cat 
                        ? "bg-[#902ba9] text-white border-[#902ba9] shadow-lg shadow-purple-200" 
                        : "bg-white text-gray-500 border-gray-200 hover:border-[#902ba9] hover:text-[#902ba9]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Devansh Rajput"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-[#902ba9] transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-[#902ba9] transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Project Details</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project, vision, and goals..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-[#902ba9] transition-all outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-5 rounded-2xl text-white font-black text-lg tracking-widest uppercase transition-all flex items-center justify-center gap-3
                ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#902ba9] hover:bg-black shadow-xl shadow-purple-100 hover:shadow-none"}`}
            >
              {loading ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Send Message <Send size={20} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      <footer className="py-12 border-t border-gray-50 text-center">
        <p className="text-gray-400 text-[10px] font-bold tracking-[0.4em] uppercase">
          Production Excellence • Indocs Media
        </p>
      </footer>
    </main>
  );
}