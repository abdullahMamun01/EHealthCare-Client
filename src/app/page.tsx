import AboutSection from "@/components/AboutSection";
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
export default function Home() {
  return (
    <div className="min-h-screen bg-white max-w-7xl mx-auto">
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <HowItWorks/>
    </div>
  );
}
