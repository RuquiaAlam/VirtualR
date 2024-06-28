import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection';
import Workflow from './components/Workflow';
import PriceSection from './components/PriceSection';
import TestimonialSection from './components/TestimonialSection';
import FooterSection from './components/FooterSection';

const App = () => {
  return (
    <div>
 
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection/>
        <Workflow/>
        <PriceSection/>
        <TestimonialSection/>
        <FooterSection/>
      </div>
    </div>
  );
}

export default App