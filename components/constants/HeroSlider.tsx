import { ReactNode } from "react";

export interface Slide {
  id: number;
  eyebrow: string;
  headingPrimary: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  image: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    eyebrow: "Advanced Diagnostic Imaging in",
    headingPrimary: "Yamuna Nagar",
    description:
      "Precision radiology services powered by cutting-edge technology and expert radiologists",
    primaryCta: "Book Your Scan Today",
    secondaryCta: "Emergency Care",
    image: "/images/hero/1.webp",
  },
  {
    id: 2,
    eyebrow: "Compassionate Cancer Care",
    headingPrimary: "Precise Treatment.",
    description:
      "State-of-the-art radiation therapy delivering hope and healing to cancer patients",
    primaryCta: "Book Your Scan Today",
    secondaryCta: "Emergency Care",
    image: "/images/hero/1.webp",
  },
  {
    id: 3,
    eyebrow: "Fighting Cancer with Advanced Technology",
    headingPrimary: "Yamuna Nagar",
    description:
      "Comprehensive radiation oncology services serving Yamuna Nagar and surrounding regions",
    primaryCta: "Book Your Scan Today",
    secondaryCta: "Emergency Care",
    image: "/images/hero/1.webp",
  },
];

export { SLIDES };
