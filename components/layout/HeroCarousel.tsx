"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { SLIDES } from "../constants/HeroSlider";

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
    <section className="relative w-full h-130 overflow-hidden">
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
            className="w-full h-full shrink-0 relative"
          >
            <Image
              src={slide.image}
              alt={slide.headingPrimary}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 h-full flex items-center">
              <div className="container text-white relative z-10">
                {/* Top Small Heading */}
                <p className="text-xl md:text-2xl font-light mb-4 tracking-wide">
                  {slide.eyebrow}
                </p>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  <span className="text-[#e56e1b]">{slide.headingPrimary}</span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
                  {slide.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 flex-wrap">
                  <button className="bg-[#e56e1b] hover:bg-[#cf5f13] transition px-6 py-3 rounded-md font-medium text-white flex items-center gap-2 shadow-lg">
                    {slide.primaryCta}
                    <span className="text-lg">››</span>
                  </button>

                  <button className="border border-secondary/50 text-secondary hover:bg-secondary/10 transition px-6 py-3 rounded-md font-medium flex items-center gap-2 backdrop-blur-sm">
                    {slide.secondaryCta}
                    <span className="text-lg">››</span>
                  </button>
                </div>
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
