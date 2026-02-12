import Image from "next/image";
import RequestForm from "@/components/helpers/RequestForm";

const RequestCallbackSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        {/* Left Image */}
        <div className="relative w-full h-[300px] lg:h-auto">
          <Image
            src="/images/callback.jpg"
            alt="Medical Team"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="flex items-center justify-center px-6 py-14 lg:px-16">
          <div className="w-full max-w-lg">
            <h2 className="md:text-2xl text-xl font-bold text-accent mb-2 text-center">
              Request a Call Back Today
            </h2>

            <p className="text-sm text-black mb-8 text-center">
              Fill in your details and our team will get in touch with you
              shortly.
            </p>

            {/* Form Component */}
            <RequestForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestCallbackSection;
