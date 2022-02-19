import { ParallaxLayer } from '@react-spring/parallax';
import React from 'react';

const Contact = () => {
  return (
      <div id='contact'>
        <ParallaxLayer offset={3} speed={0.8}>
          <h1>Contact</h1>
        </ParallaxLayer>
      </div>
  )
};

export default Contact;
