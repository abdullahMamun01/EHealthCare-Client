import AboutSection from "@/components/Home/AboutSection";
import BestDoctors from "@/components/Home/BestDoctors";
import Faqs from "@/components/Home/Faqs";

import HeroSection from "@/components/Home/HeroSection";
import HowItWorks from "@/components/Home/HowItWorks";
import Specialities from "@/components/Home/Specialities";
import Navbar from "@/components/shared/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen bg-white max-w-7xl mx-auto">
      <Navbar />
      <HeroSection />
      <Specialities/>
      <AboutSection/>
      <BestDoctors/>
      <HowItWorks/>
      <Faqs/>
    </div>
  );
}
