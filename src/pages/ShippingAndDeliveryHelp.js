import React from "react";

const ShippingAndDeliveryHelp = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex ">
        <h2 className="font-fredoka w-[450px] uppercase text-lg font-semibold">
          Fees and shipping time
        </h2>
        <ol className="w-[800px] list-disc flex flex-col gap-2  ">
          <li className="font-fredoka  font-medium text-justify">
            DELIVERY TIME: In Europe and the United States, expect delivery
            within 3-7 business days. For other continents, delivery may take up
            to 3 weeks due to other factors like local postal services
          </li>
          <li className="font-fredoka font-medium text-justify">
            POSSIBE DELAYS: If your order is delayed or you have any questions,
            please email us at customer@leflairstudios.com
          </li>
          <li className="font-fredoka font-medium text-justify">
            CHANGING DELIVERY ADDRESS: Changes to the delivery address are
            possible only if the order has not yet been processed. This includes
            any time after the order is placed but before it has been packed or
            handed to the shipping partner.
          </li>
        </ol>
      </div>
      <div className="flex">
        <h2 className="font-fredoka uppercase  w-[450px] text-lg font-semibold">
          To which cities do we ship?
        </h2>
        <ul className="w-[800px] list-disc flex flex-col gap-2 ">
          <li className="font-fredoka font-medium text-justify">
            We ship all over pakistan, ensuring our countrywide reach and
            commitment to serving customers of pakistan.
          </li>
        </ul>
      </div>
      <div className="flex">
        <h2 className="font-fredoka  uppercase w-[450px] text-lg font-semibold">
          Change the delivery address
        </h2>
        <ul className="w-[800px] list-disc flex flex-col gap-2 ">
          <li className="font-fredoka font-medium text-justify">
            Changes to the delivery address are possible only if the order has
            not yet been processed. This includes any time after the order is
            placed but before it has been packed or handed to the shipping
            partner.
          </li>
        </ul>
      </div>
      <div className="flex">
        <h2 className="font-fredoka w-[450px] uppercase text-lg font-semibold">
          Finding delivery information
        </h2>
        <ul className="w-[800px] list-disc flex flex-col gap-2">
          <li className="font-fredoka font-medium text-justify">
            Once the order is placed you will receive a confirmation email. On
            the day of shipment, the courier will send a pickup email with the
            tracking number and from there you can track the status of your
            order through the courier’s website.
          </li>
        </ul>
      </div>
      <div className="flex">
        <h2 className="font-fredoka w-[450px] uppercase  text-lg font-semibold">
          Track my package
        </h2>
        <ul className="w-[800px] list-disc flex flex-col gap-2">
          <li className="font-fredoka font-medium text-justify">
            Once the order has been delivered to the courier you will receive an
            email from the courier with the tracking number and you will be able
            to track your shipment directly from the courier’s portal.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShippingAndDeliveryHelp;
