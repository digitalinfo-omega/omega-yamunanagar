"use client";

import {
  Stethoscope,
  Microscope,
  FlaskConical,
  Users,
  Heart,
  UserCheck,
  ArrowRight,
} from "lucide-react";

const OurTeamSection = () => {
  return (
    <section className="bg-[#F4F6F7] md:py-20 pt-12">
      <div className="container">
        <div className="grid lg:grid-cols-2 md:gap-14 gap-7 items-stretch">
          <div className="flex flex-col gap-5 h-full">
            <div className="flex flex-col gap-6 md:items-start items-center justify-center">
              <span className="bg-secondary/20 text-secondary px-6 py-2 rounded-full xl-para font-medium w-fit">
                Our Team
              </span>

              <h2 className="heading font-semibold leading-tight md:text-start text-center">
                Dedicated Cancer Care <br />
                <span className="text-accent">Specialists</span>
              </h2>

              <p className="text-gray-600 leading-relaxed md:text-start text-center">
                Our radiation oncology department is led by board-certified
                radiation oncologists with extensive experience in cancer
                treatment. Our multidisciplinary team includes medical
                physicists, radiation therapists, dosimetrists, and oncology
                nurses, all dedicated to your care.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="para font-semibold">Team Composition:</h3>

              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    icon: <Stethoscope size={20} />,
                    text: "Senior Consultant Radiation Oncologists",
                  },
                  {
                    icon: <Microscope size={20} />,
                    text: "Medical Physicists (MSc/PhD qualified)",
                  },
                  {
                    icon: <FlaskConical size={20} />,
                    text: "Radiation Therapy Technologists",
                  },
                  {
                    icon: <Users size={20} />,
                    text: "Dosimetrists",
                  },
                  {
                    icon: <Heart size={20} />,
                    text: "Oncology Nurses",
                  },
                  {
                    icon: <UserCheck size={20} />,
                    text: "Patient Care Coordinators",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-secondary/10 rounded-xl p-5 flex items-center gap-4 border border-gray-200"
                  >
                    <div className="bg-secondary p-3 rounded-lg text-white">
                      {item.icon}
                    </div>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <button className="bg-accent text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition">
                Meet Our Oncologists
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl border border-gray-200 p-10 h-full flex flex-col">
            <div className="absolute top-0 right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="74"
                height="72"
                viewBox="0 0 74 72"
                fill="none"
              >
                <g clipPath="url(#clip0_155_25189)">
                  <circle cx="60" cy="12" r="60" fill="#E56E1B" />
                </g>
                <defs>
                  <clipPath id="clip0_155_25189">
                    <path
                      d="M0 0H54C65.0457 0 74 8.95431 74 20V72H0V0Z"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="bg-accent w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6">
              <Heart size={22} />
            </div>

            <h3 className="heading font-semibold mb-4 md:text-start text-center">
              Our Commitment
            </h3>

            <p className="text-gray-600 mb-8 xl-para md:text-start text-center">
              We are committed to providing the highest standard of cancer care
              with compassion and expertise.
            </p>

            <div className="space-y-4 md:gap-5 gap-2 flex flex-col justify-center h-full">
              {[
                "Evidence-based treatment",
                "Compassionate patient care",
                "Continuous medical education",
                "Research and innovation",
                "Patient advocacy",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-secondary/10 rounded-lg px-5 py-3 flex items-center gap-3"
                >
                  <div className="w-3 h-3 bg-secondary rotate-45"></div>
                  <span className="text-gray-700 xl-para">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
