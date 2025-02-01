import React from "react";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you make a purchase or register on our site, we collect information such as your name, email address, shipping address, phone number, and payment information. This information is necessary to process your orders and provide you with our services.",
        },
        {
          subtitle: "Automatic Information",
          text: "We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, device information, and browsing behavior. This helps us improve our website and your shopping experience.",
        },
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Order Processing",
          text: "We use your information to process and fulfill your orders, send order confirmations, and provide customer support.",
        },
        {
          subtitle: "Communication",
          text: "We may send you important updates about your orders, account, and our services. With your consent, we may also send marketing communications about our products and promotions.",
        },
        {
          subtitle: "Website Improvement",
          text: "We analyze user behavior to improve our website, products, and services, making your shopping experience better and more personalized.",
        },
      ],
    },
    {
      title: "Information Sharing",
      content: [
        {
          subtitle: "Third-Party Service Providers",
          text: "We share information with trusted third parties who assist us in operating our website, conducting our business, and serving our users, as long as they agree to keep this information confidential.",
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information when required by law or if we believe that disclosure will help protect our rights, property, or safety.",
        },
      ],
    },
    {
      title: "Data Security",
      content: [
        {
          subtitle: "Protection Measures",
          text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.",
        },
      ],
    },
    {
      title: "Your Rights",
      content: [
        {
          subtitle: "Access and Control",
          text: "You have the right to access, correct, or delete your personal information. You can also object to our processing of your information or withdraw your consent at any time.",
        },
        {
          subtitle: "Cookie Preferences",
          text: "You can control cookie preferences through your browser settings. However, disabling certain cookies may affect website functionality.",
        },
      ],
    },
    {
      title: "Contact Us",
      content: [
        {
          subtitle: "Questions",
          text: "If you have any questions about this Privacy Policy, please contact us at privacy@leflairstudios.com or through our contact form.",
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
            <p className="text-4xl font-bold mb-2">Secure</p>
            <p className="text-sm uppercase tracking-wider">Data Protection</p>
          </div>
          <div className="border-l-4 border-black p-6 mt-12">
            <p className="text-4xl font-bold mb-2">GDPR</p>
            <p className="text-sm uppercase tracking-wider">Compliant</p>
          </div>
          <div className="border-l-4 border-black p-6">
            <p className="text-4xl font-bold mb-2">24/7</p>
            <p className="text-sm uppercase tracking-wider">Support</p>
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
            This privacy policy is subject to change without notice and was last
            updated on the date specified above. If you have any questions about
            our privacy practices, please contact us at
            privacy@leflairstudios.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
