"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { SLIDES } from "../constants/HeroSlider";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TOTAL = SLIDES.length;
const EXTENDED_SLIDES = [...SLIDES, ...SLIDES, ...SLIDES];
const TRANSITION_MS = 700;
const HALF = TRANSITION_MS / 2;
const DOT_SIZE = 15;
const DOT_GAP = 10;
const TRACK_WIDTH = TOTAL * DOT_SIZE + (TOTAL - 1) * DOT_GAP;

const dotLeft = (i: number) => i * (DOT_SIZE + DOT_GAP);

type Phase = 0 | 1 | 2;
type Dir = "next" | "prev";

export default function HeroSlider() {
  const [index, setIndex] = useState(TOTAL);
  const [direction, setDirection] = useState<Dir>("next");
  const [isJumping, setIsJumping] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [pillFrom, setPillFrom] = useState(0);
  const [pillTo, setPillTo] = useState(0);
  const [phase, setPhase] = useState<Phase>(0);
  const animRef = useRef<NodeJS.Timeout | null>(null);

  const active = ((index % TOTAL) + TOTAL) % TOTAL;

  const triggerPill = useCallback((from: number, to: number) => {
    if (animRef.current) clearTimeout(animRef.current);
    setPillFrom(from);
    setPillTo(to);
    setPhase(1);
    setAnimating(true);
    animRef.current = setTimeout(() => {
      setPhase(2);
      animRef.current = setTimeout(() => {
        setPhase(0);
        setAnimating(false);
      }, HALF);
    }, HALF);
  }, []);

  const navigate = useCallback(
    (dir: Dir) => {
      setDirection(dir);
      setIndex((p) => {
        const next = dir === "next" ? p + 1 : p - 1;
        const from = ((p % TOTAL) + TOTAL) % TOTAL;
        const to = ((next % TOTAL) + TOTAL) % TOTAL;
        triggerPill(from, to);
        return next;
      });
    },
    [triggerPill],
  );

  const next = useCallback(() => navigate("next"), [navigate]);
  const prev = useCallback(() => navigate("prev"), [navigate]);

  const goTo = useCallback(
    (dotIndex: number) => {
      const current = ((index % TOTAL) + TOTAL) % TOTAL;
      if (dotIndex === current || animating) return;
      const dir: Dir = dotIndex > current ? "next" : "prev";
      setDirection(dir);
      triggerPill(current, dotIndex);
      setIndex(TOTAL + dotIndex);
    },
    [index, animating, triggerPill],
  );

  useEffect(() => {
    const boundary = index === TOTAL * 2 || index === TOTAL - 1;
    if (!boundary) return;
    const target = index === TOTAL * 2 ? TOTAL : TOTAL * 2 - 1;
    const t = setTimeout(() => {
      setIsJumping(true);
      setIndex(target);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setIsJumping(false)),
      );
    }, TRANSITION_MS);
    return () => clearTimeout(t);
  }, [index]);

  const getPillStyle = (): React.CSSProperties => {
    const fl = dotLeft(pillFrom);
    const tl = dotLeft(pillTo);

    if (phase === 0) return { left: dotLeft(active), width: DOT_SIZE };

    if (direction === "next") {
      return phase === 1
        ? { left: fl, width: tl + DOT_SIZE - fl }
        : { left: tl, width: DOT_SIZE };
    }

    return phase === 1
      ? { left: tl, width: fl + DOT_SIZE - tl }
      : { left: tl, width: DOT_SIZE };
  };

  return (
    <section className="relative w-full md:h-130 overflow-hidden">
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: isJumping
            ? "none"
            : `transform ${TRANSITION_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        }}
      >
        {EXTENDED_SLIDES.map((slide, i) => (
          <div
            key={`${slide.id}-${i}`}
            className="w-full h-full shrink-0 relative flex flex-col md:block"
          >
            <Image
              src={slide.image}
              alt={slide.headingPrimary}
              fill
              className="object-cover hidden md:block"
              priority
            />
            {slide.dark && (
              <div className="md:block hidden absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />
            )}
            <div className="relative z-10 flex flex-col justify-center md:h-full md:flex-row md:items-center md:p-0 p-10">
              <div
                className={`container relative z-10 text-black flex flex-col md:items-start items-center md:${
                  slide.dark ? "text-white" : "text-black"
                }`}
              >
                {/* eyebrow */}
                <p className="text-xl md:text-2xl font-light mb-4 tracking-wide">
                  {slide.eyebrow}
                </p>

                {/* heading */}
                <h1 className="text-4xl md:text-5xl text-start md:text-center font-bold leading-tight mb-6">
                  <span className="text-[#e56e1b]">{slide.headingPrimary}</span>
                </h1>

                {/* description */}
                <p
                  className={`text-lg md:text-xl mb-8 max-w-2xl md:${
                    slide.dark ? "text-gray-200" : "text-black"
                  }`}
                >
                  {slide.description}
                </p>

                {/* buttons */}
                <div className="flex flex-col md:flex-row gap-4 w-[80%] md:w-auto">
                  <button className="group w-full md:w-auto bg-[#e56e1b] hover:bg-[#cf5f13] transition px-6 py-3 rounded-md font-medium text-white flex items-center justify-center gap-2 shadow-lg">
                    <span>{slide.primaryCta}</span>

                    <span className="flex items-center justify-center h-full leading-none text-lg group-hover:translate-x-1 transition-transform duration-200 mb-1">
                      ››
                    </span>
                  </button>

                  <button
                    className={`group w-full md:w-auto px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition
    border border-black text-black hover:bg-[#2c9fb0]/10
    ${slide.dark ? "md:border-white/50 md:text-white hover:bg-white/10" : "border-black text-black hover:bg-[#2c9fb0]/10"}
  `}
                  >
                    <span>{slide.secondaryCta}</span>

                    <span className="flex items-center justify-center h-full leading-none text-lg group-hover:translate-x-1 transition-transform duration-200 mb-1">
                      ››
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative w-full h-64 md:hidden">
              <Image
                src={slide.image}
                alt={slide.headingPrimary}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 bg-accent rounded-full text-white"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 bg-accent rounded-full text-white"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div
          className="relative"
          style={{ width: TRACK_WIDTH, height: DOT_SIZE }}
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                position: "absolute",
                left: dotLeft(i),
                top: 0,
                width: DOT_SIZE,
                height: DOT_SIZE,
                borderRadius: "9999px",
                backgroundColor: "rgba(255,255,255,0.3)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "background-color 300ms ease",
              }}
            />
          ))}

          <div
            style={{
              position: "absolute",
              top: 0,
              height: DOT_SIZE,
              borderRadius: "9999px",
              backgroundColor: "#e56e1b",
              pointerEvents: "none",
              transition: `left ${HALF}ms cubic-bezier(0.4, 0, 0.2, 1), width ${HALF}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              ...getPillStyle(),
            }}
          />
        </div>
      </div>
    </section>
  );
}
