import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import AboutSection from "../../components/AboutSection/About";
import ServicesSection from "../../components/ServicesSection/ServicesSection";

const Home = () => {
  return (
    <div>
      <Header />
      <AboutSection />
      <ServicesSection />
    </div>
  );
};

export default Home;
