import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import { Slide } from 'react-reveal';

const Contact = () => {
  return (
      <div id='contact'>
        <Slide 
          bottom
          big
          duration={1000}
        >
          <h1>Contact</h1>
          {/* <Breadcrumbs /> */}
        </Slide>

      </div>
  )
};

export default Contact;
