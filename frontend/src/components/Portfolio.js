import React, { useState, useEffect, useRef, useContext } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Breadcrumbs from './Breadcrumbs';
import projects from '../projects';
import { ParallaxLayer } from '@react-spring/parallax';
import { ScreenSizeContext } from '../App';

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
          <ParallaxLayer className='layer' offset={2.6} speed={0.6} style={{ zIndex: 2, height: '10px' }}>
            <div className='section-header' id='portfolio'>  
              <h1>My Work</h1>
              <Breadcrumbs parallax={ref} />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2.9} speed={0.8}>
              <p className='section-text'>Below are some of the highlights of my portfolio. If you're interested in taking a look at more of my work, please visit my <a href='https://github.com/hdurand22'>GitHub page</a>.</p>
              <Row xxl={2} xl={2} lg={2} md={1} sm={1} xs={1} className='card-holder'>
                {projects.map(project => (
                  <Col key={project.title} className='card-col'>
                    <Card >
                      <a href={project.siteLink}><Card.Img variant="top" src={project.image} /></a>
                      <Card.Body>
                        <Card.Title><h4>{project.title}</h4></Card.Title>
                        <Card.Text>
                          {project.description}
                        </Card.Text>
                        <a className='btn btn-outline-secondary' href={project.siteLink} role='button'>Check out this project!</a>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
          </ParallaxLayer>
        </>
        :
        <>
          <ParallaxLayer className='layer' offset={2} speed={0.8}>
            <div className='section-header' id='portfolio'>
              <h1 onMouseEnter={() => setIsShown(true)}>My Work</h1>
              {isShown &&
                <Breadcrumbs setIsShown={setIsShown} parallax={ref} />
              }
            </div>
            <p className='section-text'>Below are some of the highlights of my portfolio. If you're interested in taking a look at more of my work, please visit my <a href='https://github.com/hdurand22'>GitHub page</a>.</p>
            <Row xxl={2} xl={2} lg={2} md={1} sm={1} xs={1} className='card-holder'>
              {projects.map(project => (
                <Col key={project.title} className='card-col'>
                  <Card >
                    <a href={project.siteLink}><Card.Img variant="top" src={project.image} /></a>
                    <Card.Body>
                      <Card.Title><h4>{project.title}</h4></Card.Title>
                      <Card.Text>
                        {project.description}
                      </Card.Text>
                      <a className='btn btn-outline-secondary' href={project.siteLink} role='button'>Check out this project!</a>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </ParallaxLayer>
        </>
      }
    </>

  )
};

export default Portfolio;
