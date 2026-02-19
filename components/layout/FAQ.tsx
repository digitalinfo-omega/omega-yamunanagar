"use client";
import React, { useState } from "react";
import { ChevronDown, Minus, Plus } from "lucide-react";

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
    <section className="md:py-20 py-10 bg-stone-50 relative overflow-hidden">
      {/* BG glows — same as WhyChooseUs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* ── Header ── */}
        <div className="w-full flex items-center justify-center flex-col md:gap-5 gap-4 md:mb-16 mb-10">
          <div className="flex items-center gap-3">
            <span className="block w-7 h-px bg-secondary" />
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
              FAQ
            </span>
            <span className="block w-7 h-px bg-secondary" />
          </div>
          <h2 className="heading font-light text-stone-900 tracking-tight text-center">
            Frequently Asked{" "}
            <span className="text-secondary font-light">Questions</span>
          </h2>
          <p className="sm-para md:w-[46%] w-full mx-auto text-center text-stone-500 font-light leading-relaxed">
            Find answers to common questions about radiation therapy, treatment
            planning, insurance, and support services.
          </p>
        </div>

        {/* ── FAQ Grid ── */}
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-6">
          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="flex flex-col gap-4">
              {/* Section Title */}
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-secondary text-white font-bold text-sm shrink-0">
                  ?
                </div>
                <h3 className="font-semibold text-stone-800 tracking-tight">
                  {section.title}
                </h3>
              </div>

              {/* Accordion Items */}
              <div className="flex flex-col gap-3">
                {section.items.map((item, itemIndex) => {
                  const key = `${sectionIndex}-${itemIndex}`;
                  const isOpen = openIndex === key;

                  return (
                    <div
                      key={itemIndex}
                      className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? "bg-secondary/10 border-secondary/30"
                          : "bg-white border-stone-200 hover:border-secondary/30 hover:bg-secondary/5"
                      }`}
                    >
                      <button
                        onClick={() => toggle(sectionIndex, itemIndex)}
                        className="w-full flex justify-between items-center text-left gap-4 px-5 py-4 cursor-pointer"
                      >
                        <span
                          className={`sm-para font-medium leading-snug transition-colors duration-200 ${
                            isOpen ? "text-secondary" : "text-stone-700"
                          }`}
                        >
                          {item.question}
                        </span>

                        {/* Plus / Minus toggle — same style as WhyChooseUs */}
                        <div
                          className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isOpen
                              ? "bg-secondary border-secondary text-white"
                              : "border-stone-300 text-stone-400"
                          }`}
                        >
                          {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                        </div>
                      </button>

                      {/* Answer */}
                      <div
                        className={`overflow-hidden transition-all duration-400 ease-in-out ${
                          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="sm-para text-stone-500 font-light leading-relaxed px-5 pb-5">
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
