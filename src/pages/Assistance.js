import React from "react";

const Assistance = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-robson text-[120px] font-semibold leading-[80px] mb-12">
        Assistance
      </h1>
      <div className="flex">
        <h2 className="font-fredoka w-[450px] uppercase  text-lg font-semibold">
          {"I'm having problems with an order"}
        </h2>
        <ol className="w-[800px] list-disc flex flex-col gap-2 ">
          <li className="font-fredoka font-medium text-justify">
            You can contact us without reservation by sending an email to
            customer@leflairstudios.com Our customer care department will answer
            where you will find assistance, professionalism and friendliness.
          </li>
        </ol>
      </div>
      <div className="flex">
        <h2 className="font-fredoka w-[450px] uppercase  text-lg font-semibold">
          Doubts and questions
        </h2>
        <ul className="w-[800px] list-disc flex flex-col gap-2 ">
          <li className="font-fredoka font-medium text-justify">
            If you have not found the information you need, you can send your
            question via the form on the “Contact” page or write an email to
            customer@leflairstudios.com We will be happy to help you.
          </li>
        </ul>
      </div>
      <div className="flex">
        <h2 className="font-fredoka w-[450px] uppercase  text-lg font-semibold">
          Reports and advice
        </h2>
        <ul className="w-[800px] list-disc flex flex-col gap-2 ">
          <li className="font-fredoka font-medium text-justify">
            We are glad to receive your opinion for our online site so that we
            can correct any errors in this way. You can send us your impressions
            and suggestions via our form on the “Contact” page.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Assistance;
