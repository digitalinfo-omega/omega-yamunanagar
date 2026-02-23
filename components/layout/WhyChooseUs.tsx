"use client";

import {
  User,
  ClipboardList,
  ShieldCheck,
  UsersRound,
  HandHeart,
  ArrowRight,
  Check,
} from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
  points: string[];
  icon: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    title: "Expert Medical Team",
    description:
      "Our radiation oncology team comprises highly qualified oncologists with specialized training in cancer treatment.",
    points: [
      "Qualified radiation oncologists",
      "Subspecialty cancer expertise",
      "Continuous professional development",
      "Evidence-based treatment protocols",
      "National conference participation",
    ],
    icon: <User />,
  },
  {
    title: "Personalized Treatment Plans",
    description:
      "Every cancer is unique, and so is every patient. We develop individualized treatment plans based on cancer type, stage, and preferences.",
    points: [
      "Detailed consultation and assessment",
      "Custom dose calculations",
      "Adaptive treatment planning",
      "Side effect management strategies",
      "Quality of life considerations",
    ],
    icon: <ClipboardList />,
  },
  {
    title: "Advanced Side Effect Management",
    description:
      "We understand that radiation therapy can cause side effects. Our team proactively manages symptoms to help you maintain quality of life.",
    points: [
      "Oncology nursing support",
      "Nutritional counseling",
      "Pain management",
      "Psycho-oncology services",
      "Skin care guidance",
    ],
    icon: <ShieldCheck />,
  },
  {
    title: "Patient & Family Support",
    description:
      "A cancer diagnosis affects the entire family. We provide comprehensive support services to help patients and loved ones navigate the journey.",
    points: [
      "Patient education programs",
      "Family counseling",
      "Support group connections",
      "Financial counseling",
      "Accommodation support",
    ],
    icon: <UsersRound />,
  },
  {
    title: "Safety & Quality Excellence",
    description:
      "Patient safety and treatment quality are our highest priorities. We follow rigorous quality assurance protocols and international standards.",
    points: [
      "NABH accredited facility",
      "ACR radiation oncology standards",
      "Daily equipment quality checks",
      "Treatment plan verification",
      "Outcome tracking",
    ],
    icon: <HandHeart />,
  },
];

const stats = [
  { number: "15+", label: "Years of oncology excellence" },
  { number: "98%", label: "Patient satisfaction rate" },
  { number: "10k+", label: "Patients treated successfully" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-10 md:py-20">
      <div className="container">
        {/* GRID LIKE IMAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT GRID TILE (TITLE INSIDE GRID) */}
          <div
            className="bg-transparent flex flex-col justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="w-full px-4 bg-white flex flex-col items-center">
              <h1 className="bg-secondary/20 text-secondary px-8 py-3 rounded-full sm-para font-semibold mb-8">
                Why Choose Us
              </h1>

              <h2 className="xl-para font-bold text-[#1A1A1A] mb-6 text-center">
                Your Trusted Partner in{" "}
                <span className="text-accent">Cancer Care</span>
              </h2>
              <p className="text-[#4A4A4A] text-center max-w-4xl md:mb-16 mb-7 sm-para leading-relaxed">
                Our radiation oncology team comprises highly qualified
                oncologists with specialized training in cancer treatment. Each
                treatment plan is developed by experienced physicians, ensuring
                therapeutic accuracy and safety.
              </p>
            </div>
          </div>

          {/* RIGHT SERVICE CARDS */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col relative"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-stone-900">
                  {feature.title}
                </h3>
              </div>

              <p className="sm-para text-stone-500 leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* POINTS (SUBTLE – IMAGE SAFE) */}
              <div className="flex flex-col gap-1.5 mb-6">
                {feature.points.map((point, pi) => (
                  <div key={pi} className="flex items-start gap-2">
                    <Check size={13} className="text-secondary mt-0.5" />
                    <span className="sm-para text-stone-600">{point}</span>
                  </div>
                ))}
              </div>

              {/* ARROW */}
              <div className="absolute bottom-0 right-0">
                <div className="w-15 h-11 rounded-br-2xl rounded-tl-2xl bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* STATS — WITH WORLD DOT BACKGROUND */}
        <div className="relative mt-16 rounded-2xl overflow-hidden border border-stone-200">
          {/* DOTTED MAP BACKGROUND */}
          <div
            className="
      absolute inset-0
      bg-[radial-gradient(circle,_theme(colors.secondary)_1px,_transparent_1px)]
      [background-size:22px_22px]
      opacity-[0.08]
      pointer-events-none
    "
          />

          {/* STATS GRID */}
          <div className="relative grid grid-cols-1 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={i * 100}
                key={i}
                className={`bg-white/95 px-8 py-8 md:py-10 flex flex-col gap-1.5 
          hover:bg-secondary transition-colors duration-300 group ${
            i < stats.length - 1
              ? "border-b sm:border-b-0 sm:border-r border-stone-200"
              : ""
          }`}
              >
                <span className="heading font-light text-secondary group-hover:text-white transition-colors">
                  {stat.number}
                </span>
                <span className="sm-para md:text-sm text-stone-500 group-hover:text-white font-light tracking-wide transition-colors">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
