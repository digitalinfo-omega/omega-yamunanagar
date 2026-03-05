import React from "react";
import { Hospital, Radiation, Atom, HandHelping } from "lucide-react";
import { AnimatedCounter } from "../helpers/AnimatedCounter";

interface StatCardProps {
  title: string;
  subtitle: string[];
  animate?: boolean;
}

import { LucideIcon } from "lucide-react";
import ServicesSection from "../helpers/ServicesSection";

interface StatCardProps {
  title: string;
  subtitle: string[];
  icon?: LucideIcon;
  animate?: boolean;
  idx: number;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  subtitle,
  icon: Icon,
  animate = false,
  idx,
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={idx * 100}
      className="bg-white border border-gray-100 rounded-xl md:p-6 p-3 flex flex-col items-center justify-center text-center shadow-sm aspect-4/3"
      style={{ boxShadow: "0px 0px 2px 0px #00000040" }}
    >
      {/* Icon Box */}
      {Icon && (
        <div className="mb-3 flex items-center justify-center rounded-lg bg-accent/10 p-3">
          <Icon className="h-6 w-6 text-accent" />
        </div>
      )}

      {/* Title */}
      <h3 className="text-3xl font-medium text-accent mb-2">
        {animate ? <AnimatedCounter value={title} /> : title}
      </h3>

      {/* Subtitle */}
      {subtitle.map((line, index) => (
        <p
          key={index}
          className="text-gray-600 text-sm font-medium leading-tight"
        >
          {line}
        </p>
      ))}
    </div>
  );
};

const OncologySection = () => {
  return (
    <section className="md:py-20 py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 gap-7">
          {/* --- Left Column: Content & Stats --- */}
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="heading font-medium text-gray-900 leading-tight mb-8 md:text-start text-center"
            >
              <span className="text-accent">Expert</span> Radiation Oncology
              Care
              <br />
              in <span className="text-accent">Yamuna Nagar</span>
            </h1>

            <div className="text-black space-y-6 mb-12 leading-relaxed md:text-start text-center">
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                Omega Hospitals Yamuna Nagar brings world-class radiation
                oncology services to the heart of Haryana. As part of the
                renowned Omega Hospitals network, a Morgan Stanley Enterprise,
                we combine cutting-edge radiation therapy technology with
                compassionate, patient-centered cancer care.
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Our state-of-the-art radiation oncology department serves as a
                cornerstone in comprehensive cancer treatment. Whether you're
                beginning your cancer journey or continuing treatment, our team
                of experienced radiation oncologists, medical physicists, and
                specialized therapists ensures precise, effective therapy
                delivered with dignity and care.
              </p>
            </div>

            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <StatCard
                icon={Hospital}
                title="500+"
                subtitle={["Cancer Patients", "Treated Annually"]}
                animate
                idx={0}
              />
              <StatCard
                icon={HandHelping}
                title="24/7"
                subtitle={["Oncology", "Support Services"]}
                animate
                idx={1}
              />
              <StatCard
                icon={Radiation}
                title="NABH"
                subtitle={["Accredited", "Cancer Center"]}
                idx={2}
              />
              <StatCard
                icon={Atom}
                title="ACR"
                subtitle={["Radiation", "Oncology Standards"]}
                idx={3}
              />
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="relative w-full"
          >
            <ServicesSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OncologySection;
