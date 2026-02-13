"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const faqData: FAQSection[] = [
  {
    title: "About Radiation Therapy",
    items: [
      {
        question: "What is radiation therapy and how does it work?",
        answer:
          "Radiation therapy uses high-energy rays to target and destroy cancer cells while minimizing damage to surrounding healthy tissue.",
      },
      {
        question: "Is radiation therapy painful?",
        answer:
          "Radiation therapy itself is painless, similar to getting an X-ray. Some side effects may develop gradually during treatment.",
      },
      {
        question: "How long does each treatment session take?",
        answer:
          "Most sessions last between 10–30 minutes depending on the type and complexity of treatment.",
      },
      {
        question: "How many radiation treatments will I need?",
        answer:
          "The number of sessions varies based on diagnosis and treatment plan. Your oncologist will determine the schedule.",
      },
      {
        question: "What are the side effects of radiation therapy?",
        answer:
          "Side effects depend on the treatment area and may include fatigue, skin irritation, or localized discomfort.",
      },
    ],
  },
  {
    title: "Treatment Planning & Preparation",
    items: [
      {
        question:
          "Do I need to do anything special to prepare for radiation therapy?",
        answer:
          "Your care team will provide specific preparation guidelines. In most cases, minimal preparation is required.",
      },
      {
        question: "Can I continue working during radiation therapy?",
        answer:
          "Many patients continue working, but it depends on individual tolerance and side effects.",
      },
      {
        question: "Will I be radioactive after treatment?",
        answer:
          "External beam radiation does not make you radioactive. You are safe to be around family and friends.",
      },
    ],
  },
  {
    title: "Insurance & Financial",
    items: [
      {
        question: "Does insurance cover radiation therapy?",
        answer:
          "Most insurance plans cover radiation therapy. Coverage details vary, so check with your provider.",
      },
      {
        question: "What if I cannot afford treatment?",
        answer:
          "Financial counseling and support programs may be available. Speak with our support team for guidance.",
      },
      {
        question: "Are there any government schemes available?",
        answer:
          "Yes, certain government healthcare schemes may provide assistance depending on eligibility criteria.",
      },
    ],
  },
  {
    title: "Logistics & Support",
    items: [
      {
        question: "Can a family member accompany me to treatment?",
        answer:
          "Yes, family members may accompany you. Policies may vary depending on hospital guidelines.",
      },
      {
        question: "Do you provide accommodation for out-of-town patients?",
        answer:
          "We can help guide you to nearby accommodation facilities for convenience during treatment.",
      },
      {
        question: "What support services are available during treatment?",
        answer:
          "We offer counseling, nutritional guidance, and patient support services throughout your treatment journey.",
      },
    ],
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (sectionIndex: number, itemIndex: number) => {
    const key = `${sectionIndex}-${itemIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <section className="md:py-20 py-10">
      <div className="container">
        {/* Header */}
        <div className="w-full flex items-center justify-center flex-col md:gap-7 gap-2 mb-14">
          <h3 className="bg-secondary/20 text-secondary md:px-8 py-3 rounded-full sm-para font-semibold">
            FAQ
          </h3>
          <h1 className="heading">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h1>
          <p className="sm-para md:w-[46%] w-full mx-auto text-center">
            Find answers to common questions about radiation therapy, treatment
            planning, insurance, and support services.
          </p>
        </div>

        {/* Accordion Grid */}
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-3">
          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="p-8 space-y-6">
              {/* Section Title */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-white font-bold">
                  ?
                </div>
                <h3 className="font-semibold text-lg">{section.title}</h3>
              </div>

              {/* Accordion Items */}
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => {
                  const key = `${sectionIndex}-${itemIndex}`;
                  const isOpen = openIndex === key;

                  return (
                    <div
                      key={itemIndex}
                      className="px-5 py-4 transition-all duration-300"
                    >
                      <button
                        onClick={() => toggle(sectionIndex, itemIndex)}
                        className="hover:cursor-pointer w-full flex justify-between items-center text-left font-medium"
                      >
                        <span className="sm-para">{item.question}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-40 mt-3" : "max-h-0"
                        }`}
                      >
                        <p className="sm-para text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
