"use client";

import { Phone, AlertCircle, Mail, Clock, MapPin } from "lucide-react";

const GetInTouch = () => {
  return (
    <section className="bg-secondary/10 md:py-20 py-12">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="heading font-semibold mb-4 md:text-start text-center text-gray-900">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-10 xl-para md:text-start text-center">
                Our care team is available to support appointments, emergencies,
                and patient assistance.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white border border-secondary/20 rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:bg-accent/10 hover:-translate-y-1 hover:shadow-lg group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-secondary group-hover:bg-accent text-white p-3 rounded-xl">
                      <Phone size={18} />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Appointments
                    </h4>
                  </div>
                  <p className="xl-para font-semibold text-gray-900">
                    +91 1234 567 890
                  </p>
                  <p className="text-gray-500 sm-para">
                    Mon–Sat, 8:00 AM – 6:00 PM
                  </p>
                </div>

                <div className="bg-white border border-secondary/20 rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:bg-accent/10 hover:-translate-y-1 hover:shadow-lg group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="group-hover:bg-accent bg-secondary text-white p-3 rounded-xl">
                      <AlertCircle size={18} />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Emergency Care
                    </h4>
                  </div>
                  <p className="xl-para font-semibold text-gray-900">
                    +91 1234 567 899
                  </p>
                  <p className="text-gray-500 sm-para">Available 24/7</p>
                </div>

                <div className="bg-white border border-secondary/20 rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:bg-accent/10 hover:-translate-y-1 hover:shadow-lg group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-secondary group-hover:bg-accent text-white p-3 rounded-xl">
                      <Mail size={18} />
                    </div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                  </div>
                  <p className="text-gray-600 sm-para break-all">
                    oncology.yamunanagar@omegahospitals.com
                  </p>
                </div>

                <div className="bg-white border border-secondary/20 rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:bg-accent/10 hover:-translate-y-1 hover:shadow-lg group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-secondary group-hover:bg-accent text-white p-3 rounded-xl">
                      <Clock size={18} />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Department Hours
                    </h4>
                  </div>
                  <p className="text-gray-600 sm-para">Mon–Fri: 8 AM – 6 PM</p>
                  <p className="text-gray-600 sm-para">Sat: 8 AM – 2 PM</p>
                  <p className="text-gray-600 sm-para">
                    Emergency Services: 24/7
                  </p>
                </div>

                <div className="bg-white border border-secondary/20 rounded-2xl p-6 sm:col-span-2 transition-all duration-300 hover:border-accent/30 hover:bg-accent/10 hover:-translate-y-1 hover:shadow-lg group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-secondary group-hover:bg-accent text-white p-3 rounded-xl">
                      <MapPin size={18} />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Hospital Location
                    </h4>
                  </div>
                  <p className="text-gray-600 sm-para">
                    Omega Hospitals – Yamuna Nagar
                  </p>
                  <p className="text-gray-600 sm-para">
                    Yamuna Nagar, Haryana, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-secondary/20 rounded-3xl flex items-center justify-center p-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.943590090621!2d78.34840238715819!3d17.436442699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ac38a7bc29%3A0xffc164d23af0f2b9!2sOmega%20Multi-speciality%20Hospitals%20Gachibowli!5e0!3m2!1sen!2sin!4v1771399042229!5m2!1sen!2sin"
              className="w-full h-full rounded-xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
