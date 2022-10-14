import React, { useState, useEffect, useRef, useContext } from 'react';
import { Row } from 'react-bootstrap';
import Breadcrumbs from './Breadcrumbs';
import ProjectLogoPopover from './ProjectLogoPopover';
import ProjectLogoCarousel from './ProjectLogoCarousel';
import projects from '../projects';
import projectCarouselImages from '../projectCarouselImages'
import { ParallaxLayer } from '@react-spring/parallax';
import { ScreenSizeContext } from '../App';
import ProjectImageCarousel from './ProjectImageCarousel';

const Portfolio = ({ parallax }) => {
  const [isShown, setIsShown] = useState(false);
  const ref = useRef(parallax);
  const { isTabletOrMobile } = useContext(ScreenSizeContext);

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
    <>
      {isTabletOrMobile ?
        <>
          <ParallaxLayer className='layer' offset={1} speed={0.6} style={{ zIndex: 2, height: '4px' }}>
            <div className='section-header' id='portfolio'>  
              <h1>My Work</h1>
              <Breadcrumbs parallax={ref} />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.15} speed={0.8}>
            <Row>
              <ProjectImageCarousel className='mobile-carousel' projectCarouselImages={projectCarouselImages} />
            </Row>
              <h4 className='section-text'>Check out some of my past and present clients!</h4>
              <ProjectLogoCarousel className='mobile-carousel' projects={projects} />
              <Row>
                <p className='section-text'>Interested in something a bit more techincal? Check out my <a href='https://github.com/hdurand22'>GitHub page</a>.</p>
              </Row>
          </ParallaxLayer>
        </>
        :
        <>
          <ParallaxLayer className='layer' offset={1} speed={0.6}>
            <div className='section-header' id='portfolio'>
              <h1 onMouseEnter={() => setIsShown(true)}>My Work</h1>
              {isShown &&
                <Breadcrumbs setIsShown={setIsShown} parallax={ref} />
              }
            </div>
          </ParallaxLayer>
          <ParallaxLayer className='layer' offset={1.15} speed={0.8}>
            <Row>
              <ProjectImageCarousel projectCarouselImages={projectCarouselImages} />
            </Row>
            <h5 className='section-text'>Check out some of my past and present clients!</h5>
            <div className='card-holder'>
              {projects.map((project, index) => (
                <ProjectLogoPopover key={index} project={project} />
              ))}
            </div>
            <p className='section-text'>Interested in something a bit more techincal? Check out my <a href='https://github.com/hdurand22'>GitHub page</a>.</p>
          </ParallaxLayer>
        </>
      }
    </>

  )
};

export default Portfolio;
