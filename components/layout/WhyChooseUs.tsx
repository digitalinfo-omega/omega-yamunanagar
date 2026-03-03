"use client";

import Image from "next/image";
import {
  User,
  ClipboardList,
  ShieldCheck,
  UsersRound,
  HandHeart,
  ArrowRight,
  Check,
} from "lucide-react";
import { AnimatedCounter } from "../helpers/AnimatedCounter";

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
    icon: <User size={18} />,
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
    icon: <ClipboardList size={18} />,
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
    icon: <ShieldCheck size={18} />,
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
    icon: <UsersRound size={18} />,
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
    icon: <HandHeart size={18} />,
  },
];

const stats = [
  { number: "15+", label: "Years of oncology excellence" },
  { number: "98%", label: "Patient satisfaction rate" },
  { number: "10k+", label: "Patients treated successfully" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-20 bg-[#F8FAFB]">
      <div className="container">
        <div className="text-center mb-14">
          <span className="inline-block bg-secondary/10 text-secondary px-6 py-2 rounded-full text-sm font-medium mb-5">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-5">
            Your Trusted Partner in{" "}
            <span className="text-accent">Cancer Care</span>
          </h2>
          <p className="max-w-3xl mx-auto text-stone-600 leading-relaxed">
            Our radiation oncology team comprises highly qualified oncologists
            with specialized training in cancer treatment. Each treatment plan
            is developed by experienced physicians, ensuring therapeutic
            accuracy and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-sm min-h-[380px]">
            <Image
              src="/images/why-choose.webp"
              alt="Cancer care support"
              fill
              className="object-cover"
            />
          </div>

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-stone-900">
                  {feature.title}
                </h3>
              </div>

              <p className="text-sm text-stone-500 mb-4 leading-relaxed">
                {feature.description}
              </p>

              <div className="space-y-2 mb-6">
                {feature.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check size={14} className="text-secondary mt-1" />
                    <span className="text-sm text-stone-600">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-16 rounded-2xl overflow-hidden border border-stone-200">
          <div
            className="
      absolute inset-0
      bg-[radial-gradient(circle,_theme(colors.secondary)_1px,_transparent_1px)]
      [background-size:22px_22px]
      opacity-[0.08]
      pointer-events-none
    "
          />

          <div className="relative grid grid-cols-1 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`bg-white/95 px-8 py-8 md:py-10 flex flex-col gap-1.5 
          hover:bg-secondary transition-colors duration-300 group ${
            i < stats.length - 1
              ? "border-b sm:border-b-0 sm:border-r border-stone-200"
              : ""
          }`}
              >
                <span className="heading font-light text-secondary group-hover:text-white transition-colors">
                  <AnimatedCounter value={stat.number} />
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
