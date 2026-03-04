import { ReactNode } from "react";

export interface Slide {
  id: number;
  eyebrow: string;
  headingPrimary: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  image: string;
  dark?: boolean;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    eyebrow: "Advanced Radiation Therapy in",
    headingPrimary: "Yamuna Nagar",
    description:
      "Precision cancer treatment powered by cutting-edge radiation oncology technology and expert care",
    primaryCta: "Book Your Scan Today",
    secondaryCta: "Emergency Care",
    image: "/images/hero/1.webp",
    dark: true,
  },
  {
    id: 2,
    eyebrow: "Compassionate Cancer Care",
    headingPrimary: "Precise Treatment.",
    description:
      "State-of-the-art radiation therapy delivering hope and healing to cancer patients",
    primaryCta: "Book Your Scan Today",
    secondaryCta: "Emergency Care",
    image: "/images/hero/2.webp",
  },
  {
    id: 3,
    eyebrow: "Fighting Cancer with",
    headingPrimary: "Advanced Technology",
    description:
      "Comprehensive radiation oncology services serving Yamuna Nagar and surrounding regions",
    primaryCta: "Book Your Scan Today",
    secondaryCta: "Emergency Care",
    image: "/images/hero/3.webp",
  },
];

export { SLIDES };
