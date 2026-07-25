import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Properties } from "@/components/site/Properties";
import { Showcase } from "@/components/site/Showcase";
import { Advisors } from "@/components/site/Agents";
import { Lifestyle } from "@/components/site/Lifestyle";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-bone text-obsidian">
      <Nav />
      <Hero />
      <Marquee />
      <Properties />
      <Showcase />
      <Lifestyle />
      <Advisors />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
