import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Layout from "./components/Layout";
import ProductDetails from "./pages/ProductDetails";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Wishlist from "./pages/Wishlist";
import UserAccount from "./pages/UserAccount";
import ContactUs from "./pages/ContactUs";
import AllProducts from "./pages/AllProducts";
import HelpLayout from "./pages/HelpLayout";
import OrdersHelp from "./pages/OrdersHelp";
import ReturnAndRefund from "./pages/ReturnAndRefund";
import ShippingAndDeliveryHelp from "./pages/ShippingAndDeliveryHelp";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Assistance from "./pages/Assistance";
import PaymentsMethods from "./pages/PaymentsMethods";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Nested Routes */}
        <Route index element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/all_products/" element={<AllProducts />} />
        <Route path="/:user_id/wishlist" element={<Wishlist />} />
        <Route path="/user/:user_id" element={<UserAccount />} />
        <Route path="/contact_us" element={<ContactUs />} />
      </Route>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create_account" element={<Signup />} />

      <Route path="/help" element={<HelpLayout />}>
        <Route path="order_help" element={<OrdersHelp />} />
        <Route path="return_and_refund" element={<ReturnAndRefund />} />
        <Route
          path="shipping_and_delivery"
          element={<ShippingAndDeliveryHelp />}
        />
        <Route path="term_of_service" element={<TermsOfService />} />
        <Route path="privacy_policy" element={<PrivacyPolicy />} />
        <Route path="assistance" element={<Assistance />} />
        <Route path="payments_methods" element={<PaymentsMethods />} />
      </Route>
    </Routes>
  );
}

export default App;
