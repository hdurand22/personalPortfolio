import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

const About = () => {
  // const parallax = useRef();

  return (
      <div id='about'>
        <ParallaxLayer offset={1} speed={0.8}>
          <h1>About Me</h1>
          <div>
            <p>Some stuff about me</p>
          </div>
        </ParallaxLayer>
      </div>

  );
};

export default About;
