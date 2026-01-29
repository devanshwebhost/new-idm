import { Geist, Geist_Mono, Raleway } from "next/font/google";
// import { GoogleAnalytics } from "@next/third-parties/google"; // Import the Google Analytics component
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FooterWrapper from "@/component/FooterWrapper";
import JsonLd from '@/component/JsonLd';
import Script from "next/script";

// import ChatWidget from "@/component/Agent";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

// Metadata for SEO (automatically used by Next.js)
export const metadata = {
  title: "Indocs Media | Digital Solutions for Modern Brands",
  description:
    "Indocs Media is a creative digital agency offering UI/UX design, Webflow development, video editing, motion ads, and branding for businesses and content creators. We blend design, tech, and strategy to craft impactful digital experiences.",
  icons: {
    icon: "/assets/favicon.svg",
  },
  verification: {
    google: 'bmKNUPDQQDedvtwaI9MwDsLVBwHQFcS9Q6gFmy26lTY',
  },
  openGraph: {
    title: "Indocs Media | Digital Solutions for Modern Brands",
    description:
      "Indocs Media is a creative digital agency offering UI/UX design, Webflow development, video editing, motion ads, and branding.",
    url: "https://indocsmedia.vercel.app",
    siteName: "Indocs Media",
    images: [
      {
        url: "https://indocsmedia.vercel.app/assets/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Indocs Media Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indocs Media | Digital Solutions for Modern Brands",
    description:
      "Indocs Media is a creative digital agency offering UI/UX design, Webflow development, video editing, motion ads, and branding.",
    images: ["https://indocsmedia.vercel.app/assets/logo.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable}`}
    >
      <body>
        <JsonLd />
        {children}
        
        <FooterWrapper/>
      </body>

      <Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-ZMWNCN0RBE`}
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-ZMWNCN0RBE');
  `}
</Script>

      
      {/* This component correctly loads the gtag script and handles page views */}
      {/* <GoogleAnalytics gaId="" /> */}
    </html>
  );
}