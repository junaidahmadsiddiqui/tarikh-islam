import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Sections } from "@/components/site/Sections";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tarikh-ul-Islam — Explore the Legacy of Islam" },
      {
        name: "description",
        content:
          "An interactive, source-referenced platform for learning Islamic history: Seerah, Khulafa Rashidin, empires, heroes, sciences, and more.",
      },
      { property: "og:title", content: "Tarikh-ul-Islam — Explore the Legacy of Islam" },
      { property: "og:description", content: "An interactive, source-referenced platform for learning Islamic history: Seerah, Khulafa Rashidin, empires, heroes, sciences, and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}
