"use client";

import { ExternalLink } from "lucide-react";

const videos = [
  {
    category: "BASICS",
    title: "What is Radiation Therapy?",
    description:
      "Learn the basics of radiation therapy and how it works to treat cancer cells effectively.",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    category: "TREATMENT TYPES",
    title: "Understanding IMRT Treatment",
    description:
      "Discover how Intensity-Modulated Radiation Therapy precisely targets tumors while protecting healthy tissue.",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    category: "BASICS",
    title: "What is Radiation Therapy?",
    description:
      "Learn the basics of radiation therapy and how it works to treat cancer cells effectively.",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    category: "TREATMENT TYPES",
    title: "Understanding IMRT Treatment",
    description:
      "Discover how Intensity-Modulated Radiation Therapy precisely targets tumors while protecting healthy tissue.",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const PatientEducation = () => {
  return (
    <section className="md:py-20 py-12 bg-[#F5F7F8]">
      <div className="container">
        {/* Header */}
        <div className="w-full flex items-center justify-center flex-col md:gap-7 gap-3 text-center md:mb-16 mb-6">
          <h3 className="bg-secondary/20 text-secondary md:px-8 px-6 py-2 rounded-full sm-para font-semibold">
            Patient Education
          </h3>

          <h1 className="heading">
            Educational <span className="text-secondary">Videos</span>
          </h1>

          <p className="xl-para md:w-[46%] w-full mx-auto">
            Watch our expert oncologists explain radiation therapy treatments,
            procedures, and what to expect during your cancer care journey.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid lg:grid-cols-2 md:gap-10 gap-5">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200"
            >
              {/* Video */}
              <div className="rounded-xl overflow-hidden mb-6">
                <iframe
                  className="w-full h-[220px] md:h-[260px] rounded-xl"
                  src={video.url}
                  title={video.title}
                  allowFullScreen
                ></iframe>
              </div>

              {/* Category */}
              <p className="text-xs font-semibold text-secondary uppercase tracking-wide mb-2">
                {video.category}
              </p>

              {/* Title + External Icon */}
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-lg">{video.title}</h4>
                <ExternalLink size={16} className="text-gray-500" />
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {video.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-14">
          <button className="border border-secondary text-secondary px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-secondary hover:text-white transition">
            View All Educational Videos
            <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PatientEducation;
