"use client";

import { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  ArrowRight,
  Activity,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";

const CancerTreatmentSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          videoRef.current.muted = false;
          videoRef.current
            .play()
            .then(() => {
              setIsPlaying(true);
              setIsMuted(false);
            })
            .catch(() => {});
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: [0.3],
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  const handleToggle = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsPlaying(true);
      setIsMuted(false);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden py-16 lg:py-24 bg-[radial-gradient(circle_at_center,_white_0%,_#f6fbfe_35%,_#e3f2f8_100%)]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-[60%]">
            <div className="space-y-8">
              {/* Badge */}
              <div className="flex md:justify-start justify-center">
                <div className="inline-flex items-center space-x-2 bg-[#dff3f7] text-[#1aa3b0] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
                  <Activity className="w-4 h-4" />
                  <span>World-Class Oncology</span>
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-snug md:text-left text-center">
                Advanced Cancer Care in{" "}
                <span className="text-[#e56e1b]">Yamuna Nagar</span>
              </h2>

              {/* Paragraph */}
              <p className="text-slate-600 text-base md:text-lg leading-relaxed md:text-left text-center">
                Experience the pinnacle of medical excellence at Capital Omega
                Hospital. We bring state-of-the-art Radiation Oncology and
                compassionate patient care closer to home. Our dedicated center
                in Jagadhri is equipped with advanced technology to ensure
                precise diagnosis and effective treatment plans.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-6 md:justify-start justify-center">
                <div className="flex gap-3 items-start">
                  <div className="p-2 bg-secondary/10 rounded-md text-secondary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      Advanced Radiation
                    </h4>
                    <p className="text-sm text-slate-500">
                      Latest IMRT & IGRT technology for precision therapy
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-2 bg-secondary/10 rounded-md text-secondary">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      Compassionate Care
                    </h4>
                    <p className="text-sm text-slate-500">
                      Holistic support from diagnosis to recovery
                    </p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="flex md:justify-start justify-center">
                <button className="group flex items-center gap-3 bg-[#1aa3b0] hover:bg-[#168d97] transition text-white px-6 py-3 rounded-lg shadow-md">
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Phone Mockup Video */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="w-full lg:w-[40%] flex justify-center lg:justify-end relative"
          >
            {/* Phone Chassis */}
            <div className="relative mx-auto border-gray-900 bg-gray-900 border-14 rounded-[2.5rem] h-150 w-75 shadow-2xl flex flex-col items-center justify-center select-none">
              {/* Notch / Speaker Camera Area */}
              <div className="h-8 w-0.75 bg-gray-800 absolute -left-4.25 top-18 rounded-l-lg"></div>
              <div className="h-11.5 w-0.75 bg-gray-800 absolute -left-4.25 top-31 rounded-l-lg"></div>
              <div className="h-16 w-0.75 bg-gray-800 absolute -right-4.25 top-35.5 rounded-r-lg"></div>

              {/* Screen Area */}
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                <video
                  ref={videoRef}
                  src="/images/about.mp4"
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  playsInline
                  loop
                />

                {/* MOBILE: Play / Unmute */}
                {isMobile && !isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <button
                      onClick={handleToggle}
                      className="group relative flex items-center justify-center transition hover:scale-110"
                    >
                      <span className="absolute inline-flex h-20 w-20 rounded-full bg-white/20 animate-ping"></span>
                      <div className="relative w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex items-center justify-center">
                        <Play className="text-white w-8 h-8 ml-1 fill-current" />
                      </div>
                    </button>
                  </div>
                )}

                {/* MOBILE: Pause */}
                {isMobile && isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                    <button
                      onClick={handleToggle}
                      className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center"
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
