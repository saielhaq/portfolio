export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saad Sai El Haq",
    jobTitle: "Full Stack Developer",
    url: "https://saielhaqs.vercel.app",
    sameAs: [
      "https://linkedin.com/in/saielhaqs", // Add your actual LinkedIn URL
      "https://github.com/saielhaq", // Add your actual GitHub URL
    ],
    knowsAbout: [
      "Angular",
      "Spring Boot",
      "Web Development",
      "Full Stack Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
