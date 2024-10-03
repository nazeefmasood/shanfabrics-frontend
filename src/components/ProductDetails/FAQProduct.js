import React, { useState } from "react";

const FAQProduct = ({ faqItems }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="mt-10">
      {faqItems.map((item, index) => (
        <div key={index}>
          <div
            className="faq-title cursor-pointer py-2 border-b"
            onClick={() => toggleSection(index)}
          >
            <h3 className="text-lg font-bold">{item.title}</h3>
            <h3 className="text-lg font-bold">{openSection ? "X" : "+"}</h3>
          </div>
          {openSection === index && (
            <div className="faq-content py-4">
              <p className="mb-2 text-gray-700">{item.description}</p>
              <ul className="list-disc ml-5 text-gray-600">
                {item.listItems.map((li, idx) => (
                  <li key={idx} className="py-1">
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQProduct;
