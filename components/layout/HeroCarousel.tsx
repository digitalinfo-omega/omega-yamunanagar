"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { SLIDES } from "../constants/HeroSlider";

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const animateSlide = contextSafe(
    (newIndex: number, direction: "next" | "prev") => {
      if (isAnimating || newIndex === activeIndex) return;
      setIsAnimating(true);

      const currentSlide = slideRefs.current[activeIndex];
      const nextSlide = slideRefs.current[newIndex];

      if (!currentSlide || !nextSlide) {
        setIsAnimating(false);
        return;
      }
      const content = nextSlide.querySelectorAll("[data-animate]");
      const xMove = direction === "next" ? 100 : -100;

      // Reset next slide position before animating in
      gsap.set(nextSlide, {
        xPercent: xMove,
        visibility: "visible",
        opacity: 1,
        zIndex: 2,
      });

      gsap.set(currentSlide, { zIndex: 1 });

      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false);
          setActiveIndex(newIndex);
          gsap.set(currentSlide, { visibility: "hidden" });
        },
      });

      tl.to(currentSlide, {
        xPercent: -xMove,
        duration: 0.8,
        ease: "power3.inOut",
      });

      tl.to(
        nextSlide,
        {
          xPercent: 0,
          duration: 0.8,
          ease: "power3.inOut",
        },
        0,
      );

      gsap.fromTo(
        content,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.6,
          delay: 0.3,
        },
      );
    },
  );

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % SLIDES.length;
    animateSlide(nextIndex, "next");
    resetTimer();
  };

  const handlePrev = () => {
    const prevIndex = activeIndex === 0 ? SLIDES.length - 1 : activeIndex - 1;
    animateSlide(prevIndex, "prev");
    resetTimer();
  };

  const handleDotClick = (index: number) => {
    const direction = index > activeIndex ? "next" : "prev";
    animateSlide(index, direction);
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(handleNext, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className="
    relative w-full
    h-[calc(100vh-64px)] md:h-auto
    md:aspect-21/9 lg:max-h-175
    overflow-hidden font-sans bg-gray-50
  "
    >
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          ref={(el) => {
            slideRefs.current[index] = el;
          }}
          className="absolute inset-0 w-full h-full flex flex-col md:block"
          style={{
            visibility: index === 0 ? "visible" : "hidden",
            zIndex: index === 0 ? 2 : 1,
          }}
        >
          {/* IMAGE SECTION */}
          <div className="relative w-full h-1/2 md:h-full">
            <Image
              src={slide.image}
              alt="Hero Banner"
              fill
              priority={index === 0}
              className="hidden md:block object-cover"
            />
            <Image
              src={slide.mobileImage}
              alt="Hero Banner Mobile"
              fill
              priority={index === 0}
              className="block md:hidden object-cover"
            />
          </div>

          {/* CONTENT SECTION */}
          <div className="relative flex-1 md:absolute md:inset-0 z-20 flex flex-col justify-center items-center text-center md:px-6 md:py-8 p-2 md:items-start md:text-left md:ml-[10%] lg:ml-[9%]">
            <div className="w-full max-w-130 flex flex-col md:gap-5 gap-2">
              {/* Line 1 */}
              <div data-animate className="para md:text-base text-gray-700 ">
                {slide.eyebrow}{" "}
                <span className="ml-1 heading font-bold text-accent lg:leading-tight">
                  {slide.headingPrimary}
                </span>
              </div>

              {/* Description */}
              <p
                data-animate
                className="xl-para md:text-lg text-gray-700 max-w-md mb-5"
              >
                {slide.description}
              </p>

              {/* CTA Row */}
              <div
                data-animate
                className="flex gap-4 justify-center md:justify-start"
              >
                <button className="bg-secondary text-white px-6 py-3 rounded-lg text-sm font-medium">
                  {slide.primaryCta}
                </button>

                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium">
                  {slide.secondaryCta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* DESKTOP CONTROLS */}
      <div className="hidden md:flex absolute inset-x-0 top-1/2 -translate-y-1/2 justify-between px-6 z-40 pointer-events-none">
        <button
          onClick={handlePrev}
          className="pointer-events-auto bg-white/90 hover:bg-[#e56e1b] hover:text-white text-gray-800 p-3 rounded-full shadow-xl transition-all"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto bg-white/90 hover:bg-[#e56e1b] hover:text-white text-gray-800 p-3 rounded-full shadow-xl transition-all"
        >
          <ArrowRight size={24} />
        </button>
      </div>

      {/* MOBILE CONTROLS (Overlapping Image) */}
      <div className="md:hidden absolute top-[25%] -translate-y-1/2 w-full flex justify-between px-4 z-40 pointer-events-none">
        <button
          onClick={handlePrev}
          className="pointer-events-auto bg-[#e56e1b]/90 text-white p-2 rounded-full shadow-lg"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto bg-[#e56e1b]/90 text-white p-2 rounded-full shadow-lg"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* PAGINATION DOTS */}
      <div className="absolute md:bottom-6 bottom-0 left-1/2 -translate-x-1/2 flex gap-3 z-38">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === idx
                ? "bg-[#e56e1b] w-8"
                : "bg-gray-300 w-2.5 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
