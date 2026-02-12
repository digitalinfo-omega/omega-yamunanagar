"use client";

import { useState, useEffect, useRef } from "react";
import {
  Ambulance,
  PhoneCall,
  ShoppingCart,
  Search,
  User,
  Menu,
  X,
  PlusSquare,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  cancerTypes,
  centreOfExcellence,
  ourServices,
} from "../constants/NavContent";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  const updateHeaderHeight = () => {
    if (navRef.current) {
      setHeaderHeight(navRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      updateHeaderHeight();
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <section className="sticky left-0 right-0 top-0 bg-white z-50 shadow-md">
        <nav ref={navRef} className="border-b px-4 py-3">
          <div className="lg:hidden flex flex-col gap-3">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <Image
                src="/images/logo.webp"
                alt="logo image"
                width={140}
                height={60}
                className="w-24 sm:w-28 md:w-35 h-auto"
              />
              <div className="flex items-center gap-4">
                <button>
                  <ShoppingCart className="sm:w-6 w-4 sm:h-6 h-4" />
                </button>
                <button>
                  <User className="sm:w-6 w-4 sm:h-6 h-4" />
                </button>
                <button>
                  <PlusSquare className="sm:w-6 w-4 sm:h-6 h-4" />
                </button>
                <button
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <X className="sm:w-6 w-4 sm:h-6 h-4" />
                  ) : (
                    <Menu className="sm:w-6 w-4 sm:h-6 h-4" />
                  )}
                </button>
              </div>
            </div>
            <div className="nav-res flex items-center justify-between gap-3">
              <a
                href="#"
                className="rounded-3xl border border-[#e56e1b] sm:px-5 px-3 py-1 sm:py-2 sm:text-sm text-[12px] text-[#e56e1b] font-medium whitespace-nowrap"
              >
                Request a Callback
              </a>
              <select className="border border-gray-300 rounded-md px-4 py-2 text-sm bg-white w-45 sm:w-55">
                <option defaultValue="" disabled className="text-gray-500">
                  Please select a center
                </option>
                <option value="omega-hospitals-jabalpur">
                  Omega Hospitals Jabalpur
                </option>
                <option value="omega-hospitals-gachibowli">
                  Omega Hospitals Gachibowli
                </option>
                <option value="omega-hospitals-vizag">
                  Omega Hospitals Vizag
                </option>
                <option value="omega-hospitals-guntur">
                  Omega Hospitals Guntur
                </option>
                <option value="omega-hospitals-vijayawada">
                  Omega Hospitals Vijayawada
                </option>
                <option value="omega-hospitals-yamunagar">
                  Omega Hospitals Yamunagar
                </option>
                <option value="omega-hospitals-bhimavaram">
                  Omega Hospitals Bhimavaram
                </option>
                <option value="omega-hospitals-kurnool">
                  Omega Hospitals Kurnool
                </option>
                <option value="omega-hospitals-surat">
                  Omega Hospitals Surat
                </option>
                <option value="omega-hospitals-banjarahills">
                  Omega Hospitals Banjarahills
                </option>
                <option value="omega-hospitals-karimnagar">
                  Omega Hospitals Karimnagar
                </option>
                <option value="omega-hospitals-dehradun">
                  Omega Hospitals Dehradun
                </option>
                <option value="omega-hospitals-tirupati">
                  Omega Hospitals Tirupati
                </option>
              </select>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-between w-full">
            <Image
              src="/images/logo.webp"
              alt="logo image"
              width={140}
              height={60}
              className="h-auto w-auto max-w-35 shrink-0"
            />
            <div className="flex-1 flex justify-center">
              <select className="border border-gray-300 p-2 rounded-sm text-sm">
                <option defaultValue="" disabled className="text-gray-500">
                  Please select a center
                </option>
                <option value="omega-hospitals-jabalpur">
                  Omega Hospitals Jabalpur
                </option>
                <option value="omega-hospitals-gachibowli">
                  Omega Hospitals Gachibowli
                </option>
                <option value="omega-hospitals-vizag">
                  Omega Hospitals Vizag
                </option>
                <option value="omega-hospitals-guntur">
                  Omega Hospitals Guntur
                </option>
                <option value="omega-hospitals-vijayawada">
                  Omega Hospitals Vijayawada
                </option>
                <option value="omega-hospitals-yamunagar">
                  Omega Hospitals Yamunagar
                </option>
                <option value="omega-hospitals-bhimavaram">
                  Omega Hospitals Bhimavaram
                </option>
                <option value="omega-hospitals-kurnool">
                  Omega Hospitals Kurnool
                </option>
                <option value="omega-hospitals-surat">
                  Omega Hospitals Surat
                </option>
                <option value="omega-hospitals-banjarahills">
                  Omega Hospitals Banjarahills
                </option>
                <option value="omega-hospitals-karimnagar">
                  Omega Hospitals Karimnagar
                </option>
                <option value="omega-hospitals-dehradun">
                  Omega Hospitals Dehradun
                </option>
                <option value="omega-hospitals-tirupati">
                  Omega Hospitals Tirupati
                </option>
              </select>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <a
                href="#"
                className="rounded-3xl border border-[#e56e1b] px-4 py-1 text-sm text-[#e56e1b] whitespace-nowrap"
              >
                Request a Callback
              </a>
              <div className="flex text-[12px] text-white">
                <div className="bg-[#289eb0] px-3 py-1 rounded-l-lg">
                  <p>For Appointments</p>
                  <div className="flex items-center gap-1">
                    <PhoneCall size={14} />
                    040 25552555
                  </div>
                </div>
                <div className="bg-[#e6701c] px-3 py-1 rounded-r-lg">
                  <p>Emergency</p>
                  <div className="flex items-center gap-1">
                    <Ambulance size={14} />
                    98490 22121
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden lg:flex items-center justify-between h-16 md:h-12">
          <nav className="flex lg:grow">
            <div
              className="flex flex-wrap items-center justify-between max-w-7xl px-4"
              id="mobile-menu-2"
            >
              <div>
                <ul className="pl-0 flex flex-col mt-4 mb-0 font-medium lg:flex-row lg:space-x-3.5 lg:mt-0 list-none">
                  <li className="relative group">
                    <a
                      href="#"
                      className="flex items-center gap-1 leading-7.5 text-[12px] font-medium text-black"
                    >
                      Centre of Excellence
                      <svg
                        className="w-3 h-3 text-gray-500 transition-transform group-hover:rotate-180"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
                      </svg>
                    </a>

                    <div className="absolute left-0 top-full z-50 hidden w-[90vw] bg-white shadow-lg group-hover:block">
                      <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3 text-sm">
                          {[
                            "Surgical Oncology",
                            "Medical Oncology",
                            "Radiation Oncology",
                            "Hemato-Oncology and BMT",
                            "Cardiology",
                            "Cardiothoracic Surgery",
                            "Critical Care",
                            "Dental Services",
                            "Dermatology",
                            "ENT",
                            "Emergency Medicine",
                            "Gastroenterology",
                            "General Medicine",
                            "General Surgery including Laparoscopy",
                            "Gynaecology",
                            "Nephrology including Dialysis",
                            "Neurology",
                            "Neurosurgery",
                            "Nuclear Medicine",
                            "Orthopaedics",
                            "Psychiatry",
                            "Pulmonology",
                            "Urology",
                            "Vascular Surgery",
                            "Breast Clinic",
                            "Lipedema Clinic",
                            "Spine Clinic",
                            "Covid Center",
                            "Plastic Surgery",
                            "Surgical Gastroenterology",
                            "Obesity Clinic",
                          ].map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="block border-b p-2 border-orange-400/60 hover:text-white hover:bg-[#e56e1b] transition-all duration-300"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="relative group">
                    <a
                      href="#"
                      className="flex items-center gap-1 leading-7.5 text-[12px] font-medium text-black"
                    >
                      Our Services
                      <svg
                        className="w-3 h-3 text-gray-500 transition-transform group-hover:rotate-180"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
                      </svg>
                    </a>

                    <div className="absolute left-0 top-full z-50 hidden bg-white shadow-lg group-hover:block">
                      <div className="px-4 py-4 min-w-65">
                        <ul className="flex flex-col gap-2 text-sm">
                          {ourServices.map((service) => (
                            <li key={service}>
                              <a
                                href="#"
                                className="block border-b border-orange-400/60 p-2 hover:bg-[#e56e1b] hover:text-white transition-all duration-300"
                              >
                                {service}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li className="relative">
                    <a
                      className="leading-7.5 font-medium text-[12px] text-black no-underline"
                      href="#"
                    >
                      Knowledge Centre
                    </a>
                  </li>

                  <li className="relative">
                    <a
                      className="leading-7.5 font-medium text-[12px] text-black no-underline"
                      href="#"
                    >
                      Cancer Journey
                    </a>
                  </li>

                  <li className="relative md:hidden 2xl:block lg:block">
                    <a
                      className="leading-7.5 font-medium text-[12px] text-black no-underline"
                      href="#"
                    >
                      Blogs
                    </a>
                  </li>

                  <li className="relative group">
                    <a
                      href="#"
                      className="flex items-center gap-1 leading-7.5 text-[12px] font-medium text-black"
                    >
                      Cancer
                      <svg
                        className="w-3 h-3 text-gray-500 transition-transform group-hover:rotate-180"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
                      </svg>
                    </a>

                    <div className="absolute left-0 top-full z-50 hidden w-[50vw] bg-white shadow-lg group-hover:block">
                      <div>
                        <div
                          className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            md:grid-cols-3
                            lg:grid-cols-4
                            gap-x-8
                            gap-y-3
                            text-sm
                            max-h-[60vh]
                            overflow-y-auto
                          "
                        >
                          {cancerTypes.map((type) => (
                            <a
                              key={type}
                              href="#"
                              className="block border-b border-orange-400/60
                                p-2
                                hover:bg-[#e56e1b]
                                hover:text-white
                                transition-all
                                duration-300
                              "
                            >
                              {type}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="relative md:hidden 2xl:block lg:block">
                    <a
                      className="leading-7.5 font-medium text-[12px] text-black no-underline"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>

                  <li className="relative md:hidden 2xl:block lg:block">
                    <a
                      className="leading-7.5 font-medium text-[12px] text-black no-underline"
                      href="#"
                    >
                      FAQs
                    </a>
                  </li>

                  <li className="relative md:hidden 2xl:block lg:block">
                    <a
                      className="leading-7.5 font-medium text-[12px] text-black no-underline"
                      href="#"
                    >
                      News and Media
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="flex items-center space-x-3 justify-end ml-auto">
            <button className="relative bg-transparent border-transparent">
              <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-[#e56e1b] transition-colors" />
            </button>

            <button className="relative bg-transparent border-transparent">
              <Search className="w-6 h-6 cursor-pointer hover:text-[#e56e1b] transition-colors" />
            </button>

            <a href="#">
              <div className="flex items-center cursor-pointer">
                <User className="w-6 h-6 cursor-pointer hover:text-[#e56e1b] transition-colors" />
              </div>
            </a>
          </div>
        </div>

        <div
          className={`
            absolute left-0 right-0 top-full
            z-40 bg-white lg:hidden
            transition-all duration-300 ease-out
            overflow-y-auto
            ${
              mobileMenuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }
          `}
          style={
            mobileMenuOpen
              ? { maxHeight: `calc(100vh - ${headerHeight}px)` }
              : {}
          }
        >
          <div className="px-4 py-6 space-y-4 border-t shadow-md">
            <Accordion type="multiple" className="space-y-3">
              <AccordionItem value="coe">
                <AccordionTrigger className="rounded-xl bg-gray-50 px-4 py-4 text-left">
                  Centre of Excellence
                </AccordionTrigger>
                <AccordionContent>
                  {centreOfExcellence.map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-sm border-b hover:bg-[#e56e1b] hover:text-white"
                    >
                      {item}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="services">
                <AccordionTrigger className="rounded-xl bg-gray-50 px-4 py-4 text-left">
                  Our Services
                </AccordionTrigger>
                <AccordionContent>
                  {ourServices.map((service) => (
                    <Link
                      key={service}
                      href="#"
                      className="block px-4 py-2 text-sm border-b hover:bg-[#e56e1b] hover:text-white"
                    >
                      {service}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cancer">
                <AccordionTrigger className="rounded-xl bg-gray-50 px-4 py-4 text-left">
                  Cancer
                </AccordionTrigger>
                <AccordionContent>
                  {cancerTypes.map((type) => (
                    <Link
                      key={type}
                      href="#"
                      className="block px-4 py-2 text-sm border-b hover:bg-[#e56e1b] hover:text-white"
                    >
                      {type}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>

              {[
                "Knowledge Centre",
                "Cancer Journey",
                "Blogs",
                "About Us",
                "FAQs",
                "News and Media",
              ].map((label) => (
                <Link
                  key={label}
                  href="#"
                  className="block rounded-xl bg-gray-50 px-4 py-4"
                >
                  {label}
                </Link>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
