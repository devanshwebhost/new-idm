import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import Footer from "@/component/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

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

// Metadata for SEO
export const metadata = {
  title: "Indocs Media | Digital Solutions for Modern Brands",
  description:
    "Indocs Media offers cutting-edge web development, UI/UX design, digital marketing, video editing, and more to help businesses grow online.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable}`}
    >
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.svg" /> {/* Or /logo.png if you're using PNG */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Raleway:ital,wght@0,100..900;1,100..900&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "var(--font-raleway)" }}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
