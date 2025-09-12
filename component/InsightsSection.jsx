import { useRef } from "react";

export default function InsightsSection() {
  const carouselRef = useRef(null);

  const insights = [
    {
      title: "📊 3 Mistakes in Video Ads",
      points: [
        "Using too much text",
        "Not adding subtitles",
        "Forgetting CTA",
      ],
    },
    {
      title: "⏱ Best Ad Lengths",
      points: [
        "Instagram Reels: 15–30 sec",
        "YouTube Ads: 6–15 sec",
        "LinkedIn: 30–45 sec",
      ],
    },
    {
      title: "🎯 Boost Engagement",
      points: [
        "Hook in first 3 sec",
        "Use emotion + story",
        "End with clear CTA",
      ],
    },
    {
      title: "🪝 Use Hooks in First 3 Sec",
      points: [
        "Attention span 3 sec",
        "Start with question or stat",
        "First frame shows main idea",
      ],
    },
    {
      title: "🔊 Subtitles Boost Views",
      points: [
        "80% watch muted",
        "Add short readable text",
        "High contrast colors",
      ],
    },
    {
      title: "📢 Call-to-Action Matters",
      points: [
        "End video with CTA",
        "Tell viewers what to do next",
        "Example: 'Book Free Audit'",
      ],
    },
    {
      title: "📱 Vertical Videos Perform Best",
      points: [
        "Mobile prefers vertical",
        "Use 9:16 ratio",
        "Crop carefully to keep focus",
      ],
    },
  ];

  const moveLeft = () => {
    carouselRef.current.scrollBy({ left: -280, behavior: "smooth" });
  };

  const moveRight = () => {
    carouselRef.current.scrollBy({ left: 280, behavior: "smooth" });
  };

  return (
    <section style={{ padding: "2rem", backgroundColor: "#000", color: "white" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}>
        Marketing Insights – In 30 Seconds
      </h2>

      <div
        ref={carouselRef}
        style={{
          display: "flex",
          overflowX: "hidden",
          gap: "1rem",
          paddingBottom: "1rem",
          scrollBehavior: "smooth",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
        className="hide-scrollbar"
      >
        {insights.map((item, idx) => (
          <div
            key={idx}
            style={{
              minWidth: "250px",
              backgroundColor: "#111",
              color: "white",
              padding: "1rem",
              borderRadius: "1rem",
              flexShrink: 0,
              boxShadow: "0 4px 6px rgba(0,0,0,0.5)",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{item.title}</h3>
            <ul style={{ listStyle: "disc", paddingLeft: "1.2rem", lineHeight: "1.5" }}>
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <button
          onClick={moveLeft}
          style={{
            padding: "0.5rem 1rem",
            marginRight: "0.5rem",
            backgroundColor: "#222",
            color: "white",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
        >
          ⬅
        </button>
        <button
          onClick={moveRight}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#222",
            color: "white",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
        >
          ➡
        </button>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </section>
  );
}
