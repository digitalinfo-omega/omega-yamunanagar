"use client";

import {
  Check,
  ClipboardList,
  HandHeart,
  ShieldCheck,
  User,
  UsersRound,
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

export default function WhyChooseUs() {
  return (
    <section className="md:py-20 py-10">
      <div className="container">
        <div className="w-full px-4 bg-white flex flex-col items-center">
          <h1 className="bg-secondary/20 text-secondary px-8 py-3 rounded-full sm-para font-semibold mb-8">
            Why Choose Us
          </h1>

          <h2 className="heading font-bold text-[#1A1A1A] mb-6 text-center">
            Your Trusted Partner in{" "}
            <span className="text-accent">Cancer Care</span>
          </h2>

          <p className="text-[#4A4A4A] text-center max-w-4xl mb-16 para leading-relaxed">
            Our radiation oncology team comprises highly qualified oncologists
            with specialized training in cancer treatment. Each treatment plan
            is developed by experienced physicians, ensuring therapeutic
            accuracy and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-linear-to-b from-[#FFFFFF] to-[#F5F7F2] border border-[#F0F2EE] rounded-3xl p-8 flex flex-col items-start h-full shadow-sm
        ${index === features.length - 1 ? "lg:col-span-2" : ""}
      `}
            >
              <div className="w-12 h-12 rounded-full bg-[#004D40] flex items-center justify-center mb-6 text-white shrink-0">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 xl-paraw">
                {feature.title}
              </h3>

              <p className="xs-para text-[#5A5A5A] mb-8 leading-relaxed">
                {feature.description}
              </p>

              <ul className="space-y-3 w-full mt-auto">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-[#00897B]">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="xs-para text-[#5A5A5A] font-medium">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
