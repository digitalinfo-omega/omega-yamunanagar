export interface Department {
  id: string;
  title: string;
  description: string;
  servicetTitle: string;
  services: string[];
  support?: string;
  image: string;
}

const departments: Department[] = [
  {
    id: "01",
    title: "MEDICAL ONCOLOGY",
    description:
      "Personalized chemotherapy, targeted therapy, immunotherapy, and hormonal treatments tailored to your cancer type, stage, and genetic profile. Our experienced medical oncologists create a treatment plan that balances effectiveness with quality of life.",
    servicetTitle: "Services Include:",
    services: [
      "Personalized Chemotherapy Protocols",
      "Targeted Molecular Therapy",
      "Immunotherapy & Biologic Agents",
      "Hormonal Therapy",
      "Clinical Trial Access",
      "24/7 Emergency Oncology Support",
    ],
    support:
      "Infusion center, nutritional counseling, psychological support, symptom management",
    image: "/images/Comprehensive-Cancer/1.png",
  },
  {
    id: "02",
    title: "SURGICAL ONCOLOGY",
    description:
      "Minimally invasive, laparoscopic, and robotic-assisted techniques, we ensure faster recovery and better outcomes.",
    servicetTitle: "pecialties Covered:",
    services: [
      "Head & Neck Cancer Surgery",
      "Breast Cancer Surgery (Oncoplastic & Reconstruction)",
      "GI & Hepatobiliary Oncology",
      "Gynecologic & Urologic Cancer Surgery",
      "Thoracic & Lung Cancer Surgery",
      "Musculoskeletal Oncology",
    ],
    support: "ICU care, pain management, physiotherapy, rehabilitation",
    image: "/images/Comprehensive-Cancer/2.png",
  },
  {
    id: "03",
    title: "RADIATION ONCOLOGY",
    description:
      "Powered by India's first Al-integrated ETHOS LINAC and advanced imaging, our radiation oncology department delivers precision treatment that targets cancer while protecting healthy tissue. From conventional therapy to robotic radiosurgery, we offer the most advanced radiation options available globally.",
    servicetTitle: "Technologies Available:",
    services: [
      "ETHOS Al-Powered Adaptive Radiotherapy (India's 1st)",
      "3D Conformal Radiation Therapy (3D-CRT)",
      "Intensity-Modulated Radiation Therapy (IMRT)",
      "Image-Guided Radiation Therapy (IGRT)",
      "Stereotactic Radiosurgery (SRS) & SBRT",
      "CyberKnife Robotic Radiosurgery",
      "Brachytherapy (Internal Radiation)",
    ],
    image: "/images/Comprehensive-Cancer/3.png",
  },
  {
    id: "04",
    title: "HEMATO-ONCOLOGY & BMT",
    description:
      "Specialized care for blood cancers including leukemia, lymphoma, myeloma, and other hematological disorders. Our dedicated BMT unit provides autologous and allogeneic bone marrow transplants with comprehensive pre- and post-transplant support.",
    servicetTitle: "Services Include:",
    services: [
      "Acute & Chronic Leukemia Treatment",
      "Lymphoma (Hodgkin's & Non-Hodgkin's)",
      "Multiple Myeloma Management",
      "Bone Marrow Transplant (BMT)",
      "Stem Cell Therapy",
      "CAR-T Cell Therapy (Upcoming)",
    ],
    support:
      "Dedicated BMT unit, infection control, transfusion services, genetic counseling",
    image: "/images/Comprehensive-Cancer/4.png",
  },
];

export { departments };
