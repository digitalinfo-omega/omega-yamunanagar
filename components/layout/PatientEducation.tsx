import React from "react";

const PatientEducation = () => {
  return (
    <section className="md:py-20 py-10">
      <div className="container">
        <div className="w-full flex items-center justify-center flex-col md:gap-7 gap-2">
          <h3 className="bg-secondary/20 text-secondary md:px-8 py-3 rounded-full sm-para font-semibold">
            Patient Education
          </h3>
          <h1 className="heading">
            Educational <span className="text-secondary">Videos</span>
          </h1>
          <p className="sm-para w-[46%] mx-auto text-center">
            Watch our expert oncologists explain radiation therapy treatments,
            procedures, and what to expect during your cancer care journey.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default PatientEducation;
