// components/FooterWrapper.js
"use client";

import dynamic from "next/dynamic";

// Dynamically import Footer for client-side only
const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
});

export default function FooterWrapper() {
  return <Footer />;
}
