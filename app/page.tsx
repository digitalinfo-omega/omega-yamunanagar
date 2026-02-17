import AboutVideoSection from "@/components/layout/AboutVideoSection";
import CancerTreatmentSection from "@/components/layout/CancerTreatmentSection";
import Emergency from "@/components/layout/Emergency";
import FAQ from "@/components/layout/FAQ";
import GetInTouch from "@/components/layout/GetInTouch";
import HeroCarousel from "@/components/layout/HeroCarousel";
import ModernMachine from "@/components/layout/ModernMachine";
import ActionCard from "@/components/layout/OncologySection";
import OurTeamSection from "@/components/layout/OurTeamSection";
import PatientEducation from "@/components/layout/PatientEducation";
import RequestCallbackSection from "@/components/layout/RequestCallbackSection";
import WhyChooseUs from "@/components/layout/WhyChooseUs";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <ActionCard />
      <AboutVideoSection />
      <CancerTreatmentSection />
      <RequestCallbackSection />
      <WhyChooseUs />
      <OurTeamSection />
      <PatientEducation />
      <FAQ />
      {/* <ModernMachine /> */}
      <GetInTouch />
      <Emergency />
    </main>
  );
}
