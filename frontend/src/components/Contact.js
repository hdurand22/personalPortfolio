import { ParallaxLayer } from '@react-spring/parallax';
import React, { useState, useEffect, useRef } from 'react';
import Breadcrumbs from './Breadcrumbs';

const Contact = ({parallax}) => {
  const [isShown, setIsShown] = useState(false);
  const ref = useRef(parallax);

  useEffect(() => {
      const mouseLeaveEvent = (e) => {
          e.preventDefault();
      }

      // If dropdown is open, listen for mouse hovering out of area
      if (isShown) {
          window.addEventListener('mouseover', mouseLeaveEvent);
      }

      return () => {
          window.removeEventListener('mouseover', mouseLeaveEvent);
      }
  }, [isShown]);
  
  return (
      <div className='section-header' id='contact'>
          <h1 onMouseEnter={() => setIsShown(true)}>Contact</h1>
          {isShown &&
            <Breadcrumbs setIsShown={setIsShown} parallax={ref} />
          }
      </div>
  )
};

export default Contact;
