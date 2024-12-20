import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const faqData = [
  {
    question: "What types of renewable energy solutions do you offer?",
    answer:
      "We offer a variety of renewable energy solutions, including solar power, wind energy, hydroelectric power, and geothermal energy systems. Our goal is to provide comprehensive solutions tailored to meet the specific needs of our clients.",
  },
  {
    question: "How can I determine if renewable energy is right for my home?",
    answer:
      "Our team can evaluate your energy needs, location, and budget to determine the best renewable energy solution for you.",
  },
  {
    question: "What are the financial benefits of switching to renewable energy?",
    answer:
      "Switching to renewable energy can reduce your energy bills, provide tax incentives, and increase your property's value.",
  },
  {
    question: "How long does it take to install a renewable energy system?",
    answer:
      "The installation time depends on the type of system, but most projects are completed within 1-3 weeks.",
  },
  {
    question: "What maintenance is required for renewable energy systems?",
    answer:
      "Renewable energy systems require minimal maintenance, including occasional cleaning and periodic inspections.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6  rounded-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Frequently Asked Questions
      </h2>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="mb-4 border rounded-lg shadow-sm overflow-hidden"
        >
          {/* Question */}
          <div
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center p-5 bg-white cursor-pointer hover:bg-gray-100 transition duration-300"
          >
            <h3 className="font-semibold text-gray-800">{faq.question}</h3>
            <span
              className={`text-2xl text-gray-500 transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
            <IoIosArrowDown/>
            </span>
          </div>

          {/* Answer with Animation */}
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              openIndex === index
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="p-5 text-gray-600 bg-gray-50">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
