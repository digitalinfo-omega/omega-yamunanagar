export interface Doctor {
  id: number;
  name: string;
  quals: string;
  image: string;
  bio?: string;
}

const doctors: Doctor[] = [
  {
    id: 0,
    name: "Dr. Anand Shah",
    quals:
      "MBBS, MS (Gen. Surgery), FMAS, MCh (Surgical Oncology) Senior Consultant Surgical Oncology",
    image: "/images/medical-team/Rectangle 60.png",
    bio: "Dr. Anand Shah is a highly skilled surgical oncologist specializing in the diagnosis and treatment of complex cancers through advanced surgical techniques. With extensive training in minimally invasive and precision-based oncologic surgery, he is committed to achieving the best outcomes while preserving quality of life for his patients.",
  },
  {
    id: 1,
    name: "Dr. Jay Upadhyay",
    quals:
      "MBBS, DNB (Radiation Oncology), FCPM HOD & Consultant – Radiation Oncology",
    image: "/images/medical-team/Rectangle 60-1.png",
    bio: "Dr. Jay Upadhyay leads the radiation oncology department with a focus on precision targeting and patient-centric care protocols.",
  },
  {
    id: 2,
    name: "Dr. Ashish B. Agrawal",
    quals:
      "MBBS, DNB (General Medicine),DNB (Medical Oncology) Senior Consultant & HOD Medical Oncology",
    image: "/images/medical-team/Rectangle 60-2.png",
    bio: "Dr. Ashish Agrawal specializes in systemic therapies, including chemotherapy and immunotherapy, for comprehensive cancer management.",
  },
];

export { doctors };
