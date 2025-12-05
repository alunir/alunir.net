import VideoBackground from "@/components/VideoBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Strategy from "@/components/Strategy";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <VideoBackground />
      <Navigation />
      <Hero />
      <Overview />
      <Strategy />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
