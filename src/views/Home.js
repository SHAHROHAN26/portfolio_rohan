import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import FeaturesSplit2 from '../components/sections/FeaturesSplit2';
import Testimonial from '../components/sections/Testimonial';
import Testimonial2 from '../components/sections/Testimonial2';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <FeaturesSplit2 invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial2 topDivider />
      <FeaturesTiles />

      
    </>
  );
}

export default Home;
