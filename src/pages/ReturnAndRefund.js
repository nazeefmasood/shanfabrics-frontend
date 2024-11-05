import React from "react";

const ReturnAndRefund = () => {
  return (
    <div>
        <div className="flex">
        <h2 className="font-fredoka w-[450px] uppercase  text-lg font-semibold">
          Make a return
        </h2>
        <ol className="w-[800px] list-disc flex flex-col gap-2">
          <li className="font-fredoka font-medium text-justify">
            To make a return you must send an email to:
            customer@leflairstudios.com specifying the order number and the
            reason for the return so that we can respond to you to best provide
            you with all the information you need to proceed with the return.
          </li>
        </ol>
      </div>
      <div className="flex">
        <h2 className="font-fredoka w-[450px] uppercase  text-lg font-semibold">
          Canceling a return
        </h2>
        <ul className="w-[800px] list-disc flex flex-col gap-2 mt-5">
          <li className="font-fredoka font-medium text-justify">
            If the return process has not yet been initiated, you can cancel the
            return writing an email to customer@leflairstudios.com If the return
            has already been initiated, you can no longer cancel it.
          </li>
        </ul>
      </div>
      <div className="flex">
        <h2 className="font-fredoka w-[450px] uppercase  text-lg font-semibold">
          Damaged items
        </h2>
        <ul className="w-[800px] list-disc flex flex-col gap-2 mt-5">
          <li className="font-fredoka font-medium text-justify">
            If your product arrives damaged, report it within 24 hours by
            emailing customer@leflairstudios.com with photos of the damage. We
            will provide a "resend code" and cover the costs for returning the
            damaged goods. Note: Refunds are not available; exchanges only.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReturnAndRefund;
