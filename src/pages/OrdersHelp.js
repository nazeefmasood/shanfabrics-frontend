import React from "react";

const OrdersHelp = () => {
  const stats = [
    { label: "Average Order Time", value: "48min" },
    { label: "Daily Success Rate", value: "99.9%" },
    { label: "Customer Satisfaction", value: "4.9/5" },
    { label: "Return Rate", value: "0.1%" },
  ];

  return (
    <div className="container mx-auto  bg-white min-h-screen">
      <div className="flex flex-col  p-8">
        {/* Stats Grid - Unique Asymmetric Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`border-l-4 border-black p-6 ${
                index % 2 === 0 ? "mt-8" : "mb-8"
              }`}
            >
              <p className="text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Placing An Order Section */}
        <div className="mb-24">
          <div className="mb-12">
            <p className="font-robson text-[120px] font-semibold text-black leading-none">
              Placing An Order
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {[
              "After choosing the product, select the size by clicking on 'Size' and choose the color variant, if any, by clicking on 'Colors.' Then click on 'Add to Cart.'",
              "Add more products in the same way or click the 'Checkout' button from the pop-up menu on the right.",
              "Fill out the 4 steps necessary to complete your order. You can decide whether to remain a guest user by indicating only your email address or log in as a registered user.",
              "At this point you will be directed to the final page with a summary of your information and the expected delivery date. Remember to check that all the details you selected are correct: once the order is confirmed, you will not be able to change them.",
              "To finalize the order click on 'Place Order.'",
            ].map((step, index) => (
              <div key={index} className="group relative">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-1">
                    <div className="text-8xl font-robson font-semibold text-black/10">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="col-span-11 pt-8">
                    <div className="border-t-2 border-black pt-4">
                      <p className="text-lg">{step}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Check Order Details Section - Asymmetric Design */}
        <div className="relative">
          <div className="mb-12">
            <p className="font-robson text-[120px] font-semibold text-black leading-none">
              Check Order Details
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pl-16">
            <div className="relative">
              <div className="p-8 border-2 border-black">
                <p className="text-xl">
                  You can check your order details in the confirmation email.
                </p>
              </div>
            </div>

            <div className="relative mt-16 md:mt-32">
              <div className="p-8 border-2 border-black">
                <p className="text-xl">
                  If you need more information, you can contact us on the
                  "Contact" page or by emailing customer@shanfabrics.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersHelp;
