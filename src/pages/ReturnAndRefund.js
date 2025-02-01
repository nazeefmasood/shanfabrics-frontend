import React from "react";

const ReturnAndRefund = () => {
  const returnStats = [
    { value: "24h", label: "Report Window" },
    { value: "100%", label: "Exchange Rate" },
    { value: "FREE", label: "Return Shipping" },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 mb-24">
          {returnStats.map((stat, index) => (
            <div
              key={index}
              className={`border-l-4 border-black p-6 ${
                index % 2 === 1 ? "mt-12" : ""
              }`}
            >
              <p className="text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-32">
          {/* Make a Return Section */}
          <div className="relative">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-4">
                <div className="sticky top-8">
                  <div className="font-fredoka uppercase text-3xl font-semibold relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-black" />
                    Make a Return
                  </div>
                </div>
              </div>
              <div className="col-span-8">
                <div className="border-2 border-black p-8 relative">
                  <div className="absolute -left-4 -top-4 bg-white px-4 text-sm uppercase tracking-wider">
                    Process
                  </div>
                  <p className="font-fredoka font-medium text-justify text-lg">
                    To make a return you must send an email to:{" "}
                    <span className="font-bold">
                      customer@leflairstudios.com
                    </span>{" "}
                    specifying the order number and the reason for the return so
                    that we can respond to you to best provide you with all the
                    information you need to proceed with the return.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cancel Return Section */}
          <div className="relative">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-4">
                <div className="sticky top-8">
                  <div className="font-fredoka uppercase text-3xl font-semibold relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-black" />
                    Canceling a Return
                  </div>
                </div>
              </div>
              <div className="col-span-8">
                <div className="border-2 border-black p-8 relative">
                  <div className="absolute -left-4 -top-4 bg-white px-4 text-sm uppercase tracking-wider">
                    Important
                  </div>
                  <p className="font-fredoka font-medium text-justify text-lg">
                    If the return process has not yet been initiated, you can
                    cancel the return by writing an email to{" "}
                    <span className="font-bold">
                      customer@leflairstudios.com
                    </span>
                    . If the return has already been initiated, you can no
                    longer cancel it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Damaged Items Section */}
          <div className="relative">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-4">
                <div className="sticky top-8">
                  <div className="font-fredoka uppercase text-3xl font-semibold relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-black" />
                    Damaged Items
                  </div>
                </div>
              </div>
              <div className="col-span-8">
                <div className="border-2 border-black p-8 relative">
                  <div className="absolute -left-4 -top-4 bg-white px-4 text-sm uppercase tracking-wider">
                    Time Sensitive
                  </div>
                  <p className="font-fredoka font-medium text-justify text-lg">
                    If your product arrives damaged, report it within 24 hours
                    by emailing{" "}
                    <span className="font-bold">
                      customer@leflairstudios.com
                    </span>{" "}
                    with photos of the damage. We will provide a "resend code"
                    and cover the costs for returning the damaged goods.{" "}
                    <span className="font-bold">
                      Note: Refunds are not available; exchanges only.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnAndRefund;
