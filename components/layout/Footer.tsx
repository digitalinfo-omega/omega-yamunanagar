import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white grow">
      <section className="pt-[50px] max-w-10xl mx-auto px-5 sm:px-6 bg-[#fff]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div>
              <img
                src="/images/logo.webp"
                alt="Leadership"
                loading="lazy"
                width="195"
                height="81"
                decoding="async"
                className=""
              />
            </div>
            <div>
              <ul className="flex gap-6 mt-6">
                <li className="bg-[#ddf6f8] p-2.5 rounded-full">
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#299fb0] hover:opacity-80 transition-opacity"
                  >
                    <Youtube size={24} />
                  </Link>
                </li>
                <li className="bg-[#ddf6f8] p-2.5 rounded-full">
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#299fb0] transition-colors"
                  >
                    <Instagram size={24} />
                  </Link>
                </li>
                <li className="bg-[#ddf6f8] p-2.5 rounded-full">
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#299fb0] transition-colors"
                  >
                    <Facebook size={24} />
                  </Link>
                </li>
                <li className="bg-[#ddf6f8] p-2.5 rounded-full">
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#299fb0] transition-colors"
                  >
                    <Linkedin size={24} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-4">
                <Link
                  href=""
                  className="text-[#299fb0] p-2.5 hover:opacity-80 transition-opacity bg-[#e9f4f5] rounded-full"
                >
                  <Mail size={24} />
                </Link>
                <p className="info-section text-base font-normal leading-loose text-[#000] m-0">
                  Mail: info@omegahospitals.com
                </p>
              </div>
            </div>
            <div className="mt-[10px]">
              <div className="flex items-center gap-4">
                <Link
                  href=""
                  className="text-[#299fb0] p-2.5 hover:opacity-80 transition-opacity bg-[#e9f4f5] rounded-full"
                >
                  <Phone size={24} />
                </Link>
                <p className="info-section text-base font-normal leading-loose text-[#000] m-0">
                  Phone: 08773501609
                </p>
              </div>
            </div>
            <div className="mt-[10px]">
              <div className="flex gap-4 items-start">
                <span className="flex-shrink-0 self-center w-[45px] h-[45px] bg-[#e9f4f5] rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-[#299fb0]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </span>
                <div>
                  <span className="text-base font-normal block">
                    Gachibowli
                  </span>
                  <p className="text-base font-normal leading-6 mt-1 m-0">
                    CHR Lane, Rd Number 1, Seven Hills Colony,
                    <br />
                    Gachibowli, Hyderabad, Telangana 500032
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <div>
                  <Link
                    className="no-decoration block"
                    target="_blank"
                    rel="noopener noreferrer"
                    href=""
                  >
                    <img
                      alt="playstore"
                      loading="lazy"
                      width="180"
                      height="59"
                      decoding="async"
                      className="w-full sm:w-auto"
                      src="/images/playstore.jpg"
                    />
                  </Link>
                </div>
                <div className="pt-2">
                  <Link
                    className="no-decoration block"
                    target="_blank"
                    rel="noopener noreferrer"
                    href=""
                  >
                    <img
                      alt="appstore"
                      loading="lazy"
                      width="180"
                      height="59"
                      decoding="async"
                      className="w-full sm:w-auto"
                      src="/images/appstore.jpg"
                    />
                  </Link>
                </div>
              </div>
              <div>
                <img
                  alt="nabh"
                  loading="lazy"
                  width="140"
                  height="140"
                  decoding="async"
                  className="w-full sm:w-auto"
                  src="/images/appointment-image.png"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h2 className="text-[1.25rem] mb-3 font-[600] mt-3 font-omega-typography-text-sm-regular-font-family">
                  Oncology Services
                </h2>
                <ul className="list-none mb-0 pl-0 mt-0 font-omega-typography-text-sm-regular-font-family">
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Surgical Oncology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Orthopaedic Oncology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Radiation Oncology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Neuro Oncology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Nuclear Medicine &amp; PET-CT
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      PET MRI
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Robotic Radio Surgery
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Medical Oncology
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-[1.25rem] mb-3 font-[600] mt-3 font-omega-typography-text-sm-regular-font-family">
                  Specialties
                </h2>
                <ul className="list-none mb-0 pl-0 mt-0 font-omega-typography-text-sm-regular-font-family">
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Emergency &amp; Trauma
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Cardiology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Cardio Thoracic
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Neurology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Neuro Surgery
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Orthopaedics &amp; Joint Replacements
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Nephrology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Urology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Gastro
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Pulmonology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Critical Care Medicine
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Dentistry
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      ENT
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Dermatology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Breast Clinic
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Lipedema Clinic
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Spine Clinic
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Plastic Surgery
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Surgical Gastroenterology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Obesity Clinic
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div>
                  <h2 className="text-[1.25rem] mb-3 font-[600] mt-3 font-omega-typography-text-sm-regular-font-family">
                    Quick Links
                  </h2>
                  <ul className="list-none mb-0 pl-0 mt-0 font-omega-typography-text-sm-regular-font-family">
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Facilities
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        News and media
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Cafeteria
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Biomedical Waste
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Terms &amp; conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Cancellation Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Insurance
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Corporate Empanelment
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        In-Patients
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Out Patients
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Our Patients
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Hospital Rooms
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Patient Rooms
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Knowledge Center
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Departments
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Patient Testimonials
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h2 className="text-[1.25rem] mb-3 font-[600] mt-3 font-omega-typography-text-sm-regular-font-family">
                  Cancer
                </h2>
                <ul className="list-none mb-0 pl-0 mt-0 font-omega-typography-text-sm-regular-font-family">
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Breast Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Brain Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Cervix Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Ovarian Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Anal Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Liver Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Colon Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Endometrial Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Pancreatic Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Stomach Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Skin Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Prostate Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Thyroid Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Testicular Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Lung Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Brain Tumour
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Oesophageal Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Oral Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Pancreatic Cancer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="text-[14px] text-center bg-[#000] text-[#fff] py-2 xs:pb-14 mt-3 font-omega-typography-text-sm-regular-font-family">
          © Copyright 2025 -{" "}
          <Link className="text-[#fff] no-underline" href="">
            Omega Hospitals - A Morgan Stanley Enterprise. All Rights Reserved.
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
