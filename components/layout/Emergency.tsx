import Image from "next/image";

const Emergency = () => {
  return (
    <section>
      <div className="relative w-full h-180 sm:h-125">
        <Image
          src="/images/ambalance.jpg"
          alt="Ambulance"
          fill
          className="object-cover sm:block hidden"
          priority
        />
        <Image
          src="/images/ambalance-mobile.jpg"
          alt="Ambulance"
          fill
          className="object-cover block sm:hidden"
          priority
        />
      </div>
      {/* <div className="bg-[#e56e1b] w-full py-10 px-4">
        <div
          className="
      max-w-7xl mx-auto
      flex flex-col items-center gap-6
      md:flex-row md:items-center md:justify-between
    "
        >
          <h2
            className="
        text-white font-semibold
        text-xl sm:text-2xl md:text-3xl
        text-center md:text-left
        md:max-w-md
      "
          >
            Schedule your Appointment
          </h2>

          <div
            className="
        w-full
        flex flex-col items-center gap-4
        sm:flex-row sm:justify-center
        md:w-auto md:justify-end
      "
          >
            <button
              className="
          w-full sm:w-auto
          px-6 py-3 rounded-lg
          bg-[#299FB0] text-white
          text-base font-medium
          text-center
          hover:opacity-90 transition
        "
            >
              Get In Touch
            </button>

            <div className="flex items-center gap-3">
              <Image
                src="/images/playstore.jpg"
                alt="Download from Google Play"
                width={150}
                height={48}
                className="cursor-pointer"
              />

              <Image
                src="/images/appstore.jpg"
                alt="Available on App Store"
                width={150}
                height={48}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Emergency;
