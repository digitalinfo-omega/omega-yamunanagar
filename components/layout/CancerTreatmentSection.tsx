"use client";

import Image from "next/image";
import {
  Activity,
  CheckCircle,
  HeartPulse,
  Radiation,
  Shield,
  Target,
  X,
} from "lucide-react";
import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

interface TreatmentData {
  title: string;
  image: string;
  description: string;
  techniques: string[];
  cancers: string[];
  benefits: string[];
  icon: React.ReactNode;
}

const treatments: TreatmentData[] = [
  {
    title: "External Beam Radiation Therapy (EBRT)",
    image: "/images/cancer-treatment/ebrt.webp",
    description:
      "External beam radiation therapy uses a medical linear accelerator (LINAC) to deliver high-energy radiation beams from outside the body to destroy cancer cells while protecting healthy tissue.",
    techniques: [
      "3D Conformal Radiation Therapy (3DCRT)",
      "Intensity-Modulated Radiation Therapy (IMRT)",
      "Image-Guided Radiation Therapy (IGRT)",
      "Volumetric Modulated Arc Therapy (VMAT)",
      "Stereotactic Body Radiation Therapy (SBRT)",
    ],
    cancers: [
      "Breast cancer",
      "Lung cancer",
      "Head and neck cancers",
      "Prostate cancer",
      "Brain tumors",
    ],
    benefits: [
      "Non-invasive treatment",
      "Outpatient procedure",
      "Minimal recovery time",
      "Precise tumor targeting",
      "Reduced side effects",
    ],
    icon: <Radiation size={18} />,
  },
  {
    title: "Stereotactic Body Radiation Therapy (SBRT)",
    image: "/images/cancer-treatment/sbrt.jpg",
    description:
      "SBRT delivers highly focused radiation doses to tumors in fewer treatment sessions with sub-millimeter precision.",
    techniques: [
      "High-dose precision targeting",
      "Advanced imaging guidance",
      "Respiratory motion management",
    ],
    cancers: [
      "Early-stage lung cancer",
      "Liver tumors",
      "Spine tumors",
      "Pancreatic cancer",
    ],
    benefits: [
      "Fewer treatment sessions",
      "High accuracy",
      "Minimal impact on healthy tissue",
    ],
    icon: <Target size={18} />,
  },
  {
    title: "Brachytherapy (Internal Radiation Therapy)",
    image: "/images/cancer-treatment/brachytherapy.jpg",
    description:
      "Brachytherapy involves placing radioactive sources directly inside or near the tumor for targeted treatment.",
    techniques: [
      "High-Dose Rate (HDR)",
      "Low-Dose Rate (LDR)",
      "Interstitial therapy",
    ],
    cancers: ["Prostate cancer", "Cervical cancer", "Breast cancer"],
    benefits: [
      "Localized treatment",
      "Shorter hospital stay",
      "Reduced radiation exposure to surrounding tissue",
    ],
    icon: <Shield size={18} />,
  },
  {
    title: "Palliative Radiation Therapy",
    image: "/images/cancer-treatment/ebrt.webp",
    description:
      "Palliative radiation therapy is used to relieve symptoms such as pain, bleeding, or obstruction caused by advanced cancer.",
    techniques: ["Symptom-targeted radiation", "Short-course therapy"],
    cancers: ["Bone metastases", "Brain metastases", "Advanced lung cancer"],
    benefits: [
      "Pain relief",
      "Improved quality of life",
      "Quick symptom control",
    ],
    icon: <HeartPulse size={18} />,
  },
  {
    title: "Combined Modality Cancer Treatment",
    image: "/images/cancer-treatment/prt.jpg",
    description:
      "Combined modality therapy integrates radiation with chemotherapy, immunotherapy, or surgery for optimal outcomes.",
    techniques: [
      "Concurrent chemoradiation",
      "Pre-operative radiation",
      "Post-operative radiation",
    ],
    cancers: ["Head & neck cancer", "Rectal cancer", "Esophageal cancer"],
    benefits: [
      "Improved survival rates",
      "Comprehensive cancer control",
      "Personalized treatment plans",
    ],
    icon: <Activity size={18} />,
  },
];

export default function CancerTreatmentSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [displayData, setDisplayData] = useState(treatments[0]);
  const cardRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;

    const direction = index > activeTab ? 1 : -1;
    const xMove = 100 * direction;

    gsap.to(cardRef.current, {
      x: -xMove,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setActiveTab(index);
        setDisplayData(treatments[index]);
        gsap.fromTo(
          cardRef.current,
          { x: xMove, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        );
      },
    });
  };

  return (
    <section className="md:py-20 py-10 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('/images/cancer/background-img.webp')",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="heading font-semibold text-gray-900"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Comprehensive <span className="text-accent">Cancer Treatment</span>{" "}
            Solutions
          </h2>
          <p
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Omega Hospitals offers advanced therapeutic radiation treatments
            using the latest technology and following international cancer
            treatment protocols.
          </p>
        </div>

        <div className="mb-10">
          <div className="bg-[#eef3f4] border border-[#d9e3e5] rounded-xl p-2 flex overflow-x-auto no-scrollbar">
            {treatments.map((item, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(index)}
                className={`flex flex-col items-center justify-center gap-1 min-w-50 px-4 py-3 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 relative ${
                  activeTab === index
                    ? "bg-secondary text-white shadow-sm"
                    : "text-gray-700 hover:bg-white"
                }`}
              >
                <span className="opacity-90">{item.icon}</span>
                <span className="text-center leading-tight">{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={cardRef}
            className="bg-white rounded-2xl shadow-md border p-6 md:p-10 flex flex-col gap-10 w-full"
          >
            <div className="flex items-center gap-3">
              {/* <div className="bg-secondary/10 p-2 rounded-lg">
                <X className="text-secondary" size={20} />
              </div> */}
              <h3 className="xl-para font-semibold text-secondary">
                {displayData.title}
              </h3>
            </div>

            <div className="relative w-full h-62.5 md:h-100 rounded-xl overflow-hidden">
              <Image
                src={displayData.image}
                alt={displayData.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-600 leading-relaxed">
              {displayData.description}
            </p>

            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <h4 className="font-semibold mb-4 text-gray-900">
                  Treatment Techniques
                </h4>
                <ul className="space-y-3">
                  {displayData.techniques.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <CheckCircle
                        size={16}
                        className="text-secondary mt-1 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-gray-900">
                  Cancers Treated
                </h4>
                <ul className="space-y-3">
                  {displayData.cancers.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <CheckCircle
                        size={16}
                        className="text-orange-500 mt-1 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-gray-900">
                  Key Benefits
                </h4>
                <ul className="space-y-3">
                  {displayData.benefits.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 bg-[#f1f5f6] px-3 py-2 rounded-lg text-gray-600"
                    >
                      <CheckCircle
                        size={16}
                        className="text-secondary shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg text-sm font-medium transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
