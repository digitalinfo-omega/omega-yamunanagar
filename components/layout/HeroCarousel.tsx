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
    setIndex((p) => p + 1);
  };

  const prev = () => {
    setIsAnimating(true);
    setIndex((p) => p - 1);
  };

  useEffect(() => {
    if (isHovered) return;

    intervalRef.current = setInterval(next, AUTO_DELAY);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isHovered]);

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

  const active = ((index % TOTAL) + TOTAL) % TOTAL;

  return (
    <section className="relative w-full h-130 overflow-hidden">
      <div
        className={`flex h-full ${
          isAnimating ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {EXTENDED_SLIDES.map((slide, i) => (
          <div
            key={`${slide.id}-${i}`}
            className="w-full h-full shrink-0 relative"
          >
            <Image
              src={slide.image}
              alt={slide.headingPrimary}
              fill
              className="object-cover opacity-60"
              priority
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2">
              <div className="container px-6 max-w-xl text-white flex items-center">
                <div>
                  <p className="xl-para mb-2">
                    {slide.eyebrow}{" "}
                    <span className="font-semibold text-accent heading">
                      {slide.headingPrimary}
                    </span>
                  </p>

                  <p className="mb-6 xl-para">{slide.description}</p>

                  <div className="flex gap-4">
                    <button className="bg-accent px-6 py-3 rounded-md text-sm font-medium">
                      {slide.primaryCta}
                    </button>
                    <button className="border border-white px-6 py-3 rounded-md text-sm font-medium">
                      {slide.secondaryCta}
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative h-64 sm:h-80 lg:h-full block">
                <Image
                  src={slide.card}
                  alt="card"
                  fill
                  className="object-cover object-right"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-accent rounded-full text-white"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-accent rounded-full text-white"
      >
        ›
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsAnimating(true);
              setIndex(TOTAL + i);
            }}
            className={`text-sm font-medium ${
              active === i
                ? "text-white bg-accent p-2 rounded-full"
                : "text-white/50 bg-accent/50 p-2 rounded-full"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
    </section>
  );
}
