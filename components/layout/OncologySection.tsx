import React from "react";
import {
  Calendar,
  FileText,
  Download,
  BadgeIndianRupee,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

interface StatCardProps {
  title: string;
  subtitle: string[];
}

const StatCard: React.FC<StatCardProps> = ({ title, subtitle }) => {
  return (
    <div
      className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm aspect-4/3"
      style={{ boxShadow: "0px 0px 2px 0px #00000040" }}
    >
      <h3 className="text-3xl font-medium text-gray-800 mb-2">{title}</h3>
      {subtitle.map((line, index) => (
        <p
          key={index}
          className="text-gray-600 text-sm font-medium loading-tight"
        >
          {line}
        </p>
      ))}
    </div>
  );
};

const OncologySection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* --- Left Column: Content & Stats --- */}
        <div>
          <h1 className="heading font-medium text-gray-900 leading-tight mb-8">
            <span className="text-accent">Expert</span> Radiation Oncology Care
            <br />
            in <span className="text-accent">Yamuna Nagar</span>
          </h1>

          <div className="text-black space-y-6 mb-12 leading-relaxed">
            <p>
              Omega Hospitals Yamuna Nagar brings world-class radiation oncology
              services to the heart of Haryana. As part of the renowned Omega
              Hospitals network, a Morgan Stanley Enterprise, we combine
              cutting-edge radiation therapy technology with compassionate,
              patient-centered cancer care.
            </p>
            <p>
              Our state-of-the-art radiation oncology department serves as a
              cornerstone in comprehensive cancer treatment. Whether you're
              beginning your cancer journey or continuing treatment, our team of
              experienced radiation oncologists, medical physicists, and
              specialized therapists ensures precise, effective therapy
              delivered with dignity and care.
            </p>
          </div>

          {/* 2x2 Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard
              title="500+"
              subtitle={["Cancer Patients", "Treated Annually"]}
            />
            <StatCard
              title="24/7"
              subtitle={["Oncology", "Support Services"]}
            />
            <StatCard title="NABH" subtitle={["Accredited", "Cancer Center"]} />
            <StatCard
              title="ACR"
              subtitle={["Radiation", "Oncology Standards"]}
            />
          </div>
        </div>

        <div className="relative w-full h-100 lg:h-full">
          <Image
            src="/images/oncology.webp"
            alt="Radiation Oncology Care"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default OncologySection;
