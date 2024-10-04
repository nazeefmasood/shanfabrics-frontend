import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Layout from "./components/Layout";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Wishlist from "./pages/Wishlist";
import UserAccount from "./pages/UserAccount";
import ContactUs from "./pages/ContactUs";
import AllProducts from "./pages/AllProducts";

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
    </Routes>
  );
}

export default App;
