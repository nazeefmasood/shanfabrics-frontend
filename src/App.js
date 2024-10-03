import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Layout from "./components/Layout";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Nested Routes */}
        <Route index element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Route>
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
