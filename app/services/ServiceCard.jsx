"use client";
import { motion } from "framer-motion";

export default function ServiceCard({ title, description, icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-2xl shadow-lg p-6 w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300"
    >
      <img src={icon} alt={title} className="w-14 h-14" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </motion.div>
  );
}
