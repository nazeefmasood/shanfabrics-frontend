import React from "react";
import Header from "../components/Home/Header";
import HeroSection from "../components/Home/HeroSection";
import Products from "../components/Home/Products";

const Home = () => {
  return (
    <div className="w-full max-w-screen mx-auto   ">
      <Header />
      <HeroSection />
      <Products />
    </div>
  );
};

export default Home;
