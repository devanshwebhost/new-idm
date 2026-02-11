import ServiceDetailTemplate from "@/component/ServiceDetailTemplate";

export default function PrePostPage() {
  return (
    <ServiceDetailTemplate 
      title="Pre & Post Production"
      subtitle="From the rough idea in your notes to the final export on the screen. We manage the chaos."
      heroVideo="https://res.cloudinary.com/dsi8rmtfp/video/upload/v1770794894/header-2-compressed_bipsfv.mp4" // Ye wahi video hai jo aapke data mein tha
      
      whatWeDo="Production is 80% planning and 20% shooting. We handle the boring but critical stuff—scripts, locations, permits, and schedules—so that the creative process flows smoothly. And once the shoot is done, our post-production team turns raw footage into a polished masterpiece."
      
      benefits={[
        "Scripting & Storyboarding",
        "Casting & Location Scouting",
        "Logistics & Crew Management",
        "High-End Color Grading & VFX"
      ]}
      
      processSteps={[
        { 
          title: "The Blueprint (Pre)", 
          desc: "We lock the script, budget, and logistics before the camera rolls. No last-minute panic." 
        },
        { 
          title: "On-Floor Execution", 
          desc: "Managing the set, crew, and talent to ensure every shot is captured perfectly." 
        },
        { 
          title: "The Alchemy (Post)", 
          desc: "Editing, Sound Design, and Color Grading. This is where the video gets its soul." 
        }
      ]}
    />
  );
}