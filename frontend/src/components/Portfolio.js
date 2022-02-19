import { ParallaxLayer } from '@react-spring/parallax';
import React from 'react';
import Breadcrumbs from './Breadcrumbs';

const Portfolio = () => {
  return (
    <div id='portfolio'>
        <ParallaxLayer offset={2} speed={0.8}>
          <h1>My Work</h1>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={2.05} speed={0.8}>
          <Breadcrumbs />
        </ParallaxLayer> */}
    </div>
  )
};

export default Portfolio;
