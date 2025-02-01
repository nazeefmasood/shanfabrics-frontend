import React from "react";

const Assistance = () => {
  const sections = [
    {
      title: "I'm having problems with an order",
      content:
        "You can contact us without reservation by sending an email to customer@leflairstudios.com Our customer care department will answer where you will find assistance, professionalism and friendliness.",
      label: "Support",
    },
    {
      title: "Doubts and questions",
      content:
        'If you have not found the information you need, you can send your question via the form on the "Contact" page or write an email to customer@leflairstudios.com We will be happy to help you.',
      label: "Help",
    },
    {
      title: "Reports and advice",
      content:
        'We are glad to receive your opinion for our online site so that we can correct any errors in this way. You can send us your impressions and suggestions via our form on the "Contact" page.',
      label: "Feedback",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Title with Creative Layout */}
        

        {/* Contact Cards */}
        <div className="grid grid-cols-3 gap-8 mb-24">
          <div className="border-l-4 border-black p-6">
            <p className="text-4xl font-bold mb-2">24/7</p>
            <p className="text-sm uppercase tracking-wider">Email Support</p>
          </div>
          <div className="border-l-4 border-black p-6 mt-12">
            <p className="text-4xl font-bold mb-2">Live</p>
            <p className="text-sm uppercase tracking-wider">Chat Available</p>
          </div>
          <div className="border-l-4 border-black p-6">
            <p className="text-4xl font-bold mb-2">Fast</p>
            <p className="text-sm uppercase tracking-wider">Response Time</p>
          </div>
        </div>

        {/* Main Content with Creative Layout */}
        <div className="space-y-32">
          {sections.map((section, index) => (
            <div key={index} className="relative">
              {/* Large Background Number */}
              <div className="absolute -left-20 top-0 text-[200px] font-robson font-bold text-black/5 pointer-events-none">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="grid grid-cols-12 gap-12 relative">
                {/* Title Column */}
                <div className="col-span-5">
                  <div className="sticky top-8">
                    <h2 className="font-fredoka uppercase text-3xl font-semibold mb-4 relative pl-6">
                      <div className="absolute left-0 top-0 w-2 h-full bg-black" />
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Content Column */}
                <div className="col-span-7">
                  <div className="relative">
                    <div className="absolute -left-4 top-0 h-full w-px bg-black" />
                    <div className="pl-12">
                      <div className="absolute -left-4 -top-4 bg-white px-4 text-sm uppercase tracking-wider">
                        {section.label}
                      </div>
                      <p className="font-fredoka font-medium text-justify text-lg border-t-2 border-black pt-8">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assistance;
