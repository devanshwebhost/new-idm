"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
// import { motion } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-white text-gray-800 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Logo & Menu */}
      <div className=" top-6 left-4 z-30 fixed">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl shadow-lg hover:scale-105 transition bg-black"
        >
          <img
            src="/assets/logo.jpg"
            alt="Logo"
            className="w-[50px] h-[50px] rounded-md"
          />
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="absolute mt-3 bg-black rounded-xl p-4 shadow-xl space-y-2 w-[160px] "
            >
              <Link href="/" className="block text-sm text-white hover:text-[#6b22a4] transition">
                Home
              </Link>
              <Link href="/services" className="block text-sm text-white hover:text-[#6b22a4] ">
                Our Services
              </Link>
              <Link href="/about" className="block text-sm text-white hover:text-[#6b22a4] transition ">
                About Us
              </Link>
              <Link href="/contact" className="block text-sm text-[#6b22a4] hover:text-[#6b22a4] transition font-semibold">
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
        
        {/* LEFT SIDE: INFO */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-4xl font-bold">Let’s Get In Touch</h2>
          <p className="text-gray-600">
            Whether you have a question or a project in mind, we’d love to hear from you!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
  <Mail className="text-[#6b22a4]" />
  <a href="mailto:indocsmedia@gmail.com" className="hover:underline">
    indocsmedia@gmail.com
  </a>
</div>
<div className="flex items-center gap-4">
  <Phone className="text-[#6b22a4]" />
  <a href="tel:+919910892766" className="hover:underline">
    +91 9910892766
  </a>
</div>

            <div className="flex items-center gap-4">
              <MapPin className="text-[#6b22a4]" />
              <span>Delhi, India</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: FORM */}
        <motion.form 
          initial={{ x: 50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 space-y-6 bg-gray-50 p-8 rounded-2xl shadow-lg"
        >
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button
            type="submit"
            className="bg-[#6b22a4] text-white px-6 py-3 rounded-full hover:bg-[#902ba9] transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
