import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Breadcrumbs from './Breadcrumbs';

const About = () => {
  // const parallax = useRef();

  return (
      <div id='about'>
        <ParallaxLayer offset={0.9} speed={0.8}>
          <h1>About Me</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={0.95} speed={0.8}>
          <Breadcrumbs />
        </ParallaxLayer>
      </div>

  );
};

export default About;
