import AboutSection from "@/components/Home/AboutSection";
import BestDoctors from "@/components/Home/BestDoctors";
import BookingBenefits from "@/components/Home/BookingBenefits";
import Faqs from "@/components/Home/Faqs";

import HeroSection from "@/components/Home/HeroSection";
import HowItWorks from "@/components/Home/HowItWorks";
import Specialities from "@/components/Home/Specialities";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen bg-white mx-auto">
      <Navbar />
      <HeroSection />
      <Specialities/>
      <AboutSection/>
      <BestDoctors/>
      <HowItWorks/>
      <BookingBenefits/>
      <Faqs/>
      <Footer/>
    </div>
  );
}
