export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  points: string[];
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Digital PET-CT – Artificial Intelligence (AI) Powered",
    subtitle: "INDIA'S FIRST & WORLD'S BEST",
    points: [
      "A revolution in imaging for cancer diagnosis.",
      "India’s first true digital PET-CT with LYSO digital PET detector.",
      "AI-driven imaging for accurate diagnosis and staging of cancer.",
      "65% less radiation exposure compared to analog PET-CT.",
      "Whole body scan in just a few minutes.",
      "Detection of tiny lesions for rapid diagnosis.",
      "Superior resolution & shortest scan acquisition time.",
      "One-stop solution for cardiac imaging including CT coronary angio.",
      "320-slice CT useful for early cardiology diagnosis.",
    ],
    image: "/images/modern-machines/1.png",
  },
  {
    id: 2,
    title: "Brachytherapy",
    subtitle:
      "Brachytherapy is a precise cancer treatment that delivers radiation directly inside or near the tumor. Often used alone or alongside external beam radiation, it allows for higher doses with minimal impact on surrounding healthy tissue",
    points: [
      'The term "brachy" means "short" in Greek reflecting the short distance radiation travels, making this therapy highly focused and effective.',
    ],
    image: "/images/modern-machines/2.png",
  },
  {
    id: 3,
    title: "CyberKnife VSI: AI-Powered Robotic Radiosurgery",
    subtitle:
      "Omega Hospitals offers the only whole-body robotic radiosurgery system in the Telugu states—CyberKnife VSI",
    points: [
      "Treats tumors anywhere in the body with sub-millimeter precision",
      "Ideal for hard-to-reach conditions like trigeminal neuralgia and vascular malformation",
      "1–5 day treatment cycles, compared to 30–40 with traditional radiation",
      "Delivers high-dose radiation with minimal side effects.",
      "Tracks and adapts to tumor and patient motion in real-time",
      "A non-invasive, effective option for both malignant and benign tumors.",
      "Revolutionizing cancer care with precision, comfort, and speed.",
    ],
    image: "/images/modern-machines/3.png",
  },
  {
    id: 4,
    title: "Digital PET-MR: AI-Powered Precision for Cancer Imaging",
    subtitle:
      "India’s first and most advanced Digital PET-MR combines metabolic and structural imaging with AI-driven accuracy.",
    points: [
      "90% less radiation than traditional PET-CT.",
      "Superior clarity with faster scan times",
      "Ideal for detecting brain, head & neck, liver (HCC), prostate, pelvic, bone, and soft tissue tumors",
      "Helps identify tumor recurrence and distant metastases.",
      "Uses advanced tracers like FDOPA, Ga-68 PSMA, DOTANOC, DOTATATE, and FAPI for targeted cancer diagnosis and staging.",
      "A breakthrough tool for early detection and personalized cancer care—all in one scan.",
    ],
    image: "/images/modern-machines/4.png",
  },
  {
    id: 5,
    title: "ETHOS: AI-Powered Adaptive Radiation Therapy",
    subtitle:
      "India’s first AI-driven radiation therapy system, ETHOS transforms cancer care by personalizing treatment in real time.",
    points: [
      "Ideal for Adaptive planning during each session for precise dose delivery",
      "Generates diagnostic-quality imaging during treatment",
      "Sees, thinks, adapts, plans, and treats—all in just minutes.",
      "Designed for speed, precision, and personalization in cancer therapy.",
      "ETHOS brings the power of AI to the forefront—making radiation treatment faster, smarter, and more effective.",
    ],
    image: "/images/modern-machines/5.png",
  },
  {
    id: 6,
    title: "AngioTab 9030DRF: Advanced Digital Radio-Fluoro Imaging",
    subtitle:
      " A dual-capability system combining radiography and fluoroscopy for high-precision diagnostics and interventional procedures.",
    points: [
      "Ideal for ERCP, Myelography, Venography, Cholangiography, and more",
      "Single detector for both static and dynamic imaging.",
      "Full body coverage with remote and tableside control.",
      "Delivers exceptional image quality with low radiation dose.",
      "Equipped with advanced pre- and post-processing tools.",
      "Designed for versatility, safety, and clarity—AngioTab 9030DRF redefines imaging performance.",
    ],
    image: "/images/modern-machines/6.png",
  },
];

export { slides };
