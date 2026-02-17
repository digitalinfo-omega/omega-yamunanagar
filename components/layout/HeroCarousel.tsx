"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SLIDES } from "../constants/HeroSlider";

const TOTAL = SLIDES.length;
const EXTENDED_SLIDES = [...SLIDES, ...SLIDES, ...SLIDES];
const AUTO_DELAY = 5000;

export default function HeroSlider() {
  const [index, setIndex] = useState(TOTAL);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setIsAnimating(true);
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    setIsAnimating(true);
    setIndex((prev) => prev - 1);
  };

  /** AUTO SCROLL */
  useEffect(() => {
    if (isHovered) return;

    intervalRef.current = setInterval(() => {
      next();
    }, AUTO_DELAY);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  /** SILENT RESET FOR INFINITE LOOP */
  useEffect(() => {
    if (index === TOTAL * 2) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(TOTAL);
      }, 700);
    }

    if (index === TOTAL - 1) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(TOTAL * 2 - 1);
      }, 700);
    }
  }, [index]);

  return (
    <section
      className="relative w-full h-130 overflow-hidden bg-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex h-full ${
          isAnimating ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {EXTENDED_SLIDES.map((slide, i) => (
          <div key={`${slide.id}-${i}`} className="w-full h-full shrink-0">
            <div className="relative w-full h-full grid grid-cols-1 lg:grid-cols-2">
              {/* LEFT CONTENT */}
              <div className="container flex items-center md:gap-5 gap-2">
                <div className="px-6 max-w-xl">
                  <p className="xl-para text-gray-700 mb-2">
                    {slide.eyebrow}{" "}
                    <span className="heading text-accent font-semibold">
                      {slide.headingPrimary}
                    </span>
                  </p>

                  <p className="text-gray-800 mb-6 xl-para">
                    {slide.description}
                  </p>

                  <div className="flex gap-4">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition">
                      {slide.primaryCta}
                    </button>

                    <button className="border border-gray-300 px-6 py-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition">
                      {slide.secondaryCta}
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative w-full h-full hidden lg:block">
                <Image
                  src={slide.image}
                  alt={slide.headingPrimary}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ARROWS */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/90 text-white"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/90 text-white"
      >
        ›
      </button>
    </section>
  );
}
