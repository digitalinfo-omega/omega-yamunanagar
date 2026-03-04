"use client";

import Image from "next/image";
import {
  Calendar,
  Users,
  Download,
  BadgeIndianRupee,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Book an Appointment",
    desc: "Schedule your radiology test online or call us",
    icon: Calendar,
  },
  {
    title: "Second Opinion",
    desc: "Get an expert second opinion on your treatment plan",
    icon: Users,
  },
  {
    title: "Download Results",
    desc: "Access your treatment records securely online",
    icon: Download,
  },
  {
    title: "Financial Counseling",
    desc: "Insurance and treatment cost assistance",
    icon: BadgeIndianRupee,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative flex flex-col md:gap-8 gap-6">
        {services.map((service, i) => {
          const Icon = service.icon;

          return (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={i * 100}
              key={i}
              className="relative w-full mx-auto"
            >
              <Image
                src="/images/oncology.png"
                alt="decorative background"
                width={1400}
                height={500}
                className="object-contain w-full h-auto"
              />

              {/* icon */}
              <div className="absolute top-3 sm:top-5 left-6 sm:left-10">
                <Icon size={22} />
              </div>

              {/* arrow */}
              <button className="absolute bottom-3 sm:bottom-6 right-6 sm:right-13">
                <ArrowRight className="md:text-50 text-45" color="#299fb0" />
              </button>

              {/* title */}
              <h3 className="absolute top-2 sm:top-2 left-22 sm:left-35 text-secondary font-semibold heading leading-snug">
                {service.title}
              </h3>

              {/* description */}
              <p className="text-black/50 sm-para leading-relaxed max-w-[220px] sm:max-w-[250px] absolute bottom-5 sm:bottom-10 left-4 sm:left-5">
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
