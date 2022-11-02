import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
    </div>
  );
};

export default HomePage;
