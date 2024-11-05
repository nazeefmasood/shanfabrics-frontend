import React from "react";

const OrdersHelp = () => {
  return (
    <div className=" flex flex-col gap-4">
      <div className="flex gap-1">
        <h2 className="font-fredoka w-[450px] uppercase  text-lg font-semibold">
          Placing An Order
        </h2>
        <ol className="w-[700px] list-disc flex flex-col gap-2">
          <li className="font-fredoka font-medium text-justify">
            After choosing the product, select the size by clicking on “Size”
            and choose the color variant, if any, by clicking on “Colors.” Then
            click on “Add to Cart.”
          </li>
          <li className="font-fredoka font-medium text-justify">
            Add more products in the same way or click the “Checkout” button
            from the pop-up menu on the right.
          </li>
          <li className="font-fredoka font-medium text-justify">
            Fill out the 4 steps necessary to complete your order. You can
            decide whether to remain a guest user by indicating only your email
            address or log in as a registered user.
          </li>
          <li className="font-fredoka font-medium text-justify">
            At this point you will be directed to the final page with a summary
            of your information and the expected delivery date. Remember to
            check that all the details you selected are correct: once the order
            is confirmed, you will not be able to change them.
          </li>
          <li className="font-fredoka font-medium text-justify">
            To finalize the order click on “Place Order.”
          </li>
        </ol>
      </div>
      <div className="flex">
        <h2 className="font-fredoka w-[450px] uppercase  text-lg font-semibold">
          Check the details of my order
        </h2>
        <ul className="w-[800px] list-disc flex flex-col gap-2 ">
          <li className="font-fredoka font-medium text-justify">
            You can check your order details in th confirmation email.
          </li>
          <li className="font-fredoka font-medium ">
            If you need more information, you can contact us on the “Contact”
            page or by emailing customer@shanfabrics.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrdersHelp;
