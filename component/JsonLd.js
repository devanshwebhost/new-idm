// app/components/JsonLd.js
export default function JsonLd() {
  const jsonData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Indocs Media",
    "url": "https://indocsmedia.onrender.com",
    "logo": "https://indocsmedia.onrender.com/assets/images/logo-1.jfif",
    "description": "Indocs Media is a creative agency specializing in 3D animation, digital marketing, web development, and more.",
    "sameAs": [
      "https://www.instagram.com/indocsmedia",
      "https://www.linkedin.com/company/indocsmedia"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "Customer Support",
      "availableLanguage": ["English", "Hindi"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }}
    />
  );
}