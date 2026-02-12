import Emergency from "@/components/layout/Emergency";
import ModernMachine from "@/components/layout/ModernMachine";
import RequestCallbackSection from "@/components/layout/RequestCallbackSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <RequestCallbackSection />
      <ModernMachine />
      <Emergency />
    </main>
  );
}
