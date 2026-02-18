"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: string;
  duration?: number;
  locale?: string;
};

export function AnimatedCounter({
  value,
  duration = 1500,
  locale = "en-IN",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);

  // Extract all numeric segments
  const numberMatches = value.match(/[\d.]+/g);

  const [displayNumbers, setDisplayNumbers] = useState<number[]>(
    numberMatches ? numberMatches.map(() => 0) : [],
  );

  useEffect(() => {
    if (!ref.current || !numberMatches) return;

    const targetNumbers = numberMatches.map((n) => parseFloat(n));

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;

          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(progress);

            const currentValues = targetNumbers.map((num) => num * eased);

            setDisplayNumbers(currentValues);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration, numberMatches]);

  // If no numbers → render static
  if (!numberMatches) {
    return <span ref={ref}>{value}</span>;
  }

  // Rebuild string dynamically
  let numberIndex = 0;
  const animatedString = value.replace(/[\d.]+/g, () => {
    const target = parseFloat(numberMatches[numberIndex]);
    const current = displayNumbers[numberIndex] || 0;

    const formatted = Number.isInteger(target)
      ? Math.round(current).toLocaleString(locale)
      : current.toFixed(2);

    numberIndex++;
    return formatted;
  });

  return <span ref={ref}>{animatedString}</span>;
}
