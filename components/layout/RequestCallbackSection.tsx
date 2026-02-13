import Image from "next/image";
import RequestForm from "@/components/helpers/RequestForm";

const RequestCallbackSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* LEFT IMAGE */}
        <div className="relative">
          <Image
            src="/images/callback.webp"
            alt="Medical Team"
            fill
            priority
            className="object-cover"
          />

          {/* Bottom Overlay */}
          <div className="absolute bottom-0 left-0 w-full bg-secondary/90 text-white py-6 px-8 text-center text-lg">
            A patient coordinator will contact you within 24 hours <br />
            to confirm your appointment.
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="flex items-center justify-center px-6 py-14 lg:px-16">
          <div className="w-full max-w-3xl">
            <RequestForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestCallbackSection;
