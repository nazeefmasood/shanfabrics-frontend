import React from "react";

const ShippingAndDeliveryHelp = () => {
  const shippingData = [
    {
      title: "Fees and shipping time",
      content: [
        "DELIVERY TIME: In Europe and the United States, expect delivery within 3-7 business days. For other continents, delivery may take up to 3 weeks due to other factors like local postal services",
        "POSSIBE DELAYS: If your order is delayed or you have any questions, please email us at customer@leflairstudios.com",
        "CHANGING DELIVERY ADDRESS: Changes to the delivery address are possible only if the order has not yet been processed. This includes any time after the order is placed but before it has been packed or handed to the shipping partner.",
      ],
    },
    {
      title: "To which cities do we ship?",
      content: [
        "We ship all over pakistan, ensuring our countrywide reach and commitment to serving customers of pakistan.",
      ],
    },
    {
      title: "Change the delivery address",
      content: [
        "Changes to the delivery address are possible only if the order has not yet been processed. This includes any time after the order is placed but before it has been packed or handed to the shipping partner.",
      ],
    },
    {
      title: "Finding delivery information",
      content: [
        "Once the order is placed you will receive a confirmation email. On the day of shipment, the courier will send a pickup email with the tracking number and from there you can track the status of your order through the courier's website.",
      ],
    },
    {
      title: "Track my package",
      content: [
        "Once the order has been delivered to the courier you will receive an email from the courier with the tracking number and you will be able to track your shipment directly from the courier's portal.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Stats */}
        <div className="grid grid-cols-3 gap-8 mb-20">
          <div className="border-l-4 border-black p-6">
            <p className="text-5xl font-bold mb-2">3-7</p>
            <p className="text-sm uppercase tracking-wider">
              Days US/EU Delivery
            </p>
          </div>
          <div className="border-l-4 border-black p-6 mt-8">
            <p className="text-5xl font-bold mb-2">100%</p>
            <p className="text-sm uppercase tracking-wider">
              Pakistan Coverage
            </p>
          </div>
          <div className="border-l-4 border-black p-6">
            <p className="text-5xl font-bold mb-2">24/7</p>
            <p className="text-sm uppercase tracking-wider">
              Tracking Available
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-24">
          {shippingData.map((section, index) => (
            <div key={index} className="relative">
              <div className="grid grid-cols-12 gap-8">
                {/* Title Column */}
                <div className="col-span-4">
                  <div className="sticky top-8">
                    <p className="font-robson text-6xl font-semibold text-black/80 leading-none">
                      {section.title}
                    </p>
                  </div>
                </div>

                {/* Content Column */}
                <div className="col-span-8">
                  <div className="space-y-8">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="relative">
                        <div className="grid grid-cols-12 gap-4">
                          <div className="col-span-1">
                            <div className="text-6xl font-robson font-bold text-black/10">
                              {String(itemIndex + 1).padStart(2, "0")}
                            </div>
                          </div>
                          <div className="col-span-11">
                            <div className="border-t-2 border-black pt-4">
                              <p className="text-lg font-fredoka font-medium text-justify">
                                {item}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default ShippingAndDeliveryHelp;
