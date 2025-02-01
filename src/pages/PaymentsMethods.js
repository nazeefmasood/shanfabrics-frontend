import React from "react";

const PaymentMethods = () => {
  const sections = [
    {
      title: "Accepted Payment Methods",
      content: [
        {
          subtitle: "Credit Cards",
          text: "We accept all major credit cards including Visa, MasterCard, American Express, and Discover. Your card information is securely processed and encrypted using industry-standard protocols.",
        },
        {
          subtitle: "Digital Wallets",
          text: "For your convenience, we support popular digital payment solutions including Apple Pay, Google Pay, and PayPal. These methods offer an additional layer of security and faster checkout experience.",
        },
        {
          subtitle: "Bank Transfers",
          text: "Direct bank transfers are available for selected regions. Please note that processing times may vary depending on your bank and location.",
        },
      ],
    },
    {
      title: "Payment Security",
      content: [
        {
          subtitle: "Encryption",
          text: "All payment transactions are protected using SSL encryption technology. Your sensitive payment information is never stored on our servers and is handled directly by our certified payment processors.",
        },
        {
          subtitle: "Authentication",
          text: "We implement 3D Secure authentication for credit card transactions where available, providing an additional security layer to prevent unauthorized charges.",
        },
      ],
    },
    {
      title: "Billing Process",
      content: [
        {
          subtitle: "Authorization",
          text: "When you place an order, we'll verify your payment method and place a temporary authorization hold. The actual charge will only be processed once your order ships.",
        },
        {
          subtitle: "Invoicing",
          text: "You'll receive a detailed invoice via email for every transaction. All billing documents are also available in your account dashboard for future reference.",
        },
      ],
    },
    {
      title: "International Payments",
      content: [
        {
          subtitle: "Currency Conversion",
          text: "We display prices in multiple currencies for your convenience. The final charge will be in your local currency, with conversion rates provided by our payment processors at the time of purchase.",
        },
        {
          subtitle: "Regional Methods",
          text: "We support various region-specific payment methods to ensure a smooth checkout experience for our international customers. Available options will be displayed based on your location.",
        },
      ],
    },
    {
      title: "Refunds & Cancellations",
      content: [
        {
          subtitle: "Processing Time",
          text: "Refunds are typically processed within 3-5 business days of approval. The actual time to receive funds back depends on your payment method and financial institution.",
        },
        {
          subtitle: "Method",
          text: "Refunds are always processed to the original payment method used for the purchase. Store credit may be offered as an alternative option for faster processing.",
        },
      ],
    },
    {
      title: "Support",
      content: [
        {
          subtitle: "Assistance",
          text: "For any payment-related inquiries or issues, our dedicated support team is available 24/7. Contact us at payments@leflairstudios.com or through our secure support portal.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="mb-20">
          <p className="text-lg mt-8 max-w-2xl">
            Last updated: February 1, 2025
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-3 gap-8 mb-24">
          <div className="border-l-4 border-black p-6">
            <p className="text-4xl font-bold mb-2">SSL</p>
            <p className="text-sm uppercase tracking-wider">Encrypted</p>
          </div>
          <div className="border-l-4 border-black p-6 mt-12">
            <p className="text-4xl font-bold mb-2">PCI</p>
            <p className="text-sm uppercase tracking-wider">Compliant</p>
          </div>
          <div className="border-l-4 border-black p-6">
            <p className="text-4xl font-bold mb-2">Global</p>
            <p className="text-sm uppercase tracking-wider">Coverage</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-32">
          {sections.map((section, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-20 top-0 text-[200px] font-robson font-bold text-black/5 pointer-events-none">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="grid grid-cols-12 gap-12">
                <div className="col-span-4">
                  <div className="sticky top-8">
                    <h2 className="font-fredoka uppercase text-3xl font-semibold mb-4 relative pl-6">
                      <div className="absolute left-0 top-0 w-2 h-full bg-black" />
                      {section.title}
                    </h2>
                  </div>
                </div>

                <div className="col-span-8 space-y-12">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="relative">
                      <div className="absolute -left-4 top-0 h-full w-px bg-black" />
                      <div className="pl-12">
                        <div className="absolute -left-4 -top-4 bg-white px-4 text-sm uppercase tracking-wider">
                          {item.subtitle}
                        </div>
                        <p className="font-fredoka font-medium text-justify text-lg border-t-2 border-black pt-8">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-32 pt-12 border-t-2 border-black">
          <p className="text-sm text-gray-600 max-w-2xl">
            Our payment methods and processes are subject to change. For the
            most current information about payment options and procedures,
            please contact our support team at payments@leflairstudios.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
