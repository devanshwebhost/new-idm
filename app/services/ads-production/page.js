import ServiceDetailTemplate from "@/component/ServiceDetailTemplate";

export default function AdsPage() {
  return (
    <ServiceDetailTemplate 
      title="Ads Shoots & Production"
      subtitle="Scroll-stopping commercials designed for high retention and maximum conversion."
      heroVideo="https://res.cloudinary.com/dh90u2k3l/video/upload/v1769688557/IMG_0233_web_z8nsss.mp4"
      
      whatWeDo="In a world where people skip ads in 3 seconds, we create films they actually want to watch. Whether it's a high-energy DVC or a product reveal, we mix cinematography with psychology to keep eyes glued to the screen."
      
      benefits={[
        "Concept & Scripting included",
        "High-end Camera & Lighting Gear",
        "Vertical (Reels) & Horizontal Cuts",
        "Optimized for Meta & YouTube Ads"
      ]}
      
      processSteps={[
        { title: "Concept Crack", desc: "We don't just shoot; we ideate. We find the hook that will stop the scroll." },
        { title: "Production Day", desc: "Fast, efficient, and high-energy shoots. We respect the timeline." },
        { title: "The Magic Edit", desc: "VFX, Sound Design, and Color Grading that makes the product pop." }
      ]}
    />
  );
}