import AboutSection from "@/components/Home/AboutSection";
import BestDoctors from "@/components/Home/BestDoctors";
import BookingBenefits from "@/components/Home/BookingBenefits";
import Faqs from "@/components/Home/Faqs";

import HeroSection from "@/components/Home/HeroSection";
import HowItWorks from "@/components/Home/HowItWorks";
import Specialities from "@/components/Home/Specialities";
export default function Home() {
  return (
    <div className="min-h-screen bg-white mx-auto">
    
      <HeroSection />
      <Specialities/>
      <AboutSection/>
      <BestDoctors/>
      <HowItWorks/>
      <BookingBenefits/>
      <Faqs/>

    </div>
  );
}
