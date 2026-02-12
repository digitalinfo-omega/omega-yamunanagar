"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { slides } from "../constants/ModernMachine";
import gsap from "gsap";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";

const TRANSITION_DURATION = 700;
const AUTO_PLAY_DELAY = 5000;

const ModernMachine = () => {
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const [current, setCurrent] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  /* autoplay */
  useEffect(() => {
    if (isPaused) return;
    const i = setInterval(() => setCurrent((p) => p + 1), AUTO_PLAY_DELAY);
    return () => clearInterval(i);
  }, [isPaused]);

  /* loop edges */
  useEffect(() => {
    if (current === extendedSlides.length - 1) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrent(1);
      }, TRANSITION_DURATION);
    }

    if (current === 0) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrent(slides.length);
      }, TRANSITION_DURATION);
    }
  }, [current]);

  /* gsap content fade */
  useEffect(() => {
    if (!containerRef.current) return;
    if (current === 0 || current === extendedSlides.length - 1) return;

    const ctx = gsap.context(() => {
      const active = containerRef.current!.children[current] as HTMLElement;
      const items = active.querySelectorAll("[data-animate]");

      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [current]);

  useEffect(() => {
    if (!isAnimating) requestAnimationFrame(() => setIsAnimating(true));
  }, [isAnimating]);

  const realIndex =
    current === 0
      ? slides.length - 1
      : current === extendedSlides.length - 1
        ? 0
        : current - 1;

  return (
    <section className="bg-white relative z-20">
      {/* HEADER */}
      <div className="pt-8 md:pt-15 pb-6 md:pb-3.5 text-center relative z-20 bg-white px-4">
        <h2 className="text-[20px] md:text-[32px] font-bold text-[#2AA0AE] mb-3 md:mb-6">
          Modern Machines, Trusted Outcomes
        </h2>
        <p className="text-[#00000066] max-w-3xl mx-auto text-[13px] md:text-[14px] px-4">
          Omega Hospitals features advanced medical technology including
          high-precision imaging, robotic surgery systems and modern diagnostic
          tools.
        </p>
      </div>

      <div className="absolute md:bottom-[10%] bottom-0 right-[5%] z-30 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
        >
          <g clipPath="url(#clip0_445_2594)">
            <path
              d="M27.5175 20.952L23.2464 29.4941C22.7308 30.534 21.2355 30.4996 20.7628 29.4426L15.873 18.5887L13.2948 24.7504H5.20811L20.8917 40.7777C21.5019 41.4051 22.4901 41.4051 23.1003 40.7777L38.7925 24.7504H29.4167L27.5175 20.952ZM40.7089 6.35117L40.5026 6.13633C36.0769 1.61602 28.8323 1.61602 24.398 6.13633L22.0003 8.59414L19.6026 6.14492C15.1769 1.61602 7.92374 1.61602 3.49796 6.14492L3.29171 6.35117C-0.893449 10.6309 -1.07392 17.4457 2.66436 22.0004H11.4644L14.5495 14.5926C15.0136 13.484 16.5776 13.4582 17.0761 14.5582L22.0776 25.6699L26.2886 17.2566C26.7956 16.2426 28.2394 16.2426 28.7464 17.2566L31.1183 22.0004H41.3362C45.0745 17.4457 44.8941 10.6309 40.7089 6.35117Z"
              fill="#299FB0"
            />
          </g>
          <defs>
            <clipPath id="clip0_445_2594">
              <rect width="44" height="44" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="absolute top-0 left-0 z-30 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="#299FB0"
        >
          <path
            d="M14.8967 2.29075C15.3642 2.29075 15.7905 2.5795 15.961 3.01675L19.019 10.7717L26.774 13.8298C26.9874 13.9146 27.1703 14.0615 27.2993 14.2515C27.4282 14.4415 27.4971 14.6658 27.4971 14.8954C27.4971 15.125 27.4282 15.3493 27.2993 15.5393C27.1703 15.7293 26.9874 15.8762 26.774 15.961L19.019 19.019L15.961 26.774C15.8762 26.9874 15.7293 27.1703 15.5393 27.2993C15.3493 27.4282 15.125 27.4971 14.8954 27.4971C14.6658 27.4971 14.4415 27.4282 14.2515 27.2993C14.0615 27.1703 13.9146 26.9874 13.8297 26.774L10.7717 19.019L3.01675 15.961C2.80339 15.8762 2.62041 15.7293 2.49149 15.5393C2.36257 15.3493 2.29365 15.125 2.29365 14.8954C2.29365 14.6658 2.36257 14.4415 2.49149 14.2515C2.62041 14.0615 2.80339 13.9146 3.01675 13.8298L10.7717 10.7717L13.8297 3.01675C13.9151 2.80328 14.0623 2.62016 14.2524 2.49082C14.4425 2.36148 14.6668 2.29182 14.8967 2.29075ZM14.8967 6.5615L12.7215 12.0725C12.6634 12.2185 12.5761 12.3511 12.465 12.4623C12.3539 12.5734 12.2213 12.6607 12.0752 12.7188L6.5615 14.8912L12.0752 17.0693C12.221 17.127 12.3535 17.2139 12.4646 17.3245C12.5757 17.4351 12.6631 17.5672 12.7215 17.7127L14.894 23.2292L17.072 17.7127C17.1301 17.5675 17.2171 17.4356 17.3277 17.325C17.4383 17.2143 17.5703 17.1273 17.7155 17.0693L23.232 14.894L17.7155 12.7188C17.57 12.6603 17.4379 12.5729 17.3273 12.4618C17.2166 12.3507 17.1298 12.2183 17.072 12.0725L14.8967 6.5615ZM4.58425 0L6.04175 3.124L9.16575 4.5815L6.04175 6.04175L4.58425 9.16575L3.12675 6.04175L0 4.58425L3.124 3.12675L4.58425 0Z"
            fill="#299FB0"
          />
        </svg>
      </div>
      <div className="absolute md:bottom-[15%] bottom-3 left-[10%] z-30 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="#299FB0"
        >
          <path
            d="M14.8967 2.29075C15.3642 2.29075 15.7905 2.5795 15.961 3.01675L19.019 10.7717L26.774 13.8298C26.9874 13.9146 27.1703 14.0615 27.2993 14.2515C27.4282 14.4415 27.4971 14.6658 27.4971 14.8954C27.4971 15.125 27.4282 15.3493 27.2993 15.5393C27.1703 15.7293 26.9874 15.8762 26.774 15.961L19.019 19.019L15.961 26.774C15.8762 26.9874 15.7293 27.1703 15.5393 27.2993C15.3493 27.4282 15.125 27.4971 14.8954 27.4971C14.6658 27.4971 14.4415 27.4282 14.2515 27.2993C14.0615 27.1703 13.9146 26.9874 13.8297 26.774L10.7717 19.019L3.01675 15.961C2.80339 15.8762 2.62041 15.7293 2.49149 15.5393C2.36257 15.3493 2.29365 15.125 2.29365 14.8954C2.29365 14.6658 2.36257 14.4415 2.49149 14.2515C2.62041 14.0615 2.80339 13.9146 3.01675 13.8298L10.7717 10.7717L13.8297 3.01675C13.9151 2.80328 14.0623 2.62016 14.2524 2.49082C14.4425 2.36148 14.6668 2.29182 14.8967 2.29075ZM14.8967 6.5615L12.7215 12.0725C12.6634 12.2185 12.5761 12.3511 12.465 12.4623C12.3539 12.5734 12.2213 12.6607 12.0752 12.7188L6.5615 14.8912L12.0752 17.0693C12.221 17.127 12.3535 17.2139 12.4646 17.3245C12.5757 17.4351 12.6631 17.5672 12.7215 17.7127L14.894 23.2292L17.072 17.7127C17.1301 17.5675 17.2171 17.4356 17.3277 17.325C17.4383 17.2143 17.5703 17.1273 17.7155 17.0693L23.232 14.894L17.7155 12.7188C17.57 12.6603 17.4379 12.5729 17.3273 12.4618C17.2166 12.3507 17.1298 12.2183 17.072 12.0725L14.8967 6.5615ZM4.58425 0L6.04175 3.124L9.16575 4.5815L6.04175 6.04175L4.58425 9.16575L3.12675 6.04175L0 4.58425L3.124 3.12675L4.58425 0Z"
            fill="#299FB0"
          />
        </svg>
      </div>
      <div className="absolute md:top-[10%] top-[12%] md:right-[10%] right-3 z-30 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="#299FB0"
        >
          <path
            d="M14.8967 2.29075C15.3642 2.29075 15.7905 2.5795 15.961 3.01675L19.019 10.7717L26.774 13.8298C26.9874 13.9146 27.1703 14.0615 27.2993 14.2515C27.4282 14.4415 27.4971 14.6658 27.4971 14.8954C27.4971 15.125 27.4282 15.3493 27.2993 15.5393C27.1703 15.7293 26.9874 15.8762 26.774 15.961L19.019 19.019L15.961 26.774C15.8762 26.9874 15.7293 27.1703 15.5393 27.2993C15.3493 27.4282 15.125 27.4971 14.8954 27.4971C14.6658 27.4971 14.4415 27.4282 14.2515 27.2993C14.0615 27.1703 13.9146 26.9874 13.8297 26.774L10.7717 19.019L3.01675 15.961C2.80339 15.8762 2.62041 15.7293 2.49149 15.5393C2.36257 15.3493 2.29365 15.125 2.29365 14.8954C2.29365 14.6658 2.36257 14.4415 2.49149 14.2515C2.62041 14.0615 2.80339 13.9146 3.01675 13.8298L10.7717 10.7717L13.8297 3.01675C13.9151 2.80328 14.0623 2.62016 14.2524 2.49082C14.4425 2.36148 14.6668 2.29182 14.8967 2.29075ZM14.8967 6.5615L12.7215 12.0725C12.6634 12.2185 12.5761 12.3511 12.465 12.4623C12.3539 12.5734 12.2213 12.6607 12.0752 12.7188L6.5615 14.8912L12.0752 17.0693C12.221 17.127 12.3535 17.2139 12.4646 17.3245C12.5757 17.4351 12.6631 17.5672 12.7215 17.7127L14.894 23.2292L17.072 17.7127C17.1301 17.5675 17.2171 17.4356 17.3277 17.325C17.4383 17.2143 17.5703 17.1273 17.7155 17.0693L23.232 14.894L17.7155 12.7188C17.57 12.6603 17.4379 12.5729 17.3273 12.4618C17.2166 12.3507 17.1298 12.2183 17.072 12.0725L14.8967 6.5615ZM4.58425 0L6.04175 3.124L9.16575 4.5815L6.04175 6.04175L4.58425 9.16575L3.12675 6.04175L0 4.58425L3.124 3.12675L4.58425 0Z"
            fill="#299FB0"
          />
        </svg>
      </div>
      <div className="absolute md:top-[10%] top-[12%] md:left-[20%] left-[5%] z-30 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
        >
          <path
            d="M10.184 18.362L10.192 18.356L10.213 18.341L10.293 18.283C10.3623 18.233 10.4607 18.16 10.588 18.064C12.074 16.9424 13.4767 15.7145 14.785 14.39C15.933 13.222 17.1 11.857 17.984 10.409C18.864 8.969 19.5 7.385 19.5 5.797C19.5 3.912 18.915 2.439 17.88 1.439C16.85 0.445 15.46 0 14 0C12.275 0 10.752 0.833 9.75 2.117C8.748 0.833 7.224 0 5.5 0C2.42 0 0 2.639 0 5.797C0 7.385 0.637 8.968 1.516 10.409C2.4 11.857 3.567 13.222 4.715 14.391C6.10981 15.8021 7.61161 17.1034 9.207 18.283L9.287 18.341L9.308 18.356L9.316 18.362C9.44273 18.4518 9.5942 18.5 9.7495 18.5C9.9048 18.5 10.0563 18.4518 10.183 18.362M9.75 6.5C9.94891 6.5 10.1397 6.57902 10.2803 6.71967C10.421 6.86032 10.5 7.05109 10.5 7.25V8.5H11.75C11.9489 8.5 12.1397 8.57902 12.2803 8.71967C12.421 8.86032 12.5 9.05109 12.5 9.25C12.5 9.44891 12.421 9.63968 12.2803 9.78033C12.1397 9.92098 11.9489 10 11.75 10H10.5V11.25C10.5 11.4489 10.421 11.6397 10.2803 11.7803C10.1397 11.921 9.94891 12 9.75 12C9.55109 12 9.36032 11.921 9.21967 11.7803C9.07902 11.6397 9 11.4489 9 11.25V10H7.75C7.55109 10 7.36032 9.92098 7.21967 9.78033C7.07902 9.63968 7 9.44891 7 9.25C7 9.05109 7.07902 8.86032 7.21967 8.71967C7.36032 8.57902 7.55109 8.5 7.75 8.5H9V7.25C9 7.05109 9.07902 6.86032 9.21967 6.71967C9.36032 6.57902 9.55109 6.5 9.75 6.5Z"
            fill="#299FB0"
          />
        </svg>
      </div>

      {/* CAROUSEL WRAPPER */}
      <div
        className="relative overflow-hidden z-40"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* SLIDES */}
        <div
          ref={containerRef}
          className={`flex relative z-10  ${
            isAnimating ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {extendedSlides.map((s, i) => (
            <div key={i} className="w-full shrink-0 relative overflow-hidden">
              {/* BACKGROUND IMAGE */}
              <div className="absolute inset-0 -z-20">
                <Image
                  src="/images/modern-machines/shine.jpg"
                  alt="Modern machines background"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* LEFT CURVE GRADIENT */}
              <div
                className="hidden lg:block absolute -left-[33%] top-1/2 -translate-y-1/2
      w-[1200px] h-[1200px] rounded-full
      bg-gradient-to-br from-[#CFEFF3] via-[#EAF7F9] to-white -z-10"
              />

              {/* LEFT CURVE BORDER */}
              <div
                className="hidden lg:block absolute -left-[33%] top-1/2 -translate-y-1/2
      w-[1200px] h-[1200px]
      rounded-full border-[15px] border-[#2AA0AE] -z-10"
              />

              {/* SLIDE CONTENT */}
              <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-20 px-4 md:px-12 lg:px-24 py-8 lg:py-12">
                {/* IMAGE */}
                <div className="relative flex items-center justify-center w-full h-62.5 md:h-87.5 lg:h-[500px] order-1">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-center order-2 items-center lg:items-start">
                  <h3
                    data-animate
                    className="text-[18px] md:text-2xl lg:text-3xl font-bold text-[#F47B20] mb-3 md:mb-4 lg:mb-6 text-center lg:text-left"
                  >
                    {s.title}
                  </h3>

                  <p
                    data-animate
                    className="text-[13px] md:text-sm lg:text-base text-gray-700 mb-4 md:mb-5 lg:mb-6 font-semibold text-center lg:text-left max-w-xl lg:max-w-none"
                  >
                    {s.subtitle}
                  </p>

                  <ul
                    data-animate
                    className="space-y-2 md:space-y-2.5 lg:space-y-3 text-gray-600 text-[12px] md:text-sm lg:text-base mb-6 w-full max-w-xl lg:max-w-none"
                  >
                    {s.points.map((p: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex gap-2 md:gap-3 items-start text-left"
                      >
                        <span className="text-black font-bold text-base md:text-lg shrink-0 mt-0.5">
                          •
                        </span>
                        <span className="leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    data-animate
                    className="mt-4 md:mt-6 lg:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 w-full max-w-xl lg:max-w-none"
                  >
                    <button className="group bg-[#F47B20] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg flex items-center justify-center gap-2 text-sm md:text-base font-medium hover:bg-[#e36910] transition-colors">
                      Know More{" "}
                      <ArrowRight
                        size={16}
                        className="md:w-5 md:h-5 transition-all duration-300 ease-out group-hover:translate-x-1.5 text-white"
                      />
                    </button>

                    <button className="group/btn bg-[#2AA0AE] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg flex items-center justify-center gap-2 text-sm md:text-base font-medium hover:bg-[#238a96] transition-colors">
                      <Download
                        size={16}
                        className="md:w-5 md:h-5 transition-all duration-300 group-hover/btn:translate-y-1 group-hover/btn:scale-110 group-hover/btn:animate-bounce"
                      />
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP ARROWS - On the sides */}
        <button
          onClick={() => setCurrent((p) => p - 1)}
          className="hidden lg:flex absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#F47B20] text-white z-20 items-center justify-center text-2xl hover:bg-[#e36910] transition-colors"
          aria-label="Previous slide"
        >
          <ArrowLeft />
        </button>

        <button
          onClick={() => setCurrent((p) => p + 1)}
          className="hidden lg:flex absolute right-4 lg:right-16 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#F47B20] text-white z-20 items-center justify-center text-2xl hover:bg-[#e36910] transition-colors"
          aria-label="Next slide"
        >
          <ArrowRight />
        </button>
      </div>

      {/* MOBILE NAVIGATION - Arrows and Dots at bottom */}
      <div className="py-8 lg:hidden relative flex items-center flex-col justify-center gap-4">
        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={() => setCurrent((p) => p - 1)}
            className="flex w-10 h-10 rounded-full bg-[#2AA0AE] text-white z-20 items-center justify-center text-2xl hover:bg-[#238a96] transition-colors shrink-0"
            aria-label="Previous slide"
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => setCurrent((p) => p + 1)}
            className="flex w-10 h-10 rounded-full bg-[#2AA0AE] text-white z-20 items-center justify-center text-2xl hover:bg-[#238a96] transition-colors shrink-0"
            aria-label="Next slide"
          >
            ›
          </button>
        </div>

        {/* DOTS */}
        <div className="flex space-x-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i + 1)}
              className={`h-2.5 rounded-full transition-all ${
                realIndex === i ? "w-6 bg-[#F47B20]" : "w-2.5 bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* DESKTOP DOTS - Only dots at bottom */}
      <div className="hidden lg:flex py-12 lg:py-20 relative items-center justify-center">
        <div className="flex space-x-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i + 1)}
              className={`h-3 rounded-full transition-all ${
                realIndex === i ? "w-8 bg-[#F47B20]" : "w-3 bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernMachine;
