"use client";

import { useRef, useState } from "react";
import {
  Play,
  Pause,
  ArrowRight,
  Activity,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";

const CancerTreatmentSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="w-full bg-slate-50 overflow-hidden py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* LEFT COLUMN: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
                <Activity className="w-4 h-4" />
                <span>World-Class Oncology</span>
              </div>

              <h2 className="heading font-bold text-slate-900 leading-tight">
                Advanced Cancer Care <br />
                <span className="text-accent">in Yamunanagar</span>
              </h2>

              <p className="xl-para text-slate-600 leading-relaxed">
                Experience the pinnacle of medical excellence at{" "}
                <strong>Capital Omega Hospital</strong>. We bring
                state-of-the-art Radiation Oncology and compassionate patient
                care closer to home. Our dedicated center in Jagadhri is
                equipped with advanced technology to ensure precise diagnosis
                and effective treatment plans.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-secondary mt-1">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Advanced Radiation
                    </h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Latest IMRT & IGRT technology for precision therapy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-pink-100 rounded-lg text-pink-600 mt-1">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Compassionate Care
                    </h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Holistic support from diagnosis to recovery.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button className="group flex items-center justify-between gap-4 bg-secondary text-white md:px-8 md:py-4 px-4 py-2 rounded-full font-medium transition-all hover:bg-secondary/90 hover:shadow-lg hover:shadow-blue-600/30">
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Phone Mockup Video */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            {/* Phone Chassis */}
            <div className="relative mx-auto border-gray-900 bg-gray-900 border-14 rounded-[2.5rem] h-150 w-75 shadow-2xl flex flex-col items-center justify-center select-none">
              {/* Notch / Speaker Camera Area */}
              <div className="h-8 w-0.74 bg-gray-800 absolute -left-4.25 top-18 rounded-l-lg"></div>
              <div className="h-11.5 w-0.74 bg-gray-800 absolute -left-4.25 top-31 rounded-l-lg"></div>
              <div className="h-16 w-0.74 bg-gray-800 absolute -right-4.25 top-35.2 rounded-r-lg"></div>

              {/* Screen Area */}
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                <video
                  ref={videoRef}
                  src="/images/about.mp4"
                  className="w-full h-full object-cover"
                  playsInline
                  loop
                  onClick={handleToggle}
                />

                {/* Play Button Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
                    <button
                      onClick={handleToggle}
                      className="pointer-events-auto group/btn relative flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <span className="absolute inline-flex h-20 w-20 rounded-full bg-white/20 animate-ping opacity-75"></span>
                      <div className="relative w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center hover:bg-white/20">
                        <Play className="text-white w-8 h-8 ml-1 fill-current" />
                      </div>
                    </button>
                  </div>
                )}

                {/* Pause Button (Hover) */}
                {isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={handleToggle}
                      className="pointer-events-auto w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70"
                    >
                      <Pause className="w-6 h-6 fill-current" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CancerTreatmentSection;
