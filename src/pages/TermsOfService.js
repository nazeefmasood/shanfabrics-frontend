import React from "react";

const TermsOfService = () => {
  const sections = [
    {
      title: "Agreement to Terms",
      content: [
        {
          subtitle: "Acceptance",
          text: "By accessing and using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.",
        },
        {
          subtitle: "Updates",
          text: "We reserve the right to modify these terms at any time. Your continued use of the website following any changes constitutes acceptance of those changes.",
        },
      ],
    },
    {
      title: "Account Responsibilities",
      content: [
        {
          subtitle: "Account Creation",
          text: "When you create an account, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password.",
        },
        {
          subtitle: "Account Security",
          text: "You agree to notify us immediately of any unauthorized access to or use of your account. We cannot be responsible for any losses caused by unauthorized use of your account.",
        },
      ],
    },
    {
      title: "Purchase & Payment",
      content: [
        {
          subtitle: "Pricing",
          text: "All prices are subject to change without notice. We reserve the right to refuse any order placed through our site.",
        },
        {
          subtitle: "Payment Terms",
          text: "You agree to provide current, complete, and accurate purchase and account information for all purchases made through our site.",
        },
        {
          subtitle: "Taxes",
          text: "You are responsible for paying all fees and applicable taxes associated with our site in a timely manner with a valid payment method.",
        },
      ],
    },
    {
      title: "Shipping & Delivery",
      content: [
        {
          subtitle: "Delivery Times",
          text: "While we aim to deliver products within the specified timeframe, we are not responsible for delays beyond our control.",
        },
        {
          subtitle: "Shipping Costs",
          text: "Shipping costs are calculated and displayed at checkout. Additional customs fees may apply for international orders.",
        },
      ],
    },
    {
      title: "Returns & Refunds",
      content: [
        {
          subtitle: "Return Policy",
          text: "Products may be returned within 30 days of delivery. Items must be unused and in their original packaging with all tags attached.",
        },
        {
          subtitle: "Refund Process",
          text: "Refunds will be issued to the original payment method once we receive and inspect the returned items. Shipping costs are non-refundable.",
        },
      ],
    },
    {
      title: "Intellectual Property",
      content: [
        {
          subtitle: "Ownership",
          text: "All content on this site, including text, graphics, logos, and images, is our property and is protected by copyright and intellectual property laws.",
        },
        {
          subtitle: "Limited License",
          text: "We grant you a limited, non-exclusive, non-transferable license to access the content on our site for personal, non-commercial use.",
        },
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        {
          subtitle: "Disclaimers",
          text: "Our site and its contents are provided 'as is' without any warranties, express or implied. We do not guarantee the accuracy or completeness of any information on our site.",
        },
        {
          subtitle: "Liability Limits",
          text: "We shall not be liable for any damages arising from the use or inability to use our site or products, including but not limited to direct, indirect, incidental, or consequential damages.",
        },
      ],
    },
    {
      title: "Governing Law",
      content: [
        {
          subtitle: "Jurisdiction",
          text: "These terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.",
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

        {/* Key Points */}
        <div className="grid grid-cols-3 gap-8 mb-24">
          <div className="border-l-4 border-black p-6">
            <p className="text-4xl font-bold mb-2">Legal</p>
            <p className="text-sm uppercase tracking-wider">Agreement</p>
          </div>
          <div className="border-l-4 border-black p-6 mt-12">
            <p className="text-4xl font-bold mb-2">User</p>
            <p className="text-sm uppercase tracking-wider">Rights</p>
          </div>
          <div className="border-l-4 border-black p-6">
            <p className="text-4xl font-bold mb-2">Terms</p>
            <p className="text-sm uppercase tracking-wider">Protection</p>
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
            By using our website, you agree to these terms of service. If you
            have any questions about these terms, please contact us at
            legal@leflairstudios.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
