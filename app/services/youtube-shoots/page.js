import ServiceDetailTemplate from "@/component/ServiceDetailTemplate";

export default function YTShootsPage() {
  return (
    <ServiceDetailTemplate 
      title="YouTube Video Shoots"
      subtitle="High-retention setups for creators & podcasters. Chill vibes, professional output."
      heroVideo="https://res.cloudinary.com/dh90u2k3l/video/upload/v1769689870/IMG_0183_web_rtsrrj.mp4"
      
      whatWeDo="Creating content is hard; shooting it shouldn't be. We provide a relaxed environment where you can be yourself, while we handle lights, camera, and audio. Perfect for interviews, podcasts, and lifestyle content."
      
      benefits={[
        "Multi-Cam Setup (4K)",
        "Professional Audio Recording",
        "Lighting designed for Skin Tones",
        "Prompt & Script Assistance"
      ]}
      
      processSteps={[
        { title: "Setup & Sound Check", desc: "We arrive early to ensure technical perfection." },
        { title: "Action!", desc: "A stress-free shoot where we guide you through the takes." },
        { title: "Rapid Delivery", desc: "Get your footage quickly to keep your upload schedule on track." }
      ]}
    />
  );
}