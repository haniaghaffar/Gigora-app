import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import Footer from '../components/Footer';
import BetaBanner from '../components/BetaBanner';

function Landing() {
  return (
    <>
      <BetaBanner />
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <Footer />
    </>
  );
}

export default Landing;