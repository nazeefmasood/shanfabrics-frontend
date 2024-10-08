import React from "react";
import Header from "../components/Home/Header";
import HeroSection from "../components/Home/HeroSection";
import Products from "../components/Home/Products";
import Categories from "../components/Home/Categories";
import Featured from "../components/Home/Featured";
import Explore from "../components/Home/Explore";
import Instagram from "../components/Home/Instagram";
import Faq from "../components/Home/Faq";
import Footer from "../components/Home/Footer";
import Reviews from "../components/Home/Reviews";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Products />
      <Categories />
      <Featured />
      <Explore />
      <Instagram />
      <Faq />
      <Reviews />
    </div>
  );
};

export default Home;
