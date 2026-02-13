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
import { useState } from "react";

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
    image: "/images/ebrt.webp",
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
    image: "/images/sbrt.webp",
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
    image: "/images/brachytherapy.webp",
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
    image: "/images/palliative.webp",
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
    image: "/images/combined.webp",
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
  const activeData = treatments[activeTab];

  return (
    <section className="md:py-20 py-10 relative">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('/images/cancer/background-img.webp')",
        }}
      />

      <div className="container">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Comprehensive <span className="text-accent">Cancer Treatment</span>{" "}
            Solutions
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Omega Hospitals offers advanced therapeutic radiation treatments
            using the latest technology and following international cancer
            treatment protocols.
          </p>
        </div>

        {/* TABS */}
        <div className="mb-10">
          <div className="bg-[#eef3f4] border border-[#d9e3e5] rounded-xl p-2 flex overflow-x-auto">
            {treatments.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex flex-col items-center justify-center gap-1 min-w-[200px] px-4 py-3 rounded-lg text-xs md:text-sm font-medium transition ${
                  activeTab === index
                    ? "bg-[#2AA0AE] text-white"
                    : "text-gray-700 hover:bg-white"
                }`}
              >
                <span className="opacity-90">{item.icon}</span>
                <span className="text-center leading-tight">{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT CARD */}
        <div className="bg-white rounded-2xl shadow-md border p-6 md:p-10 flex flex-col gap-10">
          {/* Title */}
          <div className="flex items-center gap-3">
            <div className="bg-[#2AA0AE]/10 p-2 rounded-lg">
              <X className="text-[#2AA0AE]" size={20} />
            </div>
            <h3 className="text-2xl font-semibold text-[#2AA0AE]">
              {activeData.title}
            </h3>
          </div>

          {/* Image */}
          <div className="relative w-full h-[250px] md:h-[400px] rounded-xl overflow-hidden">
            <Image
              src={activeData.image}
              alt={activeData.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Description */}
          <p className="text-gray-600 xl-para leading-relaxed">
            {activeData.description}
          </p>

          {/* 3 Columns */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Techniques */}
            <div>
              <h4 className="font-semibold mb-4">Treatment Techniques</h4>
              <ul className="space-y-3 xl-para">
                {activeData.techniques.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-accent mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cancers */}
            <div>
              <h4 className="font-semibold mb-4">Cancers Treated</h4>
              <ul className="space-y-3 xl-para">
                {activeData.cancers.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-orange-500 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h4 className="font-semibold mb-4">Key Benefits</h4>
              <ul className="space-y-3 xl-para">
                {activeData.benefits.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 bg-[#f1f5f6] px-3 py-2 rounded-lg"
                  >
                    <CheckCircle size={16} className="text-[#2AA0AE]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div>
            <button className="bg-accent/80 hover:bg-accent text-white px-6 py-3 rounded-lg text-sm font-medium transition">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
