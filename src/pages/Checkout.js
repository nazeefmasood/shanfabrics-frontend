import React from "react";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import OrderSummary from "../components/Checkout/OrderSummary";

const Checkout = () => {
  return (
    <div className="min-h-screen flex relative">
      <CheckoutForm />
      <OrderSummary />
    </div>
  );
};

export default Checkout;
