import React from 'react';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import Footer from '../components/Footer';

function Landing() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <Footer />
    </>
  );
}

export default Landing;