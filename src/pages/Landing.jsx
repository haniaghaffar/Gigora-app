import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import PricingSection from "../components/PricingSection";
import Footer from "../components/Footer";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureSection />
      <ProblemSection />
      <SolutionSection />
      <PricingSection />
      <Footer />
    </>
  );
}

export default Landing;