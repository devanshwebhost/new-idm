import ServiceDetailTemplate from "@/component/ServiceDetailTemplate";

export default function EditingPage() {
  return (
    <ServiceDetailTemplate 
      title="Video Direction & Editing"
      subtitle="Turning raw footage into cinematic stories. We fix the flow so you hold the audience."
      heroVideo="/assets/editing-compressed.mp4" // Make sure this path exists
      
      whatWeDo="Editing is not just cutting clips; it's rewriting the story visually. Our editors understand pacing, rhythm, and retention graphs. We take your raw files and turn them into polished assets ready for distribution."
      
      benefits={[
        "Story-driven Narrative Editing",
        "Advanced Sound Design & SFX",
        "Motion Graphics & Text Overlays",
        "Color Grading for Mood"
      ]}
      
      processSteps={[
        { title: "Data Ingest", desc: "We organize your footage and select the best takes." },
        { title: "The Narrative Cut", desc: "Structuring the story for maximum emotional impact." },
        { title: "Final Polish", desc: "Adding the 'Indocs' touch with sound and color." }
      ]}
    />
  );
}