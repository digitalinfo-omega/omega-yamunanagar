import CancerTreatmentSection from "@/components/layout/CancerTreatmentSection";
import Emergency from "@/components/layout/Emergency";
import FAQ from "@/components/layout/FAQ";
import ModernMachine from "@/components/layout/ModernMachine";
import ActionCard from "@/components/layout/OncologySection";
import OncologySection from "@/components/layout/OncologySection";
import PatientEducation from "@/components/layout/PatientEducation";
import RequestCallbackSection from "@/components/layout/RequestCallbackSection";
import WhyChooseUs from "@/components/layout/WhyChooseUs";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ActionCard />
      <CancerTreatmentSection />
      <RequestCallbackSection />
      <WhyChooseUs />
      <PatientEducation />
      <FAQ />
      <ModernMachine />
      <Emergency />
    </main>
  );
}
