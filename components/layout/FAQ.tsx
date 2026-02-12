import React from "react";

const FAQ = () => {
  return (
    <section className="md:py-20 py-10">
      <div className="container">
        <div className="w-full flex items-center justify-center flex-col md:gap-7 gap-2">
          <h3 className="bg-secondary/20 text-secondary md:px-8 py-3 rounded-full sm-para font-semibold">
            FAQ
          </h3>
          <h1 className="heading">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h1>
          <p className="sm-para w-[46%] mx-auto text-center">
            Find answers to common questions about radiation therapy, treatment
            planning, insurance, and support services.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default FAQ;
