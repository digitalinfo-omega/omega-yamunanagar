"use client";

import Image from "next/image";
import { CheckCircle, X } from "lucide-react";
import { useState } from "react";

const tabs = [
  "External Beam Radiation Therapy",
  "Stereotactic Body Radiation Therapy",
  "Brachytherapy (Internal Radiation Therapy)",
  "Palliative Radiation Therapy",
  "Combined Modality Cancer Treatment",
];

export default function CancerTreatmentSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="md:py-20 py-10 relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: "url('/images/cancer/background-img.webp')" }}
      />
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Comprehensive{" "}
            <span className="text-orange-500">Cancer Treatment</span> Solutions
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Omega Hospitals offers advanced therapeutic radiation treatments
            using the latest technology and following international cancer
            treatment protocols.
          </p>
        </div>

        {/* ================= TABS ================= */}
        <div className="mb-10">
          <div className="bg-[#eef3f4] border border-[#d9e3e5] rounded-xl p-2 flex overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex flex-col items-center justify-center min-w-[220px] px-4 py-3 text-xs md:text-sm font-medium transition-all rounded-lg ${
                  activeTab === index
                    ? "bg-[#2AA0AE] text-white shadow-sm"
                    : "text-gray-700 hover:bg-white"
                }`}
              >
                {/* Icon Placeholder (replace per tab if needed) */}
                <span className="mb-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </span>
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ================= CONTENT CARD ================= */}
        <div className="bg-white rounded-2xl shadow-md border p-6 md:p-10">
          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#2AA0AE]/10 p-2 rounded-lg">
              <X className="text-[#2AA0AE]" size={20} />
            </div>
            <h3 className="text-2xl font-semibold text-[#2AA0AE]">
              External Beam Radiation Therapy (EBRT)
            </h3>
          </div>

          {/* Image */}
          <div className="relative w-full h-[250px] md:h-[400px] rounded-xl overflow-hidden mb-6">
            <Image
              src="/images/ebrt.webp"
              alt="External Beam Radiation Therapy"
              fill
              className="object-cover"
            />
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-10">
            <strong>What We Offer :</strong> External beam radiation therapy
            uses a medical linear accelerator (LINAC) to deliver high-energy
            radiation beams from outside the body to destroy cancer cells. Our
            advanced LINAC technology allows for precise targeting of tumors
            while protecting surrounding healthy tissue.
          </p>

          {/* 3 Column Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Treatment Techniques */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">
                Treatment Techniques:
              </h4>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "3D Conformal Radiation Therapy (3DCRT)",
                  "Intensity-Modulated Radiation Therapy (IMRT)",
                  "Image-Guided Radiation Therapy (IGRT)",
                  "Volumetric Modulated Arc Therapy (VMAT)",
                  "Stereotactic Body Radiation Therapy (SBRT)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-orange-500 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cancers Treated */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">
                Cancers Treated:
              </h4>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "Breast cancer",
                  "Lung cancer",
                  "Head and neck cancers",
                  "Prostate cancer",
                  "Brain tumors",
                  "Gastrointestinal cancers",
                  "Gynecological cancers",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-orange-500 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Benefits */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Key Benefits</h4>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "Non-invasive treatment",
                  "Outpatient procedure",
                  "Minimal recovery time",
                  "Precise tumor targeting",
                  "Reduced side effects",
                ].map((item, i) => (
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
          <div className="mt-10">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
