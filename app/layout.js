import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FooterWrapper from "@/component/FooterWrapper";

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
  openGraph: {
    title: "Indocs Media | Digital Solutions for Modern Brands",
    description:
      "Indocs Media is a creative digital agency offering UI/UX design, Webflow development, video editing, motion ads, and branding.",
    url: "https://new-idm.vercel.app/",
    siteName: "Indocs Media",
    images: [
      {
        url: "https://new-idm.vercel.app/assets/logo.jpg",
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
    images: ["https://new-idm.vercel.app/assets/logo.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable}`}
    >
      <body
        className="antialiased"
        style={{ fontFamily: "var(--font-raleway)" }}
      >
        {children}
        <FooterWrapper/>
      </body>
    </html>
  );
}
