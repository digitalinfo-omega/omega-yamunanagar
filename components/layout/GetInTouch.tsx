"use client";

import { Phone, AlertCircle, Mail, Clock, MapPin } from "lucide-react";

const GetInTouch = () => {
  return (
    <section className="bg-[#1D2930] text-white md:py-20 py-10">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div>
            <h2 className="heading font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-10 xl-para">
              Our team is here to help you with appointments, information, and
              support.
            </p>

            {/* Cards Grid */}
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
              {/* Appointments */}
              <div className="bg-[#24323A] p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-secondary p-2 rounded-lg">
                    <Phone size={18} />
                  </div>
                  <h4 className="font-semibold">Appointments</h4>
                </div>
                <p className="xl-para font-semibold">+91 1234 567 890</p>
                <p className="text-gray-400 sm-para">
                  Mon-Sat, 8:00 AM - 6:00 PM
                </p>
              </div>

              {/* Emergency */}
              <div className="bg-[#453736] p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-500 p-2 rounded-lg">
                    <AlertCircle size={18} />
                  </div>
                  <h4 className="font-semibold">Emergency</h4>
                </div>
                <p className="xl-para font-semibold">+91 1234 567 899</p>
                <p className="text-gray-300 sm-para">Available 24/7</p>
              </div>

              {/* Email */}
              <div className="bg-[#24323A] p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-secondary p-2 rounded-lg">
                    <Mail size={18} />
                  </div>
                  <h4 className="font-semibold">Email</h4>
                </div>
                <p className="text-gray-300 sm-para break-all">
                  oncology.yamunanagar@omegahospitals.com
                </p>
              </div>

              {/* Department Hours */}
              <div className="bg-[#24323A] p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-secondary p-2 rounded-lg">
                    <Clock size={18} />
                  </div>
                  <h4 className="font-semibold">Department Hours</h4>
                </div>
                <p className="text-gray-300 sm-para">Mon-Fri: 8 AM - 6 PM</p>
                <p className="text-gray-300 sm-para">Sat: 8 AM - 2 PM</p>
                <p className="text-gray-300 sm-para">Emergency: 24/7</p>
              </div>

              {/* Location (Full Width) */}
              <div className="bg-[#24323A] p-6 rounded-2xl sm:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-secondary p-2 rounded-lg">
                    <MapPin size={18} />
                  </div>
                  <h4 className="font-semibold">Our Location</h4>
                </div>
                <p className="text-gray-300 sm-para">
                  Omega Hospitals Yamuna Nagar
                </p>
                <p className="text-gray-300 sm-para">
                  Yamuna Nagar, Haryana, India
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE MAP CARD */}
          <div className="bg-[#24323A] rounded-3xl h-full min-h-105 flex items-center justify-center">
            <div className="text-center">
              <div className="bg-secondary w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MapPin size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Interactive Map</h4>
              <p className="text-gray-300 text-sm">Yamuna Nagar, Haryana</p>
              <p className="text-gray-400 text-sm">
                Find us easily with directions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
