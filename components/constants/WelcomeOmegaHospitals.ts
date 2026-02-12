import {
  User,
  ClipboardCheck,
  Stethoscope,
  BedDouble,
  Building2,
} from "lucide-react";

export interface Stat {
  id: string;
  value: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const stats: Stat[] = [
  {
    id: "01",
    value: "13,15,000+",
    title: "Patients Consulted",
    subtitle: "Across all specialties",
    icon: User,
  },
  {
    id: "02",
    value: "5,75,000+",
    title: "Successful Admissions",
    subtitle: "Safe, quality care delivery",
    icon: ClipboardCheck,
  },
  {
    id: "03",
    value: "25+",
    title: "Medical Specialties",
    subtitle: "Complete care under one roof",
    icon: Stethoscope,
  },
  {
    id: "04",
    value: "1,000+",
    title: "Hospital Beds",
    subtitle: "Across our network",
    icon: BedDouble,
  },
  {
    id: "05",
    value: "9",
    title: "Hospital Locations",
    subtitle: "Nationwide presence",
    icon: Building2,
  },
];

export { stats };
