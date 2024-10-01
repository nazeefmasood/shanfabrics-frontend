import React, { useState } from "react";

const FAQ = () => {
  // State to keep track of which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the FAQ
  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if it's already open
    } else {
      setOpenIndex(index); // Open the selected FAQ
    }
  };

  // Array of FAQ questions and answers
  const faqs = [
    {
      question: "How do I choose the right size for my order?",
      answer:
        "To choose the right size, refer to our detailed size guide available on each product page. It includes measurements and tips for finding your perfect fit. If you have any specific questions, our customer service team is here to help.",
    },
    {
      question: "How often is the assortment of the collection updated?",
      answer:
        "You can track your order by logging into your account and navigating to the 'Orders' section.",
    },
    {
      question: "Where is our clothing manufactured?",
      answer:
        "Our clothing is manufactured in a reputable facility in Portugal that prioritizes quality and ethical practices. We work closely with our production partners to ensure high standards are maintained throughout the manufacturing process.",
    },
    {
      question: "Do you deliver internationally?",
      answer:
        "Yes, we offer international delivery. Shipping times and costs vary depending on your location. Please check our shipping and information page for more details on international delivery options.” Insert a hyperlink to that page if possible.",
    },
    {
      question: "Can I return an item?",
      answer:
        "Damaged Items: If your product arrives damaged, report it within 24 hours by emailing customer@leflairstudios.com with photos of the damage. We will provide a resend code and cover the costs for returning the damaged goods. Note: Refunds are not available; exchange only. Product Exchange: If the product size doesn't match, you can return it and select the correct size. Note: That any additional shipping costs and potential customs fees will be the customer's responsibility.",
    },
  ];

  return (
    <div className="">
      <div className="flex justify-between items-center gap-2 h-min-screen">
        <hr className="h-[2px] bg-black flex-1" />
        <h2 className="font-robson min-w-min font-bold text-[40px] tracking-wider cursor-pointer">
          Frequently Asked Questions
        </h2>
        <hr className="h-[2px] bg-black flex-1" />
      </div>
      <div className="px-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-dotted border-b border-gray-300 py-2"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-robson  font-bold text-[48px] tracking-wide">
                {faq.question}
              </h3>
              <div
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              >
                <svg
                  className="w-6 h-6 fill-current text-gray-700"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 5v14m-7-7h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`mt-2 text-gray-800 ${
                openIndex === index ? "block" : "hidden"
              }`}
            >
              <p className="font-fedroka  font-semibold text-[18px] uppercase">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
