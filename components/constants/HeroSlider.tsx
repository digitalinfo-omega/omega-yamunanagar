import { ReactNode } from "react";

export interface Slide {
  id: number;
  eyebrow: string;
  headingPrimary: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  image: string;
  mobileImage: string;
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
    image: "/banners/Banner - 3.png",
    mobileImage: "/banners/mobile-3.jpg",
  },
];

export { SLIDES };
