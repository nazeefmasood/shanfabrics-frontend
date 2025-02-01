import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";

const HelpLayout = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  const navigationItems = [
    { path: "order_help", label: "Orders" },
    { path: "payments_methods", label: "Payments Methods" },
    { path: "shipping_and_delivery", label: "Shipping and Delivery" },
    { path: "return_and_refund", label: "Returns and Refunds" },
    { path: "assistance", label: "Assistance" },
    { path: "privacy_policy", label: "Privacy Policy" },
    { path: "term_of_service", label: "Terms of Service" },
  ];

  useEffect(() => {
    const path = location.pathname;
    const section = path.split("/")[2];
    const matchedItem = navigationItems.find((item) => item.path === section);
    setActiveSection(matchedItem?.label || "");
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-black/5 rounded-full blur-3xl transform rotate-12" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-black/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4">
            <h1 className="font-robson text-[180px] text-center font-semibold leading-none mb-6 text-black/90">
              {activeSection || "Help Center"}
            </h1>
            <p className="text-center text-xl text-black/60 max-w-2xl mx-auto">
              Find answers to your questions and learn more about our services
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="sticky top-0 bg-white border-y border-black/10 z-50">
          <div className="container mx-auto px-4 py-1 overflow-x-auto">
            <nav className="flex justify-start items-center min-w-max gap-2">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={`/help/${item.path}`}
                  className={`
                    group relative py-4 px-6 flex items-center gap-2
                    font-fredoka text-sm uppercase tracking-wider
                    transition-colors duration-200
                    ${
                      activeSection === item.label
                        ? "text-black"
                        : "text-black/60 hover:text-black"
                    }
                  `}
                >
                  
                  {item.label}
                  {activeSection === item.label && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="container mx-auto px-4 py-12">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpLayout;
